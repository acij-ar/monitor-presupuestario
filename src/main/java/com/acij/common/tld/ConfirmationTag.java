package com.acij.common.tld;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;

public class ConfirmationTag extends Y3KCommonTag {

	private static final long serialVersionUID = 1L;

	private String action;
	private String redirectUrl;
	private String pregunta;
	private String detalle;

	@Override
	public int doStartTag() throws JspException {
		super.doStartTag();

		try {

			JspWriter out = pageContext.getOut();

			String preguntaEliminar = getMessage("global.pregunta.eliminar");
			if (pregunta != null && !"".equals(pregunta)) {
				preguntaEliminar = pregunta;
			}

			String detallePreguntaEliminar = getMessage("global.pregunta.eliminar.detalle");
			if (detalle != null && !"".equals(detalle)) {
				detallePreguntaEliminar = detalle;
			}

			String preguntaSi = getMessage("global.pregunta.si");
			String preguntaNo = getMessage("global.pregunta.no");
			String preguntaEliminado = getMessage("global.pregunta.eliminado");
			String preguntaEliminadoOk = getMessage("global.pregunta.eliminado.ok");
			String preguntaCancelado = getMessage("global.pregunta.cancelado");
			String preguntaEliminarError = getMessage("global.pregunta.eliminar.error");
			String preguntaNoEliminar = getMessage("global.pregunta.eliminado.no.ok");

			out.println("<script>  ");
			out.println("	function showAlert(id) {  ");
			out.println("	    swal.fire({     ");
			out.println("	        title: '" + preguntaEliminar + "',  ");
			out.println("	        text: '" + detallePreguntaEliminar + "',     ");
			out.println("	        icon: 'warning',     ");
			out.println("	        showCancelButton: true,     ");
			out.println("	        confirmButtonColor: '#DD6B55',     ");
			out.println("	        confirmButtonText: '" + preguntaSi + "',  ");
			out.println("	        cancelButtonText: '" + preguntaNo + "',     ");
			out.println("	        preConfirm: false,     ");
			out.println("	        allowEscapeKey: false,     ");
			out.println("	        allowOutsideClick: false     ");
			out.println("	    }).then( res => {     ");
			out.println("	        if (res.dismiss != 'cancel' && res.dismiss != 'backdrop') {  ");
			out.println("	        	var url = '" + action + "'; ");
			out.println("	        	$.ajax({  ");
			out.println("	                type: 'POST',  ");
			out.println("	                url: url,  ");
			out.println("	                contentType:'application/json',  ");
			out.println("	                success: function(data, text) {  ");
			out.println("	                	$('.filterButton').trigger('click');  ");
			if (redirectUrl == null) {
				out.println("	                    swal.fire('" + preguntaEliminado + "', '" + preguntaEliminadoOk + "', 'success');  ");
			} else {
				out.println("	    				swal({     ");
				out.println("	        				title: '" + preguntaEliminado + "',  ");
				out.println("	        				text: '" + preguntaEliminadoOk + "',     ");
				out.println("	        				type: 'success',     ");
				out.println("	        				showCancelButton: false,     ");
				out.println("	        				allowEscapeKey: false,     ");
				out.println("	        				allowOutsideClick: false,     ");
				out.println("	        				confirmButtonText: 'OK',  ");
				out.println("	        				closeOnConfirm: true     ");
				out.println("	    				}).then(res => {     ");
				out.println("	        				if (res.dismiss != 'cancel') {  ");
				out.println("								window.location.replace('" + redirectUrl + "'); ");
				out.println("	                		}  ");
				out.println("	          			});  ");
			}
			out.println("	                },  ");
			out.println("	                error: function(request, error, status) {  ");
			out.println("						var message = request.getResponseHeader('data'); ");
			out.println("						if(message) {");
			out.println("							swal.fire('" + preguntaCancelado + "', message, 'error');  ");
			out.println("						} else { ");
			out.println("	                    	swal.fire('" + preguntaCancelado + "', '" + preguntaEliminarError + " [' + request.responseText + ']', 'error');  ");
			out.println("						} ");
			out.println("	                }  ");
			out.println("	          	});  ");
			out.println("	        } else {       ");
			out.println("	            swal.fire('" + preguntaCancelado + "', '" + preguntaNoEliminar + "', 'error');  ");
			out.println("	        }  ");
			out.println("	    });  ");
			out.println("	}  ");
			out.println("</script>  ");

		} catch (Exception e) {
			throw new JspException(e);
		}

		return EVAL_PAGE;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public String getRedirectUrl() {
		return redirectUrl;
	}

	public void setRedirectUrl(String redirectUrl) {
		this.redirectUrl = redirectUrl;
	}

	public String getPregunta() {
		return pregunta;
	}

	public void setPregunta(String pregunta) {
		this.pregunta = pregunta;
	}

	public String getDetalle() {
		return detalle;
	}

	public void setDetalle(String detalle) {
		this.detalle = detalle;
	}
}