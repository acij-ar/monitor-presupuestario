package com.acij.common.dao;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.ArrayList;
import java.util.List;

import com.acij.common.helpers.ConnectionHelper;

public abstract class AbstractDao<T> {

	public AbstractDao() {
	}

	protected void close(PreparedStatement pstmt) {
		try {
			if (pstmt != null) {
				pstmt.close();
			}
		} catch (Exception ex) {
		}
	}

	protected void close(ResultSet rs) {
		try {
			if (rs != null) {
				rs.close();
			}
		} catch (Exception ex) {
		}
	}

	public Connection getConnection() throws Exception {
		return ConnectionHelper.getInstance().getConnection();
	}

	@SuppressWarnings("unchecked")
	protected <M> List<M> findListValueBy(PreparedStatement pstmt, Class<M> clazz) throws Exception {
		List<M> lista = new ArrayList<M>();

		ResultSet rs = null;
		try {
			rs = pstmt.executeQuery();
			while (rs.next()) {
				M value = (M) rs.getObject(1);
				lista.add(value);
			}

		} finally {
			close(rs);
			close(pstmt);
		}
		return lista;
	}

	@SuppressWarnings("unchecked")
	protected <M> M findValueBy(PreparedStatement pstmt, Class<M> clazz) throws Exception {
		M value = null;

		ResultSet rs = null;
		try {
			rs = pstmt.executeQuery();
			while (rs.next()) {
				value = (M) rs.getObject(1);
				if (rs.wasNull()) {
					value = null;
				}
			}
		} finally {
			close(rs);
			close(pstmt);
		}

		return value;
	}

	protected void execute(PreparedStatement pstmt) throws Exception {
		try {
			pstmt.execute();
		} finally {
			close(pstmt);
		}
	}

	protected Long executeIdentity(PreparedStatement pstmt) throws Exception {
		ResultSet generatedKeys = null;
		try {
			pstmt.execute();
			generatedKeys = pstmt.getGeneratedKeys();
			if (generatedKeys.next()) {
				return generatedKeys.getLong(1);
			} else {
				return findValueBy(getConnection().prepareStatement("SELECT @@IDENTITY"), BigDecimal.class).longValue();
			}
		} finally {
			close(generatedKeys);
			close(pstmt);
		}
	}

	public Long sequenceNextVal(String sequence) throws Exception {
		PreparedStatement pstmt = getConnection().prepareStatement("select nextval(?) ");
		pstmt.setString(1, sequence);
		return findValueBy(pstmt, Long.class);
	}

	protected Boolean contains(ResultSet rs, String column) throws Exception {
		ResultSetMetaData metaData = rs.getMetaData();
		for (int i = 0; i < metaData.getColumnCount(); i++) {
			if (column.toLowerCase().equals(metaData.getColumnName(i + 1).toLowerCase())) {
				return true;
			}
		}
		return false;
	}

	protected <M> void fillSafetyValue(PreparedStatement pstmt, int index, M value) throws Exception {
		if (value == null || "".equals(value)) {
			pstmt.setNull(index, pstmt.getParameterMetaData().getParameterType(index));
		} else {
			pstmt.setObject(index, value, pstmt.getParameterMetaData().getParameterType(index));
		}
	}

	protected <M> void fillSafetyValue(PreparedStatement pstmt, int index, M value, int type) throws Exception {
		if (value == null || "".equals(value)) {
			pstmt.setNull(index, pstmt.getParameterMetaData().getParameterType(index));
		} else {
			pstmt.setObject(index, value, type);
		}
	}
}