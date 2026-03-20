package com.acij.service;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.dao.DaoFactory;
import com.acij.common.service.AbstractEntityService;
import com.acij.dao.ProyectoDao;
import com.acij.model.Proyecto;

public class ProyectoService extends AbstractEntityService<Proyecto> {

	@Override
	protected AbstractEntityDao<Proyecto> createDao() {
		return DaoFactory.get(ProyectoDao.class);
	}

	
}