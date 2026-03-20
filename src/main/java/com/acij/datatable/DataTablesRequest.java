package com.acij.datatable;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class DataTablesRequest<M> {

	private int draw;
	private int start;
	private int length;
	private Search search;
	private List<Order> order;
	private List<Column> columns;
	private List<M> data;
	private Integer recordsTotal;
	private Integer recordsFiltered;
	private List<String> filterColumns;
	private List<String> sqlConverters;
	private List<Boolean> columnsVisibility;
	private DataTablesRequest<M> dataTable;
	private String columnOrder;
	private Object summaryData;

	public int getDraw() {
		return draw;
	}

	public void setDraw(int draw) {
		this.draw = draw;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getLength() {
		return length;
	}

	public void setLength(int length) {
		this.length = length;
	}

	public Search getSearch() {
		return search;
	}

	public void setSearch(Search search) {
		this.search = search;
	}

	@JsonProperty("order")
	public List<Order> getOrder() {
		return order;
	}

	public void setOrder(List<Order> order) {
		this.order = order;
	}

	public List<Column> getColumns() {
		return columns;
	}

	public void setColumns(List<Column> columns) {
		this.columns = columns;
	}

	public List<M> getData() {
		return data;
	}

	public void setData(List<M> data) {
		this.data = data;
	}

	public Integer getRecordsTotal() {
		return recordsTotal;
	}

	public void setRecordsTotal(Integer recordsTotal) {
		this.recordsTotal = recordsTotal;
	}

	public Integer getRecordsFiltered() {
		return recordsFiltered;
	}

	public void setRecordsFiltered(Integer recordsFiltered) {
		this.recordsFiltered = recordsFiltered;
	}

	public List<String> getFilterColumns() {
		return filterColumns;
	}

	public void setFilterColumns(List<String> filterColumns) {
		this.filterColumns = filterColumns;
	}

	public List<String> getSqlConverters() {
		return sqlConverters;
	}

	public void setSqlConverters(List<String> sqlConverters) {
		this.sqlConverters = sqlConverters;
	}

	public List<Boolean> getColumnsVisibility() {
		return columnsVisibility;
	}

	public void setColumnsVisibility(List<Boolean> columnsVisibility) {
		this.columnsVisibility = columnsVisibility;
	}

	public DataTablesRequest<M> getDataTable() {
		return dataTable;
	}

	public void setDataTable(DataTablesRequest<M> dataTable) {
		this.dataTable = dataTable;
	}

	public String getColumnOrder() {
		return columnOrder;
	}

	public void setColumnOrder(String columnOrder) {
		this.columnOrder = columnOrder;
	}

	public Object getSummaryData() {
		return summaryData;
	}

	public void setSummaryData(Object summaryData) {
		this.summaryData = summaryData;
	}

}