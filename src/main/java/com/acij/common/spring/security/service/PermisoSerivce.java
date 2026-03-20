package com.acij.common.spring.security.service;

import java.util.List;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.dao.DaoFactory;
import com.acij.common.service.AbstractEntityService;
import com.acij.common.service.exceptions.ServiceException;
import com.acij.common.spring.security.dao.PermisoDao;
import com.acij.common.spring.security.model.Grupo;
import com.acij.common.spring.security.model.Permiso;

public class PermisoSerivce extends AbstractEntityService<Permiso> {

	@Override
	protected AbstractEntityDao<Permiso> createDao() {
		return DaoFactory.get(PermisoDao.class);
	}

	public List<Permiso> findBy(Grupo grupo) throws ServiceException {
		return ((PermisoDao) dao).findBy(grupo);
	}

	public List<Permiso> findByGrupo(Grupo grupo) throws ServiceException {
		return ((PermisoDao) dao).findByGrupo(grupo);
	}

	public List<Permiso> findBy(Grupo grupo, Permiso permiso) throws ServiceException {
		return ((PermisoDao) dao).findBy(grupo, permiso);
	}

	public void saveAll(Grupo grupo, List<Long> seleccionados) throws ServiceException {
		try {
			((PermisoDao) dao).saveAll(grupo, seleccionados);
			super.commit();
		} catch (Exception e) {
			super.rollback();
			throw new ServiceException(e);
		}
	}
	
	public void saveAllNoSchema(Grupo grupo, List<Long> seleccionados) throws ServiceException {
		try {
			((PermisoDao) dao).saveAllNoSchema(grupo, seleccionados);
			super.commit();
		} catch (Exception e) {
			super.rollback();
			throw new ServiceException(e);
		}
	}
	
}