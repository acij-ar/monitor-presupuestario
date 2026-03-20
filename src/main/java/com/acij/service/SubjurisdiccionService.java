package com.acij.service;

import java.util.List;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.dao.DaoFactory;
import com.acij.common.service.AbstractEntityService;
import com.acij.common.service.exceptions.ServiceException;
import com.acij.dao.SubjurisdiccionDao;
import com.acij.model.Subjurisdiccion;
import com.acij.model.Jurisdiccion;

public class SubjurisdiccionService extends AbstractEntityService<Subjurisdiccion> {

	@Override
	protected AbstractEntityDao<Subjurisdiccion> createDao() {
		return DaoFactory.get(SubjurisdiccionDao.class);
	}

}