package com.acij.common.spring.security.service;

import com.acij.common.dao.DaoFactory;
import com.acij.common.service.AbstractService;
import com.acij.common.service.exceptions.ServiceException;
import com.acij.common.spring.security.dao.MenuDao;
import com.acij.common.spring.security.model.Grupo;
import com.acij.common.spring.security.model.Menu;

public class MenuService extends AbstractService {

	private MenuDao dao;

	public MenuService() {
		dao = DaoFactory.get(MenuDao.class);
	}

	public Menu findMenuBy(Grupo grupo) throws ServiceException {
		return dao.findMenuBy(grupo);
	}
}
