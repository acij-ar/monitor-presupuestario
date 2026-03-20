package com.acij.common.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;

import javax.naming.InitialContext;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.sql.DataSource;

import org.apache.catalina.connector.ClientAbortException;

public class ConnectionFilter implements Filter {

	private String naming;
	private String datasource;
	private String[] filters = { "/resources", ".css", ".js" };

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		if (filterConfig.getInitParameter("naming") != null) {
			naming = filterConfig.getInitParameter("naming");
		} else {
			naming = "java:comp/env";
		}

		if (filterConfig.getInitParameter("datasource") != null) {
			datasource = filterConfig.getInitParameter("datasource");
		} else {
			datasource = "jdbc/pool";
		}
	}

	private Boolean containsFilter(ServletRequest request) {
		String uri = ((HttpServletRequest) request).getRequestURI();

		for (int i = 0; i < filters.length; i++) {
			if (uri.contains(filters[i])) {
				return true;
			}
		}
		return false;
	}

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		Connection cnn = null;
		Context context = null;
		try {
			request.setCharacterEncoding("UTF-8");
			response.setCharacterEncoding("UTF-8");

			if (containsFilter(request)) {
				chain.doFilter(request, response);
			} else {

				javax.naming.Context initCtx = new InitialContext();
				javax.naming.Context envCtx = (javax.naming.Context) initCtx.lookup(naming);
				DataSource ds = (DataSource) envCtx.lookup(datasource);
				cnn = ds.getConnection();
				cnn.setAutoCommit(false);

				cnn.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED);
				request.setAttribute("connection", cnn);

				context = Context.newInstance((HttpServletRequest) request);
				chain.doFilter(request, response);

				request.setAttribute("connection", null);
			}

		} catch (Exception e) {
			if (!(e instanceof ClientAbortException)) {
				throw new ServletException(e);
			}
		} finally {
			try {
				if (cnn != null) {
					if (!cnn.isClosed()) {
						cnn.close();
					}
				}
				if (context != null) {
					context.release();
				}
			} catch (SQLException e) {
				e.printStackTrace();
			}
			cnn = null;
		}
	}

	public void destroy() {
	}
}