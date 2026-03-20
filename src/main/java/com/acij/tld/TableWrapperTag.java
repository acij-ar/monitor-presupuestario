package com.acij.tld;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.TagSupport;

import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.acij.datatable.DataTablesRequest;
import com.acij.datatable.Order;

public class TableWrapperTag extends TagSupport {

	private static final long serialVersionUID = 1L;

	private String tableName;
	private DataTablesRequest<Object> dataTable;
	List<ColumnWrapperTag> columns;

	private Boolean enableView = true;
	private Boolean enableUpdate = true;
	private Boolean enableRemove = true;

	private String rowStyleFunction;
	private String filterCompleteFunction;
	private String customCommands;
	private String rowGroupPath;
	private String rowGroupRender;

	private String cssClass;
	private Boolean hasActions = false;
	private String lengthMenu;
	private String defaultOrder;

	private Boolean multiselect = false;
	private String multiselectName;

	private Boolean horizontalScroll = false;
	private Boolean responsive = true;
	private Boolean withMenu = false;

	public TableWrapperTag() {
	}

	@Override
	public int doStartTag() throws JspException {
		super.doStartTag();
		columns = new ArrayList<ColumnWrapperTag>();
		return EVAL_PAGE;
	}

	@Override
	public int doEndTag() throws JspException {
		super.doEndTag();
		try {
			pageContext.getOut().println(getHeader());
			pageContext.getOut().println(getFooter());
		} catch (Exception e) {
			throw new JspException(e);
		}
		return EVAL_PAGE;
	}

	private String getHeader() {
		StringBuffer buff = new StringBuffer();

		String cssSelect = "";

		if (cssClass == null) {
			cssClass = " table table-striped table-bordered dt-responsive nowrap ";
		}

		String tableStyle = "table-layout: fixed;";
		if (getHorizontalScroll()) {
			tableStyle += "margin: 0px !important;";
		}

		if (withMenu) {
			buff.append("<table id='" + tableName + "' class='" + cssClass + cssSelect + "' style='width:100%; " + "" + "'> \n");
		} else {
			buff.append("<table id='" + tableName + "' class='" + cssClass + cssSelect + "' style='width:98%; " + tableStyle + "'> \n");
		}
		buff.append("	<thead> \n");
		buff.append("		<tr> \n");

		for (Iterator<ColumnWrapperTag> it = columns.iterator(); it.hasNext();) {
			ColumnWrapperTag column = it.next();
			String header = getMessage(column.getColumnName());
			buff.append("			<th>" + header + "</th> \n");
		}

		buff.append("		</tr> \n");

		buff.append("	</thead> \n");

		buff.append("	<tbody> \n");
		buff.append("	</tbody> \n");

		return buff.toString();
	}

	private String getFooter() {
		StringBuffer buff = new StringBuffer();
		buff.append("</table>");
		buff.append(getScript());
		return buff.toString();
	}

	private String getInitCompleteScript() {
		StringBuffer buff = new StringBuffer();

		// Enable column order
		buff.append("		new $.fn.dataTable.ColReorder( table_" + tableName + " ); \n");
		buff.append("		var colReorder = new $.fn.dataTable.ColReorder( table_" + tableName + " );	\n");

		if (dataTable != null) {
			// Preset order columns
			buff.append("	colReorder.fnOrder( " + dataTable.getColumnOrder() + " );	\n");

			// Preset hidden columns
			List<Boolean> columnsVisibility = dataTable.getColumnsVisibility();
			for (int i = 0; i < columnsVisibility.size(); i++) {
				if (columnsVisibility.get(i) == false) {
					buff.append("	table_" + tableName + ".columns(" + i + ").visible(false); \n");
				}
			}

			// Preset sort column
			if (dataTable.getOrder().size() > 0) {
				Order order = dataTable.getOrder().get(0);
				buff.append("	table_" + tableName + ".order( [" + order.getColumn() + ", '" + order.getDir() + "'] ).draw();	\n");
			}

		}

		return buff.toString();
	}

