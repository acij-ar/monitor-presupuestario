package com.acij.service;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.dao.DaoFactory;
import com.acij.common.service.AbstractEntityService;
import com.acij.dao.ServicioDao;
import com.acij.model.Servicio;

public class ServicioService extends AbstractEntityService<Servicio> {

	@Override
	protected AbstractEntityDao<Servicio> createDao() {
		return DaoFactory.get(ServicioDao.class);
	}

	
}