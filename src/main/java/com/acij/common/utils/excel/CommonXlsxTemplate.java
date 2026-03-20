package com.acij.common.utils.excel;

import java.io.ByteArrayOutputStream;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Date;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Row.MissingCellPolicy;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.util.IOUtils;
import org.apache.poi.xssf.streaming.SXSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.acij.common.utils.excel.dto.ExcelDto;
import com.acij.common.utils.excel.types.ExcelCurrency;
import com.acij.common.utils.excel.types.ExcelDate;

public abstract class CommonXlsxTemplate {

	protected XSSFWorkbook xssfWorkbook;
	protected Sheet sheet;

	public byte[] generate(ExcelDto dto, String templateFile) throws Exception {
		xssfWorkbook = new XSSFWorkbook(templateFile);
		generate(xssfWorkbook, dto);

		ByteArrayOutputStream bos = new ByteArrayOutputStream();
		xssfWorkbook.write(bos);
		bos.close();

		xssfWorkbook.close();
		IOUtils.closeQuietly(xssfWorkbook);
		
		return bos.toByteArray();
	}

	public abstract void generate(XSSFWorkbook workbook, ExcelDto dto) throws Exception;

	public void fillCell(int fila, int columna, Object content) throws Exception {
		fillCell(fila, columna, content, null);
	}

	public void fillCell(int fila, int columna, Object content, CellStyle cellStyle) throws Exception {
		Row r = sheet.getRow(fila);
		if (r == null) {
			r = sheet.createRow(fila);
		}

		Cell c = r.getCell(columna, MissingCellPolicy.RETURN_BLANK_AS_NULL);
		if (c == null) {
			c = r.createCell(columna);
		}

		if (cellStyle == null) {
			cellStyle = xssfWorkbook.createCellStyle();
		}
		c.setCellStyle(cellStyle);

		if (content == null) {
			c.setBlank();
		} else {

			if (content instanceof String) {
				cellStyle.setDataFormat((short) 0x31);
				c.setCellValue((String) content);

			} else if (content instanceof Double) {
				cellStyle.setDataFormat((short) 2);
				c.setCellValue((Double) content);

			} else if (content instanceof BigDecimal) {
				cellStyle.setDataFormat((short) 2);
				c.setCellValue(((BigDecimal) content).doubleValue());

			} else if (content instanceof Long) {
				cellStyle.setDataFormat((short) 1);
				c.setCellValue((Long) content);

			} else if (content instanceof Integer) {
				cellStyle.setDataFormat((short) 1);
				c.setCellValue((Integer) content);

			} else if (content instanceof Date) {
				short dataFormat = xssfWorkbook.createDataFormat().getFormat("dd/mm/yyyy");
				cellStyle.setDataFormat(dataFormat);
				c.setCellValue((Date) content);

			} else if (content instanceof ExcelDate) {
				ExcelDate excelDate = (ExcelDate) content;
				short dataFormat = xssfWorkbook.createDataFormat().getFormat(excelDate.getFormat());
				cellStyle.setDataFormat(dataFormat);
				c.setCellValue(excelDate.getDate());

			} else if (content instanceof ExcelCurrency) {
				ExcelCurrency excelCurrency = (ExcelCurrency) content;
				cellStyle.setDataFormat((short) 8);
				BigDecimal number = excelCurrency.getNumber();
				if (number != null) {
					number = excelCurrency.getNumber().setScale(2, RoundingMode.HALF_EVEN);
				} else {
					number = new BigDecimal(0).setScale(2, RoundingMode.HALF_EVEN);
				}
				c.setCellValue(number.doubleValue());

			} else if (content instanceof Boolean) {
				c.setCellValue((Boolean) content);
			} else {
				c.setCellValue("CommonXlsx : Tipo desconocido");
			}
		}
	}

	public void resizeColumns(int headerLocation) throws Exception {
		((SXSSFSheet) sheet).trackAllColumnsForAutoSizing();
		for (int x = 0; x < sheet.getRow(headerLocation).getPhysicalNumberOfCells(); x++) {
			sheet.autoSizeColumn(x);
		}
	}
}