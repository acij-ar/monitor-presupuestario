package com.acij.common.charts;

import java.math.BigDecimal;
import java.util.List;

public class ChartSerie {

	private String name;
	private String type;
	private String stack;
	private List<BigDecimal> data;
	private ItemStyle itemStyle;
	private Float barGap = 0f;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public List<BigDecimal> getData() {
		return data;
	}

	public void setData(List<BigDecimal> data) {
		this.data = data;
	}

	public ItemStyle getItemStyle() {
		return itemStyle;
	}

	public void setItemStyle(ItemStyle itemStyle) {
		this.itemStyle = itemStyle;
	}

	public String getStack() {
		return stack;
	}

	public void setStack(String stack) {
		this.stack = stack;
	}

	public Float getBarGap() {
		return barGap;
	}

	public void setBarGap(Float barGap) {
		this.barGap = barGap;
	}
	
	

}
