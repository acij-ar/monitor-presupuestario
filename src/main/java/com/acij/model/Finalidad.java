package com.acij.model;

import com.acij.common.model.IdEntity;
import com.acij.common.model.IdLabelEntity;

public class Finalidad extends IdLabelEntity {

	private static final long serialVersionUID = 1L;

	private Integer anio;
	private Long idExterno;

	public Finalidad() {
		super();
	}

	public Finalidad(Long id) {
		super(id);
	}

	public Finalidad(Long id, String descripcion) {
		super(id, descripcion);
	}

	public Finalidad(Long id, String descripcion, Integer anio) {
		this.idExterno = id;
		this.setDescripcion(descripcion);
		this.anio = anio;
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

	public boolean equals(Object e) {
		if (e instanceof Finalidad) {
			Finalidad obj = ((Finalidad) e);
			if (this.getId() != null && ((IdEntity) e).getId() != null) {
				return obj.getId().longValue() == getId().longValue();
			}

			return obj.getIdExterno().longValue() == this.getIdExterno().longValue() && obj.getAnio().intValue() == this.getAnio().intValue();
		}
		return false;
	}

}
