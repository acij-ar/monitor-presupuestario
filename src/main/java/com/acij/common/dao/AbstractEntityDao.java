package com.acij.common.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Types;
import java.util.ArrayList;
import java.util.List;

import com.acij.common.model.IdEntity;
import com.acij.common.service.exceptions.DAOException;

public abstract class AbstractEntityDao<T> extends AbstractDao<T> {

	protected abstract T resultSetToObject(ResultSet rs) throws Exception;

	public void save(T o) throws Exception {
		try {
			saveObject(o);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	protected abstract void saveObject(T o) throws Exception;

	public void update(T o) throws Exception {
		try {
			updateObject(o);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	protected abstract void updateObject(T o) throws Exception;

	public void remove(T o) throws Exception {
		try {
			removeObject(o);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	protected abstract void removeObject(T o) throws Exception;

	public T findByPk(T pk) {
		T object;
		try {
			object = findByPkObject(pk);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
		return object;
	}

	protected abstract T findByPkObject(T o) throws Exception;

	public void saveOrUpdate(T o) throws DAOException {
		try {
			if (o instanceof IdEntity) {
				IdEntity entity = (IdEntity) o;
				if (entity.getId() == null) {
					save(o);
					return;
				}
			}

			T result = findByPk(o);
			if (result == null) {
				save(o);
			} else {
				update(o);
			}

		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	protected Boolean hasElements(PreparedStatement pstmt) throws DAOException {
		Boolean result = false;
		ResultSet rs = null;
		try {
			rs = pstmt.executeQuery();
			while (rs.next()) {
				result = true;
			}
		} catch (Exception ex) {
			if (ex instanceof DAOException) {
				throw (DAOException) ex;
			} else {
				throw new DAOException(ex);
			}
		} finally {
			close(rs);
			close(pstmt);
		}
		return result;
	}

	protected List<T> findBy(PreparedStatement pstmt) {
		List<T> results = new ArrayList<T>();
		ResultSet rs = null;
		try {
			getConnection();
			rs = pstmt.executeQuery();
			while (rs.next()) {
				results.add(resultSetToObject(rs));
			}
			close(rs);
			close(pstmt);
		} catch (Exception ex) {
			if (ex instanceof DAOException) {
				throw (DAOException) ex;
			} else {
				throw new DAOException(ex);
			}
		} finally {
			close(rs);
			close(pstmt);
		}
		return results;
	}

	protected T findEntityBy(PreparedStatement pstmt) {
		T result = null;
		ResultSet rs = null;
		try {
			getConnection();
			rs = pstmt.executeQuery();
			if (rs.next()) {
				result = resultSetToObject(rs);
			}
		} catch (Exception ex) {
			if (ex instanceof DAOException) {
				throw (DAOException) ex;
			} else {
				throw new DAOException(ex);
			}
		} finally {
			close(rs);
			close(pstmt);
		}
		return result;
	}

	protected void fillSafetyIdEntity(PreparedStatement pstmt, int index, IdEntity entity) throws Exception {
		if ((entity == null) || (entity.getId() == null) || (entity.getId() == 0)) {
			pstmt.setNull(index, Types.INTEGER);
		} else {
			pstmt.setLong(index, entity.getId());
		}
	}
}