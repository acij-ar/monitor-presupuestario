package com.acij.common.helpers;

import java.sql.Connection;

import javax.servlet.http.HttpServletRequest;

import com.acij.common.servlet.Context;

public class ConnectionHelper {

	private static ConnectionHelper connectionHelper;

	private Connection connection;

	public static ConnectionHelper getInstance() throws Exception {
		if (connectionHelper == null) {
			connectionHelper = new ConnectionHelper();
		}
		return connectionHelper;
	}

	public Connection getConnection() throws Exception {
		Connection conn = null;
		try {
			Context ctx = Context.getCurrentInstance();
			if (ctx == null) {
				conn = this.connection;
			} else {
				if (Context.getCurrentInstance().getRequest() != null) {
					HttpServletRequest request = Context.getCurrentInstance().getRequest();
					conn = (Connection) request.getAttribute("connection");
				} else {
					conn = this.connection;
				}
			}

		} catch (Exception ex) {
			ex.printStackTrace();
			throw new Exception(ex);
		}
		return conn;
	}

	public void setConnection(Connection connection) {
		this.connection = connection;
	}
}