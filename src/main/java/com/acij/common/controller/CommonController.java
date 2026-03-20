package com.acij.common.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.validation.BindingResult;
import org.springframework.web.multipart.MultipartFile;

import com.acij.common.helpers.JsonHelper;
import com.acij.common.model.IdEntity;
import com.acij.common.service.exceptions.ExceptionHelper;
import com.acij.common.service.exceptions.ServiceException;

public abstract class CommonController {

	@Autowired
	protected ServletContext servletContext;

	@Autowired
	protected HttpServletRequest request;

	@Autowired
	protected HttpServletResponse response;

	@Autowired
	private MessageSource messageSource;

	protected static String OK_RESULT;

	public CommonController() throws ServiceException {
		try {
			OK_RESULT = new JsonHelper().toJson("OK");
		} catch (Exception ex) {
			throw new ServiceException(ex);
		}
	}

	public HttpEntity<byte[]> downloadFile(String fileName, String realPath, MediaType mediaType) throws Exception {
		byte[] fileData = Files.readAllBytes(new File(realPath).toPath());
		return downloadFile(fileName, fileData, mediaType);
	}

	public HttpEntity<byte[]> downloadFile(String fileName, byte[] fileData, MediaType mediaType) throws Exception {
		HttpHeaders header = new HttpHeaders();
		header.setContentType(mediaType);
		header.set(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileName + "\"");
		header.setContentLength(fileData.length);

		return new HttpEntity<byte[]>(fileData, header);
	}

	public File getFile(MultipartFile multipart) throws IllegalStateException, IOException {
		String filePath = request.getSession().getServletContext().getRealPath("/upload") + "/" + System.currentTimeMillis() + "_" + multipart.getOriginalFilename();
		File convFile = new File(filePath);
		multipart.transferTo(convFile);
		return convFile;
	}

	public MessageSource getMessageSource() {
		return messageSource;
	}

	public String getMessage(String code) {
		return messageSource.getMessage(code, new Object[] {}, LocaleContextHolder.getLocale());
	}

	protected void commonReject(Throwable ex, BindingResult result) {
		String message = getInnerMessage(ex);
		result.reject("error.code", new Object[] { message }, message);
	}

	protected String getInnerMessage(Throwable ex) {
		return ExceptionHelper.getInnerMessage(ex);
	}

	@SuppressWarnings("unchecked")
	protected <M> M emptyAll(M o) {
		IdEntity entity = null;
		if (o instanceof IdEntity) {
			entity = (IdEntity) o;
		} else {
			return null;
		}

		if (entity != null) {
			if (entity.getId() == null || entity.getId() == -1L) {
				entity = null;
			}
		}
		return (M) entity;
	}
}