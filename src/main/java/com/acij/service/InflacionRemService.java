package com.acij.service;

import java.util.List;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.dao.DaoFactory;
import com.acij.common.service.AbstractEntityService;
import com.acij.common.service.exceptions.ServiceException;
import com.acij.dao.InflacionRemDao;
import com.acij.model.InflacionRem;

public class InflacionRemService extends AbstractEntityService<InflacionRem> {

	@Override
	protected AbstractEntityDao<InflacionRem> createDao() {
		return DaoFactory.get(InflacionRemDao.class);
	}

	public List<InflacionRem> findBy(Integer anio, String columnSort, String sqlSearch) throws ServiceException {
		return ((InflacionRemDao) dao).findBy(anio, columnSort, sqlSearch);
	}

	public InflacionRem findBy(Integer anio) throws ServiceException {
		return ((InflacionRemDao) dao).findBy(anio);
	}

}