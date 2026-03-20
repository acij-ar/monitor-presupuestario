package com.acij.common.spring.security.service;

import java.util.List;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.dao.DaoFactory;
import com.acij.common.service.AbstractEntityService;
import com.acij.common.service.exceptions.ServiceException;
import com.acij.common.spring.security.dao.GrupoDao;
import com.acij.common.spring.security.model.Grupo;
import com.acij.common.spring.security.model.Permiso;

public class GrupoService extends AbstractEntityService<Grupo> {

	@Override
	protected AbstractEntityDao<Grupo> createDao() {
		return DaoFactory.get(GrupoDao.class);
	}

	public List<Grupo> findAll() throws ServiceException {
		return ((GrupoDao) dao).findAll();
	}

	public List<Grupo> findBy(String filtroDescripcion, String sortColumn, String search) throws ServiceException {
		return ((GrupoDao) dao).findBy(filtroDescripcion, sortColumn, search);
	}
	
	public void changePermissions(Grupo grupo, List<Permiso> permisos) throws ServiceException {
		try {
			((GrupoDao) dao).changePermissions(grupo, permisos);
			super.commit();
		} catch (Exception e) {
			super.rollback();
			throw new ServiceException(e);
		}
	}
	
	public List<Grupo> findBy(Long[] idList) throws ServiceException {
		return ((GrupoDao) dao).findBy(idList);
	}
	
	public List<Grupo> findGruposBy(Long idPermiso) throws ServiceException {
		return ((GrupoDao) dao).findGruposBy(idPermiso);
	}
	
	public List<Grupo> findGruposBy(Long[] idList) throws ServiceException {
		return ((GrupoDao) dao).findGruposBy(idList);
	}
}