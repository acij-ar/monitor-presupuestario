package com.acij.common.service;

import java.util.HashMap;
import java.util.Map;

import com.acij.common.service.exceptions.ServiceException;

public class ServiceFactory {

	private static Map<String, Object> map;

	@SuppressWarnings("unchecked")
	public static <T> T get(Class<T> clazz) throws ServiceException {

		try {
			if (map == null) {
				map = new HashMap<String, Object>();
			}

			Object o = map.get(clazz.getName());
			if (o == null) {
				o = clazz.getDeclaredConstructor().newInstance();
				map.put(clazz.getName(), o);
			}
			return (T) o;
		} catch (Exception e) {
			throw new ServiceException(e);
		}
	}
}