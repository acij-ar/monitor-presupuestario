package com.acij.service;

import java.util.List;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.dao.DaoFactory;
import com.acij.common.service.AbstractEntityService;
import com.acij.common.service.exceptions.ServiceException;
import com.acij.dao.PresupuestoDao;
import com.acij.model.Presupuesto;

public class PresupuestoService extends AbstractEntityService<Presupuesto> {

	@Override
	protected AbstractEntityDao<Presupuesto> createDao() {
		return DaoFactory.get(PresupuestoDao.class);
	}

	public List<Integer> findAnios() throws ServiceException{
		return ((PresupuestoDao)dao).findAnios();
	}

	public List<Presupuesto> findBy(Integer anio, String columnSort, String sqlSearch) {
		return ((PresupuestoDao)dao).findBy(anio, columnSort, sqlSearch);
	}

}