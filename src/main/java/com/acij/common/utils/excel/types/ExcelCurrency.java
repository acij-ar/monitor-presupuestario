package com.acij.common.utils.excel.types;

import java.math.BigDecimal;

public class ExcelCurrency extends ExcelCustomType {

	private BigDecimal number;

	private ExcelCurrency() {
	}

	public static ExcelCurrency create(BigDecimal number) {
		ExcelCurrency excelCurrency = new ExcelCurrency();
		excelCurrency.setNumber(number);
		return excelCurrency;
	}

	public static ExcelCurrency create(Double number) {
		return ExcelCurrency.create(new BigDecimal(number));
	}

	public BigDecimal getNumber() {
		return number;
	}

	public void setNumber(BigDecimal number) {
		this.number = number;
	}

}
