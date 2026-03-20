package com.acij.common.tld;

import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.jsp.PageContext;
import javax.servlet.jsp.tagext.BodyTagSupport;

import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

public class Y3KCommonTag extends BodyTagSupport implements Cloneable {

	private static final long serialVersionUID = 1L;

	public String getMessage(String key) {
		Locale locale = LocaleContextHolder.getLocale();
		return getMessageSource().getMessage(key, null, locale);
	}

	public String get(String key, PageContext pageContext) {
		Locale locale = LocaleContextHolder.getLocale();

		WebApplicationContext springContext = WebApplicationContextUtils.getWebApplicationContext(pageContext.getServletContext());
		MessageSource messageSource = (MessageSource) springContext.getBean("messageSource");

		String result =  messageSource.getMessage(key, null, locale);
		return result;
	}

	private MessageSource getMessageSource() {
		WebApplicationContext springContext = WebApplicationContextUtils.getWebApplicationContext(pageContext.getServletContext());
		return (MessageSource) springContext.getBean("messageSource");
	}

	protected HttpServletRequest getRequest() {
		HttpServletRequest request = (HttpServletRequest) pageContext.getRequest();
		return request;
	}

	protected HttpServletResponse getResponse() {
		HttpServletResponse response = (HttpServletResponse) pageContext.getResponse();
		return response;
	}
}