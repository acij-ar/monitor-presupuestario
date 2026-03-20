package com.acij.common.spring;

import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.InitBinder;

@ControllerAdvice
public class GlobalBindingInitializer {

	@InitBinder
	public void binder(WebDataBinder binder) {
		binder.setAutoGrowCollectionLimit(Integer.MAX_VALUE);
	}

}