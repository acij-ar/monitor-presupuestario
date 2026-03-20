package com.acij.common.service.exceptions;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ExceptionHelper {

	private static Logger logger = LoggerFactory.getLogger(ExceptionHelper.class);

	public static String getInnerMessage(Throwable ex) {
		if (ex.getCause() != null) {
			return getInnerMessage(ex.getCause());
		} else {
			if (ex instanceof BussinesException || ex instanceof ApiException) {
				logger.warn(ex.getMessage());
			} else {
				ex.printStackTrace();
			}
		}
		return ex.getMessage();
	}

}
