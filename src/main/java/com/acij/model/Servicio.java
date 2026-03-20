package com.acij.model;

import com.acij.common.model.IdEntity;
import com.acij.common.model.IdLabelEntity;

public class Servicio extends IdLabelEntity {

	private static final long serialVersionUID = 1L;

	private Integer anio;
	private Long idExterno;
	private Entidad entidad;

	public Servicio() {

	}

	public Servicio(Long id, String descripcion) {
		super(id, descripcion);
	}

	public Servicio(Long id, String descripcion, Integer anio, Entidad entidad) {
		super.setDescripcion(descripcion);
		this.anio = anio;
		this.idExterno = id;
		this.entidad = entidad;
	}

	public Integer getAnio() {
		return anio;
	}

	public void setAnio(Integer anio) {
		this.anio = anio;
	}

	public Long getIdExterno() {
		return idExterno;
	}

	public void setIdExterno(Long idExterno) {
		this.idExterno = idExterno;
	}

	public Entidad getEntidad() {
		return entidad;
	}

	public void setEntidad(Entidad entidad) {
		this.entidad = entidad;
	}

	public boolean equals(Object e) {
		if (e instanceof Servicio) {
			Servicio obj = ((Servicio) e);
			if (this.getId() != null && ((IdEntity) e).getId() != null) {
				return obj.getId().longValue() == getId().longValue();
			}
			return obj.getIdExterno().intValue() == this.getIdExterno().intValue() && obj.getAnio().intValue() == this.getAnio() && this.entidad.equals(obj.getEntidad());
		}
		return false;
	}
}
