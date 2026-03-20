package com.acij.common.charts;

public class ItemStyle {

	private String color;
	private Integer[] borderRadius = { 0, 0, 0, 0 };

	public ItemStyle() {

	}

	public ItemStyle(String color) {
		super();
		this.color = color;
	}

	public ItemStyle(String color, Integer[] borderRadius) {
		super();
		this.color = color;
		this.borderRadius = borderRadius;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public Integer[] getBorderRadius() {
		return borderRadius;
	}

	public void setBorderRadius(Integer[] borderRadius) {
		this.borderRadius = borderRadius;
	}

}
