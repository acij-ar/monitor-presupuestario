package com.acij.model;

import com.acij.common.model.IdEntity;
import com.acij.common.model.IdLabelEntity;

public class Funcion extends IdLabelEntity {

	private static final long serialVersionUID = 1L;

	private Integer anio;
	private Long idExterno;
	private Finalidad finalidad;
	
	private Long idFinalidad;
	private String detalle;

	public Funcion() {
		super();
	}

	public Funcion(Long id) {
		super(id);
	}

	public Funcion(Long id, String descripcion) {
		super(id, descripcion);
	}

	public Funcion(Long id, String descripcion, Integer anio, Finalidad finalidad) {
		this.idExterno = id;
		super.setDescripcion(descripcion);
		this.anio = anio;
		this.finalidad = finalidad;
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

	public Finalidad getFinalidad() {
		return finalidad;
	}

	public void setFinalidad(Finalidad finalidad) {
		this.finalidad = finalidad;
	}

	public boolean equals(Object e) {
		if (e instanceof Funcion) {
			Funcion obj = ((Funcion) e);
			if (this.getId() != null && ((IdEntity) e).getId() != null) {
				return obj.getId().longValue() == getId().longValue();
			}

			return obj.getIdExterno().intValue() == this.getIdExterno().intValue() && obj.getAnio().intValue() == this.getAnio() && this.finalidad.equals(obj.getFinalidad());
		}
		return false;
	}

	public Long getIdFinalidad() {
		return this.finalidad.getId();
	}


	public String getDetalle() {
		return detalle;
	}

	public void setDetalle(String detalle) {
		this.detalle = detalle;
	}

	
}
