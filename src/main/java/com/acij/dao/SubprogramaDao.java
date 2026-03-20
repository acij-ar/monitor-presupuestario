package com.acij.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.model.ModelHelper;
import com.acij.common.service.exceptions.DAOException;
import com.acij.model.Programa;
import com.acij.model.Subprograma;

public class SubprogramaDao extends AbstractEntityDao<Subprograma> {

	@Override
	protected Subprograma resultSetToObject(ResultSet rs) throws Exception {
		Subprograma o = new Subprograma();
		o.setId(rs.getLong("id"));
		o.setDescripcion(rs.getString("descripcion"));
		o.setAnio(rs.getInt("anio"));
		o.setIdExterno(rs.getLong("id_externo"));
		o.setPrograma(ModelHelper.create(Programa.class, rs.getLong("id_programa")));
		return o;
	}

	@Override
	protected void saveObject(Subprograma o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" insert into subprograma ");
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
	protected void updateObject(Subprograma o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" update subprograma ");
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
	protected void removeObject(Subprograma o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" delete from subprograma ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, o.getId());
			super.execute(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected Subprograma findByPkObject(Subprograma o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * from subprograma ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, o.getId());
			return findEntityBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public List<Subprograma> findAll() throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * ");
			buff.append(" from subprograma ");
			buff.append(" order by descripcion ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			return findBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	
}