	private String getScript() {
		StringBuffer buff = new StringBuffer();
		buff.append("	<script type='text/javascript'>     \n");

		buff.append("		var table_" + tableName + "; \n");

		if (getMultiselect()) {
			buff.append("	var " + tableName + "_selected = []; 	\n");
		}

		buff.append("		function getUri_" + tableName + "() {  	\n ");

		if (getMultiselect()) {
			buff.append("			" + tableName + "_deselectAll();	\n ");
		}

		buff.append("			return 'filterJson?tableName=" + tableName + "&' + $('#command *').serialize(); 	\n ");
		buff.append("		} 	\n ");

		buff.append("		$(document).ready(function() {     \n");
		buff.append("		    table_" + tableName + " = $('#" + tableName + "').DataTable({     \n");

		if (getHorizontalScroll() || !getResponsive()) {
			buff.append("		    	responsive: false,     \n");
			if (!getHorizontalScroll()) {
				buff.append("		    scrollX: false,     \n");

			}
		} else {
			buff.append("		    	responsive: true,     \n");
		}

		buff.append(getLanguage() + ",");

		if (getDefaultOrder() != null && !"".equals(getDefaultOrder())) {
			buff.append("		    'order': [[ " + getDefaultOrder() + " ]], \n");
		}

		buff.append(getRowGroupSetup());
		buff.append(getModifiers());
		buff.append(getStyleFunction());
		buff.append(getAjax());
		buff.append(getColumns());
		buff.append(getColumnsDef());

		buff.append(" 	initComplete: function(settings, json) {     \n");
		buff.append(" 	    " + getInitCompleteScript() + "    \n");

		if (getHorizontalScroll()) {
			buff.append("	$('#" + tableName + "').wrap(\"<div style='overflow-x:auto; width:100%; position:relative;'></div>\"); ");
		}

		buff.append(" 	}     \n");

		buff.append("		    });		\n ");

		buff.append("	$('#" + tableName + "').on( 'draw.dt', function () { \n ");

		if (getMultiselect()) {
			buff.append(getMultiselectScript());
		}

		buff.append("	}); \n");

		buff.append("}); \n");

		if (getFilterCompleteFunction() != null && !"".equals(getFilterCompleteFunction())) {
			buff.append("	$('#" + tableName + "').on( 'draw.dt', function (elemento) { \n");
			buff.append("		var summaryData = table_" + tableName + ".ajax.json().summaryData; \n");
			buff.append("		" + getFilterCompleteFunction() + "(summaryData); \n");
			buff.append("	}) \n");
		}

		if (getMultiselect()) {
			buff.append(getDeselectAllScript());
			buff.append(getSelectAllScript());
		}

		buff.append(getTableDataScript());
		buff.append(getSubmitScript());

		buff.append("	</script> \n");
		return buff.toString();
	}

	private String getDeselectAllScript() {
		StringBuffer buff = new StringBuffer();

		buff.append(" function " + tableName + "_deselectAll() { \n");

		buff.append(" 	$('[id^=" + tableName + "_check_]').each(function(index, element) { \n");
		buff.append(" 		element.checked = false;  \n");
		buff.append(" 	});  \n");

		buff.append(" 	" + tableName + "_selected = []  \n");
		buff.append(" 	$('." + tableName + "multiselect_checkboxes').remove();  \n");
		buff.append(" }  \n");

		return buff.toString();
	}

	private String getSelectAllScript() {
		StringBuffer buff = new StringBuffer();

		buff.append("function " + tableName + "_selectAll(data, alertMethod) { \n ");
		buff.append("	 $(data).each(function (index, item) { \n");
		buff.append(" 		" + tableName + "_selected.push(item); \n");
		buff.append(" 		$('#command').append(\"<input type='hidden' class='" + tableName + "multiselect_checkboxes' name='" + multiselectName + "[\" + index + \"]' value='\" + " + tableName + "_selected[index] + \"'/> \"); \n");
		buff.append(" 	}).promise().done(function () { \n");
		buff.append(" 		$('[id^=" + tableName + "_check_]').each(function(index, element) { \n");
		buff.append(" 			for( var i = 0; i < " + tableName + "_selected.length; i++) { \n");
		buff.append(" 				if(element.value == " + tableName + "_selected[i]) { \n");
		buff.append(" 					element.checked = true; \n");
		buff.append(" 				} \n");
		buff.append(" 			} \n");
		buff.append(" 		}); \n");

		buff.append(" 	if(alertMethod) { \n");
		buff.append("		alertMethod(" + tableName + "_selected.length); \n");
		buff.append(" 	} \n");

		buff.append(" 		}); \n");
		buff.append("} \n");

		return buff.toString();
	}

