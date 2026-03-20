package com.acij.service;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.dao.DaoFactory;
import com.acij.common.service.AbstractEntityService;
import com.acij.dao.SubprogramaDao;
import com.acij.model.Subprograma;

public class SubprogramaService extends AbstractEntityService<Subprograma> {

	@Override
	protected AbstractEntityDao<Subprograma> createDao() {
		return DaoFactory.get(SubprogramaDao.class);
	}

	
}