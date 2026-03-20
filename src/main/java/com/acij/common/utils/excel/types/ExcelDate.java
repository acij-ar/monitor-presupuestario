package com.acij.common.utils.excel.types;

import java.util.Date;

public class ExcelDate extends ExcelCustomType {

	private Date date;
	private String format;

	private ExcelDate() {
	}

	public static ExcelDate create(Date date, String format) {
		ExcelDate excelDate = new ExcelDate();
		excelDate.setDate(date);
		excelDate.setFormat( format);
		return excelDate;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getFormat() {
		return format;
	}

	public void setFormat(String format) {
		this.format = format;
	}

}