	private String getMultiselectScript() {
		StringBuffer buff = new StringBuffer();

		buff.append("			$('[id^=" + tableName + "_check_]').unbind('click');   \n\n");

		buff.append("			$('[id^=" + tableName + "_check_]').each(function(index, element) { \n");
		buff.append("				for( var i = 0; i < " + tableName + "_selected.length; i++) { \n");
		buff.append("					if(element.value == " + tableName + "_selected[i]) { \n");
		buff.append("						element.checked = true; \n");
		buff.append("					} \n");
		buff.append("				} \n");
		buff.append("			}); \n\n");

		buff.append("			$('[id^=" + tableName + "_check_]').click(function() {  \n");
		buff.append("				if (this.checked == false) {  \n");
		buff.append("					for( var i = 0; i < " + tableName + "_selected.length; i++) {  \n");
		buff.append("						if (" + tableName + "_selected[i] === this.value) {   \n");
		buff.append("							" + tableName + "_selected.splice(i, 1);   \n");
		buff.append("						}  \n");
		buff.append("					}  \n");
		buff.append("				} else {  \n");
		buff.append("					" + tableName + "_selected.push(this.value);  \n");
		buff.append("				}  \n");

		buff.append("					$('." + tableName + "_multiselect_checkboxes').remove();  \n");
		buff.append("					for( var i = 0; i < " + tableName + "_selected.length; i++) {  \n");
		buff.append("						$('#command').append(\"<input type='hidden' class='" + tableName + "_multiselect_checkboxes' name='" + getMultiselectName() + "[\" + i + \"]' value='\" + " + tableName + "_selected[i] + \"'/>\");  \n");
		buff.append("					} \n");

		buff.append("				})  \n");

		return buff.toString();
	}

	private String getLanguage() {
		StringBuffer buff = new StringBuffer();
		buff.append("language: { ");
		buff.append("        'decimal': '', ");
		buff.append("        'emptyTable': '" + getMessage("tabla.sin.registros") + "', ");
		buff.append("        'info': '" + getMessage("tabla.mostrando.desde") + " _START_ " + getMessage("tabla.mostrando.hasta") + " _END_ (_TOTAL_ " + getMessage("tabla.mostrando.total") + ")', ");
		buff.append("        'infoEmpty': '" + getMessage("tabla.sin.registros") + "', ");
		buff.append("        'infoPostFix': '', ");
		buff.append("        'thousands': ',', ");
		buff.append("        'lengthMenu': '" + getMessage("tabla.mostrar") + " _MENU_ " + getMessage("tabla.registros") + "', ");
		buff.append("        'loadingRecords': '" + getMessage("tabla.cargando") + "', ");
		buff.append("        'processing': '" + getMessage("tabla.procesando") + "', ");
		buff.append("        'search': '" + getMessage("tabla.filtrar") + " : ', ");
		buff.append("        'zeroRecords': '" + getMessage("tabla.sin.registros") + "', ");
		buff.append("        'paginate': { ");
		buff.append("            'first': '" + getMessage("tabla.primero") + "', ");
		buff.append("            'last': '" + getMessage("tabla.ultimo") + "', ");
		buff.append("            'next': '" + getMessage("tabla.siguiente") + "', ");
		buff.append("            'previous': '" + getMessage("tabla.anterior") + "' ");
		buff.append("        } ");
		buff.append("    } ");
		return buff.toString();
	}

