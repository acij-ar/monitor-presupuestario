package com.acij.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.service.exceptions.DAOException;
import com.acij.model.Jurisdiccion;

public class JurisdiccionDao extends AbstractEntityDao<Jurisdiccion> {

	@Override
	protected Jurisdiccion resultSetToObject(ResultSet rs) throws Exception {
		Jurisdiccion o = new Jurisdiccion();
		o.setId(rs.getLong("id"));
		o.setDescripcion(rs.getString("descripcion") + " (" + rs.getString("periodos") + ")");
		o.setAnio(rs.getInt("anio"));
		o.setIdExterno(rs.getLong("id_externo"));
		return o;
	}

	@Override
	protected void saveObject(Jurisdiccion o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" insert into juridiscciones ");
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
	protected void updateObject(Jurisdiccion o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" update juridiscciones ");
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
	protected void removeObject(Jurisdiccion o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" delete from juridiscciones ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, o.getId());
			super.execute(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected Jurisdiccion findByPkObject(Jurisdiccion o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * from juridiscciones ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, o.getId());
			return findEntityBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public List<Jurisdiccion> findAll() throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * ");
			buff.append(" from juridiscciones ");
			buff.append(" order by descripcion ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			return findBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	public List<Jurisdiccion> findByAnio(Integer anio) throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * ");
			buff.append(" from juridiscciones where anio = ?");
			buff.append(" order by descripcion ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setInt(1, anio);
			return findBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

}