package com.acij.common.helpers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;

public class JsonHelper {

	private SimpleFilterProvider filterProvider = new SimpleFilterProvider();

	public ResponseEntity<String> getJsonFromObject(Object o) throws Exception {
		return new ResponseEntity<String>(toJson(o), HttpStatus.OK);
	}

	@SuppressWarnings("deprecation")
	public String toJson(Object o) throws Exception {
		filterProvider.setFailOnUnknownId(false);
		ObjectMapper mapper = new ObjectMapper();
		mapper.setAnnotationIntrospector(new MyFilteringIntrospector());
		mapper.setFilters(filterProvider);
//		mapper.enable(SerializationFeature.INDENT_OUTPUT);

		String json = mapper.writer(filterProvider).writeValueAsString(o);
		return json;
	}

	@SuppressWarnings("deprecation")
	public <T> T fromJson(String json, Class<T> clazz) throws Exception {
		ObjectMapper mapper = new ObjectMapper();
		mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		mapper.setAnnotationIntrospector(new MyFilteringIntrospector());
		mapper.setFilters(filterProvider);
		T result = mapper.readValue(json, clazz);
		return result;
	}

	public ResponseEntity<String> getErrorFrom(Exception ex) {
		ex.printStackTrace();
		return new ResponseEntity<String>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}

	public ResponseEntity<String> getError(String message) {
		return new ResponseEntity<String>(message, HttpStatus.INTERNAL_SERVER_ERROR);
	}
}