	private String getRowGroupSetup() {
		StringBuffer buff = new StringBuffer();

		if (getRowGroupPath() != null && !"".equals(getRowGroupPath()) && getRowGroupRender() != null && !"".equals(getRowGroupRender())) {
			buff.append("rowGroup: {     \n");
			buff.append("    endRender: null,     \n");
			buff.append("    startRender: function ( rows, group ) {     \n");
			buff.append("        return " + getRowGroupRender() + ";     \n");
			buff.append("    },     \n");
			buff.append("    dataSrc: '" + getRowGroupPath() + "'     \n");
			buff.append("},      \n");
		}

		return buff.toString();

	}

	private String getStyleFunction() {
		StringBuffer buff = new StringBuffer();
		if (getRowStyleFunction() != null && !"".equals(getRowStyleFunction())) {
			buff.append("		    		'createdRow': function( row, data, dataIndex ) {\n");
			buff.append("		    			" + getRowStyleFunction() + "(row, data, dataIndex); ");
			buff.append("		    		}, \n");
		}
		return buff.toString();
	}

	private String getModifiers() {
		StringBuffer buff = new StringBuffer();
		buff.append("		    		serverSide: true,     \n");
		buff.append("		    		processing: true,     \n");

		if (withMenu) {
			if (getLengthMenu() == null || "".equals(getLengthMenu())) {
				buff.append("					lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, 'All']],     \n");
			} else {
				buff.append("					lengthMenu: [" + getLengthMenu() + "],     \n");
			}
		} else {
			buff.append("		    		bLengthChange : false, \n");
			buff.append("		    		bInfo:false,   \n");
			
			buff.append("					language: {\n");
			buff.append("					    search: \"\", \n");
			buff.append("						searchPlaceholder: \"Buscar...\",\n");

			buff.append(" 					paginate: {\n");
			buff.append(" 					        previous: '<span class=\"icon-left\"></span>'\n,");
			buff.append(" 					        next: '<span class=\"icon-right\"></span>'\n");
			buff.append(" 					    },\n");
			buff.append(" 					},");
			
		}

	

		buff.append("		    		'search': {     \n");
		buff.append("		    		    'regex': true     \n");
		buff.append("		    		},     \n");
		buff.append("		    		colReorder: {	\n");
		buff.append("		    			fixedColumnsRight: 1	\n");
		buff.append("		    		},	\n");
		buff.append("		    		sortCellsTop: true,	\n");

		return buff.toString();
	}

	private String getColumnsDef() {
		StringBuffer buff = new StringBuffer();
		buff.append("		    	    columnDefs: [  \n");

		for (int index = 0; index < columns.size(); index++) {
			ColumnWrapperTag column = columns.get(index);

			if (ColumnWrapperTag.MULTISELECT.equals(column.getType())) {
				buff.append("		    		    		{  \n");
				buff.append("		    		    			targets: " + index + ",  \n");
				buff.append("		    	    				orderable: false,  \n");
				buff.append("		    	    				sortable: false,  \n");
				buff.append("		    	    				className: 'text-center',  \n");
				buff.append("									responsivePriority: 0,	\n");
				buff.append("		    	    				render: function ( data, type, row ) {  \n");
				buff.append("		    	            			return '<div class=\"icheck-primary d-inline\"><input type=\"checkbox\" id=\"" + tableName + "_check_'+data+'\" value=\"'+data+'\"><label for=\"" + tableName + "_check_'+data+'\"></label></div>';  \n");
				buff.append("		    	    				}  \n");
				buff.append("		    	    			},  \n");
			} else if (ColumnWrapperTag.ACTIONS.equals(column.getType())) {
				hasActions = true;
				buff.append("		    		    		{  \n");
				buff.append("		    		    			targets: " + index + ",  \n");
				buff.append("		    	    				orderable: false,  \n");
				buff.append("		    	    				sortable: false,  \n");
				buff.append("		    	    				className: 'text-center',  \n");
				buff.append("									responsivePriority: 0,	\n");
				buff.append("		    	    				render: function ( data, type, row ) {  \n");
				buff.append("		    	            			return " + getActions(column) + "  \n");
				buff.append("		    	    				}  \n");
				buff.append("		    	    			},  \n");
			} else {

				buff.append("		    		    		{  \n");
				buff.append("		    		    			targets: " + index + ", \n");
				if (column.getWidth() != null && !"".equals(column.getWidth())) {
					buff.append("		    		    			width: '" + column.getWidth() + "', \n");
				}

				if (column.getIndexArray() != null) {
					buff.append("		    		    			indexArray: " + column.getIndexArray() + ", \n");
				}

				if (column.getOrderColumnName() != null && !"".equals(column.getOrderColumnName())) {
					buff.append("									orderable: true, \n");
				} else {
					buff.append("									orderable: false, \n");
				}

				buff.append("									sortable: " + column.getSortable() + ", \n ");

				if (!"".equals(column.getClassName()) && column.getClassName() != null) {
					buff.append("		    		    			className: '" + column.getClassName() + "',  \n");
				} else {
					buff.append("		    		    			className: '" + getAlign(column) + "',  \n");
				}

				buff.append("		    		    			responsivePriority: 1,  \n");

				buff.append(getRender(column));
				buff.append("		    		   			},  \n");
			}
		}

		buff = new StringBuffer(buff.toString().substring(0, buff.toString().length() - 2));
		buff.append("		    			],  \n");
		return buff.toString();
	}

