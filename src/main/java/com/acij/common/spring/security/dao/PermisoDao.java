package com.acij.common.spring.security.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.commons.lang3.StringUtils;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.service.exceptions.DAOException;
import com.acij.common.spring.security.model.Grupo;
import com.acij.common.spring.security.model.Permiso;

public class PermisoDao extends AbstractEntityDao<Permiso> {

	@Override
	protected Permiso resultSetToObject(ResultSet rs) throws Exception {
		Permiso o = new Permiso();	
		o.setId(rs.getLong("id"));
		o.setDescripcion(rs.getString("descripcion"));
		o.setUrl(rs.getString("url"));
		o.setPadreId(rs.getLong("id_padre"));
		o.setPermisoEspecial(rs.getBoolean("permiso_especial"));
		o.setHoja(rs.getBoolean("hoja"));
		o.setActiva(rs.getBoolean("activa"));
		o.setOrden(rs.getInt("orden"));

		if (contains(rs, "selected")) {
			o.setSelected(rs.getBoolean("selected"));
		}
		if (contains(rs, "desc_padre")) {
			o.setPadre(rs.getString("desc_padre"));
			if (StringUtils.isEmpty(o.getPadre())) {
				o.setPadre("Raíz");
			}

			if (o.getPermisoEspecial()) {
				o.setPadre("Permisos especiales");
			}
		}

		return o;
	}

	@Override
	protected Permiso findByPkObject(Permiso pk) throws DAOException {
		try {
			PreparedStatement pstmt = getConnection().prepareStatement(" select * from permisos where id = ? ");
			pstmt.setLong(1, pk.getId());
			return findEntityBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected void removeObject(Permiso o) throws DAOException {
		try {
			PreparedStatement pstmt = getConnection().prepareStatement(" delete from permisos where id = ? ");
			pstmt.setLong(1, o.getId());
			super.execute(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected void saveObject(Permiso o) throws DAOException {
		try {
			PreparedStatement pstmt = getConnection().prepareStatement(" insert into permisos (descripcion) values (?) ");
			pstmt.setString(1, o.getDescripcion());
			super.execute(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected void updateObject(Permiso o) throws DAOException {
		try {
			PreparedStatement pstmt = getConnection().prepareStatement(" update permisos set descripcion = ? where id = ? ");
			pstmt.setString(1, o.getDescripcion());
			pstmt.setLong(2, o.getId());
			super.execute(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public List<Permiso> findByGrupo(Grupo grupo) throws DAOException {
		try {
			PreparedStatement pstmt = getConnection().prepareStatement(" select pa.* from permisos pa, (select * from grxpr p  where p.id_grupo = ?) t where pa.id = t.id_permiso ");
			pstmt.setLong(1, grupo.getId());
			return findBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public List<Permiso> findBy(Grupo grupo) throws DAOException {
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		List<Permiso> permisos = new ArrayList<Permiso>();

		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" SELECT p.*, ");
			buff.append("	CASE ");
			buff.append("		WHEN id_grupo IS NULL ");
			buff.append(" 		THEN 0 ");
			buff.append(" 	ELSE 1 ");
			buff.append(" 	END AS selected ");
			buff.append(" FROM permisos AS p ");
			buff.append(" 		LEFT JOIN ");
			buff.append(" 		grxpr AS x ON (p.id = x.id_permiso AND id_grupo= ? ) ");
			buff.append(" order by p.id_padre, p.orden ");
			pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, grupo.getId());
			rs = pstmt.executeQuery();
			while (rs.next()) {
				Permiso permiso = new Permiso();
				permiso.setId(rs.getLong("id"));
				permiso.setDescripcion(rs.getString("descripcion"));
				permiso.setPadreId(rs.getLong("id_padre"));
				permiso.setSelected(rs.getInt("selected") == 1);
				permisos.add(permiso);
			}
			return permisos;
		} catch (Exception e) {
			throw new DAOException(e);
		} finally {
			super.close(rs);
			super.close(pstmt);
		}
	}

	public List<Permiso> findPermisosEspecialesBy(Grupo o) throws DAOException {
		try {
			PreparedStatement pstmt = getConnection().prepareStatement("select * from permisos p inner join grxpr g on (p.id = g.id_permiso and p.permiso_especial = ? and g.id_grupo = ?)");
			pstmt.setBoolean(1, true);
			pstmt.setLong(2, o.getId());
			return findBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public List<Permiso> findBy(Grupo grupo, Permiso permiso) throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();

			buff.append(" select p.*, ");
			buff.append("	case ");
			buff.append("		when id_grupo is null ");
			buff.append(" 		then 0 ");
			buff.append(" 	else 1 ");
			buff.append(" 	end as selected, ");
			buff.append(" 	padre.descripcion as desc_padre ");
			buff.append(" from permisos as p ");
			buff.append(" 		left join  grxpr x on (p.id = x.id_permiso AND id_grupo = ?) ");
			buff.append("		left join permisos padre on (p.id_padre = padre.id) ");
			buff.append(" where 1 = 1 ");

			if (permiso == null) {
				buff.append(" and p.id_padre is null ");
			} else {
				buff.append(" and p.id_padre = " + permiso.getId());
			}

			buff.append(" order by id_padre desc nulls first, orden ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, grupo.getId());
			return findBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	public void saveAll(Grupo grupo, List<Long> seleccionados) throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" delete from grxpr where id_grupo = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, grupo.getId());
			super.execute(pstmt);

			for (Iterator<Long> it = seleccionados.iterator(); it.hasNext();) {
				Long idPermiso = it.next();

				pstmt = getConnection().prepareStatement(" insert into grxpr (id_grupo, id_permiso) values (?, ?) ");
				pstmt.setLong(1, grupo.getId());
				pstmt.setLong(2, idPermiso);
				super.execute(pstmt);
			}

		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public void saveAllNoSchema(Grupo grupo, List<Long> seleccionados) throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" delete from grxpr where id_grupo = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, grupo.getId());
			super.execute(pstmt);

			for (Iterator<Long> it = seleccionados.iterator(); it.hasNext();) {
				Long idPermiso = it.next();

				pstmt = getConnection().prepareStatement(" insert into grxpr (id_grupo, id_permiso) values (?, ?) ");
				pstmt.setLong(1, grupo.getId());
				pstmt.setLong(2, idPermiso);
				super.execute(pstmt);
			}

		} catch (Exception e) {
			throw new DAOException(e);
		}
	}
}