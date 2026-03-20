package com.acij.common.tld;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.BodyContent;

public class FormWrapperTag extends Y3KCommonTag {

	private static final long serialVersionUID = 1L;

	private String title;
	private String mode;
	private String tableId;
	private Boolean isFilter;
	private Boolean disableForm;
	private String icon;
	private Boolean collapsed;

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}

	public FormWrapperTag() {
		disableForm = false;
		isFilter = false;
		collapsed = false;
	}

	@Override
	public int doStartTag() throws JspException {
		super.doStartTag();

		try {
			pageContext.getOut().println(getHeader());
		} catch (Exception e) {
			throw new JspException(e);
		}

		return EVAL_PAGE;
	}

	@Override
	public int doEndTag() throws JspException {
		super.doEndTag();
		try {
			pageContext.getOut().println(getFooter());

			if (getDisableForm()) {
				pageContext.getOut().println(getDisableJs());
			}
		} catch (Exception e) {
			throw new JspException(e);
		}
		return EVAL_PAGE;
	}

	@Override
	public int doAfterBody() throws JspException {
		try {
			BodyContent bc = getBodyContent();
			String body = bc.getString();

			JspWriter out = bc.getEnclosingWriter();
			if (body != null) {
				out.print(body);
			}

		} catch (Exception e) {
			throw new JspException(e);
		}
		return SKIP_BODY;
	}

	public String getFilterScript() {
		StringBuffer buff = new StringBuffer();
		buff.append("<script> \n");
		buff.append("	$(document).ready(function() { \n");
		buff.append("		$('.filterButton').click(function() { \n");
		buff.append("			$('#" + tableId + "').DataTable().ajax.url(getUri_" + tableId + "()).load();");
		buff.append("		}); \n");
		buff.append("	}); \n");
		buff.append("</script> \n");
		return buff.toString();
	}

	protected String getHeader() {
		StringBuffer buff = new StringBuffer();

		if (getIsFilter()) {
			buff.append(getFilterScript());
		}

		String mode = getMessage(getMode());
		if (mode != null) {
			mode = mode.toUpperCase();
		}

		String collapsed = "";
		if (getCollapsed()) {
			collapsed = " collapsed-card ";
		}

		buff.append("<div class='card card-primary card-outline " + collapsed + "'> \n");
		buff.append("	<div class='card-header'> \n");
		buff.append("		<h3 class='card-title'><i class='" + icon + "'></i>  " + getMessage(getTitle()) + "</h3> \n");

		buff.append("		<div class='card-tools'> \n");
		if (getMode() != null && !"".equals(getMode())) {
			buff.append("			<span class='badge bg-primary'>    " + mode + "    </span> \n");
		}
		
		if (getCollapsed()) {
			buff.append("			<button type='button' class='btn btn-tool' data-card-widget='collapse'><i class='fas fa-plus'></i></button> \n");
		} else {
			buff.append("			<button type='button' class='btn btn-tool' data-card-widget='collapse'><i class='fas fa-minus'></i></button> \n");
		}
		buff.append("		</div> \n");

		buff.append("	</div> \n");
		buff.append("	<div class='card-body'> \n");

		return buff.toString();
	}

	protected String getFooter() {
		StringBuffer buff = new StringBuffer();
		buff.append("	</div> \n");
		buff.append("</div> \n");
		return buff.toString();
	}

	private String getDisableJs() {
		StringBuffer buff = new StringBuffer();
		buff.append("<script>   \n");
		buff.append("	$(document).ready(function() {    \n");
		buff.append("		$('form input, form textarea, form select').attr('readonly', 'readonly');    \n");
		buff.append("		$('form select').attr('disabled', 'true');    \n");
		buff.append("		$('form :checkbox').attr('readonly', 'readonly');    \n");
		buff.append("		$('form :checkbox').attr('disabled', true);    \n");
		buff.append("		$('form :radio').attr('readonly', 'readonly');    \n");
		buff.append("		$('form :radio').attr('disabled', true);    \n");
		buff.append("		$('.active').removeAttr('disabled');   \n");
		buff.append("		$('.removable').remove();    \n");
		buff.append("	});   \n");
		buff.append("</script> ");
		return buff.toString();
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getMode() {
		return mode;
	}

	public void setMode(String mode) {
		this.mode = mode;
	}

	public String getTableId() {
		return tableId;
	}

	public void setTableId(String tableId) {
		this.tableId = tableId;
	}

	public Boolean getIsFilter() {
		return isFilter;
	}

	public void setIsFilter(Boolean isFilter) {
		this.isFilter = isFilter;
	}

	public Boolean getDisableForm() {
		return disableForm;
	}

	public void setDisableForm(Boolean disableForm) {
		this.disableForm = disableForm;
	}

	public Boolean getCollapsed() {
		return collapsed;
	}

	public void setCollapsed(Boolean collapsed) {
		this.collapsed = collapsed;
	}
}