	private String getColumns() {
		StringBuffer buff = new StringBuffer();
		buff.append("		    		columns: [     \n");

		for (Iterator<ColumnWrapperTag> it = columns.iterator(); it.hasNext();) {
			ColumnWrapperTag column = it.next();

			if (column.getOrderColumnName() != null) {
				buff.append("		    			{ 'data': '" + column.getPath() + "', 'name': '" + column.getOrderColumnName() + "', 'defaultContent' : ''} ");
			} else {
				buff.append("		    			{ 'data': '" + column.getPath() + "', 'defaultContent' : '' } ");
			}

			if (it.hasNext()) {
				buff.append(",	\n");
			}
		}
		buff.append("		    		],  \n");
		return buff.toString();
	}

	private String getTableDataScript() {
		StringBuffer buff = new StringBuffer();
		buff.append("\n\n");

		buff.append("function getTableData(data) { 		\n");

		buff.append("	if(data == null) { 		\n");
		buff.append("		data = $('#" + tableName + "').DataTable().ajax.json();		\n");
		buff.append("	} 		\n");

		buff.append("	var filters = [];	\n");
		buff.append("	$('.filter').each(function( index ) {	\n");
		buff.append("		filters.push($( this ).val());		\n");
		buff.append("	});	\n");
		buff.append("	data['filterColumns'] = filters;	\n");

		buff.append("	var sqlConverters = [];	\n");
		buff.append("	$('.sqlConverters').each(function( index ) {	\n");
		buff.append("		sqlConverters.push($( this ).val());		\n");
		buff.append("	});	\n");
		buff.append("	data['sqlConverters'] = sqlConverters;	\n");

		buff.append("	if(table_" + tableName + ") {	\n");
		buff.append("		var columnsVisibility = [];	\n");
		buff.append("		for(var i = 0; i < table_" + tableName + ".columns().count(); i++) {	\n");
		buff.append("			columnsVisibility.push(table_" + tableName + ".column(i).visible())	\n");
		buff.append("		}	\n");
		buff.append("		data['columnsVisibility'] = columnsVisibility;	\n");

		buff.append("		data['columnOrder'] = JSON.stringify(table_" + tableName + ".colReorder.order()); 	\n");

		buff.append("	}		\n");

		buff.append("	return data;		\n");

		buff.append("}		\n");

		return buff.toString();
	}

	private String getAjax() {
		String contextPath = ((HttpServletRequest) pageContext.getRequest()).getContextPath();

		StringBuffer buff = new StringBuffer();
		buff.append("		    		ajax: {     \n");
		buff.append("		    			url : getUri_" + tableName + "(),     \n");
		buff.append("		    			type: 'POST',     \n");
		buff.append("		    			data: function (data) {     \n");
		buff.append("		    				data = getTableData(data);	\n");
		buff.append("		    			    return JSON.stringify(data); \n");
		buff.append("		    			 },     \n");
		buff.append("		    			 dataType: 'json',     \n");
		buff.append("		    			 processData: false,     \n");
		buff.append("		    			 error: function (xhr, error, code)     \n");
		buff.append("		    			 {     \n");
		buff.append("		    			 	$('.dataTables_processing', $('#" + tableName + "').closest('.dataTables_wrapper')).hide(); \n");
		buff.append("		    			 	if(xhr.status == 403) { \n");
		buff.append("								alert('" + getMessage("sesion.expirada") + "'); \n");
		buff.append("		    			 		window.location = '" + contextPath + "/logout.html';	\n");
		buff.append("		    			 	} else { \n ");
		buff.append("								alert(xhr.responseText);	\n ");
		buff.append("		    			 	} \n");
		buff.append("		    			 },     \n");
		buff.append("		    			 contentType: 'application/json;charset=UTF-8'     \n");
		buff.append("		    		},     \n");
		return buff.toString();
	}

