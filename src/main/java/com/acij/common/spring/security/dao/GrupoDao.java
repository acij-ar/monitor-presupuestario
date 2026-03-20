package com.acij.common.spring.security.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Iterator;
import java.util.List;

import org.apache.commons.lang3.StringUtils;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.service.exceptions.DAOException;
import com.acij.common.spring.security.model.Grupo;
import com.acij.common.spring.security.model.Permiso;

public class GrupoDao extends AbstractEntityDao<Grupo> {

	@Override
	protected Grupo resultSetToObject(ResultSet rs) throws Exception {
		Grupo grupo = new Grupo();
		grupo.setId(rs.getLong("id"));
		grupo.setDescripcion(rs.getString("descripcion"));
		return grupo;
	}

	@Override
	protected Grupo findByPkObject(Grupo pk) throws DAOException {
		try {
			PreparedStatement pstmt = getConnection().prepareStatement(" select * from grupos where id = ? ");
			pstmt.setLong(1, pk.getId());
			return findEntityBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected void removeObject(Grupo o) throws DAOException {
		try {
			PreparedStatement pstmt = getConnection().prepareStatement(" delete from grupos where id = ? ");
			pstmt.setLong(1, o.getId());
			super.execute(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}

	}

	@Override
	protected void saveObject(Grupo o) throws DAOException {
		try {
			o.setId(sequenceNextVal("grupos_id_seq"));

			StringBuffer buff = new StringBuffer();
			buff.append(" insert into grupos (id, descripcion) values (?, ?) ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, o.getId());
			pstmt.setString(2, o.getDescripcion());
			super.execute(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected void updateObject(Grupo o) throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" update grupos set descripcion = ? where id = ?  ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setString(1, o.getDescripcion());
			pstmt.setLong(2, o.getId());
			super.execute(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public Grupo findDefault() throws DAOException {
		try {
			PreparedStatement pstmt = getConnection().prepareStatement(" select * from grupos where is_default = true ");
			return super.findEntityBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	public List<Grupo> findAll() throws DAOException {
		try {
			PreparedStatement pstmt = getConnection().prepareStatement(" select * from grupos order by id desc ");
			return super.findBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	public List<Grupo> findBy(Long[] idList) throws DAOException {
		try {
			String ids = StringUtils.join(idList, ",");
			StringBuffer buff = new StringBuffer();
			buff.append(" select * ");
			buff.append(" from grupos ");
			buff.append(" where id in (" + ids + ") ");
			buff.append(" order by descripcion ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			return super.findBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	public List<Grupo> findBy(String filtroDescripcion, String sortColumn, String search) throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append("  select * ");
			buff.append("  from grupos ");
			buff.append(" where 1 = 1 " + search + " ");

			if (!StringUtils.isEmpty(filtroDescripcion)) {
				buff.append("	and lower(descripcion) like '%" + filtroDescripcion.toLowerCase() + "%' ");
			}

			if (sortColumn != null && !"".equals(sortColumn)) {
				buff.append("order by " + sortColumn);
			} else {
				buff.append(" order by g.id ");
			}

			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			return findBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	public void changePermissions(Grupo grupo, List<Permiso> permisos) throws DAOException {
		try {
			PreparedStatement pstmt = getConnection().prepareStatement("delete from grxpr where id_grupo = ? ");
			pstmt.setLong(1, grupo.getId());
			super.execute(pstmt);

			for (Iterator<Permiso> it = permisos.iterator(); it.hasNext();) {
				Permiso permiso = it.next();
				if (permiso.getSelected()) {
					pstmt = getConnection().prepareStatement("insert into grxpr (id_grupo, id_permiso) values (?, ?) ");
					pstmt.setLong(1, grupo.getId());
					pstmt.setLong(2, permiso.getId());
					super.execute(pstmt);

					addParent(grupo, permiso);
				}
			}

		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	private void addParent(Grupo grupo, Permiso permiso) throws DAOException {
		try {
			PreparedStatement pstmt = getConnection().prepareStatement(" select id_padre from permisos where id = ? ");
			pstmt.setLong(1, permiso.getId());
			Long idPadre = findValueBy(pstmt, Long.class);

			if (idPadre != null) {
				pstmt = getConnection().prepareStatement("select * from grxpr where id_grupo = ? and id_permiso = ? ");
				pstmt.setLong(1, grupo.getId());
				pstmt.setLong(2, idPadre);
				Boolean existe = super.hasElements(pstmt);
				if (!existe) {
					pstmt = getConnection().prepareStatement(" insert into grxpr (id_grupo, id_permiso) values (?, ?) ");
					pstmt.setLong(1, grupo.getId());
					pstmt.setLong(2, idPadre);
					super.execute(pstmt);
				}
			}
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	public List<Grupo> findGruposBy(Long idPermiso) throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select distinct g.* ");
			buff.append(" from grupos g  ");
			buff.append(" 	inner join grxpr x on (g.id = x.id_grupo) ");
			buff.append(" where x.id_permiso = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, idPermiso);
			return findBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}
	
	
	public List<Grupo> findGruposBy(Long[] idList) throws DAOException {
		try {
			String ids = StringUtils.join(idList, ",");
			StringBuffer buff = new StringBuffer();
			buff.append(" select distinct g.* ");
			buff.append(" from grupos g  ");
			buff.append(" 	inner join grxpr x on (g.id = x.id_grupo) ");
			buff.append(" where x.id_permiso in (" + ids + ") ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			return findBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}
}