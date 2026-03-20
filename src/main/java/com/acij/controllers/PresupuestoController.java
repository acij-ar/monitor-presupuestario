package com.acij.controllers;

import java.time.Year;
import java.util.List;

import org.apache.commons.lang3.NotImplementedException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.acij.common.controller.CommonCrudController;
import com.acij.common.forms.CustomCommand;
import com.acij.common.model.ModelHelper;
import com.acij.common.service.ServiceFactory;
import com.acij.common.service.exceptions.ServiceException;
import com.acij.forms.PresupuestoForm;
import com.acij.model.Presupuesto;
import com.acij.service.LineaPresupuestoService;
import com.acij.service.PresupuestoService;

@Controller
@RequestMapping("admin/presupuestos")
public class PresupuestoController extends CommonCrudController<PresupuestoForm, Presupuesto> {

	private PresupuestoService presupuestoService;

	public PresupuestoController() throws ServiceException {
		presupuestoService = ServiceFactory.get(PresupuestoService.class);
	}

	@Override
	public List<Presupuesto> filterJson(PresupuestoForm form) throws Exception {
		return presupuestoService.findBy(form.getAnio(), form.getColumnSort(), form.getSqlSearch());
	}

	@PostMapping(value = "/list", params = "importar")
	public ModelAndView importar(@ModelAttribute("command") PresupuestoForm form, BindingResult result, Model model, RedirectAttributes redirectAttributes) {
		try {
			int currentYear = Year.now().getValue();
			for (int year = currentYear - 1; year <= currentYear; year++) {
				try {
					ServiceFactory.get(LineaPresupuestoService.class).procesar("https://dgsiaf-repo.mecon.gob.ar/repository/pa/datasets/" + year + "/credito-mensual-" + year + ".zip", year, "datos_mensuales");
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
			form.setToastMessage("Se actualizaron los datos exitosamente.");
		} catch (Exception ex) {
			commonReject(ex, result);
		}
		return redirectToList(form, redirectAttributes);
	}

	@Override
	protected void addCustomCommands(List<CustomCommand> customCommands) {
		customCommands.add(new CustomCommand("procesarAnio.html?id=' + data + '", "fas fa-sync", "btn btn-outline-success btn-sm", "Reprocesar", true));
	}

	@GetMapping(value = "/procesarAnio")
	public ModelAndView procesarAnio(@ModelAttribute("command") PresupuestoForm form, BindingResult result, Model model, RedirectAttributes redirectAttributes, @RequestParam("id") Long idPresupuesto) throws Exception {
		Presupuesto presupuesto = ModelHelper.create(Presupuesto.class, idPresupuesto);
		presupuesto = presupuestoService.findByPk(presupuesto);
		try {
			presupuesto = presupuestoService.findByPk(presupuesto);
			int year = presupuesto.getAnio();
			ServiceFactory.get(LineaPresupuestoService.class).procesar("https://dgsiaf-repo.mecon.gob.ar/repository/pa/datasets/" + year + "/credito-mensual-" + year + ".zip", year, "datos_mensuales");
		} catch (Exception e) {
			form.setToastIcon("error");
			form.setToastMessage("Error procesando el presupuesto del año " + presupuesto.getAnio() );
			return redirectToList(form, redirectAttributes);
		}
		form.setToastIcon("success");
		form.setToastMessage("Se actualizaron los datos del año " + presupuesto.getAnio() + " exitosamente.");
		return redirectToList(form, redirectAttributes);
	}

	@Override
	public void preloadList(PresupuestoForm form) throws Exception {
	}

	@Override
	public void preloadForm(PresupuestoForm form) throws Exception {
	}

	@Override
	public Presupuesto add(PresupuestoForm form) throws Exception {
		throw new NotImplementedException();
	}

	@Override
	public Presupuesto viewOrEdit(PresupuestoForm form, Long pk) throws Exception {
		throw new NotImplementedException();
	}

	@Override
	public void save(PresupuestoForm form) throws Exception {
		throw new NotImplementedException();
	}

	@Override
	public void update(PresupuestoForm form) throws Exception {
		throw new NotImplementedException();
	}

	@Override
	public void remove(PresupuestoForm form, Long pk) throws Exception {
		throw new NotImplementedException();
	}

	@Override
	public String getListName() {
		return "admin/presupuestoList";
	}

	@Override
	public String getFormName() {
		throw new NotImplementedException();
	}

	@Override
	public void validateForm(PresupuestoForm form, Errors errors) throws Exception {

	}
}