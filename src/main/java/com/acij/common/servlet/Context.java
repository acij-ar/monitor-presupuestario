package com.acij.common.servlet;

import javax.servlet.http.HttpServletRequest;

public class Context {

	private static ThreadLocal<Context> instance = new ThreadLocal<Context>();
	private HttpServletRequest request;

	private Context(HttpServletRequest request) {
		this.request = request;
	}

	public static Context getCurrentInstance() {
		return instance.get();
	}

	public static Context newInstance(HttpServletRequest request) {
		Context context = new Context(request);
		instance.set(context);
		return context;
	}

	public void release() {
		instance.remove();
	}

	public HttpServletRequest getRequest() {
		return request;
	}
}