package com.acij.service;

import java.util.List;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.dao.DaoFactory;
import com.acij.common.service.AbstractEntityService;
import com.acij.common.service.exceptions.ServiceException;
import com.acij.dao.ProgramaDao;
import com.acij.model.Entidad;
import com.acij.model.Jurisdiccion;
import com.acij.model.Programa;

public class ProgramaService extends AbstractEntityService<Programa> {

	@Override
	protected AbstractEntityDao<Programa> createDao() {
		return DaoFactory.get(ProgramaDao.class);
	}

	public List<Programa> findByAnio(Integer anio) throws ServiceException {
		return ((ProgramaDao) dao).findByAnio(anio);
	}

	public List<Programa> findBy(Integer anio, Jurisdiccion jurisdiccion, Entidad entidad) throws ServiceException {
		return ((ProgramaDao) dao).findBy(anio, jurisdiccion, entidad);
	}

}