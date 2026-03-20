package com.acij.service;

import java.util.List;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.dao.DaoFactory;
import com.acij.common.service.AbstractEntityService;
import com.acij.common.service.exceptions.ServiceException;
import com.acij.dao.EntidadDao;
import com.acij.model.Entidad;
import com.acij.model.Jurisdiccion;

public class EntidadService extends AbstractEntityService<Entidad> {

	@Override
	protected AbstractEntityDao<Entidad> createDao() {
		return DaoFactory.get(EntidadDao.class);
	}

	public List<Entidad> findByAnio(Integer anio) throws ServiceException {
		return ((EntidadDao) dao).findByAnio(anio);
	}

	public List<Entidad> findBy(Integer anio, Jurisdiccion jurisdiccion) throws ServiceException {
		return ((EntidadDao) dao).findBy(anio, jurisdiccion);
	}

}