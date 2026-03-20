package com.acij.service;

import java.util.List;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.dao.DaoFactory;
import com.acij.common.service.AbstractEntityService;
import com.acij.common.service.exceptions.ServiceException;
import com.acij.dao.InflacionMensualDao;
import com.acij.model.InflacionMensual;

public class InflacionMensualService extends AbstractEntityService<InflacionMensual> {

	@Override
	protected AbstractEntityDao<InflacionMensual> createDao() {
		return DaoFactory.get(InflacionMensualDao.class);
	}

	public void importarInflacion() throws ServiceException {
		try {
			((InflacionMensualDao)dao).importarInflacion();
			super.commit();
		} catch(Exception e) {
			super.rollback();
			throw new ServiceException(e);
		}
	}

	public List<InflacionMensual> findBy(Integer anio, Long mes, String columnSort, String sqlSearch) throws ServiceException {
		return ((InflacionMensualDao)dao).findBy(anio, mes, columnSort, sqlSearch);
	}

	public InflacionMensual findBy(Integer anio, Integer mes) throws ServiceException{
		return ((InflacionMensualDao)dao).findBy(anio, mes);
	}

}