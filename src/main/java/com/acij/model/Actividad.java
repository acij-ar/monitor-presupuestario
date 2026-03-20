package com.acij.model;

import com.acij.common.model.IdEntity;
import com.acij.common.model.IdLabelEntity;

public class Actividad extends IdLabelEntity {

	private static final long serialVersionUID = 1L;

	private Integer anio;
	private Long idExterno;
	private Proyecto proyecto;

	private Long idJurisdiccion;
	private Long idEntidad;
	private Long idPrograma;
	private String detalle;

	private String periodo;
	private String peridoEnJurisdiccion;

	public Actividad() {

	}

	public Actividad(Long id, String descripcion) {
		super(id, descripcion);
	}

	public Actividad(Long id, String descripcion, Integer anio, Proyecto proyecto) {
		super.setDescripcion(descripcion);
		this.anio = anio;
		this.idExterno = id;
		this.proyecto = proyecto;
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

	public Proyecto getProyecto() {
		return proyecto;
	}

	public void setProyecto(Proyecto proyecto) {
		this.proyecto = proyecto;
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

	public Long getIdPrograma() {
		return idPrograma;
	}

	public void setIdPrograma(Long idPrograma) {
		this.idPrograma = idPrograma;
	}

	public String getDetalle() {
		return detalle;
	}

	public void setDetalle(String detalle) {
		this.detalle = detalle;
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

	public boolean equals(Object e) {
		if (e instanceof Actividad) {
			Actividad obj = ((Actividad) e);
			if (this.getId() != null && ((IdEntity) e).getId() != null) {
				return obj.getId().longValue() == getId().longValue();
			}
			return obj.getIdExterno().intValue() == this.getIdExterno().intValue() && obj.getAnio().intValue() == this.getAnio() && this.proyecto.equals(obj.getProyecto());
		}
		return false;
	}
}
