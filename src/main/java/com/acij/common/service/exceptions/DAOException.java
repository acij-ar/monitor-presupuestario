package com.acij.common.service.exceptions;

public class DAOException extends RuntimeException {

	static final long serialVersionUID = -1881205326938716446L;

	public DAOException(Throwable t) {
		super(t);
	}

	public DAOException(String message) {
		super(message);
	}

}
