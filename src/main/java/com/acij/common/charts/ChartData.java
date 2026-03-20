package com.acij.common.charts;

import java.util.List;

public class ChartData {

	private List<String> categories;
	private List<ChartSerie> series;

	private Integer minCategory;
	private Integer maxCategory;

	public List<String> getCategories() {
		return categories;
	}

	public void setCategories(List<String> categories) {
		this.categories = categories;
	}

	public List<ChartSerie> getSeries() {
		return series;
	}

	public void setSeries(List<ChartSerie> series) {
		this.series = series;
	}

	public Integer getMinCategory() {
		return minCategory;
	}

	public void setMinCategory(Integer minCategory) {
		this.minCategory = minCategory;
	}

	public Integer getMaxCategory() {
		return maxCategory;
	}

	public void setMaxCategory(Integer maxCategory) {
		this.maxCategory = maxCategory;
	}

}
