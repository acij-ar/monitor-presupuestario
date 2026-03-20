package com.acij.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.dao.DaoFactory;
import com.acij.common.service.exceptions.DAOException;
import com.acij.model.InflacionRem;

public class InflacionRemDao extends AbstractEntityDao<InflacionRem> {

	@Override
	protected InflacionRem resultSetToObject(ResultSet rs) throws Exception {
		InflacionRem o = new InflacionRem();
		o.setId(rs.getLong("id"));
		o.setAnio(rs.getInt("anio"));
		o.setRem(rs.getBigDecimal("rem"));
		return o;
	}

	@Override
	protected void saveObject(InflacionRem o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" insert into inflacion_rem ");
			buff.append(" 	(anio,  rem) ");
			buff.append(" values ");
			buff.append(" 	(?, ?) ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setInt(1, o.getAnio());
			pstmt.setBigDecimal(2, o.getRem());
			super.execute(pstmt);
			
			DaoFactory.get(InflacionMensualDao.class).recalcularInflacionAnualActual();
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected void updateObject(InflacionRem o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" update inflacion_rem ");
			buff.append(" 	set rem = ? ");
			buff.append(" where ");
			buff.append(" 	id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setBigDecimal(1, o.getRem());
			pstmt.setLong(2, o.getId());
			super.execute(pstmt);
			
			DaoFactory.get(InflacionMensualDao.class).recalcularInflacionAnualActual();
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected void removeObject(InflacionRem o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" delete from inflacion_rem ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, o.getId());
			super.execute(pstmt);
			
			DaoFactory.get(InflacionMensualDao.class).recalcularInflacionAnualActual();
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected InflacionRem findByPkObject(InflacionRem o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * from inflacion_rem ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, o.getId());
			return findEntityBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public List<InflacionRem> findAll() throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * from inflacion_rem order by anio asc ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			return findBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public List<InflacionRem> findBy(Integer anio, String columnSort, String sqlSearch) throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select i.* ");
			buff.append(" from inflacion_rem i ");
			buff.append(" where 1 = 1 " + sqlSearch + " ");

			if (anio != null && anio > 0) {
				buff.append(" and anio = ? ");
			}


			if (columnSort != null && !"".equals(columnSort)) {
				buff.append(" order by " + columnSort);
			} else {
				buff.append(" order by p.id  ");
			}
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			int index = 1;
			if (anio != null && anio > 0) {
				pstmt.setInt(index++, anio);
			}
			return findBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	public InflacionRem findBy(Integer anio) throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select i.* ");
			buff.append(" from inflacion_rem i ");
			buff.append(" where anio = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setInt(1, anio);
			return findEntityBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

}