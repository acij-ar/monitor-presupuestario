package com.acij.common.model;

public class ValidationError {

	private Integer messageId = 0;
	private String mensaje;
	private Boolean pregunta;
	private Object dto;

	public ValidationError(String mensaje) {
		this.mensaje = mensaje;
		this.pregunta = false;
	}
	
	public ValidationError(String mensaje, Integer id) {
		this.messageId = id;
		this.mensaje = mensaje;
		this.pregunta = false;
	}

	public ValidationError(String mensaje, Boolean pregunta) {
		this.mensaje = mensaje;
		this.pregunta = pregunta;
	}

	public String getMensaje() {
		return mensaje;
	}

	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}

	public Boolean getPregunta() {
		return pregunta;
	}

	public void setPregunta(Boolean pregunta) {
		this.pregunta = pregunta;
	}

	public Integer getMessageId() {
		return messageId;
	}

	public void setMessageId(Integer messageId) {
		this.messageId = messageId;
	}

	public Object getDto() {
		return dto;
	}

	public void setDto(Object dto) {
		this.dto = dto;
	}

}