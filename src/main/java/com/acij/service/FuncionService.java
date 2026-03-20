package com.acij.service;

import java.util.List;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.dao.DaoFactory;
import com.acij.common.service.AbstractEntityService;
import com.acij.common.service.exceptions.ServiceException;
import com.acij.dao.FuncionDao;
import com.acij.model.Finalidad;
import com.acij.model.Funcion;

public class FuncionService extends AbstractEntityService<Funcion> {

	@Override
	protected AbstractEntityDao<Funcion> createDao() {
		return DaoFactory.get(FuncionDao.class);
	}

	public List<Funcion> findByAnio(Integer anio) throws ServiceException {
		return ((FuncionDao) dao).findByAnio(anio);
	}

	public List<Funcion> findBy(Integer anio, Finalidad finalidad) throws ServiceException {
		return ((FuncionDao) dao).findBy(anio, finalidad);
	}
}