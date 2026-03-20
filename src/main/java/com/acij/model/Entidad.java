package com.acij.model;

import com.acij.common.model.IdEntity;
import com.acij.common.model.IdLabelEntity;

public class Entidad extends IdLabelEntity {

	private static final long serialVersionUID = 1L;

	private Integer anio;
	private Long idExterno;
	private Subjurisdiccion subjurisdiccion;

	private Long idJurisdiccion;
	private String detalle;

	private String periodo;
	private String peridoEnJurisdiccion;

	public Entidad() {

	}

	public Entidad(Long id) {
		super(id, null);
	}
	
	public Entidad(Long id, String descripcion) {
		super(id, descripcion);
	}

	public Entidad(Long id, String descripcion, Integer anio, Subjurisdiccion j) {
		super.setDescripcion(descripcion);
		this.anio = anio;
		this.idExterno = id;
		this.subjurisdiccion = j;
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

	public Subjurisdiccion getSubjurisdiccion() {
		return subjurisdiccion;
	}

	public void setSubjurisdiccion(Subjurisdiccion jurisdiccion) {
		this.subjurisdiccion = jurisdiccion;
	}

	public boolean equals(Object e) {
		if (e instanceof Entidad) {
			Entidad obj = ((Entidad) e);
			if (this.getId() != null && ((IdEntity) e).getId() != null) {
				return obj.getId().longValue() == getId().longValue();
			}

			return obj.getIdExterno().intValue() == this.getIdExterno().intValue() && obj.getAnio().intValue() == this.getAnio() && this.subjurisdiccion.equals(obj.getSubjurisdiccion());
		}
		return false;
	}

	public String getDetalle() {
		return detalle;
	}

	public void setDetalle(String detalle) {
		this.detalle = detalle;
	}

	public Long getIdJurisdiccion() {
		return idJurisdiccion;
	}

	public void setIdJurisdiccion(Long idJurisdiccion) {
		this.idJurisdiccion = idJurisdiccion;
	}

	public String getPeriodo() {
		return periodo;
	}

	public void setPeriodo(String periodo) {
		this.periodo = periodo;
	}

	public String getPeridoEnJurisdiccion() {
		return peridoEnJurisdiccion;
	}

	public void setPeridoEnJurisdiccion(String peridoEnJurisdiccion) {
		this.peridoEnJurisdiccion = peridoEnJurisdiccion;
	}

}
