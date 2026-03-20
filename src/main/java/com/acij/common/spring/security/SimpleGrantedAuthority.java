package com.acij.common.spring.security;

import org.springframework.security.core.GrantedAuthority;

public class SimpleGrantedAuthority implements GrantedAuthority {

	private static final long serialVersionUID = 1L;
	
	private String grupo;
	
	public String getAuthority() {
		return grupo;
	}

}
