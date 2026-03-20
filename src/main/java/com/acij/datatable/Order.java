package com.acij.datatable;

import lombok.Data;

@Data
public class Order {
	
	private String column;
	private String dir;

	public String getColumn() {
		return column;
	}

	public void setColumn(String column) {
		this.column = column;
	}

	public String getDir() {
		return dir;
	}

	public void setDir(String dir) {
		this.dir = dir;
	}

}
