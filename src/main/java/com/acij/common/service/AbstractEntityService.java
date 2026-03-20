package com.acij.common.service;

import java.sql.Connection;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.service.exceptions.ServiceException;

public abstract class AbstractEntityService<T> extends AbstractService {

	protected AbstractEntityDao<T> dao;

	public AbstractEntityService() {
		dao = createDao();
	}

	public void save(T o) throws ServiceException {
		Connection connection = null;
		try {
			connection = dao.getConnection();
			dao.save(o);
			connection.commit();
		} catch (Throwable t) {
			try {
				connection.rollback();
			} catch (Exception e) {
				throw new ServiceException(e);
			}
			throw new ServiceException(t);
		}
	}
	
	public void saveOrUpdate(T o) throws ServiceException {
		Connection connection = null;
		try {
			connection = dao.getConnection();
			dao.saveOrUpdate(o);
			connection.commit();
		} catch (Throwable t) {
			try {
				connection.rollback();
			} catch (Exception e) {
				throw new ServiceException(e);
			}
			throw new ServiceException(t);
		}
	}

	public void update(T o) throws ServiceException {
		Connection connection = null;
		try {
			connection = dao.getConnection();
			dao.update(o);
			connection.commit();
		} catch (Throwable t) {
			try {
				connection.rollback();
			} catch (Exception e) {
				throw new ServiceException(e);
			}
			throw new ServiceException(t);
		}
	}

	public void remove(T o) throws ServiceException {
		Connection connection = null;
		try {
			connection = dao.getConnection();
			dao.remove(o);
			connection.commit();
		} catch (Throwable t) {
			try {
				connection.rollback();
			} catch (Exception e) {
				throw new ServiceException(e);
			}
			throw new ServiceException(t);
		}
	}

	public T findByPk(T pk) throws ServiceException {
		T result = null;
		Connection connection = null;
		try {
			connection = dao.getConnection();
			result = dao.findByPk(pk);
			connection.commit();
		} catch (Throwable t) {
			try {
				connection.rollback();
			} catch (Exception e) {
				throw new ServiceException(e);
			}
			throw new ServiceException(t);
		}
		return result;
	}

	protected abstract AbstractEntityDao<T> createDao();

	protected void commit() throws ServiceException {
		try {
			dao.getConnection().commit();
		} catch (Exception ex) {
			try {
				dao.getConnection().rollback();
			} catch (Exception e) {
				throw new ServiceException(e);
			}
			throw new ServiceException(ex);
		}
	}
	
	protected void rollback() throws ServiceException {
		try {
			dao.getConnection().rollback();
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}
}