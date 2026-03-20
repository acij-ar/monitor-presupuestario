package com.acij.common.charts;

import java.util.List;

public class BubbleData {
	private List<String> anios;
	private List<String> meses;
	private List<List<Object>> datos;

	public BubbleData() {
	}

	public BubbleData(List<String> anios, List<String> meses, List<List<Object>> datos) {
		this.anios = anios;
		this.meses = meses;
		this.datos = datos;
	}

	public List<String> getAnios() {
		return anios;
	}

	public void setAnios(List<String> anios) {
		this.anios = anios;
	}

	public List<String> getMeses() {
		return meses;
	}

	public void setMeses(List<String> meses) {
		this.meses = meses;
	}

	public List<List<Object>> getDatos() {
		return datos;
	}

	public void setDatos(List<List<Object>> datos) {
		this.datos = datos;
	}
}
