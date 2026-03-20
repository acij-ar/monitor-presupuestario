package com.acij.common.utils.excel;

import java.util.HashMap;
import java.util.Map;

public class ExcelFactory {

	private static Map<String, Object> map;

	@SuppressWarnings("unchecked")
	public static <T> T get(Class<T> clazz) throws Exception {
		if (map == null) {
			map = new HashMap<String, Object>();
		}

		Object o = map.get(clazz.getName());
		if (o == null) {
			o = clazz.getDeclaredConstructor().newInstance();
			map.put(clazz.getName(), o);
		}
		return (T) o;
	}
}
