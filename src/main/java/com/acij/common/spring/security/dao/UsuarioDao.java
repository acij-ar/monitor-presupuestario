package com.acij.common.spring.security.dao;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.imageio.ImageIO;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.dao.DaoFactory;
import com.acij.common.model.ModelHelper;
import com.acij.common.service.exceptions.DAOException;
import com.acij.common.servlet.Context;
import com.acij.common.spring.security.model.Grupo;
import com.acij.common.spring.security.model.Usuario;



public class UsuarioDao extends AbstractEntityDao<Usuario> {

	@Override
	protected Usuario resultSetToObject(ResultSet rs) throws Exception {
		Usuario o = new Usuario();
		o.setId(rs.getLong("id"));

		o.setGrupo(DaoFactory.get(GrupoDao.class).findByPk(ModelHelper.create(Grupo.class, rs.getLong("id_grupo"))));

		o.setEmail(rs.getString("email"));
		if (contains(rs, "password")) {
			o.setPassword(rs.getString("password"));
		}
		o.setActivo(rs.getBoolean("activo"));
		o.setNombreCompleto(rs.getString("nombre_completo"));
		o.setUsername(rs.getString("username").toLowerCase());

		if (contains(rs, "no_login")) {
			o.setNoLogin(rs.getBoolean("no_login"));
		}

	
		return o;
	}

