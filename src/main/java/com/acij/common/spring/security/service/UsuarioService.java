package com.acij.common.spring.security.service;

import java.util.List;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.dao.DaoFactory;
import com.acij.common.service.AbstractEntityService;
import com.acij.common.service.exceptions.ServiceException;
import com.acij.common.spring.security.dao.UsuarioDao;
import com.acij.common.spring.security.model.Grupo;
import com.acij.common.spring.security.model.Usuario;

public class UsuarioService extends AbstractEntityService<Usuario> {

	@Override
	protected AbstractEntityDao<Usuario> createDao() {
		return DaoFactory.get(UsuarioDao.class);
	}

	public Usuario findBy(String usuario, String password) throws ServiceException {
		return ((UsuarioDao) super.dao).findBy(usuario, password);
	}

	public Usuario findBy(String username) throws ServiceException {
		return ((UsuarioDao) super.dao).findBy(username);
	}

	public List<Usuario> findAll() throws ServiceException {
		return ((UsuarioDao) super.dao).findAll();
	}

	public List<Usuario> findBy(List<Grupo> g) throws ServiceException {
		return ((UsuarioDao) super.dao).findBy(g);
	}

	public Boolean tienePermiso(Usuario usuario, Long pantalla) throws ServiceException {
		return ((UsuarioDao) super.dao).tienePermiso(usuario, pantalla);
	}

	public List<Boolean> tienePermiso(Usuario usuario, List<Integer> pantallas) throws ServiceException {
		return ((UsuarioDao) super.dao).tienePermiso(usuario, pantallas);
	}

	public Usuario findByEmail(String email) throws ServiceException {
		return ((UsuarioDao) super.dao).findByEmail(email);
	}

	public Usuario findSystemUser() throws ServiceException {
		return ((UsuarioDao) super.dao).findSystemUser();
	}

	public void updateImage(Usuario o) throws ServiceException {
		try {
			((UsuarioDao) super.dao).updateImage(o);
			super.commit();
		} catch (Exception e) {
			super.rollback();
			throw new ServiceException(e);
		}
	}

	public Usuario create(Usuario usuario) throws ServiceException {
		try {
			usuario = ((UsuarioDao) super.dao).create(usuario);
			super.commit();
			return usuario;
		} catch (Exception e) {
			super.rollback();
			throw new ServiceException(e);
		}
	}

	public void saveAll(List<Usuario> usuarios) throws ServiceException {
		try {
			((UsuarioDao) super.dao).saveAll(usuarios);
			super.commit();
		} catch (Exception e) {
			super.rollback();
			throw new ServiceException(e);
		}
	}

	public void updateAll(List<Usuario> usuarios) throws ServiceException {
		try {
			((UsuarioDao) super.dao).updateAll(usuarios);
			super.commit();
		} catch (Exception e) {
			super.rollback();
			throw new ServiceException(e);
		}
	}

	public void saveWithId(Usuario usuario) throws ServiceException {
		try {
			((UsuarioDao) super.dao).saveWithId(usuario);
			super.commit();
		} catch (Exception e) {
			super.rollback();
			throw new ServiceException(e);
		}
	}

	public byte[] findImage(Usuario o) throws ServiceException {
		try {
			return ((UsuarioDao) super.dao).findImage(o);
		} catch (Exception e) {
			throw new ServiceException(e);
		}
	}

	public List<Usuario> findBy(Grupo grupo, String sortColumn, String search) throws ServiceException {
		try {
			return ((UsuarioDao) super.dao).findBy(grupo, sortColumn, search);
		} catch (Exception e) {
			throw new ServiceException(e);
		}
	}

	public List<Usuario> findUsersBy(Grupo grupo, String sortColumn, String search) throws ServiceException {
		try {
			return ((UsuarioDao) super.dao).findUsersBy(grupo, sortColumn, search);
		} catch (Exception e) {
			throw new ServiceException(e);
		}
	}

	public List<Usuario> findAllUsersBy(Grupo grupo, String sortColumn, String search) throws ServiceException {
		try {
			return ((UsuarioDao) super.dao).findAllUsersBy(grupo, sortColumn, search);
		} catch (Exception e) {
			throw new ServiceException(e);
		}
	}
}