package com.acij.model;

import com.acij.common.model.IdEntity;
import com.acij.common.model.IdLabelEntity;

public class Programa extends IdLabelEntity {

	private static final long serialVersionUID = 1L;

	private Integer anio;
	private Long idExterno;
	private Servicio servicio;

	private Long idJurisdiccion;
	private Long idEntidad;
	private String detalle;

	private String periodo;
	private String peridoEnJurisdiccion;

	public Programa() {

	}

	public Programa(Long id, String descripcion) {
		super(id, descripcion);
	}

	public Programa(Long id, String descripcion, Integer anio, Servicio servicio) {
		super.setDescripcion(descripcion);
		this.anio = anio;
		this.idExterno = id;
		this.servicio = servicio;
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

	public Servicio getServicio() {
		return servicio;
	}

	public void setServicio(Servicio servicio) {
		this.servicio = servicio;
	}

	public boolean equals(Object e) {
		if (e instanceof Programa) {
			Programa obj = ((Programa) e);
			if (this.getId() != null && ((IdEntity) e).getId() != null) {
				return obj.getId().longValue() == getId().longValue();
			}
			return obj.getIdExterno().intValue() == this.getIdExterno().intValue() && obj.getAnio().intValue() == this.getAnio() && this.servicio.equals(obj.getServicio());
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

	public Long getIdEntidad() {
		return idEntidad;
	}

	public void setIdEntidad(Long idEntidad) {
		this.idEntidad = idEntidad;
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
