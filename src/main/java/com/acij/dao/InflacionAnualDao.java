package com.acij.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;

import org.apache.commons.lang3.NotImplementedException;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.service.exceptions.DAOException;
import com.acij.model.InflacionAnual;

public class InflacionAnualDao extends AbstractEntityDao<InflacionAnual> {

	@Override
	protected InflacionAnual resultSetToObject(ResultSet rs) throws Exception {
		InflacionAnual o = new InflacionAnual();
		o.setId(rs.getLong("id"));
		o.setAnio(rs.getInt("anio"));
		o.setInflacionAnual(rs.getBigDecimal("inflacion_anual"));
		o.setIpcAcumulado(rs.getBigDecimal("ipc_acumulada"));
		o.setIpcPromedio(rs.getBigDecimal("ipc_promedio"));
		o.setValorAjusteAcumulado(rs.getBigDecimal("valor_ajuste_acumulado"));
		o.setValorAjustePromedio(rs.getBigDecimal("valor_ajuste_promedio"));
		return o;
	}

	@Override
	protected void saveObject(InflacionAnual o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" insert into inflacion_anual ");
			buff.append(" 	(anio, inflacion_anual, ipc_acumulada, ipc_promedio, valor_ajuste_acumulado, valor_ajuste_promedio, rem) ");
			buff.append(" values ");
			buff.append(" 	(?, ?, ?, ?, ?, ?, ?) ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setInt(1, o.getAnio());
			pstmt.setBigDecimal(2, o.getInflacionAnual());
			pstmt.setBigDecimal(3, o.getIpcAcumulado());
			pstmt.setBigDecimal(4, o.getIpcPromedio());
			pstmt.setBigDecimal(5, o.getValorAjusteAcumulado());
			pstmt.setBigDecimal(6, o.getValorAjustePromedio());
			pstmt.setBigDecimal(7, o.getRem());
			super.execute(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected void updateObject(InflacionAnual o) throws Exception {
		throw new NotImplementedException();
	}

	@Override
	protected void removeObject(InflacionAnual o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" delete from inflacion_anual ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, o.getId());
			super.execute(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}
	
	public void removeAll() throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" delete from inflacion_anual ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			super.execute(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected InflacionAnual findByPkObject(InflacionAnual o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * from inflacion_anual ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, o.getId());
			return findEntityBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public List<InflacionAnual> findAll() throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * from inflacion_anual order by anio asc ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			return findBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

}