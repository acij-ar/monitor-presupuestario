package com.acij.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.model.ModelHelper;
import com.acij.common.service.exceptions.DAOException;
import com.acij.model.Actividad;
import com.acij.model.Entidad;
import com.acij.model.Jurisdiccion;
import com.acij.model.Programa;
import com.acij.model.Proyecto;

public class ActividadDao extends AbstractEntityDao<Actividad> {

	@Override
	protected Actividad resultSetToObject(ResultSet rs) throws Exception {
		Actividad o = new Actividad();
		o.setId(rs.getLong("id"));
		o.setDescripcion(rs.getString("descripcion"));
		o.setAnio(rs.getInt("anio"));
		o.setIdExterno(rs.getLong("id_externo"));
		o.setProyecto(ModelHelper.create(Proyecto.class, rs.getLong("id_proyecto")));
		o.setPeridoEnJurisdiccion(rs.getString("periodos_por_jurisdiccion"));
		
		if (contains(rs, "detalle")) {
			o.setDetalle(rs.getString("detalle"));
		}

		if (contains(rs, "id_jurisdiccion")) {
			o.setIdJurisdiccion(rs.getLong("id_jurisdiccion"));
		}

		if (contains(rs, "id_entidad")) {
			o.setIdEntidad(rs.getLong("id_entidad"));
		}

		if (contains(rs, "id_programa")) {
			o.setIdPrograma(rs.getLong("id_programa"));
		}

		return o;
	}

	@Override
	protected void saveObject(Actividad o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" insert into actividades ");
			buff.append(" 	(descripcion, anio) ");
			buff.append(" values ");
			buff.append(" 	(?, ?) ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setString(1, o.getDescripcion());
			pstmt.setInt(2, o.getAnio());
			super.execute(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected void updateObject(Actividad o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" update actividades ");
			buff.append(" 	set descripcion = ?, anio = ? ");
			buff.append(" where ");
			buff.append(" 	id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setString(1, o.getDescripcion());
			pstmt.setInt(2, o.getAnio());
			pstmt.setLong(3, o.getId());
			super.execute(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected void removeObject(Actividad o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" delete from actividades ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, o.getId());
			super.execute(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected Actividad findByPkObject(Actividad o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * from actividades ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, o.getId());
			return findEntityBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public List<Actividad> findAll() throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * ");
			buff.append(" from actividades ");
			buff.append(" order by descripcion ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			return findBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	public List<Actividad> findByAnio(Integer anio) throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select a.*,j.descripcion || '/' || e.descripcion || '/' || s.descripcion || '/' || p.descripcion || '/' || proy.descripcion as detalle,  j.id as id_jurisdiccion, e.id as id_entidad, p.id as id_programa");
			buff.append(" from actividades a ");
			buff.append(" inner join proyectos proy on proy.id = a.id_proyecto ");
			buff.append(" inner join subprograma sp on sp.id = proy.id_subprograma ");
			buff.append(" inner join programas p on p.id = sp.id_programa ");
			buff.append(" inner join servicios s on s.id = p.id_servicio ");
			buff.append(" inner join entidades e  on e.id = s.id_entidad ");
			buff.append(" inner join subjurisdicciones s2 on s2.id = e.id_subjurisdiccion");
			buff.append(" inner join juridiscciones j on j.id = s2.id_jurisdiccion");
			buff.append(" where a.anio = ?");
			buff.append(" order by a.descripcion ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setInt(1, anio);
			return findBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	public List<Actividad> findBy(Integer anio, Jurisdiccion jurisdiccion, Entidad entidad, Programa programa) {
		try {
			StringBuffer buff = new StringBuffer();

			buff.append(" select a.*,j.descripcion || '/' || e.descripcion || '/' || s.descripcion || '/' || p.descripcion || '/' || proy.descripcion as detalle,  j.id as id_jurisdiccion, e.id as id_entidad, p.id as id_programa ");
			buff.append(" from actividades a ");
			buff.append(" inner join proyectos proy on proy.id = a.id_proyecto ");
			buff.append(" inner join subprograma sp on sp.id = proy.id_subprograma ");
			buff.append(" inner join programas p on p.id = sp.id_programa ");
			buff.append(" inner join servicios s on s.id = p.id_servicio ");
			buff.append(" inner join entidades e  on e.id = s.id_entidad ");
			buff.append(" inner join subjurisdicciones s2 on s2.id = e.id_subjurisdiccion");
			buff.append(" inner join juridiscciones j on j.id = s2.id_jurisdiccion");
			buff.append(" where a.anio = ?");
			if (jurisdiccion != null) {
				buff.append(" and j.id =" + jurisdiccion.getId());
			}

			if (entidad != null) {
				buff.append(" and e.id = " + entidad.getId());
			}

			if (programa != null) {
				buff.append(" and p.id = " + programa.getId());
			}
			buff.append(" order by a.descripcion ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setInt(1, anio);
			return findBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}
}