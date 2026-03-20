package com.acij.common.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.acij.common.forms.CommonForm;
import com.acij.common.forms.CustomCommand;
import com.acij.common.service.exceptions.ServiceException;
import com.acij.datatable.Column;
import com.acij.datatable.DataTablesRequest;
import com.acij.datatable.Order;

public abstract class CommonAdminFilterController<T, M> extends CommonFormController<T, M> {

	public CommonAdminFilterController() throws ServiceException {
		super();
	}

	public abstract List<M> filterJson(@ModelAttribute("command") T o) throws Exception;

	@Override
	@GetMapping("/list")
	public ModelAndView preloadListObject(@ModelAttribute("command") T o, BindingResult result, RedirectAttributes redirectAttributes) {
		super.preloadListObject(o, result, redirectAttributes);
		try {
			CommonForm commonForm = (CommonForm) o;
			commonForm.setCustomCommands(new ArrayList<CustomCommand>());
			addCustomCommands(commonForm.getCustomCommands());
		} catch (Exception ex) {
			commonReject(ex, result);
		}
		return new ModelAndView(getListName());
	}

	protected void addCustomCommands(List<CustomCommand> customCommands) {

	}

	protected Object addSummaryData(@ModelAttribute("command") T o, List<M> responseList) {
		return null;
	}

	@PostMapping(value = "/filterJson", headers = "Accept=application/json", produces = { "application/json;charset=UTF-8" })
	public @ResponseBody DataTablesRequest<M> filterJsonObject(@ModelAttribute("command") T o, BindingResult result, Model model, @RequestBody DataTablesRequest<M> dataTableRequest) throws Exception {
		CommonForm form = (CommonForm) o;

		List<String> columns = new ArrayList<String>();

		for (int i = 0; i < dataTableRequest.getColumns().size(); i++) {
			Column col = dataTableRequest.getColumns().get(i);
			columns.add(col.getName());
		}

		String columnSort = null;
		for (Iterator<Order> it = dataTableRequest.getOrder().iterator(); it.hasNext();) {
			Order col = it.next();

			String columnName = columns.get(Integer.parseInt(col.getColumn()));
			if (columnName != null && !"".equals(columnName)) {
				if (columnSort == null) {
					columnSort = columnName + " " + col.getDir();
				} else {
					columnSort += "," + columns.get(Integer.parseInt(col.getColumn())) + " " + col.getDir();
				}
			}
		}

		String columnFilters = new String();

		for (int i = 0; i < dataTableRequest.getFilterColumns().size(); i++) {
			String data = dataTableRequest.getFilterColumns().get(i);

			if (!"".equals(data)) {

				String columnName = columns.get(i);

				if (columnName != null && !"".equals(columnName)) {

					int index = i;
					if ("".equals(columns.get(0))) {
						index -= 1;
					}

					if (dataTableRequest.getSqlConverters().get(index) != null && !"".equals(dataTableRequest.getSqlConverters().get(index))) {
						columnName = dataTableRequest.getSqlConverters().get(index);
					}

					if ("".equals(columnFilters)) {
						columnFilters = " lower(" + columnName + "||'') like '" + data.toLowerCase() + "%' ";
					} else {
						columnFilters += " and lower(" + columnName + "||'') like '" + data.toLowerCase() + "%' ";
					}
				}
			}
		}
		if (!"".equals(columnFilters)) {
			columnFilters = "and ( " + columnFilters + ")";
		}
		form.setSqlFilterColumns(columnFilters);

		form.setAllColumns(columns);

		String search = null;
		if (dataTableRequest.getSearch() == null && form.getSearch() == null) {
			search = "";
		} else {
			if (dataTableRequest.getSearch() != null) {
				search = dataTableRequest.getSearch().getValue();
			} else {
				search = form.getSearch();
			}
		}

		form.setColumnSort(columnSort);

		if (search == null) {
			search = "";
		}
		form.setSearch(search);

		List<M> list = filterJson(o);

		// toJson

		int end = dataTableRequest.getStart() + dataTableRequest.getLength();
		if (end == -1) {
			end = list.size();
		} else {
			if (end > list.size()) {
				end = list.size();
			}
		}

		List<M> responseList = new ArrayList<M>();
		for (int i = dataTableRequest.getStart(); i < end; i++) {
			M m = list.get(i);
			responseList.add(m);
		}

		dataTableRequest.setRecordsTotal(list.size());
		dataTableRequest.setRecordsFiltered(list.size());
		dataTableRequest.setData(responseList);

		Object summaryData = addSummaryData(o, list);
		if (summaryData != null) {
			dataTableRequest.setSummaryData(summaryData);
		}

		return dataTableRequest;
	}
}
