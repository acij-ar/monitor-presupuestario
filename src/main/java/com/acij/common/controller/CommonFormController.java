package com.acij.common.controller;

import java.util.ArrayList;

import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.acij.common.forms.CommonForm;
import com.acij.common.forms.CustomCommand;
import com.acij.common.service.exceptions.ServiceException;
import com.acij.common.spring.ModeHome;

public abstract class CommonFormController<T, M> extends CommonController implements Validator {

	public CommonFormController() throws ServiceException {
		super();
	}

	public abstract void preloadList(@ModelAttribute("command") T o) throws Exception;

	public abstract String getListName();

	@GetMapping("/list")
	public ModelAndView preloadListObject(@ModelAttribute("command") T o, BindingResult result, RedirectAttributes redirectAttributes) {
		try {
			CommonForm commonForm = (CommonForm) o;
			commonForm.setDisableAll(false);
			commonForm.setMode(ModeHome.LIST);
			preloadList(o);

			commonForm.setCustomCommands(new ArrayList<CustomCommand>());

		} catch (Exception ex) {
			commonReject(ex, result);
		}
		return new ModelAndView(getListName());
	}

	protected ModelAndView redirectToList(T form, RedirectAttributes redirectAttributes) {
		redirectAttributes.addFlashAttribute("command", form);
		return new ModelAndView("redirect:list.html");
	}

	public abstract void validateForm(T form, Errors errors) throws Exception;

	protected Validator getValidator() {
		return this;
	}

	@Override
	@SuppressWarnings("unchecked")
	public void validate(Object target, Errors errors) {
		T o = (T) target;
		try {
			validateForm(o, errors);
		} catch (Exception ex) {
			errors.reject("error.code", new Object[] { "ERROR EN VALIDACIÓN - " + ex.getMessage() }, "");
		}
	}

	@Override
	public boolean supports(Class<?> clazz) {
		return true;
	}
}