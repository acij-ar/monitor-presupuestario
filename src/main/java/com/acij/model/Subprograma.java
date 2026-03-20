package com.acij.model;

import com.acij.common.model.IdEntity;
import com.acij.common.model.IdLabelEntity;

public class Subprograma extends IdLabelEntity {

	private static final long serialVersionUID = 1L;

	private Integer anio;
	private Long idExterno;
	private Programa programa;

	public Subprograma() {

	}

	public Subprograma(Long id, String descripcion) {
		super(id, descripcion);
	}

	public Subprograma(Long id, String descripcion, Integer anio, Programa programa) {
		super.setDescripcion(descripcion);
		this.anio = anio;
		this.idExterno=id;
		this.programa = programa;
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

	public Programa getPrograma() {
		return programa;
	}

	public void setPrograma(Programa programa) {
		this.programa = programa;
	}

	public boolean equals(Object e) {
		if (e instanceof Subprograma) {
			Subprograma obj = ((Subprograma) e);
			if (this.getId() != null && ((IdEntity) e).getId() != null) {
				return obj.getId().longValue() == getId().longValue();
			}
			return obj.getIdExterno().intValue() == this.getIdExterno().intValue() && obj.getAnio().intValue() == this.getAnio() && this.programa.equals(obj.getPrograma());
		}
		return false;
	}
}
