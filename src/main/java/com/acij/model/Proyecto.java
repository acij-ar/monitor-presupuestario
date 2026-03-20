package com.acij.model;

import com.acij.common.model.IdEntity;
import com.acij.common.model.IdLabelEntity;

public class Proyecto extends IdLabelEntity {

	private static final long serialVersionUID = 1L;

	private Integer anio;
	private Long idExterno;
	private Subprograma subprograma;

	public Proyecto() {

	}

	public Proyecto(Long id, String descripcion) {
		super(id, descripcion);
	}

	public Proyecto(Long id, String descripcion, Integer anio, Subprograma subprograma) {
		super.setDescripcion(descripcion);
		this.anio = anio;
		this.idExterno = id;
		this.subprograma = subprograma;
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

	public Subprograma getSubsubprograma() {
		return subprograma;
	}

	public void setSubprograma(Subprograma subprograma) {
		this.subprograma = subprograma;
	}

	public boolean equals(Object e) {
		if (e instanceof Proyecto) {
			Proyecto obj = ((Proyecto) e);
			if (this.getId() != null && ((IdEntity) e).getId() != null) {
				return obj.getId().longValue() == getId().longValue();
			}
			return obj.getIdExterno().intValue() == this.getIdExterno().intValue() && obj.getAnio().intValue() == this.getAnio() && this.subprograma.equals(obj.getSubsubprograma());
		}
		return false;
	}
}
