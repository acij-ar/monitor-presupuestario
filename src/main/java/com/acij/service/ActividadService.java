package com.acij.service;

import java.util.List;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.dao.DaoFactory;
import com.acij.common.service.AbstractEntityService;
import com.acij.common.service.exceptions.ServiceException;
import com.acij.dao.ActividadDao;
import com.acij.model.Actividad;
import com.acij.model.Entidad;
import com.acij.model.Jurisdiccion;
import com.acij.model.Programa;

public class ActividadService extends AbstractEntityService<Actividad> {

	@Override
	protected AbstractEntityDao<Actividad> createDao() {
		return DaoFactory.get(ActividadDao.class);
	}

	public List<Actividad> findByAnio(Integer anio) throws ServiceException {
		return ((ActividadDao) dao).findByAnio(anio);
	}

	public List<Actividad> findBy(Integer anio, Jurisdiccion jurisdiccion, Entidad entidad, Programa programa) throws ServiceException {
		return ((ActividadDao) dao).findBy(anio, jurisdiccion, entidad, programa);
	}
}