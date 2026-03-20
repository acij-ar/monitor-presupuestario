package com.acij.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.acij.forms.MonitorForm;

@Controller
@RequestMapping("")
public class MainController {

	@GetMapping(value = "")
	public ModelAndView home(@ModelAttribute("command") MonitorForm form) throws Exception {
		return new ModelAndView("redirect:/explorar/monitor");
	}
	
	@GetMapping(value = "acercade")
	public ModelAndView acercade(@ModelAttribute("command") MonitorForm form) throws Exception {
		return new ModelAndView("acercade");
	}
	
	@GetMapping(value = "comousar")
	public ModelAndView comousar(@ModelAttribute("command") MonitorForm form) throws Exception {
		return new ModelAndView("comousar");
	}

	
	@GetMapping(value = "metodologia")
	public ModelAndView metodologia(@ModelAttribute("command") MonitorForm form) throws Exception {
		return new ModelAndView("metodologia");
	}
	
	@GetMapping(value = "faq")
	public ModelAndView faq(@ModelAttribute("command") MonitorForm form) throws Exception {
		return new ModelAndView("faq");
	}
	
	@GetMapping(value = "/admin/main")
	public ModelAndView main() throws Exception {
		return new ModelAndView("admin/main");
	}

}
