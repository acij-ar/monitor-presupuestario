package com.acij.common.charts;

import java.util.List;

public class ChartItem {

	private String serie;
	private String label;
	private String id;
	private String type;
	private Double value;
	private Double value1;
	private Double value2;
	private String color;

	private String xData;
	private String yData;

	private List<ChartItem> items;

	public ChartItem() {

	}

	public ChartItem(String label, Double value) {
		this.label = label;
		this.value = value;
	}

	public ChartItem(String serie, String label, Double value) {
		this.serie = serie;
		this.label = label;
		this.value = value;
	}

	public ChartItem(String serie, String label, Double value, String type) {
		this.serie = serie;
		this.label = label;
		this.value = value;
		this.type = type;
	}

	
	public ChartItem(String serie, String label, Double value, String xData, String yData) {
		this.serie = serie;
		this.label = label;
		this.value = value;
		this.xData = xData;
		this.yData = yData;
	}

	
	public ChartItem(String serie, List<ChartItem> items) {
		this.serie = serie;
		this.items = items;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public String getSerie() {
		return serie;
	}

	public void setSerie(String serie) {
		this.serie = serie;
	}

	public List<ChartItem> getItems() {
		return items;
	}

	public void setItems(List<ChartItem> items) {
		this.items = items;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getxData() {
		return xData;
	}

	public void setxData(String xData) {
		this.xData = xData;
	}

	public String getyData() {
		return yData;
	}

	public void setyData(String yData) {
		this.yData = yData;
	}

	public Double getValue1() {
		return value1;
	}

	public void setValue1(Double value1) {
		this.value1 = value1;
	}

	public Double getValue2() {
		return value2;
	}

	public void setValue2(Double value2) {
		this.value2 = value2;
	}

}
