package com.acij.common.model;

public class ModelHelper {

	@SuppressWarnings("unchecked")
	public static <T> T create(Class<T> clazz, Long id) throws Exception {
		if (id == null) {
			return null;
		}
		if (id == -1) {
			return null;
		}

		Object o = clazz.getDeclaredConstructor().newInstance();
		clazz.getMethod("setId", Long.class).invoke(o, id);
		return (T) o;
	}
}