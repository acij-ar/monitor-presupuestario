package com.acij.common.service.exceptions;


public class ServiceException extends Exception {

	private static final long serialVersionUID = 1L;

	public ServiceException(String message) {
		super(message);
	}

	public ServiceException(String message, Throwable t) {
		super(message, t);
	}

	public ServiceException(Throwable t) {
		super(t);
	}
}
