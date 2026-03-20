package com.acij.common.controller;

import org.springframework.http.HttpStatus;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Validator;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.acij.common.forms.CommonCrudForm;
import com.acij.common.forms.CommonForm;
import com.acij.common.service.exceptions.ServiceException;
import com.acij.common.spring.ModeHome;

public abstract class CommonCrudController<T, M> extends CommonAdminFilterController<T, M> {

	public CommonCrudController() throws ServiceException {
		super();
	}

	protected Validator getValidator() {
		return this;
	}

	public abstract String getFormName();

	/*** Preload Form ***/
	public abstract void preloadForm(@ModelAttribute("command") T form) throws Exception;

	protected void commonReject(@ModelAttribute("command") T form, Throwable ex, BindingResult result) throws Exception {
		super.commonReject(ex, result);
		preloadForm(form);
	}

	/********** FORM CANCEL **********/
	@PostMapping(value = { "view", "save", "update" }, params = "cancel")
	public ModelAndView cancelForm(@ModelAttribute("command") T form, BindingResult result, RedirectAttributes redirectAttributes) throws Exception {
		((CommonForm) form).setDisableAll(false);
		((CommonForm) form).setMode(ModeHome.LIST);
		return redirectToList(form, redirectAttributes);
	}

	/********** VIEW / EDIT **********/
	public abstract M viewOrEdit(T form, Long pk) throws Exception;

	@SuppressWarnings("unchecked")
	@PostMapping("/viewOrEdit")
	public ModelAndView postViewOrEdit(@ModelAttribute("command") T form, BindingResult result, RedirectAttributes redirectAttributes, @RequestParam("pk") Long pk, @RequestParam("mode") String mode) throws Exception {
		try {
			((CommonForm) form).setMode(mode);
			if (ModeHome.UPDATE.contentEquals(mode)) {
				((CommonForm) form).setDisableAll(false);
			} else {
				((CommonForm) form).setDisableAll(true);
			}

			M object = viewOrEdit(form, pk);
			((CommonCrudForm<M>) form).setEntity(object);
			((CommonCrudForm<M>) form).setSaveLocalStorage(true);
			preloadForm(form);

			redirectAttributes.addFlashAttribute("preloadExecuted", "Ok");
			redirectAttributes.addFlashAttribute("command", form);
			return new ModelAndView("redirect:viewOrEdit?pk=" + pk + "&mode=" + ((CommonForm) form).getMode());

		} catch (Exception ex) {
			commonReject(ex, result);
			return new ModelAndView(getListName());
		}
	}

	@SuppressWarnings("unchecked")
	@GetMapping("/viewOrEdit")
	public ModelAndView getViewOrEdit(@ModelAttribute("command") T form, Model model, BindingResult result, RedirectAttributes redirectAttributes, @RequestParam("pk") Long pk, @RequestParam("mode") String mode) throws Exception {
		((CommonForm) form).setMode(mode);

		Boolean preloadExcecutedOnPost = (model.getAttribute("preloadExecuted") != null);

		if (!preloadExcecutedOnPost) {
			if (ModeHome.UPDATE.contentEquals(mode)) {
				((CommonForm) form).setDisableAll(false);
			} else {
				((CommonForm) form).setDisableAll(true);
			}

			M object = viewOrEdit(form, pk);
			((CommonCrudForm<M>) form).setEntity(object);
			preloadForm(form);
		}
		return new ModelAndView(getFormName());

	}

	public abstract void update(T form) throws Exception;

	/********** FIN VIEW / EDIT **********/
	private ModelAndView saveOrUpdate(@ModelAttribute("command") T form, BindingResult result, RedirectAttributes redirectAttributes, String mode) throws Exception {
		try {
			((CommonForm) form).setMode(mode);

			if (getValidator() != null) {
				getValidator().validate(form, result);
			}

			if (result.hasErrors()) {
				preloadForm(form);
				return new ModelAndView(getFormName());
			}

			if (mode.equals(ModeHome.SAVE)) {
				save(form);
			} else {
				update(form);
			}

			((CommonForm) form).setToastMessage(getMessage("transaccion.ok"));
			((CommonForm) form).setDisableAll(false);
			((CommonForm) form).setMode(ModeHome.LIST);

			return redirectToList(form, redirectAttributes);
		} catch (Exception ex) {
			commonReject(form, ex, result);
			return new ModelAndView(getFormName());
		}
	}

	@PostMapping(value = { "update" }, params = "save")
	public ModelAndView updateForm(@ModelAttribute("command") T form, BindingResult result, RedirectAttributes redirectAttributes) throws Exception {
		return saveOrUpdate(form, result, redirectAttributes, ModeHome.UPDATE);
	}

	/********** SAVE **********/
	public abstract M add(T form) throws Exception;
	
	@SuppressWarnings("unchecked")
	@PostMapping(value = "/list", params = "add")
	public ModelAndView addObject(@ModelAttribute("command") T form, BindingResult result, RedirectAttributes redirectAttributes) throws Exception {
		try {			
			((CommonForm) form).setDisableAll(false);
			((CommonForm) form).setMode(ModeHome.SAVE);
			M object = add(form);
			((CommonCrudForm<M>) form).setSaveLocalStorage(true);
			((CommonCrudForm<M>) form).setEntity(object);
			preloadForm(form);
			return new ModelAndView(getFormName());

		} catch (Exception ex) {
			commonReject(ex, result);
			return new ModelAndView(getListName());
		}
	}

	public abstract void save(T form) throws Exception;

	@PostMapping(value = { "save" }, params = "save")
	public ModelAndView saveForm(@ModelAttribute("command") T form, BindingResult result, RedirectAttributes redirectAttributes) throws Exception {
		return saveOrUpdate(form, result, redirectAttributes, ModeHome.SAVE);
	}

	/********** REMOVE **********/
	@PostMapping("/remove")
	@ResponseStatus(value = HttpStatus.NO_CONTENT)
	public void removeObject(@ModelAttribute("command") T form, BindingResult result, RedirectAttributes redirectAttributes, @RequestParam("pk") Long pk) throws Exception {
		try {
			remove(form, pk);
		} catch (Exception ex) {
			String messageError = getInnerMessage(ex);
			response.getWriter().write(messageError);
			response.addHeader("data", messageError);
			throw ex;
		}
	}

	public abstract void remove(T form, Long pk) throws Exception;

}