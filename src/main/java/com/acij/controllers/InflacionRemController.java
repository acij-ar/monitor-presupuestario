package com.acij.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.web.bind.annotation.RequestMapping;

import com.acij.common.controller.CommonCrudController;
import com.acij.common.model.ModelHelper;
import com.acij.common.service.ServiceFactory;
import com.acij.common.service.exceptions.ServiceException;
import com.acij.common.spring.ModeHome;
import com.acij.forms.InflacionRemForm;
import com.acij.model.InflacionRem;
import com.acij.service.InflacionRemService;

@Controller
@RequestMapping("admin/rem")
public class InflacionRemController extends CommonCrudController<InflacionRemForm, InflacionRem> {

	private InflacionRemService inflacionRemService;

	public InflacionRemController() throws ServiceException {
		inflacionRemService = ServiceFactory.get(InflacionRemService.class);
	}

	@Override
	public List<InflacionRem> filterJson(InflacionRemForm form) throws Exception {
		return inflacionRemService.findBy(form.getAnio(), form.getColumnSort(), form.getSqlSearch());
	}

	@Override
	public void preloadList(InflacionRemForm form) throws Exception {
	}

	

	@Override
	public void preloadForm(InflacionRemForm form) throws Exception {
	}

	@Override
	public InflacionRem add(InflacionRemForm form) throws Exception {
		InflacionRem InflacionRem = new InflacionRem();
		form.setEntity(InflacionRem);
		return InflacionRem;
	}

	@Override
	public InflacionRem viewOrEdit(InflacionRemForm form, Long pk) throws Exception {
		InflacionRem InflacionRem = ModelHelper.create(InflacionRem.class, pk);
		InflacionRem = inflacionRemService.findByPk(InflacionRem);
		return InflacionRem;
	}

	@Override
	public void save(InflacionRemForm form) throws Exception {
		InflacionRem InflacionRem = form.getEntity();
		inflacionRemService.save(InflacionRem);
	}

	@Override
	public void update(InflacionRemForm form) throws Exception {
		InflacionRem InflacionRem = form.getEntity();
		inflacionRemService.update(InflacionRem);
	}

	@Override
	public void remove(InflacionRemForm form, Long pk) throws Exception {
		InflacionRem InflacionRem = ModelHelper.create(InflacionRem.class, pk);
		inflacionRemService.remove(InflacionRem);
	}

	@Override
	public String getListName() {
		return "admin/inflacionRemList";
	}

	@Override
	public String getFormName() {
		return "admin/inflacionRemForm";
	}

	@Override
	public void validateForm(InflacionRemForm form, Errors errors) throws Exception {
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "entity.anio", "error.field", new Object[] { "Año" }, "");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "entity.rem", "error.field", new Object[] { "Porcentaje de inflación" }, "");
		InflacionRem o = form.getEntity();

		if (o.getAnio() != null) {
			if (o.getAnio() < 1990 || o.getAnio() > 3000) {
				errors.reject("error.code", new Object[] { "El año es inválido" }, "");
			}
			
			if (form.getMode().equals(ModeHome.SAVE)) {
				
				InflacionRem existe = inflacionRemService.findBy(o.getAnio());
				if (existe != null) {
					errors.reject("error.code", new Object[] { "Ya existe un porcentaje REM para el año seleccionado" }, "");
				}
			}
		}

		

	}
}