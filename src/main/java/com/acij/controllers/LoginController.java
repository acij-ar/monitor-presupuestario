package com.acij.controllers;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import com.acij.common.controller.CommonController;
import com.acij.common.service.exceptions.ServiceException;
import com.acij.common.spring.security.model.Usuario;

@Controller
public class LoginController extends CommonController {

	@Autowired
	private AuthenticationManager authenticationManager;

	public LoginController() throws ServiceException {
	}

	@GetMapping("/login")
	public ModelAndView main(Model model) throws IOException {
		model.addAttribute("usuario", new Usuario());
		return new ModelAndView("admin/login");
	}

	@PostMapping("/login")
	public ModelAndView login(@ModelAttribute("usuario") Usuario usuario, BindingResult result) throws Exception {
		try {
			SecurityContext sc = SecurityContextHolder.getContext();

			final Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(usuario.getUsername(), usuario.getPassword()));
			sc.setAuthentication(authentication);

			if (sc.getAuthentication().isAuthenticated()) {
				HttpSession session = request.getSession(true);
				session.setAttribute(HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY, sc);
			}
		} catch (Exception ex) {
			result.reject("error.code", new Object[] { ex.getMessage() }, "");

			ModelAndView modelAndView = new ModelAndView("admin/login");
			modelAndView.addObject("opened", true);
			return modelAndView;

		} finally {
			usuario.setUsername("");
			usuario.setPassword("");
		}

		return new ModelAndView("redirect:/admin/main.html");
	}

	@GetMapping("/logout")
	public String logout(HttpServletRequest request, HttpServletResponse response) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		if (auth != null) {
			new SecurityContextLogoutHandler().logout(request, response, auth);
		}

		HttpSession session = request.getSession(false);
		SecurityContextHolder.clearContext();

		session = request.getSession(false);
		if (session != null) {
			session.invalidate();
		}

		return "redirect:/login?logout";
	}
}