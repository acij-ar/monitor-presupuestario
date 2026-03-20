package com.acij.common.forms;

import java.io.Serializable;

public class CustomCommand implements Serializable {

	private static final long serialVersionUID = 1L;

	private String action;
	private String icon;
	private String css;
	private String message;
	private Boolean customHref;

	public CustomCommand() {

	}

	public CustomCommand(String action, String icon, String css) {
		this(action, icon, css, "", false);
	}

	public CustomCommand(String action, String icon, String css, String message) {
		this(action, icon, css, message, false);
	}

	public CustomCommand(String action, String icon, String css, String message, Boolean customHref) {
		this.action = action;
		this.icon = icon;
		this.css = css;
		this.message = message;
		this.customHref = customHref;
	}

	public String getHtml() {
		String tooltip = "";
		if (!"".equals(message) && message != null) {
			tooltip = " tooltip-popup-delay=\"0\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"" + message + "\" ";
		}

		String href = "";

		if (!customHref) {
			if (action.contains("?")) {
				action = action + "&pk='+data+'";
			} else {
				action = action + "?pk='+data+'";
			}
			href = "javascript:submitAction('+data+',\\\'" + action + "\\\')";
		} else {
			href = action;
		}

		return "'<a href=\"" + href + "\" " + tooltip + "  class=\"" + css + "\" style=\"border: 0px; padding-right: 5px !important; padding-left: 5px !important;\"><i class=\"" + icon + "\"></i></a>'\n";
	}
}