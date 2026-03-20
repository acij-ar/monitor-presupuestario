package com.acij.common.spring.security.model;

import java.util.List;

import com.acij.common.model.IdLabelEntity;

public class Permiso extends IdLabelEntity {

	private static final long serialVersionUID = 1L;

	private Boolean activa;
	private Boolean hoja;
	private Long padreId;
	private Integer orden;
	private String url;
	private String iconName;
	private List<Permiso> childrens;
	private Boolean permisoEspecial;

	// Transient
	private Boolean selected;
	private String padre; 
	
	public Boolean getSelected() {
		return selected;
	}

	public void setSelected(Boolean selected) {
		this.selected = selected;
	}

	public Boolean getActiva() {
		return activa;
	}

	public void setActiva(Boolean activa) {
		this.activa = activa;
	}

	public Boolean getHoja() {
		return hoja;
	}

	public void setHoja(Boolean hoja) {
		this.hoja = hoja;
	}

	public Long getPadreId() {
		return padreId;
	}

	public void setPadreId(Long padreId) {
		this.padreId = padreId;
	}

	public Integer getOrden() {
		return orden;
	}

	public void setOrden(Integer orden) {
		this.orden = orden;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getIconName() {
		return iconName;
	}

	public void setIconName(String iconName) {
		this.iconName = iconName;
	}

	public List<Permiso> getChildrens() {
		return childrens;
	}

	public void setChildrens(List<Permiso> childrens) {
		this.childrens = childrens;
	}

	public Boolean getPermisoEspecial() {
		return permisoEspecial;
	}

	public void setPermisoEspecial(Boolean permisoEspecial) {
		this.permisoEspecial = permisoEspecial;
	}

	public String getPadre() {
		return padre;
	}

	public void setPadre(String padre) {
		this.padre = padre;
	}
}