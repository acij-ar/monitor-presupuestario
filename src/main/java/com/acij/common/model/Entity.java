package com.acij.common.model;

import java.io.Serializable;

public abstract class Entity implements Serializable, Cloneable {

	private static final long serialVersionUID = 1L;
	
	public Entity clone() throws CloneNotSupportedException {
		return (Entity) super.clone();
	}

}