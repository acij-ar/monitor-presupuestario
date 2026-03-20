package com.acij.common.spring.security;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

import com.acij.common.service.ServiceFactory;
import com.acij.common.spring.security.model.Usuario;
import com.acij.common.spring.security.service.MenuService;
import com.acij.common.spring.security.service.UsuarioService;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		Usuario usuario = null;

		
		if (authentication == null) {
			return null;
		}
		if (authentication.getCredentials() == null) {
			return null;
		}

		String username = authentication.getName();
		String password = authentication.getCredentials().toString();

		try {
			usuario = ServiceFactory.get(UsuarioService.class).findBy(username, password);
		} catch (Exception ex) {
			throw new BadCredentialsException(ex.getMessage());
		}

		if (usuario == null) {
			throw new BadCredentialsException("Usuario o password incorrectos");
		}
		if (!usuario.getActivo()) {
			throw new DisabledException("El usuario fue deshabilitado");
		}

		if(usuario.getNoLogin()) {
			throw new DisabledException("El usuario no permite autenticación");
		}
		
		try {
			usuario.setMenu(ServiceFactory.get(MenuService.class).findMenuBy(usuario.getGrupo()));
		} catch (Exception ex) {
			throw new BadCredentialsException(ex.getMessage());
		}

		List<SimpleGrantedAuthority> authorities = new ArrayList<SimpleGrantedAuthority>();
		return new UsernamePasswordAuthenticationToken(usuario, usuario.getPassword(), authorities);
	}

	public boolean supports(Class<?> authentication) {
		return authentication.equals(UsernamePasswordAuthenticationToken.class);
	}
}