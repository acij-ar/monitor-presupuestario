package com.acij.common.spring.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SpringSecurity extends WebSecurityConfigurerAdapter {

	@Autowired
	protected CustomAuthenticationProvider authProvider;

	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}	

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(authProvider);
	}

	@Override
	public void configure(WebSecurity web) throws Exception {
		web.ignoring().antMatchers("/resources/**");
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests().antMatchers("/resources/**", "/webjars/**", "/v2/api-docs/**", "/swagger-ui/**", "/monitor/**").permitAll();
		http.authorizeRequests().antMatchers("/swagger-ui.html").authenticated();
		http.authorizeRequests().antMatchers("/*").permitAll().and().headers().frameOptions().disable();
		http.authorizeRequests().antMatchers("/admin/**")
										.authenticated()
										.and()
										.formLogin()
										.loginPage("/login")
										.permitAll()
										.and()
										.logout()
										.permitAll()
										.and().csrf().disable().exceptionHandling().authenticationEntryPoint(new AjaxAuthenticationEntryPoint("/login"));
	}
}