	public Usuario findBy(String username, String password) throws DAOException {
		try {
			PreparedStatement pstmt = getConnection().prepareStatement(" select * from usuarios where lower(username) = ?  and password = ? and activo = ? ");
			pstmt.setString(1, username.toLowerCase());
			pstmt.setString(2, password);
			pstmt.setBoolean(3, true);
			return super.findEntityBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected Usuario findByPkObject(Usuario pk) throws DAOException {
		try {
			PreparedStatement pstmt = getConnection().prepareStatement(" select * from usuarios where id = ? ");
			pstmt.setLong(1, pk.getId());
			return findEntityBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public Usuario findBy(String username) throws DAOException {
		try {
			PreparedStatement pstmt = getConnection().prepareStatement("select * from usuarios where lower(username) = ?");
			pstmt.setString(1, username.toLowerCase());
			return super.findEntityBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected void removeObject(Usuario o) throws DAOException {
		try {
			PreparedStatement pstmt = getConnection().prepareStatement(" delete from usuarios where id = ? ");
			pstmt.setLong(1, o.getId());
			super.execute(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	private void setNoLogo(Usuario o) throws Exception {
		if (o.getImage() == null) {
			String path = Context.getCurrentInstance().getRequest().getSession().getServletContext().getRealPath("/images");
			path = path + "/no_logo.png";
			BufferedImage image = ImageIO.read(new File(path));

			ByteArrayOutputStream baos = new ByteArrayOutputStream();
			ImageIO.write(image, "png", baos);
			baos.flush();
			byte[] imageInByte = baos.toByteArray();
			baos.close();

			o.setImage(imageInByte);
		}
	}

	@Override
	protected void saveObject(Usuario o) throws DAOException {
		try {
			o.setId(sequenceNextVal("usuarios_id_seq"));
			setNoLogo(o);

			PreparedStatement pstmt = getConnection().prepareStatement("insert into usuarios (id, id_grupo, password, email, activo, nombre_completo, username, image) values (?, ?, ?, ?, ?, ?, ?, ?) ");
			pstmt.setLong(1, o.getId());
			fillSafetyIdEntity(pstmt, 2, o.getGrupo());
			fillSafetyValue(pstmt, 3, o.getPassword());
			fillSafetyValue(pstmt, 4, o.getEmail());
			pstmt.setBoolean(5, o.getActivo());
			fillSafetyValue(pstmt, 6, o.getNombreCompleto());
			pstmt.setString(7, o.getUsername().toLowerCase());
			fillSafetyValue(pstmt, 8, o.getImage());
			super.execute(pstmt);

		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	public void saveWithId(Usuario o) throws DAOException {
		try {
			setNoLogo(o);

			PreparedStatement pstmt = getConnection().prepareStatement("insert into usuarios (id, id_grupo, password, email, activo, nombre_completo, username, image) values (?, ?, ?, ?, ?, ?, ?, ?) ");
			pstmt.setLong(1, o.getId());
			fillSafetyIdEntity(pstmt, 2, o.getGrupo());
			fillSafetyValue(pstmt, 3, o.getPassword());
			fillSafetyValue(pstmt, 4, o.getEmail());
			pstmt.setBoolean(5, o.getActivo());
			fillSafetyValue(pstmt, 6, o.getNombreCompleto());
			pstmt.setString(7, o.getUsername().toLowerCase());
			fillSafetyValue(pstmt, 8, o.getImage());
			super.execute(pstmt);

		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	public void saveAll(List<Usuario> usuarios) throws DAOException {
		try {
			for (Iterator<Usuario> it = usuarios.iterator(); it.hasNext();) {
				Usuario usuario = (Usuario) it.next();

				Usuario found = findBy(usuario.getUsername());
				if (found != null) {
					found.setNombreCompleto(usuario.getNombreCompleto());
					found.setEmail(usuario.getEmail());
					found.setUsername(usuario.getUsername());
					found.setPassword(usuario.getPassword());
					found.setGrupo(usuario.getGrupo());
					update(found);
				} else {
					save(usuario);
				}
			}
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public void updateAll(List<Usuario> usuarios) throws DAOException {
		try {
			for (Iterator<Usuario> it = usuarios.iterator(); it.hasNext();) {
				Usuario usuario = (Usuario) it.next();

				Usuario found = findByPk(usuario);
				if (found != null) {
					found.setNombreCompleto(usuario.getNombreCompleto());
					update(found);
				}
			}
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected void updateObject(Usuario o) throws DAOException {
		try {
			setNoLogo(o);

			StringBuffer buff = new StringBuffer();
			buff.append(" update usuarios ");
			buff.append("	set id_grupo = ?, password = ?, email = ?, activo = ?, nombre_completo = ?, image = ?, username = ?  ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			fillSafetyIdEntity(pstmt, 1, o.getGrupo());
			pstmt.setString(2, o.getPassword());
			pstmt.setString(3, o.getEmail());
			pstmt.setBoolean(4, o.getActivo());
			pstmt.setString(5, o.getNombreCompleto());
			fillSafetyValue(pstmt, 6, o.getImage());
			pstmt.setString(7, o.getUsername().toLowerCase());
			pstmt.setLong(8, o.getId());
			super.execute(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	public List<Usuario> findBy(List<Grupo> grupos) throws DAOException {
		try {
			StringBuffer sql = new StringBuffer();
			if (grupos != null) {
				if (grupos.size() > 0) {
					sql.append(" and id_grupo in (");
					if (grupos.size() > 0) {
						sql.append("'" + grupos.get(0).getId() + "'");
					}
					for (int i = 1; i < grupos.size(); i++) {
						sql.append(", '" + grupos.get(i).getId() + "'");
					}
					sql.append(") ");
				}
			}

			PreparedStatement pstmt = getConnection().prepareStatement(" select u.* from usuarios u inner join grupos g on (u.id_grupo = g.id " + sql + ") ");
			return findBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public List<Usuario> findAll() throws DAOException {
		try {
			PreparedStatement pstmt = getConnection().prepareStatement(" select * from usuarios u order by nombre_completo ");
			return findBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public Boolean tienePermiso(Usuario usuario, Long pantalla) throws DAOException {
		try {
			PreparedStatement pstmt = getConnection().prepareStatement(" select * from grxpr where id_permiso = ? and id_grupo = ? ");
			pstmt.setLong(1, pantalla);
			pstmt.setLong(2, usuario.getGrupo().getId());
			return hasElements(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	public List<Boolean> tienePermiso(Usuario usuario, List<Integer> pantallas) throws DAOException {
		try {
			List<Boolean> result = new ArrayList<Boolean>();
			for (Iterator<Integer> it = pantallas.iterator(); it.hasNext();) {
				Integer pantalla = it.next();

				PreparedStatement pstmt = getConnection().prepareStatement("select * from grxpr where id_permiso = " + pantalla + " and id_grupo = " + usuario.getGrupo().getId());
				if (super.hasElements(pstmt)) {
					result.add(true);
				} else {
					result.add(false);
				}
			}
			return result;
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	public Usuario findByEmail(String email) throws DAOException {
		try {
			PreparedStatement pstmt = getConnection().prepareStatement("select * from usuarios where email = ? ");
			pstmt.setString(1, email);
			return findEntityBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	public Usuario findSystemUser() throws DAOException {
		try {
			PreparedStatement pstmt = getConnection().prepareStatement("select * from usuarios where no_login = ?");
			pstmt.setBoolean(1, true);
			return findEntityBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	public Usuario create(Usuario usuario) throws DAOException {
		try {
			usuario.setActivo(true);
			usuario.setGrupo(DaoFactory.get(GrupoDao.class).findDefault());
			saveObject(usuario);
			return usuario;
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public void updateImage(Usuario o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" update usuarios ");
			buff.append(" set image = ? ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setBytes(1, o.getImage());
			pstmt.setLong(2, o.getId());
			super.execute(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public void updatePassword(Usuario o, String password) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" update usuarios ");
			buff.append(" set password = ? ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setString(1, password);
			pstmt.setLong(2, o.getId());
			super.execute(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public byte[] findImage(Usuario o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select image from usuarios ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, o.getId());
			return findValueBy(pstmt, byte[].class);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public List<Usuario> findBy(Grupo grupo, String sortColumn, String search) throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append("  select * ");
			buff.append("  from usuarios u ");
			buff.append("where 1 = 1 " + search + " ");

			if (grupo != null) {
				buff.append("	and u.id_grupo = ? ");
			}

			if (sortColumn != null && !"".equals(sortColumn)) {
				buff.append("order by " + sortColumn);
			} else {
				buff.append(" order by g.id ");
			}

			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			if (grupo != null) {
				pstmt.setLong(1, grupo.getId());
			}
			return findBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	public List<Usuario> findUsersBy(Grupo grupo, String sortColumn, String search) throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * ");
			buff.append(" from usuarios u ");
			buff.append(" where no_login = false " + search + " ");

			if (grupo != null) {
				buff.append("	and u.id_grupo = ? ");
			}

			if (sortColumn != null && !"".equals(sortColumn)) {
				buff.append(" order by " + sortColumn);
			} else {
				buff.append(" order by g.id ");
			}

			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			if (grupo != null) {
				pstmt.setLong(1, grupo.getId());
			}
			return findBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	public List<Usuario> findAllUsersBy(Grupo grupo, String sortColumn, String search) throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * ");
			buff.append(" from usuarios u ");
			buff.append(" where 1 = 1 " + search + " ");

			if (grupo != null) {
				buff.append("	and u.id_grupo = ? ");
			}

			if (sortColumn != null && !"".equals(sortColumn)) {
				buff.append(" order by " + sortColumn);
			} else {
				buff.append(" order by g.id ");
			}

			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			if (grupo != null) {
				pstmt.setLong(1, grupo.getId());
			}
			return findBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

}