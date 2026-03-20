package com.acij.common.charts;

public class PieChartData {
	private String name;
	private double value;
	private long id;
	private String tipo;

	private double value1;
	private double value2;

	public PieChartData() {
	}

	public PieChartData(String name, double value, long id, String tipo) {
		this.name = name;
		this.value = value;
		this.id = id;
		this.tipo = tipo;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getValue() {
		return value;
	}

	public void setValue(double value) {
		this.value = value;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public double getValue1() {
		return value1;
	}

	public void setValue1(double value1) {
		this.value1 = value1;
	}

	public double getValue2() {
		return value2;
	}

	public void setValue2(double value2) {
		this.value2 = value2;
	}

}