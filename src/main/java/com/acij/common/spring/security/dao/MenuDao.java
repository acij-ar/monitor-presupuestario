package com.acij.common.spring.security.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.acij.common.dao.AbstractDao;
import com.acij.common.service.exceptions.DAOException;
import com.acij.common.spring.security.model.Grupo;
import com.acij.common.spring.security.model.Menu;
import com.acij.common.spring.security.model.Permiso;

public class MenuDao extends AbstractDao<Object> {

	private Connection connection;

	public Menu findMenuBy(Grupo grupo) throws DAOException {
		Menu menu = new Menu();
		try {
			connection = getConnection();
			menu.setPermisos(findAllAvailableRootPantallasByGrupo(grupo));
		} catch (Exception e) {
			throw new DAOException(e);
		}
		return menu;
	}

	private Permiso createPantallaFromResultSet(ResultSet rs, List<Permiso> children) throws DAOException {
		try {
			Permiso permiso = new Permiso();
			permiso.setId(rs.getLong("id"));
			permiso.setChildrens(children);
			permiso.setDescripcion(rs.getString("descripcion"));
			permiso.setActiva(rs.getBoolean("activa"));
			permiso.setHoja(rs.getBoolean("hoja"));
			permiso.setPadreId(rs.getLong("id_padre"));
			permiso.setOrden(rs.getInt("orden"));
			permiso.setUrl(rs.getString("url"));
			permiso.setIconName(rs.getString("icon_name"));
			return permiso;
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	private List<Permiso> findAllAvailableRootPantallasByGrupo(Grupo grupo) throws DAOException {
		try {
			List<Permiso> result = new ArrayList<Permiso>();
			PreparedStatement pstmt = connection.prepareStatement("select p.* from grxpr pp, permisos p where pp.id_permiso = p.id AND pp.id_grupo = ? AND p.activa = ? and p.id_padre is null and permiso_especial = false order by p.orden");
			pstmt.setLong(1, grupo.getId());
			pstmt.setBoolean(2, true);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				result.add(createPantallaFromResultSet(rs, findAllAvailableChildrenByParentIdAndGrupo(grupo, rs.getLong("id"))));
			}
			close(rs);
			close(pstmt);
			return result;
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	private List<Permiso> findAllAvailableChildrenByParentIdAndGrupo(Grupo grupo, Long padre) throws DAOException {
		try {
			List<Permiso> result = new ArrayList<Permiso>();
			PreparedStatement pstmt = connection.prepareStatement("select p.* from grxpr pp, permisos p where pp.id_permiso = p.id AND pp.id_grupo = ? and p.activa = ? and p.id_padre = ? and permiso_especial = false order by p.orden");
			pstmt.setLong(1, grupo.getId());
			pstmt.setBoolean(2, true);
			pstmt.setLong(3, padre);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				result.add(createPantallaFromResultSet(rs, findAllAvailableChildrenByParentIdAndGrupo(grupo, rs.getLong("id"))));
			}
			close(rs);
			close(pstmt);
			return result;
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}
}
