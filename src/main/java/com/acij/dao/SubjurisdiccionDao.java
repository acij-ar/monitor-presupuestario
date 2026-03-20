package com.acij.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.model.ModelHelper;
import com.acij.common.service.exceptions.DAOException;
import com.acij.model.Jurisdiccion;
import com.acij.model.Subjurisdiccion;

public class SubjurisdiccionDao extends AbstractEntityDao<Subjurisdiccion> {

	@Override
	protected Subjurisdiccion resultSetToObject(ResultSet rs) throws Exception {
		Subjurisdiccion o = new Subjurisdiccion();
		o.setId(rs.getLong("id"));
		o.setDescripcion(rs.getString("descripcion"));
		o.setAnio(rs.getInt("anio"));
		o.setIdExterno(rs.getLong("id_externo"));
		o.setJurisdiccion(ModelHelper.create(Jurisdiccion.class, rs.getLong("id_jurisdiccion")));
		return o;
	}

	@Override
	protected void saveObject(Subjurisdiccion o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" insert into subjurisdicciones ");
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
	protected void updateObject(Subjurisdiccion o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" update subjurisdicciones ");
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
	protected void removeObject(Subjurisdiccion o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" delete from subjurisdicciones ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, o.getId());
			super.execute(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected Subjurisdiccion findByPkObject(Subjurisdiccion o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * from subjurisdicciones ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, o.getId());
			return findEntityBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public List<Subjurisdiccion> findAll() throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * ");
			buff.append(" from subjurisdicciones ");
			buff.append(" order by descripcion ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			return findBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

}