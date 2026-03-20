package com.acij.common.utils.excel.dto;

import java.util.ArrayList;
import java.util.List;

public class ExcelDto {

	private String title;
	private String subtitle;
	private List<String> headers;
	private List<List<Object>> items = new ArrayList<List<Object>>();

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getSubtitle() {
		return subtitle;
	}

	public void setSubtitle(String subtitle) {
		this.subtitle = subtitle;
	}

	public List<List<Object>> getItems() {
		return items;
	}

	public void setItems(List<List<Object>> items) {
		this.items = items;
	}

	public List<String> getHeaders() {
		return headers;
	}

	public void setHeaders(List<String> headers) {
		this.headers = headers;
	}
}