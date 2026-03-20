package com.acij.common.utils.excel;

import java.io.InputStream;
import java.util.List;

import org.apache.poi.ss.usermodel.BorderStyle;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.ClientAnchor;
import org.apache.poi.ss.usermodel.Drawing;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Picture;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.util.IOUtils;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.springframework.core.io.ClassPathResource;

import com.acij.common.utils.excel.dto.ExcelDto;

public class GenericExcel extends CommonXlsx {

	@Override
	public void generate(SXSSFWorkbook workbook, ExcelDto dto) throws Exception {
		int rowIndex = 0;

		sheet = workbook.createSheet();

		ClassPathResource imgFile = new ClassPathResource("images/watermark.png");
		try (InputStream is = imgFile.getInputStream()) {
			byte[] bytes = IOUtils.toByteArray(is);
			int pictureIdx = workbook.addPicture(bytes, Workbook.PICTURE_TYPE_PNG);

			// Create drawing and anchor
			Drawing<?> drawing = sheet.createDrawingPatriarch();
			ClientAnchor anchor = workbook.getCreationHelper().createClientAnchor();
			anchor.setCol1(0);
			anchor.setRow1(0);
			anchor.setCol2(5);
			anchor.setRow2(20);

			Picture picture = drawing.createPicture(anchor, pictureIdx);
			//picture.resize();
		}

		if (dto.getTitle() != null && !"".equals(dto.getTitle())) {
			fillCell(rowIndex, 0, dto.getTitle());
			rowIndex++;
		}
		if (dto.getSubtitle() != null && !"".equals(dto.getSubtitle())) {
			fillCell(rowIndex, 0, dto.getSubtitle());
			rowIndex++;
		}

		if (rowIndex > 0) {
			fillCell(rowIndex, 0, "");
			rowIndex++;
		}

		// Header
		List<String> headerRow = dto.getHeaders();
		for (int k = 0; k < headerRow.size(); k++) {
			fillCell(rowIndex, k, headerRow.get(k), headerCellStyle(workbook));
		}
		rowIndex++;

		// Body
		int j = 0;
		for (j = 0; j < dto.getItems().size(); j++) {
			List<Object> row = dto.getItems().get(j);
			for (int i = 0; i < row.size(); i++) {
				fillCell(j + rowIndex, i, row.get(i));
			}
		}

		resizeColumns(j + rowIndex - 1);
	}

	public CellStyle headerCellStyle(SXSSFWorkbook wb) {
		CellStyle cellStyle = wb.createCellStyle();

		Font font = wb.createFont();
		font.setBold(true);
		font.setColor(IndexedColors.WHITE.getIndex());
		cellStyle.setFont(font);

		cellStyle.setFillForegroundColor((short) 12);
		cellStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
		cellStyle.setBorderTop(BorderStyle.THIN);
		cellStyle.setBorderRight(BorderStyle.THIN);
		cellStyle.setBorderBottom(BorderStyle.THIN);
		cellStyle.setBorderLeft(BorderStyle.THIN);
		cellStyle.setAlignment(HorizontalAlignment.LEFT);
		cellStyle.setFillForegroundColor(IndexedColors.DARK_BLUE.index);
		cellStyle.setFillBackgroundColor(IndexedColors.DARK_BLUE.index);
		return cellStyle;
	}

}