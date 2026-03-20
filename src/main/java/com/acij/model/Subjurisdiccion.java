package com.acij.model;

import com.acij.common.model.IdEntity;
import com.acij.common.model.IdLabelEntity;

public class Subjurisdiccion extends IdLabelEntity {

	private static final long serialVersionUID = 1L;

	private Integer anio;
	private Long idExterno;
	private Jurisdiccion jurisdiccion;

	public Subjurisdiccion() {

	}

	public Subjurisdiccion(Long id, String descripcion) {
		super(id, descripcion);
	}

	public Subjurisdiccion(Long id, String descripcion, Integer anio, Jurisdiccion j) {
		super.setDescripcion(descripcion);
		this.anio = anio;
		this.idExterno = id;
		this.jurisdiccion = j;
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

	public Jurisdiccion getJurisdiccion() {
		return jurisdiccion;
	}

	public void setJurisdiccion(Jurisdiccion jurisdiccion) {
		this.jurisdiccion = jurisdiccion;
	}

	public boolean equals(Object e) {
		if (e instanceof Subjurisdiccion) {
			Subjurisdiccion obj = ((Subjurisdiccion) e);
			if (this.getId() != null && ((IdEntity) e).getId() != null) {
				return obj.getId().longValue() == getId().longValue();
			}
			
			return obj.getIdExterno().intValue() == this.getIdExterno().intValue() && obj.getAnio().intValue() == this.getAnio() && this.jurisdiccion.equals(obj.getJurisdiccion());
		}
		return false;
	}

}
