package com.acij.service;

import java.util.List;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.dao.DaoFactory;
import com.acij.common.service.AbstractEntityService;
import com.acij.common.service.exceptions.ServiceException;
import com.acij.dao.FinalidadDao;
import com.acij.model.Finalidad;

public class FinalidadService extends AbstractEntityService<Finalidad> {

	@Override
	protected AbstractEntityDao<Finalidad> createDao() {
		return DaoFactory.get(FinalidadDao.class);
	}
	
	
	public List<Finalidad> findByAnio(Integer anio) throws ServiceException {
		return ((FinalidadDao)dao).findByAnio(anio);
	}



}