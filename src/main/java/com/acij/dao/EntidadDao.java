package com.acij.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.model.ModelHelper;
import com.acij.common.service.exceptions.DAOException;
import com.acij.model.Entidad;
import com.acij.model.Jurisdiccion;
import com.acij.model.Subjurisdiccion;

public class EntidadDao extends AbstractEntityDao<Entidad> {

	@Override
	protected Entidad resultSetToObject(ResultSet rs) throws Exception {
		Entidad o = new Entidad();
		o.setId(rs.getLong("id"));
		o.setDescripcion(rs.getString("descripcion"));
		o.setAnio(rs.getInt("anio"));
		o.setIdExterno(rs.getLong("id_externo"));
		o.setSubjurisdiccion(ModelHelper.create(Subjurisdiccion.class, rs.getLong("id_subjurisdiccion")));

		o.setPeridoEnJurisdiccion(rs.getString("periodos_por_jurisdiccion"));
		o.setPeriodo(rs.getString("periodos"));
		
		if (contains(rs, "detalle")) {
			o.setDetalle(rs.getString("detalle"));
		}

		if (contains(rs, "id_jurisdiccion")) {
			o.setIdJurisdiccion(rs.getLong("id_jurisdiccion"));
		}

		return o;
	}

	@Override
	protected void saveObject(Entidad o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" insert into entidades ");
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
	protected void updateObject(Entidad o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" update entidades ");
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
	protected void removeObject(Entidad o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" delete from entidades ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, o.getId());
			super.execute(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected Entidad findByPkObject(Entidad o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * from entidades ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, o.getId());
			return findEntityBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public List<Entidad> findAll() throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * ");
			buff.append(" from entidades ");
			buff.append(" order by descripcion ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			return findBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	public List<Entidad> findByAnio(Integer anio) throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select e. *, j.descripcion as detalle, j.id as id_jurisdiccion ");
			buff.append(" from entidades e ");
			buff.append(" inner join subjurisdicciones s2 on s2.id = e.id_subjurisdiccion");
			buff.append(" inner join juridiscciones j on j.id = s2.id_jurisdiccion");
			buff.append(" where e.anio = ? ");
			buff.append(" order by descripcion ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setInt(1, anio);
			return findBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	public List<Entidad> findBy(Integer anio, Jurisdiccion jurisdiccion) {
		try {
			StringBuffer buff = new StringBuffer();

			buff.append(" select distinct e.*, j.descripcion as detalle, j.id as id_jurisdiccion ");
			buff.append(" from entidades e  ");
			buff.append(" inner join subjurisdicciones s2 on s2.id = e.id_subjurisdiccion");
			buff.append(" inner join juridiscciones j on j.id = s2.id_jurisdiccion");
			buff.append(" where e.anio = ?  ");
			if (jurisdiccion != null) {
				buff.append(" and j.id = " + jurisdiccion.getId());
			}

			buff.append(" order by e.descripcion ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setInt(1, anio);
			return findBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

}