package com.acij.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.model.ModelHelper;
import com.acij.common.service.exceptions.DAOException;
import com.acij.model.Entidad;
import com.acij.model.Jurisdiccion;
import com.acij.model.Programa;
import com.acij.model.Servicio;

public class ProgramaDao extends AbstractEntityDao<Programa> {

	@Override
	protected Programa resultSetToObject(ResultSet rs) throws Exception {
		Programa o = new Programa();
		o.setId(rs.getLong("id"));
		o.setDescripcion(rs.getString("descripcion"));
		o.setAnio(rs.getInt("anio"));
		o.setIdExterno(rs.getLong("id_externo"));
		o.setServicio(ModelHelper.create(Servicio.class, rs.getLong("id_servicio")));

		
		o.setPeridoEnJurisdiccion(rs.getString("periodos_por_jurisdiccion"));
		o.setPeriodo(rs.getString("periodos"));
		
		
		if (contains(rs, "detalle")) {
			o.setDetalle(rs.getString("detalle"));
		}

		if (contains(rs, "id_jurisdiccion")) {
			o.setIdJurisdiccion(rs.getLong("id_jurisdiccion"));
		}

		if (contains(rs, "id_entidad")) {
			o.setIdEntidad(rs.getLong("id_entidad"));
		}

		return o;
	}

	@Override
	protected void saveObject(Programa o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" insert into programas ");
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
	protected void updateObject(Programa o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" update programas ");
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
	protected void removeObject(Programa o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" delete from programas ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, o.getId());
			super.execute(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected Programa findByPkObject(Programa o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * from programas ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, o.getId());
			return findEntityBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public List<Programa> findAll() throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * ");
			buff.append(" from programas ");
			buff.append(" order by descripcion ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			return findBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	public List<Programa> findByAnio(Integer anio) throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select p.*, j.descripcion || '/' || e.descripcion || '/' || s.descripcion as detalle, j.id as id_jurisdiccion, e.id as id_entidad ");
			buff.append(" from programas p ");
			buff.append(" inner join servicios s on s.id = p.id_servicio ");
			buff.append(" inner join entidades e  on e.id = s.id_entidad ");
			buff.append(" inner join subjurisdicciones s2 on s2.id = e.id_subjurisdiccion");
			buff.append(" inner join juridiscciones j on j.id = s2.id_jurisdiccion");
			buff.append(" where p.anio = ? ");
			buff.append(" order by p.descripcion ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setInt(1, anio);
			return findBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	public List<Programa> findBy(Integer anio, Jurisdiccion jurisdiccion, Entidad entidad) {
		try {
			StringBuffer buff = new StringBuffer();

			buff.append(" select p.*, j.descripcion || '/' || e.descripcion || '/' || s.descripcion as detalle, j.id as id_jurisdiccion, e.id as id_entidad ");
			buff.append(" from programas p ");
			buff.append(" inner join servicios s on s.id = p.id_servicio ");
			buff.append(" inner join entidades e  on e.id = s.id_entidad ");
			buff.append(" inner join subjurisdicciones s2 on s2.id = e.id_subjurisdiccion");
			buff.append(" inner join juridiscciones j on j.id = s2.id_jurisdiccion");
			buff.append(" where p.anio = ? ");

			if (jurisdiccion != null) {
				buff.append(" and j.id =" + jurisdiccion.getId());
			}

			if (entidad != null) {
				buff.append(" and e.id = " + entidad.getId());
			}

			buff.append(" order by p.descripcion ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setInt(1, anio);
			return findBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}
}