package com.acij.common.helpers;

import com.fasterxml.jackson.databind.introspect.Annotated;
import com.fasterxml.jackson.databind.introspect.JacksonAnnotationIntrospector;

public class MyFilteringIntrospector extends JacksonAnnotationIntrospector {

	private static final long serialVersionUID = 1L;

	@Override
	public Object findFilterId(Annotated ac) {
		String clazz = ac.getType().toString();
		clazz = clazz.replaceAll("class ", "");
		clazz = clazz.replaceAll("java.util.List<", "");
		clazz = clazz.replaceAll(">", "");
		return clazz;
	}
}