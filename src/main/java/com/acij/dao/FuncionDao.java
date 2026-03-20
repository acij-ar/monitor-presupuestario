package com.acij.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.model.ModelHelper;
import com.acij.common.service.exceptions.DAOException;
import com.acij.model.Finalidad;
import com.acij.model.Funcion;

public class FuncionDao extends AbstractEntityDao<Funcion> {

	@Override
	protected Funcion resultSetToObject(ResultSet rs) throws Exception {
		Funcion o = new Funcion();
		o.setId(rs.getLong("id"));
		o.setDescripcion(rs.getString("descripcion"));
		o.setAnio(rs.getInt("anio"));
		o.setIdExterno(rs.getLong("id_externo"));
		o.setFinalidad(ModelHelper.create(Finalidad.class, rs.getLong("id_finalidad")));
		
		if (contains(rs, "detalle")) {
			o.setDetalle(rs.getString("detalle"));
		}

		return o;
	}

	@Override
	protected void saveObject(Funcion o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" insert into funciones ");
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
	protected void updateObject(Funcion o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" update funciones ");
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
	protected void removeObject(Funcion o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" delete from funciones ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, o.getId());
			super.execute(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected Funcion findByPkObject(Funcion o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * from funciones ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, o.getId());
			return findEntityBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	
	public List<Funcion> findAll() throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * ");
			buff.append(" from funciones ");
			buff.append(" order by descripcion ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			return findBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}
	
	public List<Funcion> findByAnio(Integer anio) throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * ");
			buff.append(" from funciones where anio = ?");
			buff.append(" order by descripcion ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setInt(1, anio);
			return findBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}
	

	public List<Funcion> findBy(Integer anio, Finalidad finalidad) {
		try {
			StringBuffer buff = new StringBuffer();

			buff.append(" select distinct func.*, fin.descripcion as detalle ");
			buff.append(" from funciones func  ");
			buff.append(" inner join finalidades fin on fin.id = func.id_finalidad");
			buff.append(" where func.anio = ?  ");
			if (finalidad != null) {
				buff.append(" and fin.id = " + finalidad.getId());
			}

			buff.append(" order by func.descripcion ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setInt(1, anio);
			return findBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}


}