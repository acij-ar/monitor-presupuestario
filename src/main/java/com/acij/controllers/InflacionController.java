package com.acij.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.acij.common.controller.CommonCrudController;
import com.acij.common.model.IdLabelEntity;
import com.acij.common.model.ModelHelper;
import com.acij.common.service.ServiceFactory;
import com.acij.common.service.exceptions.ServiceException;
import com.acij.common.spring.ModeHome;
import com.acij.forms.InflacionMensualForm;
import com.acij.model.InflacionMensual;
import com.acij.service.InflacionMensualService;

@Controller
@RequestMapping("admin/inflacion")
public class InflacionController extends CommonCrudController<InflacionMensualForm, InflacionMensual> {

	private InflacionMensualService inflacionMensualService;

	public InflacionController() throws ServiceException {
		inflacionMensualService = ServiceFactory.get(InflacionMensualService.class);
	}

	@Override
	public List<InflacionMensual> filterJson(InflacionMensualForm form) throws Exception {
		return inflacionMensualService.findBy(form.getAnio(), form.getMes(), form.getColumnSort(), form.getSqlSearch());
	}

	@Override
	public void preloadList(InflacionMensualForm form) throws Exception {
		form.setMeses(getMeses());
	}

	private List<IdLabelEntity> getMeses() {
		List<IdLabelEntity> meses = new ArrayList<>();
		meses.add(new IdLabelEntity(1L, "Enero"));
		meses.add(new IdLabelEntity(2L, "Febrero"));
		meses.add(new IdLabelEntity(3L, "Marzo"));
		meses.add(new IdLabelEntity(4L, "Abril"));
		meses.add(new IdLabelEntity(5L, "Mayo"));
		meses.add(new IdLabelEntity(6L, "Junio"));
		meses.add(new IdLabelEntity(7L, "Julio"));
		meses.add(new IdLabelEntity(8L, "Agosto"));
		meses.add(new IdLabelEntity(9L, "Septiembre"));
		meses.add(new IdLabelEntity(10L, "Octubre"));
		meses.add(new IdLabelEntity(11L, "Noviembre"));
		meses.add(new IdLabelEntity(12L, "Diciembre"));
		return meses;
	}

	@Override
	public void preloadForm(InflacionMensualForm form) throws Exception {
		form.setMeses(getMeses());
	}

	@Override
	public InflacionMensual add(InflacionMensualForm form) throws Exception {
		InflacionMensual InflacionMensual = new InflacionMensual();
		form.setEntity(InflacionMensual);
		return InflacionMensual;
	}

	@Override
	public InflacionMensual viewOrEdit(InflacionMensualForm form, Long pk) throws Exception {
		InflacionMensual InflacionMensual = ModelHelper.create(InflacionMensual.class, pk);
		InflacionMensual = inflacionMensualService.findByPk(InflacionMensual);
		return InflacionMensual;
	}

	@Override
	public void save(InflacionMensualForm form) throws Exception {
		InflacionMensual InflacionMensual = form.getEntity();
		inflacionMensualService.save(InflacionMensual);
	}

	@Override
	public void update(InflacionMensualForm form) throws Exception {
		InflacionMensual InflacionMensual = form.getEntity();
		inflacionMensualService.update(InflacionMensual);
	}

	@Override
	public void remove(InflacionMensualForm form, Long pk) throws Exception {
		InflacionMensual InflacionMensual = ModelHelper.create(InflacionMensual.class, pk);
		inflacionMensualService.remove(InflacionMensual);
	}
	
	@PostMapping(value = "/list", params = "importar")
	public ModelAndView importar(@ModelAttribute("command") InflacionMensualForm form, BindingResult result, Model model, RedirectAttributes redirectAttributes) {
		try {
			inflacionMensualService.importarInflacion();
			form.setToastMessage("Se actualizaron los datos exitosamente.");
		} catch (Exception ex) {
			commonReject(ex, result);
		}
		return redirectToList(form, redirectAttributes);
	}

	@Override
	public String getListName() {
		return "admin/inflacionMensualList";
	}

	@Override
	public String getFormName() {
		return "admin/inflacionMensualForm";
	}

	@Override
	public void validateForm(InflacionMensualForm form, Errors errors) throws Exception {
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "entity.anio", "error.field", new Object[] { "Año" }, "");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "entity.inflacionMensual", "error.field", new Object[] { "Porcentaje de inflación" }, "");
		InflacionMensual o = form.getEntity();

		if (o.getAnio() != null) {
			if (o.getAnio() < 1991 || o.getAnio() > 3000) {
				errors.reject("error.code", new Object[] { "El año es inválido" }, "");
			}
			
			if (form.getMode().equals(ModeHome.SAVE)) {
				
				InflacionMensual existe = inflacionMensualService.findBy(o.getAnio(), o.getMes());
				if (existe != null) {
					errors.reject("error.code", new Object[] { "Ya existe un porcentaje de inflación para el año y mes seleccionado" }, "");
				}
			}
		}

		

	}
}