	private String getSubmitScript() {
		StringBuffer buff = new StringBuffer();
		buff.append(" 	function submitForm(id, mode) {   \n ");
		buff.append(" 	      $('#command').attr('action','viewOrEdit?pk=' + id + '&mode=' + mode);   \n ");
		buff.append(" 	      $('#command').submit();   \n ");
		buff.append("	}    \n ");
		buff.append(" 	function submitAction(id, action) {   \n ");
		buff.append(" 	      $('#command').attr('action', action);   \n ");
		buff.append(" 	      $('#command').submit();   \n ");
		buff.append("	}    \n ");
		return buff.toString();
	}

	private String getActions(ColumnWrapperTag column) {
		StringBuffer buff = new StringBuffer();

		String tooltipView = getMessage("tooltip.view");
		String tooltipEdit = getMessage("tooltip.edit");
		String tooltipRemove = getMessage("tooltip.remove");

		tooltipView = " tooltip-popup-delay=\"0\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"" + tooltipView + "\" ";
		tooltipEdit = " tooltip-popup-delay=\"0\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"" + tooltipEdit + "\" ";
		tooltipRemove = " tooltip-popup-delay=\"0\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"" + tooltipRemove + "\" ";

		if (getEnableView()) {
			buff.append("   '<a href=\"javascript:submitForm(' + data + ',\\\'view\\\')\" " + tooltipView + " class=\"btn btn-outline-success btn-sm\" style=\"border: 0px; padding-right: 5px !important; padding-left: 5px !important;\"><i class=\"fas fa-search\"></i></a>'  \n");
		}
		if (getEnableUpdate()) {
			if (buff.toString().length() > 0) {
				buff.append("+");
			}
			buff.append(" '<a href=\"javascript:submitForm(' + data + ',\\\'update\\\')\" " + tooltipEdit + "  class=\"btn btn-outline-primary btn-sm\" style=\"border: 0px; padding-right: 5px !important; padding-left: 5px !important;\"><i class=\"fas fa-pencil-alt\"></i></a>'  \n");
		}
		if (getEnableRemove()) {
			if (buff.toString().length() > 0) {
				buff.append("+");
			}
			buff.append(" '<a href=\"javascript:showAlert(' + data + ')\" " + tooltipRemove + " class=\"btn btn-outline-danger btn-sm\" style=\"border: 0px; padding-right: 5px !important; padding-left: 5px !important;\"><i class=\"fas fa-trash\"></i></a>'  \n");
		}

		if (getCustomCommands() != null && !"".equals(getCustomCommands())) {
			if (buff.toString().length() > 0) {
				buff.append("+");
			}
			buff.append(getCustomCommands());
		}

		return buff.toString();
	}

	private String getAlign(ColumnWrapperTag column) {
		if ("center".equals(column.getAlign())) {
			return "text-center";
		} else if ("left".equals(column.getAlign())) {
			return "text-left";
		} else if ("right".equals(column.getAlign())) {
			return "text-right";
		}
		return "";
	}

