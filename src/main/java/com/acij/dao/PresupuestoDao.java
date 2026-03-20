package com.acij.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.service.exceptions.DAOException;
import com.acij.model.Presupuesto;

public class PresupuestoDao extends AbstractEntityDao<Presupuesto> {

	@Override
	protected Presupuesto resultSetToObject(ResultSet rs) throws Exception {
		Presupuesto o = new Presupuesto();
		o.setId(rs.getLong("id"));
		o.setAnio(rs.getInt("anio"));
		o.setFileReference(rs.getString("file_references"));
		return o;
	}

	@Override
	protected void saveObject(Presupuesto o) throws Exception {
		try {
			o.setId(super.sequenceNextVal("presupuesto_id_seq"));
			StringBuffer buff = new StringBuffer();
			buff.append(" insert into presupuestos ");
			buff.append(" 	(id, file_references, anio) ");
			buff.append(" values ");
			buff.append(" 	(?, ?, ?) ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, o.getId());
			pstmt.setString(2, o.getFileReference());
			pstmt.setInt(3, o.getAnio());
			super.execute(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected void updateObject(Presupuesto o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" update presupuestos ");
			buff.append(" 	set file_references = ?, anio = ? ");
			buff.append(" where ");
			buff.append(" 	id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setString(1, o.getFileReference());
			pstmt.setInt(2, o.getAnio());
			pstmt.setLong(3, o.getId());
			super.execute(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected void removeObject(Presupuesto o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" delete from presupuestos ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, o.getId());
			super.execute(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected Presupuesto findByPkObject(Presupuesto o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * from presupuestos ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, o.getId());
			return findEntityBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public Presupuesto findByAnio(Integer anio) throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * from presupuestos ");
			buff.append(" where anio = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setInt(1, anio);
			return findEntityBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public List<Integer> findAnios() throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select anio from presupuestos order by anio desc");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			return super.findListValueBy(pstmt, Integer.class);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public List<Presupuesto> findBy(Integer anio, String columnSort, String sqlSearch) throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select p.* ");
			buff.append(" from presupuestos p ");
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

}