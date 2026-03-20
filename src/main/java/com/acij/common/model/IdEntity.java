package com.acij.common.model;

public class IdEntity extends Entity {

	private static final long serialVersionUID = 1L;

	private Long id;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public IdEntity() {

	}

	public IdEntity(Long id) {
		this.id = id;
	}

	@Override
	public boolean equals(Object e) {
		if (e instanceof IdEntity) {
			if (this.id == null || ((IdEntity) e).getId() == null) {
				return false;
			}
			return ((IdEntity) e).getId().intValue() == this.id.intValue();
		}
		return false;
	}

	@Override
	public int hashCode() {
		return super.hashCode();
	}
}