	private String getRender(ColumnWrapperTag column) {
		StringBuffer buff = new StringBuffer();

		if (ColumnWrapperTag.STRING.equals(column.getType())) {

			if (column.getWrapTo() != null && column.getWrapTo() > 0) {
				buff.append("		    		    			render: function ( data, type, row ) {  \n");
				buff.append("										if(data == null) { return  ''; }  \n");
				buff.append("		    		           			if(data.length > " + column.getWrapTo() + ") {  \n");
				buff.append("											data = data.substr(0, " + column.getWrapTo() + "); \n ");
				buff.append("		    		    				}  \n");
				buff.append("		    		    				return data; ");
				buff.append("		    		    			}  \n");

			} else {
				buff.append("		    		    			  \n");

			}

		} else if (ColumnWrapperTag.DATE.equals(column.getType())) {
			buff.append("		    		    			render: function ( data, type, row ) {  \n");
			buff.append("										if(data == null) { return  ''; }  \n");
			buff.append("		    		           			return moment(data).format('DD/MM/YYYY');  \n");
			buff.append("		    		    			}  \n");
		} else if (ColumnWrapperTag.TIME.equals(column.getType())) {
			buff.append("		    		    			render: function ( data, type, row ) {  \n");
			buff.append("										if(data == null) { return  ''; }  \n");
			buff.append("		    		           			return moment(data).format('HH:mm:ss');  \n");
			buff.append("		    		    			}  \n");
		} else if (ColumnWrapperTag.DATETIME.equals(column.getType())) {
			buff.append("		    		    			render: function ( data, type, row ) {  \n");
			buff.append("										if(data == null) { return  ''; }  \n");
			buff.append("		    		           			return moment(data).format('DD/MM/YYYY HH:mm:ss');  \n");
			buff.append("		    		    			}  \n");
		} else if (ColumnWrapperTag.MONEY.equals(column.getType())) {
			buff.append("		    		    			render: function ( data, type, row ) {  \n");
			buff.append("										if(data == null) { return  ''; }  \n");
			buff.append("		    		           			return parseFloat(data).toLocaleString(['es-AR'], {minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'decimal'}); \n");
			buff.append("		    		    			}  \n");
		} else if (ColumnWrapperTag.DECIMAL.equals(column.getType())) {
			buff.append("		    		    			render: function ( data, type, row ) {  \n");
			buff.append("										if(data == null) { return  ''; }  \n");
			buff.append("		    		           			return parseFloat(data).toFixed(2); \n");
			buff.append("		    		    			}  \n");
		} else if (ColumnWrapperTag.BOOLEAN.equals(column.getType())) {
			buff.append("		    		    			render: function ( data, type, row ) {  \n");
			buff.append("										if(data == null) { return  ''; }  \n");
			buff.append("		    		           			if(data == true) { return 'Si'} else {return 'No'} \n");
			buff.append("		    		    			}  \n");
		} else if (ColumnWrapperTag.CHECK.equals(column.getType())) {
			buff.append("		    		    			render: function ( data, type, row ) {  \n");
			buff.append("										if(data == null) { return  ''; }  \n");
			buff.append("		    		           			if(data == true) { return '<i class=\"fas fa-check\"></i>'} else {return ''} \n");
			buff.append("		    		    			}  \n");
		} else if (ColumnWrapperTag.ARRAY.equals(column.getType())) {
			buff.append("		    		    			render: function ( data, type, row, meta ) {  \n");
			buff.append("										if(data == null) { return  ''; }  \n");
			buff.append("										if(meta.settings.aoColumns[meta.col].indexArray != undefined)  { \n ");
			buff.append("		    		           					return data[meta.settings.aoColumns[meta.col].indexArray]; \n");
			buff.append("		    		    						} else {  \n");
			buff.append("		    		    							return 'Falta indexArray'; \n");
			buff.append("		    		    						} \n");
			buff.append("		    		    			}  \n");
		} else if (ColumnWrapperTag.SEMAPHORE.equals(column.getType())) {
			buff.append("		    		    			render: function ( data, type, row ) {  \n");
			buff.append("										if(data == null) { return  ''; }  \n");
			buff.append("		    		           			return '<i class=\"fa fa-square\" style=\"color:' + data + '\"></i>' \n");
			buff.append("		    		    			}  \n");
		} else if (ColumnWrapperTag.CUSTOM.equals(column.getType())) {
			buff.append("		    		    			render: function ( data, type, row, meta ) {  \n");
			buff.append("										if(data == null) { return  ''; }  \n");
			buff.append("		    		           			return " + column.getRender() + " \n");
			buff.append("		    		    			}  \n");
		} else if (ColumnWrapperTag.DECIMAL4.equals(column.getType())) {
			buff.append("		    		    			render: function ( data, type, row ) {  \n");
			buff.append("										if(data == null) { return  ''; }  \n");
			buff.append("		    		           			return parseFloat(data).toFixed(4); \n");
			buff.append("		    		    			}  \n");
		}

		return buff.toString();

	}

