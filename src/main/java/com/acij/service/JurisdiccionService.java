package com.acij.service;

import java.util.List;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.dao.DaoFactory;
import com.acij.common.service.AbstractEntityService;
import com.acij.common.service.exceptions.ServiceException;
import com.acij.dao.JurisdiccionDao;
import com.acij.model.Jurisdiccion;

public class JurisdiccionService extends AbstractEntityService<Jurisdiccion> {

	@Override
	protected AbstractEntityDao<Jurisdiccion> createDao() {
		return DaoFactory.get(JurisdiccionDao.class);
	}
	
	
	public List<Jurisdiccion> findByAnio(Integer anio) throws ServiceException {
		return ((JurisdiccionDao)dao).findByAnio(anio);
	}



}