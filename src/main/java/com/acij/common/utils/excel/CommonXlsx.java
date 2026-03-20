package com.acij.common.utils.excel;

import java.io.ByteArrayOutputStream;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Date;

import org.apache.poi.ss.usermodel.BorderStyle;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Row.MissingCellPolicy;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.ss.util.RegionUtil;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.util.IOUtils;
import org.apache.poi.xssf.streaming.SXSSFSheet;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;

import com.acij.common.utils.excel.dto.ExcelDto;
import com.acij.common.utils.excel.types.ExcelCurrency;
import com.acij.common.utils.excel.types.ExcelDate;

public abstract class CommonXlsx {

	protected SXSSFWorkbook sxssfWorkbook;
	protected Sheet sheet;
	
	protected CellStyle stringCellStyle = null;
	protected CellStyle doubleCellStyle = null;
	protected CellStyle bigDecimalCellStyle = null;
	protected CellStyle longCellStyle = null;
	protected CellStyle integerCellStyle = null;
	protected CellStyle dateCellStyle = null;
	
	public void createCellStyles() {		
		stringCellStyle = sxssfWorkbook.createCellStyle();
		stringCellStyle.setDataFormat((short) 0x31);
		setBodyStyle(stringCellStyle);
		
		doubleCellStyle = sxssfWorkbook.createCellStyle();
		doubleCellStyle.setDataFormat((short) 2);
		setBodyStyle(doubleCellStyle);
		
		bigDecimalCellStyle = sxssfWorkbook.createCellStyle();
		bigDecimalCellStyle.setDataFormat((short) 2);
		setBodyStyle(bigDecimalCellStyle);
		
		longCellStyle = sxssfWorkbook.createCellStyle();
		longCellStyle.setDataFormat((short) 1);
		setBodyStyle(longCellStyle);
		
		integerCellStyle = sxssfWorkbook.createCellStyle();
		integerCellStyle.setDataFormat((short) 1);
		setBodyStyle(integerCellStyle);

		dateCellStyle = sxssfWorkbook.createCellStyle();
		short dataFormat = sxssfWorkbook.createDataFormat().getFormat("dd/mm/yyyy");
		dateCellStyle.setDataFormat(dataFormat);
		setBodyStyle(dateCellStyle);
	}

	private void setBodyStyle(CellStyle bodyStyle) {
		bodyStyle.setFillForegroundColor(IndexedColors.WHITE.index);
		bodyStyle.setFillBackgroundColor(IndexedColors.WHITE.index);	
		
		Font font = sxssfWorkbook.createFont();
		font.setBold(true);
		font.setColor(IndexedColors.BLACK.getIndex());
		bodyStyle.setFont(font);
	}
	
	public byte[] generate(ExcelDto dto) throws Exception {
		sxssfWorkbook = new SXSSFWorkbook(10000);
		
		createCellStyles();
		generate(sxssfWorkbook, dto);

		ByteArrayOutputStream bos = new ByteArrayOutputStream();
		sxssfWorkbook.write(bos);
		bos.close();
		bos.flush();

		sxssfWorkbook.close();
		IOUtils.closeQuietly(sxssfWorkbook);
		
		return bos.toByteArray();		
	}

	public abstract void generate(SXSSFWorkbook workbook, ExcelDto dto) throws Exception;

	public void fillCell(int fila, int columna, Object content) throws Exception {
		fillCell(fila, columna, content, null);
	}

	private CellStyle getDefaultCellStyleFrom(Object content) throws Exception {
		if (content == null) {
			return stringCellStyle;
		}
		
		if (content instanceof String || content instanceof Boolean) {
			return stringCellStyle; 
		} else if (content instanceof Double || content instanceof Float) {
			return doubleCellStyle;

		} else if (content instanceof BigDecimal) {
			return bigDecimalCellStyle;

		} else if (content instanceof Long) {
			return longCellStyle;

		} else if (content instanceof Integer) {
			return integerCellStyle;

		} else if (content instanceof Date) {
			return dateCellStyle;
		}
		
		return sxssfWorkbook.createCellStyle();
	}
	
	public void fillCell(int fila, int columna, Object content, CellStyle cellStyle) throws Exception {
		fillCell(fila, columna, content, cellStyle, false);
	}
	
	public void fillCell(int fila, int columna, Object content, CellStyle cellStyle, Boolean isFormula) throws Exception {
		Row r = sheet.getRow(fila);
		if (r == null) {
			r = sheet.createRow(fila);
		}

		Cell c = r.getCell(columna, MissingCellPolicy.RETURN_BLANK_AS_NULL);
		if (c == null) {
			c = r.createCell(columna);
		}

		if (cellStyle == null) {
			cellStyle = getDefaultCellStyleFrom(content);
		}
		c.setCellStyle(cellStyle);

		if (content == null) {
			c.setBlank();
		} else {
			if (isFormula) {
				c.setCellFormula(content.toString());
			} else if (content instanceof String) {
				c.setCellValue((String) content);

			} else if (content instanceof Double) {
				c.setCellValue((Double) content);

			} else if (content instanceof BigDecimal) {
				c.setCellValue(((BigDecimal) content).doubleValue());

			} else if (content instanceof Long) {
				c.setCellValue((Long) content);

			} else if (content instanceof Integer) {
				c.setCellValue((Integer) content);

			} else if (content instanceof Date) {
				c.setCellValue((Date) content);

			} else if (content instanceof ExcelDate) {
				ExcelDate excelDate = (ExcelDate) content;
				short dataFormat = sxssfWorkbook.createDataFormat().getFormat(excelDate.getFormat());
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
	
	public static void setBorders(Sheet sheet, int filaDesde, int columnaDesde, int filaHasta, int columnaHasta) {
	    CellRangeAddress region = new CellRangeAddress(filaDesde, columnaDesde, filaHasta, columnaHasta);

	    RegionUtil.setBorderBottom(BorderStyle.THIN, region, sheet);
	    RegionUtil.setBorderTop(BorderStyle.THIN, region, sheet);
	    RegionUtil.setBorderLeft(BorderStyle.THIN, region, sheet);
	    RegionUtil.setBorderRight(BorderStyle.THIN, region, sheet);
	}
}