	public String getMessage(String key) {
		Locale locale = LocaleContextHolder.getLocale();
		return getMessageSource().getMessage(key, null, locale);
	}

	private MessageSource getMessageSource() {
		WebApplicationContext springContext = WebApplicationContextUtils.getWebApplicationContext(pageContext.getServletContext());
		return (MessageSource) springContext.getBean("messageSource");
	}

	public String getTableName() {
		return tableName;
	}

	public void setTableName(String tableName) {
		this.tableName = tableName;
	}

	public Boolean getEnableView() {
		return enableView;
	}

	public void setEnableView(Boolean enableView) {
		this.enableView = enableView;
	}

	public Boolean getEnableUpdate() {
		return enableUpdate;
	}

	public void setEnableUpdate(Boolean enableUpdate) {
		this.enableUpdate = enableUpdate;
	}

	public Boolean getEnableRemove() {
		return enableRemove;
	}

	public void setEnableRemove(Boolean enableRemove) {
		this.enableRemove = enableRemove;
	}

	public String getCustomCommands() {
		return customCommands;
	}

	public void setCustomCommands(String customCommands) {
		this.customCommands = customCommands;
	}

	public String getRowStyleFunction() {
		return rowStyleFunction;
	}

	public void setRowStyleFunction(String rowStyleFunction) {
		this.rowStyleFunction = rowStyleFunction;
	}

	public String getRowGroupPath() {
		return rowGroupPath;
	}

	public void setRowGroupPath(String rowGroupPath) {
		this.rowGroupPath = rowGroupPath;
	}

	public String getRowGroupRender() {
		return rowGroupRender;
	}

	public void setRowGroupRender(String rowGroupRender) {
		this.rowGroupRender = rowGroupRender;
	}

	public Boolean getHasActions() {
		return hasActions;
	}

	public void setHasActions(Boolean hasActions) {
		this.hasActions = hasActions;
	}

	public DataTablesRequest<Object> getDataTable() {
		return dataTable;
	}

	public void setDataTable(DataTablesRequest<Object> dataTable) {
		this.dataTable = dataTable;
	}

	public String getLengthMenu() {
		return lengthMenu;
	}

	public void setLengthMenu(String lengthMenu) {
		this.lengthMenu = lengthMenu;
	}

	public String getDefaultOrder() {
		return defaultOrder;
	}

	public void setDefaultOrder(String defaultOrder) {
		this.defaultOrder = defaultOrder;
	}

	public void setCssClass(String cssClass) {
		this.cssClass = cssClass;
	}

	public String getMultiselectName() {
		return multiselectName;
	}

	public void setMultiselectName(String multiselectName) {
		this.multiselectName = multiselectName;
	}

	public Boolean getMultiselect() {
		return multiselect;
	}

	public void setMultiselect(Boolean multiselect) {
		this.multiselect = multiselect;
	}

	public void addColumn(ColumnWrapperTag column) {
		columns.add(column);
	}

	public Boolean getHorizontalScroll() {
		return horizontalScroll;
	}

	public void setHorizontalScroll(Boolean horizontalScroll) {
		this.horizontalScroll = horizontalScroll;
	}

	public String getFilterCompleteFunction() {
		return filterCompleteFunction;
	}

	public void setFilterCompleteFunction(String filterCompleteFunction) {
		this.filterCompleteFunction = filterCompleteFunction;
	}

	public Boolean getResponsive() {
		return responsive;
	}

	public void setResponsive(Boolean responsive) {
		this.responsive = responsive;
	}

	public Boolean getWithMenu() {
		return withMenu;
	}

	public void setWithMenu(Boolean withMenu) {
		this.withMenu = withMenu;
	}

}