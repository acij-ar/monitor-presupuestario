package com.acij.controllers;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.nio.charset.StandardCharsets;
import java.time.Year;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.acij.common.charts.BubbleData;
import com.acij.common.charts.ChartData;
import com.acij.common.charts.ChartItem;
import com.acij.common.charts.ChartSerie;
import com.acij.common.charts.ItemStyle;
import com.acij.common.charts.PieChartData;
import com.acij.common.controller.CommonFilterController;
import com.acij.common.model.ModelHelper;
import com.acij.common.service.ServiceFactory;
import com.acij.common.utils.excel.ExcelFactory;
import com.acij.common.utils.excel.GenericExcel;
import com.acij.common.utils.excel.dto.ExcelDto;
import com.acij.forms.MonitorForm;
import com.acij.helpers.ColorsHelper;
import com.acij.model.Actividad;
import com.acij.model.Entidad;
import com.acij.model.Finalidad;
import com.acij.model.Funcion;
import com.acij.model.Jurisdiccion;
import com.acij.model.LineaDto;
import com.acij.model.Programa;
import com.acij.model.Proyecto;
import com.acij.model.ResumenDto;
import com.acij.model.Servicio;
import com.acij.model.Subjurisdiccion;
import com.acij.model.Subprograma;
import com.acij.model.TimelineDto;
import com.acij.model.comparador.GrupoRequest;
import com.acij.service.ActividadService;
import com.acij.service.EntidadService;
import com.acij.service.FinalidadService;
import com.acij.service.FuncionService;
import com.acij.service.InflacionMensualService;
import com.acij.service.JurisdiccionService;
import com.acij.service.LineaPresupuestoService;
import com.acij.service.PresupuestoService;
import com.acij.service.ProgramaService;
import com.acij.service.ProyectoService;
import com.acij.service.ServicioService;
import com.acij.service.SubjurisdiccionService;
import com.acij.service.SubprogramaService;

@Controller
@RequestMapping("explorar")
public class MonitorController extends CommonFilterController<MonitorForm, LineaDto> {

	@Autowired
	protected HttpServletRequest request;

	@GetMapping(value = "/monitor")
	public ModelAndView home(@ModelAttribute("command") MonitorForm form) throws Exception {
		loadCombos(form);

		return new ModelAndView("monitor");
	}

	@GetMapping(value = "/navega")
	public ModelAndView navega(@ModelAttribute("command") MonitorForm form) throws Exception {
		loadCombos(form);
		form.setJurisdiccion(new Jurisdiccion(-1L));
		form.setEntidad(new Entidad(-1L));
		form.setPrograma(new Programa(-1L, null));
		form.setActividad(new Actividad(-1L, null));
		return new ModelAndView("navega");
	}

	private final Object updateLock = new Object();

	@GetMapping(value = "actualizar", produces = { "application/json;charset=UTF-8" })
	public @ResponseBody String actualizar() throws Exception {
		synchronized (updateLock) {
			// Importa datos del ministerio de economia desde el año anterior al actual
			int currentYear = Year.now().getValue();

			for (int year = currentYear - 1; year <= currentYear; year++) {
				try {
					ServiceFactory.get(LineaPresupuestoService.class).procesar("https://dgsiaf-repo.mecon.gob.ar/repository/pa/datasets/" + year + "/credito-mensual-" + year + ".zip", year, "datos_mensuales");
				} catch (Exception e) {
					e.printStackTrace();
				}
			}

			try {
				ServiceFactory.get(InflacionMensualService.class).importarInflacion();
			} catch (Exception e) {
				e.printStackTrace();
			}

			return "OK";
		}
	}

	@GetMapping(value = "actualizarAnio", produces = { "application/json;charset=UTF-8" })
	public @ResponseBody String actualizarAnio() throws Exception {

		// Importa datos del ministerio de economia desde el año anterior al actual
		int year = Year.now().getValue();

		try {
			ServiceFactory.get(LineaPresupuestoService.class).procesar("https://dgsiaf-repo.mecon.gob.ar/repository/pa/datasets/" + year + "/credito-mensual-" + year + ".zip", year, "datos_mensuales");
		} catch (Exception e) {
			e.printStackTrace();
		}

		try {
			ServiceFactory.get(InflacionMensualService.class).importarInflacion();
		} catch (Exception e) {
			e.printStackTrace();
		}

		return "OK";
	}

	public void loadCombos(MonitorForm form) throws Exception {
		form.setAnios(ServiceFactory.get(PresupuestoService.class).findAnios());
		form.setAnio(Year.now().getValue());

		form.setJurisdicciones(ServiceFactory.get(JurisdiccionService.class).findByAnio(form.getAnio()));
		form.setEntidades(ServiceFactory.get(EntidadService.class).findByAnio(form.getAnio()));
		form.setProgramas(ServiceFactory.get(ProgramaService.class).findByAnio(form.getAnio()));
		form.setActividades(ServiceFactory.get(ActividadService.class).findByAnio(form.getAnio()));

		form.setFunciones(ServiceFactory.get(FuncionService.class).findByAnio(form.getAnio()));
		form.setFinalidades(ServiceFactory.get(FinalidadService.class).findByAnio(form.getAnio()));

		String lastUpdate = ServiceFactory.get(LineaPresupuestoService.class).getUltimaActualizacion();
		request.getSession().setAttribute("lastupdate", lastUpdate);

	}

	private static List<String> defaultColors = new ArrayList<String>(Arrays.asList(new String[] { "#eb6333", "#4cc1aa", "#0d3a63", "#8edef6", "#8edef6" }));

	@GetMapping(value = "findComparadorAnual", produces = { "application/json;charset=UTF-8" })
	public @ResponseBody ChartData findComparadorAnual(@RequestParam("anio") Integer anio, @RequestParam("type") Integer type, @RequestParam("ajuste") Integer ajuste, @RequestParam("tipoFiltro") Integer tipoFiltro, @RequestParam("idJurisdiccion") Long idJurisdiccion, @RequestParam("idEntidad") Long idEntidad, @RequestParam("idPrograma") Long idPrograma, @RequestParam("idActividad") Long idActividad, @RequestParam("idFinalidad") Long idFinalidad, @RequestParam("idFuncion") Long idFuncion) throws Exception {

		List<ChartItem> items = ServiceFactory.get(LineaPresupuestoService.class).findComparadorAnual(anio, type, ajuste, tipoFiltro, ModelHelper.create(Jurisdiccion.class, idJurisdiccion), ModelHelper.create(Entidad.class, idEntidad), ModelHelper.create(Programa.class, idPrograma), ModelHelper.create(Actividad.class, idActividad), ModelHelper.create(Finalidad.class, idFinalidad), ModelHelper.create(Funcion.class, idFuncion));

		ChartData data = new ChartData();

		List<String> labels = new ArrayList<String>();
		List<String> series = new ArrayList<String>();

		for (Iterator<ChartItem> it = items.iterator(); it.hasNext();) {
			ChartItem item = it.next();
			if (!labels.contains(item.getLabel()) && item.getLabel() != null) {
				labels.add(item.getLabel());
			}

			if (!series.contains(item.getSerie()) && item.getSerie() != null) {
				series.add(item.getSerie());
			}
		}

		List<ChartSerie> chartSerie = new ArrayList<>();
		for (int i = 0; i < series.size(); i++) {
			String serieName = series.get(i);

			ChartSerie serie = new ChartSerie();
			serie.setType("bar");
			serie.setName(serieName);
			serie.setData(getValuesFor(serieName, labels, items));
			if (type == -1) {
				serie.setItemStyle(new ItemStyle(defaultColors.get(i), new Integer[] { 5, 5, 0, 0 }));
			} else {
				serie.setItemStyle(new ItemStyle(defaultColors.get(type - 1), new Integer[] { 5, 5, 0, 0 }));
			}
			serie.setBarGap(0.2f);
			chartSerie.add(serie);
		}

		int min = labels.stream().mapToInt(Integer::parseInt).min().orElse(1995);

		int max = labels.stream().mapToInt(Integer::parseInt).max().orElse(2025);

		data.setCategories(labels);
		data.setSeries(chartSerie);
		data.setMinCategory(min);
		data.setMaxCategory(max);
		return data;
	}

	private static List<BigDecimal> getValuesFor(String serieName, List<String> labels, List<ChartItem> items) {
		BigDecimal[] result = new BigDecimal[labels.size()];

		for (int i = 0; i < labels.size(); i++) {
			String label = labels.get(i);
			result[i] = new BigDecimal(0);
			for (Iterator<ChartItem> it = items.iterator(); it.hasNext();) {
				ChartItem chartItem = it.next();

				if (chartItem.getSerie().equals(serieName) && chartItem.getLabel().equals(label)) {
					result[i] = new BigDecimal(chartItem.getValue().toString()).setScale(2, RoundingMode.HALF_UP);
				}
			}
		}
		return Arrays.asList(result);
	}

	@GetMapping(value = "drilldown", headers = "Accept=application/json")
	public @ResponseBody List<PieChartData> drilldown(@RequestParam("id") Long id, @RequestParam("type") String tipo, @RequestParam("tipoFiltro") Integer tipoFiltro, @RequestParam("tipo") Integer tipoSerie, @RequestParam("ajuste") Integer ajuste, @RequestParam("anio") Integer anio) throws Exception {
		try {
			List<PieChartData> results = new ArrayList<>();
			Jurisdiccion jurisdiccion = null;
			Subjurisdiccion subjurisdiccion = null;
			Entidad entidad = null;
			Servicio servicio = null;
			Programa programa = null;
			Subprograma subprograma = null;
			Proyecto proyecto = null;
			Actividad actividad = null;

			Finalidad finalidad = null;
			Funcion funcion = null;

			List<ChartItem> items = null;

			tipoSerie = -1;
			switch (tipo) {
			case "j":
				jurisdiccion = ServiceFactory.get(JurisdiccionService.class).findByPk(ModelHelper.create(Jurisdiccion.class, id));
				items = ServiceFactory.get(LineaPresupuestoService.class).getSerieForYear(jurisdiccion.getAnio(), tipoFiltro, tipoSerie, ajuste, ModelHelper.create(Jurisdiccion.class, id), null, null, null, null, null);
				break;
			case "e":
				entidad = ServiceFactory.get(EntidadService.class).findByPk(ModelHelper.create(Entidad.class, id));
				subjurisdiccion = ServiceFactory.get(SubjurisdiccionService.class).findByPk(ModelHelper.create(Subjurisdiccion.class, entidad.getSubjurisdiccion().getId()));
				jurisdiccion = ServiceFactory.get(JurisdiccionService.class).findByPk(ModelHelper.create(Jurisdiccion.class, subjurisdiccion.getJurisdiccion().getId()));
				items = ServiceFactory.get(LineaPresupuestoService.class).getSerieForYear(entidad.getAnio(), tipoFiltro, tipoSerie, ajuste, jurisdiccion, entidad, null, null, null, null);
				break;
			case "p":
				programa = ServiceFactory.get(ProgramaService.class).findByPk(ModelHelper.create(Programa.class, id));
				servicio = ServiceFactory.get(ServicioService.class).findByPk(programa.getServicio());
				entidad = ServiceFactory.get(EntidadService.class).findByPk(servicio.getEntidad());
				subjurisdiccion = ServiceFactory.get(SubjurisdiccionService.class).findByPk(entidad.getSubjurisdiccion());
				jurisdiccion = ServiceFactory.get(JurisdiccionService.class).findByPk(subjurisdiccion.getJurisdiccion());
				items = ServiceFactory.get(LineaPresupuestoService.class).getSerieForYear(entidad.getAnio(), tipoFiltro, tipoSerie, ajuste, jurisdiccion, entidad, programa, null, null, null);
				break;
			case "a":
				actividad = ServiceFactory.get(ActividadService.class).findByPk(ModelHelper.create(Actividad.class, id));
				proyecto = ServiceFactory.get(ProyectoService.class).findByPk(actividad.getProyecto());
				subprograma = ServiceFactory.get(SubprogramaService.class).findByPk(proyecto.getSubsubprograma());
				programa = ServiceFactory.get(ProgramaService.class).findByPk(subprograma.getPrograma());
				servicio = ServiceFactory.get(ServicioService.class).findByPk(programa.getServicio());
				entidad = ServiceFactory.get(EntidadService.class).findByPk(servicio.getEntidad());
				subjurisdiccion = ServiceFactory.get(SubjurisdiccionService.class).findByPk(entidad.getSubjurisdiccion());
				jurisdiccion = ServiceFactory.get(JurisdiccionService.class).findByPk(subjurisdiccion.getJurisdiccion());
				items = ServiceFactory.get(LineaPresupuestoService.class).getSerieForYear(entidad.getAnio(), tipoFiltro, tipoSerie, ajuste, jurisdiccion, entidad, programa, actividad, null, null);
				break;
			case "fin":
				finalidad = ServiceFactory.get(FinalidadService.class).findByPk(ModelHelper.create(Finalidad.class, id));
				items = ServiceFactory.get(LineaPresupuestoService.class).getSerieForYear(finalidad.getAnio(), tipoFiltro, tipoSerie, ajuste, null, null, null, null, finalidad, null);
				break;
			case "fun":
				funcion = ServiceFactory.get(FuncionService.class).findByPk(ModelHelper.create(Funcion.class, id));
				finalidad = ServiceFactory.get(FinalidadService.class).findByPk(funcion.getFinalidad());
				items = ServiceFactory.get(LineaPresupuestoService.class).getSerieForYear(finalidad.getAnio(), tipoFiltro, tipoSerie, ajuste, null, null, null, null, finalidad, funcion);
				break;
			default:
				items = ServiceFactory.get(LineaPresupuestoService.class).getSerieForYear(anio, tipoFiltro, tipoSerie, ajuste, null, null, null, null, null, null);
				break;
			}

			for (Iterator<ChartItem> iterator = items.iterator(); iterator.hasNext();) {
				ChartItem item = iterator.next();
				PieChartData data = new PieChartData();
				data.setId(Long.parseLong(item.getId()));
				data.setName(item.getLabel());
				data.setTipo(item.getType());
				data.setValue(item.getValue());

				data.setValue1(item.getValue1());
				data.setValue2(item.getValue2());

				results.add(data);
			}

			return results;
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}

	@GetMapping(value = "getResumen", headers = "Accept=application/json")
	public @ResponseBody ResumenDto getResumen(@RequestParam("anio") Integer anio, @RequestParam("tipoFiltro") Integer tipoFiltro, @RequestParam("type") Integer tipo, @RequestParam("ajuste") Integer ajuste, @RequestParam("idJurisdiccion") Long idJurisdiccion, @RequestParam("idEntidad") Long idEntidad, @RequestParam("idPrograma") Long idPrograma, @RequestParam("idActividad") Long idActividad, @RequestParam("idFinalidad") Long idFinalidad, @RequestParam("idFuncion") Long idFuncion) throws Exception {
		return ServiceFactory.get(LineaPresupuestoService.class).getResumen(anio, tipoFiltro, tipo, ajuste, ModelHelper.create(Jurisdiccion.class, idJurisdiccion), ModelHelper.create(Entidad.class, idEntidad), ModelHelper.create(Programa.class, idPrograma), ModelHelper.create(Actividad.class, idActividad), ModelHelper.create(Finalidad.class, idFinalidad), ModelHelper.create(Funcion.class, idFuncion));
	}

	@GetMapping(value = "getTimeline", headers = "Accept=application/json")
	public @ResponseBody List<TimelineDto> getTimeline(@RequestParam("anio") Integer anio, @RequestParam("type") Integer tipo, @RequestParam("ajuste") Integer ajuste, @RequestParam("idJurisdiccion") Long idJurisdiccion, @RequestParam("idEntidad") Long idEntidad, @RequestParam("idPrograma") Long idPrograma, @RequestParam("idActividad") Long idActividad) throws Exception {
		return ServiceFactory.get(LineaPresupuestoService.class).getTimeline(anio, tipo, ajuste, ModelHelper.create(Jurisdiccion.class, idJurisdiccion), ModelHelper.create(Entidad.class, idEntidad), ModelHelper.create(Programa.class, idPrograma), ModelHelper.create(Actividad.class, idActividad));
	}

	@GetMapping(value = "findJurisdicciones", headers = "Accept=application/json")
	public @ResponseBody List<Jurisdiccion> findJurisdicciones(@RequestParam("anio") Integer anio) throws Exception {
		return ServiceFactory.get(JurisdiccionService.class).findByAnio(anio);
	}

	@GetMapping(value = "findEntidades", headers = "Accept=application/json")
	public @ResponseBody List<Entidad> findEntidades(@RequestParam("anio") Integer anio, @RequestParam("idJurisdiccion") Long idJurisdiccion) throws Exception {
		return ServiceFactory.get(EntidadService.class).findBy(anio, ModelHelper.create(Jurisdiccion.class, idJurisdiccion));
	}

	@GetMapping(value = "findProgramas", headers = "Accept=application/json")
	public @ResponseBody List<Programa> findProgramas(@RequestParam("anio") Integer anio, @RequestParam("idJurisdiccion") Long idJurisdiccion, @RequestParam("idEntidad") Long idEntidad) throws Exception {
		return ServiceFactory.get(ProgramaService.class).findBy(anio, ModelHelper.create(Jurisdiccion.class, idJurisdiccion), ModelHelper.create(Entidad.class, idEntidad));
	}

	@GetMapping(value = "findActividades", headers = "Accept=application/json")
	public @ResponseBody List<Actividad> findActividades(@RequestParam("anio") Integer anio, @RequestParam("idJurisdiccion") Long idJurisdiccion, @RequestParam("idEntidad") Long idEntidad, @RequestParam("idPrograma") Long idPrograma) throws Exception {
		return ServiceFactory.get(ActividadService.class).findBy(anio, ModelHelper.create(Jurisdiccion.class, idJurisdiccion), ModelHelper.create(Entidad.class, idEntidad), ModelHelper.create(Programa.class, idPrograma));
	}

	@GetMapping(value = "findFinalidades", headers = "Accept=application/json")
	public @ResponseBody List<Finalidad> findFinalidades(@RequestParam("anio") Integer anio) throws Exception {
		return ServiceFactory.get(FinalidadService.class).findByAnio(anio);
	}

	@GetMapping(value = "findFunciones", headers = "Accept=application/json")
	public @ResponseBody List<Funcion> findFunciones(@RequestParam("anio") Integer anio, @RequestParam("idFinalidad") Long idFinalidad) throws Exception {
		return ServiceFactory.get(FuncionService.class).findBy(anio, ModelHelper.create(Finalidad.class, idFinalidad));
	}

	@PostMapping(value = "/excelMesAMes")
	public HttpEntity<byte[]> excelMesAMes(@ModelAttribute("command") MonitorForm form, BindingResult result, RedirectAttributes redirectAttributes) throws Exception {
		ExcelDto dto = new ExcelDto();

		String ajuste = "Sin ajuste por inflación";
		if (form.getAjuste() == 2) {
			ajuste = "Ajuste por IPC Promedio";
		} else if (form.getAjuste() == 3) {
			ajuste = "Ajuste por IPC Acumulado";
		}
		dto.setTitle("Tabla de datos *Valores expresados en millones de pesos argentinos- " + ajuste);
		dto.setHeaders(new ArrayList<>());

		dto.getHeaders().add("Anio");
		dto.getHeaders().add("Mes");
		dto.getHeaders().add("Devengado");

		List<ChartItem> items = ServiceFactory.get(LineaPresupuestoService.class).getSerieDevengadoForYearMonth(form.getAnio(), form.getAjuste(), form.getTipoFiltro(), emptyAll(form.getJurisdiccion()), emptyAll(form.getEntidad()), emptyAll(form.getPrograma()), emptyAll(form.getActividad()), emptyAll(form.getFinalidad()), emptyAll(form.getFuncion()));
		for (Iterator<ChartItem> it = items.iterator(); it.hasNext();) {
			ChartItem item = it.next();

			List<Object> row = new ArrayList<Object>();
			row.add(item.getyData());
			row.add(item.getxData());
			row.add(item.getValue());
			dto.getItems().add(row);
		}

		byte[] fileData = ExcelFactory.get(GenericExcel.class).generate(dto);
		return downloadFile("excel_mes_a_mes.xlsx", fileData, MediaType.APPLICATION_OCTET_STREAM);
	}

	@PostMapping(value = "/csvMesAMes")
	public HttpEntity<byte[]> csvMesAMes(@ModelAttribute("command") MonitorForm form, BindingResult result, RedirectAttributes redirectAttributes) throws Exception {
		ExcelDto dto = new ExcelDto();

		String ajuste = "Sin ajuste por inflación";
		if (form.getAjuste() == 2) {
			ajuste = "Ajuste por IPC Promedio";
		} else if (form.getAjuste() == 3) {
			ajuste = "Ajuste por IPC Acumulado";
		}
		dto.setTitle("Tabla de datos *Valores expresados en millones de pesos argentinos- " + ajuste);
		dto.setHeaders(new ArrayList<>());

		dto.getHeaders().add("Anio");
		dto.getHeaders().add("Mes");
		dto.getHeaders().add("Devengado");

		List<ChartItem> items = ServiceFactory.get(LineaPresupuestoService.class).getSerieDevengadoForYearMonth(form.getAnio(), form.getAjuste(), form.getTipoFiltro(), emptyAll(form.getJurisdiccion()), emptyAll(form.getEntidad()), emptyAll(form.getPrograma()), emptyAll(form.getActividad()), emptyAll(form.getFinalidad()), emptyAll(form.getFuncion()));
		for (Iterator<ChartItem> it = items.iterator(); it.hasNext();) {
			ChartItem item = it.next();

			List<Object> row = new ArrayList<Object>();
			row.add(item.getyData());
			row.add(item.getxData());
			row.add(item.getValue());
			dto.getItems().add(row);
		}

		byte[] fileData = generateCsv(dto);
		return downloadFile("datos.csv", fileData, MediaType.APPLICATION_OCTET_STREAM);
	}

	@GetMapping(value = "/getMesAMesBubbleChart", produces = { "application/json;charset=UTF-8" })
	public @ResponseBody BubbleData getMesAMesBubbleChart(@RequestParam("anio") Integer anio, @RequestParam("ajuste") Integer ajuste, @RequestParam("tipoFiltro") Integer tipoFiltro, @RequestParam("idJurisdiccion") Long idJurisdiccion, @RequestParam("idEntidad") Long idEntidad, @RequestParam("idPrograma") Long idPrograma, @RequestParam("idActividad") Long idActividad, @RequestParam("idFinalidad") Long idFinalidad, @RequestParam("idFuncion") Long idFuncion) throws Exception {

		try {
			List<ChartItem> items = ServiceFactory.get(LineaPresupuestoService.class).getSerieDevengadoForYearMonth(anio, ajuste, tipoFiltro, ModelHelper.create(Jurisdiccion.class, idJurisdiccion), ModelHelper.create(Entidad.class, idEntidad), ModelHelper.create(Programa.class, idPrograma), ModelHelper.create(Actividad.class, idActividad), ModelHelper.create(Finalidad.class, idFinalidad), ModelHelper.create(Funcion.class, idFuncion));
			return convertirAData(items);
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}

	public BubbleData convertirAData(List<ChartItem> items) {
		// Obtener lista única de años
		List<String> anios = items.stream().map(ChartItem::getyData).distinct().sorted().collect(Collectors.toList());

		// Obtener lista única de índices de mes (como string)
		List<String> meses = items.stream().map(ChartItem::getxData).distinct().sorted(Comparator.comparingInt(Integer::parseInt)).collect(Collectors.toList());

		List<List<Object>> datos = new ArrayList<>();

		for (ChartItem item : items) {
			int xIndex = meses.indexOf(item.getxData());
			int yIndex = anios.indexOf(item.getyData());

			datos.add(Arrays.asList(yIndex, xIndex, item.getValue()));
		}

		return new BubbleData(anios, meses, datos);
	}

	@Override
	public List<LineaDto> filterJson(MonitorForm o) throws Exception {
		return ServiceFactory.get(LineaPresupuestoService.class).findBy(o.getAnio(), o.getAjuste(), o.getTipoFiltro(), emptyAll(o.getJurisdiccion()), emptyAll(o.getEntidad()), emptyAll(o.getPrograma()), emptyAll(o.getActividad()), emptyAll(o.getFinalidad()), emptyAll(o.getFuncion()), o.getSqlSearch(), o.getColumnSort());
	}

	@PostMapping(value = "/getComparadorGrupos", headers = "Accept=application/json")
	public @ResponseBody ChartData getComparadorGrupos(@RequestParam("tipo") Integer tipo, @RequestParam("ajuste") Integer ajuste, @RequestBody GrupoRequest request) throws Exception {
		List<ChartItem> items = ServiceFactory.get(LineaPresupuestoService.class).findChartAnio(tipo, ajuste, request.getGrupo1(), request.getGrupo2());

		List<String> series = new ArrayList<String>();
		List<String> labels = new ArrayList<String>();
		List<String> stacks = new ArrayList<String>();

		for (Iterator<ChartItem> it = items.iterator(); it.hasNext();) {
			ChartItem item = it.next();

			if (!labels.contains(item.getLabel()) && item.getLabel() != null) {
				labels.add(item.getLabel());
			}
			if (!series.contains(item.getSerie()) && item.getSerie() != null) {
				series.add(item.getSerie());
			}

			if (!stacks.contains(item.getType()) && item.getType() != null) {
				stacks.add(item.getType());
			}
		}

		List<ChartSerie> chartSerie = new ArrayList<>();
		for (int j = 0; j < stacks.size(); j++) {
			String stack = stacks.get(j);
			for (int i = 0; i < series.size(); i++) {
				String serieName = series.get(i);

				List<BigDecimal> data = getValuesFor(serieName, labels, items, stack);
				if (!items.stream().anyMatch(x -> x.getSerie().equals(serieName) && x.getType().equals(stack))) {
					continue;
				}
				ChartSerie serie = new ChartSerie();
				serie.setType("bar");
				serie.setName(serieName);
				serie.setData(data);
				serie.setStack(stack);
				if (request.getGrupo1().size() == 0 && request.getGrupo2().size() > 0) {
					serie.setItemStyle(new ItemStyle(ColorsHelper.getColor("#7f2606", "#ffb093", i)));
				} else if (request.getGrupo2().size() == 0 && request.getGrupo1().size() > 0) {
					serie.setItemStyle(new ItemStyle(ColorsHelper.getColor("#03624c", "#97ffe7", i)));
				} else {
					if (j == 0) {
						serie.setItemStyle(new ItemStyle(ColorsHelper.getColor("#03624c", "#97ffe7", i)));
					} else {
						serie.setItemStyle(new ItemStyle(ColorsHelper.getColor("#7f2606", "#ffb093", i)));
					}
				}
				chartSerie.add(serie);
			}
		}

		ChartData data = new ChartData();
		data.setCategories(labels);
		data.setSeries(chartSerie);

		return data;
	}

	@PostMapping(value = "/getExcelComparador", headers = "Accept=application/json")
	public HttpEntity<byte[]> getExcelComparador(@RequestParam("tipo") Integer tipo, @RequestParam("ajuste") Integer ajusteInt, @RequestBody GrupoRequest request) throws Exception {

		ExcelDto dto = new ExcelDto();

		String ajuste = "Sin ajuste por inflación";
		if (ajusteInt == 2) {
			ajuste = "Ajuste por IPC Promedio";
		} else if (ajusteInt == 3) {
			ajuste = "Ajuste por IPC Acumulado";
		}
		dto.setTitle("Tabla de datos *Valores expresados en millones de pesos argentinos- " + ajuste);
		dto.setHeaders(new ArrayList<>());

		dto.getHeaders().add("Anio");
		dto.getHeaders().add("Grupo");
		dto.getHeaders().add("Descripcion");
		dto.getHeaders().add("Valor");

		List<ChartItem> items = ServiceFactory.get(LineaPresupuestoService.class).findChartAnio(tipo, ajusteInt, request.getGrupo1(), request.getGrupo2());
		for (Iterator<ChartItem> it = items.iterator(); it.hasNext();) {
			ChartItem item = it.next();

			List<Object> row = new ArrayList<Object>();
			row.add(item.getLabel());
			row.add(item.getType());
			row.add(item.getSerie());
			row.add(item.getValue());
			dto.getItems().add(row);
		}

		byte[] fileData = ExcelFactory.get(GenericExcel.class).generate(dto);
		return downloadFile("excel_comparacion.xlsx", fileData, MediaType.APPLICATION_OCTET_STREAM);
	}

	@PostMapping(value = "/getCsvComparador", headers = "Accept=application/json")
	public HttpEntity<byte[]> getCsvComparador(@RequestParam("tipo") Integer tipo, @RequestParam("ajuste") Integer ajusteInt, @RequestBody GrupoRequest request) throws Exception {

		ExcelDto dto = new ExcelDto();

		String ajuste = "Sin ajuste por inflación";
		if (ajusteInt == 2) {
			ajuste = "Ajuste por IPC Promedio";
		} else if (ajusteInt == 3) {
			ajuste = "Ajuste por IPC Acumulado";
		}
		dto.setTitle("Tabla de datos *Valores expresados en millones de pesos argentinos- " + ajuste);
		dto.setHeaders(new ArrayList<>());

		dto.getHeaders().add("Anio");
		dto.getHeaders().add("Grupo");
		dto.getHeaders().add("Descripcion");
		dto.getHeaders().add("Valor");

		List<ChartItem> items = ServiceFactory.get(LineaPresupuestoService.class).findChartAnio(tipo, ajusteInt, request.getGrupo1(), request.getGrupo2());
		for (Iterator<ChartItem> it = items.iterator(); it.hasNext();) {
			ChartItem item = it.next();

			List<Object> row = new ArrayList<Object>();
			row.add(item.getLabel());
			row.add(item.getType());
			row.add(item.getSerie());
			row.add(item.getValue());
			dto.getItems().add(row);
		}

		byte[] fileData = generateCsv(dto);
		return downloadFile("datos.csv", fileData, MediaType.APPLICATION_OCTET_STREAM);
	}

	private List<BigDecimal> getValuesFor(String serieName, List<String> labels, List<ChartItem> items, String stack) {
		BigDecimal[] result = new BigDecimal[labels.size()];

		for (int i = 0; i < labels.size(); i++) {
			String label = labels.get(i);
			result[i] = new BigDecimal("0");
			for (Iterator<ChartItem> it = items.iterator(); it.hasNext();) {
				ChartItem chartItem = it.next();

				if (chartItem.getSerie().equals(serieName) && chartItem.getLabel().equals(label) && chartItem.getType().equals(stack)) {
					result[i] = new BigDecimal(chartItem.getValue().toString()).setScale(2, RoundingMode.HALF_UP);
				}
			}
		}
		return Arrays.asList(result);
	}

	@PostMapping(value = "/excel")
	public HttpEntity<byte[]> excel(@ModelAttribute("command") MonitorForm form, BindingResult result, RedirectAttributes redirectAttributes) throws Exception {
		ExcelDto dto = new ExcelDto();

		String ajuste = "Sin ajuste por inflación";
		if (form.getAjuste() == 2) {
			ajuste = "Ajuste por IPC Promedio";
		} else if (form.getAjuste() == 3) {
			ajuste = "Ajuste por IPC Acumulado";
		}
		dto.setTitle("Tabla de datos *Valores expresados en millones de pesos argentinos- " + ajuste);
		dto.setHeaders(new ArrayList<>());

		if (form.getTipoFiltro() == 1) {
			if (form.getActividad().getId() >= 0) {
				dto.getHeaders().add("Actividad");
			} else if (form.getPrograma().getId() >= 0) {
				dto.getHeaders().add("Actividad");
			} else if (form.getEntidad().getId() >= 0) {
				dto.getHeaders().add("Programa");
			} else if (form.getJurisdiccion().getId() >= 0) {
				dto.getHeaders().add("Organismo");
			} else {
				dto.getHeaders().add("Jurisdicción");
			}
		} else {
			if (form.getFinalidad().getId() >= 0) {
				dto.getHeaders().add("Funcion");
			} else {
				dto.getHeaders().add("Finalidad");
			}
		}

		dto.getHeaders().add("Inicial");
		dto.getHeaders().add("Vigente");
		dto.getHeaders().add("Devengado");
		dto.getHeaders().add("Ejecutado (%)");

		List<LineaDto> list = ServiceFactory.get(LineaPresupuestoService.class).findBy(form.getAnio(), form.getAjuste(), form.getTipoFiltro(), emptyAll(form.getJurisdiccion()), emptyAll(form.getEntidad()), emptyAll(form.getPrograma()), emptyAll(form.getActividad()), emptyAll(form.getFinalidad()), emptyAll(form.getFuncion()), form.getSqlSearch(), form.getColumnSort());
		for (Iterator<LineaDto> it = list.iterator(); it.hasNext();) {
			LineaDto item = it.next();

			List<Object> row = new ArrayList<Object>();

			if (form.getTipoFiltro() == 1) {
				if (form.getActividad().getId() >= 0) {
					row.add(item.getActividad());
				} else if (form.getPrograma().getId() >= 0) {
					row.add(item.getActividad());
				} else if (form.getEntidad().getId() >= 0) {
					row.add(item.getPrograma());
				} else if (form.getJurisdiccion().getId() >= 0) {
					row.add(item.getEntidad());
				} else {
					row.add(item.getJurisdiccion());
				}
			} else {
				if (form.getFinalidad().getId() >= 0) {
					row.add(item.getFuncion());
				} else {
					row.add(item.getFinalidad());
				}
			}
			row.add(item.getInicial());
			row.add(item.getVigente());
			row.add(item.getDevengado());
			row.add(item.getEjecutado());
			dto.getItems().add(row);
		}

		byte[] fileData = ExcelFactory.get(GenericExcel.class).generate(dto);
		return downloadFile("excel.xlsx", fileData, MediaType.APPLICATION_OCTET_STREAM);
	}

	private byte[] generateCsv(ExcelDto dto) {
		StringBuilder sb = new StringBuilder();

		// encabezados
		if (dto.getHeaders() != null && !dto.getHeaders().isEmpty()) {
			List<String> headerCols = new ArrayList<>();
			for (String h : dto.getHeaders()) {
				headerCols.add("\"" + h.replace("\"", "\"\"") + "\"");
			}
			sb.append(String.join(";", headerCols));
			sb.append("\n");
		}

		// filas de datos
		for (List<Object> row : dto.getItems()) {
			List<String> cols = new ArrayList<>();
			for (Object col : row) {
				if (col == null) {
					cols.add("");
				} else {
					String val = col.toString().replace("\"", "\"\"");
					cols.add("\"" + val + "\"");
				}
			}
			sb.append(String.join(";", cols));
			sb.append("\n");
		}

		return sb.toString().getBytes(StandardCharsets.UTF_8);
	}

	@PostMapping(value = "/csv")
	public HttpEntity<byte[]> csv(@ModelAttribute("command") MonitorForm form, BindingResult result, RedirectAttributes redirectAttributes) throws Exception {
		ExcelDto dto = new ExcelDto();

		String ajuste = "Sin ajuste por inflación";
		if (form.getAjuste() == 2) {
			ajuste = "Ajuste por IPC Promedio";
		} else if (form.getAjuste() == 3) {
			ajuste = "Ajuste por IPC Acumulado";
		}
		dto.setTitle("Tabla de datos *Valores expresados en millones de pesos argentinos- " + ajuste);
		dto.setHeaders(new ArrayList<>());
		if (form.getActividad().getId() >= 0) {
			dto.getHeaders().add("Actividad");
		} else if (form.getPrograma().getId() >= 0) {
			dto.getHeaders().add("Actividad");
		} else if (form.getEntidad().getId() >= 0) {
			dto.getHeaders().add("Programa");
		} else if (form.getJurisdiccion().getId() >= 0) {
			dto.getHeaders().add("Organismo");
		} else {
			dto.getHeaders().add("Jurisdicción");
		}

		dto.getHeaders().add("Inicial");
		dto.getHeaders().add("Vigente");
		dto.getHeaders().add("Devengado");
		dto.getHeaders().add("Ejecutado (%)");

		List<LineaDto> list = ServiceFactory.get(LineaPresupuestoService.class).findBy(form.getAnio(), form.getAjuste(), form.getTipoFiltro(), emptyAll(form.getJurisdiccion()), emptyAll(form.getEntidad()), emptyAll(form.getPrograma()), emptyAll(form.getActividad()), emptyAll(form.getFinalidad()), emptyAll(form.getFuncion()), form.getSqlSearch(), form.getColumnSort());
		for (Iterator<LineaDto> it = list.iterator(); it.hasNext();) {
			LineaDto item = it.next();

			List<Object> row = new ArrayList<Object>();
			if (form.getActividad().getId() >= 0) {
				row.add(item.getActividad());
			} else if (form.getPrograma().getId() >= 0) {
				row.add(item.getActividad());
			} else if (form.getEntidad().getId() >= 0) {
				row.add(item.getPrograma());
			} else if (form.getJurisdiccion().getId() >= 0) {
				row.add(item.getEntidad());
			} else {
				row.add(item.getJurisdiccion());
			}
			row.add(item.getInicial().setScale(2, RoundingMode.HALF_UP));
			row.add(item.getVigente().setScale(2, RoundingMode.HALF_UP));
			row.add(item.getDevengado().setScale(2, RoundingMode.HALF_UP));
			row.add(item.getEjecutado().setScale(2, RoundingMode.HALF_UP));
			dto.getItems().add(row);
		}

		byte[] fileData = generateCsv(dto);
		return downloadFile("datos.csv", fileData, MediaType.APPLICATION_OCTET_STREAM);
	}

	@PostMapping(value = "/excelGrafico")
	public HttpEntity<byte[]> excelGrafico(@ModelAttribute("command") MonitorForm form, BindingResult result, RedirectAttributes redirectAttributes) throws Exception {
		ExcelDto dto = new ExcelDto();

		String ajuste = "Sin ajuste por inflación";
		if (form.getAjuste() == 2) {
			ajuste = "Ajuste por IPC Promedio";
		} else if (form.getAjuste() == 3) {
			ajuste = "Ajuste por IPC Acumulado";
		}

		dto.setTitle("Tabla de datos *Valores expresados en millones de pesos argentinos - " + ajuste);
		dto.setHeaders(new ArrayList<>());
		dto.getHeaders().add("Año");

		if (form.getTipoFiltro() == 1) {
			if (emptyAll(form.getJurisdiccion()) != null) {
				dto.getHeaders().add("Jurisdicción");
			}

			if (emptyAll(form.getEntidad()) != null) {
				dto.getHeaders().add("Organismo");
			}

			if (emptyAll(form.getPrograma()) != null) {
				dto.getHeaders().add("Programa");
			}

			if (emptyAll(form.getActividad()) != null) {
				dto.getHeaders().add("Actividad");
			}
		} else {
			if (emptyAll(form.getFinalidad()) != null) {
				dto.getHeaders().add("Finalidad");
			}

			if (emptyAll(form.getFuncion()) != null) {
				dto.getHeaders().add("Funcion");
			}
		}

		switch (form.getTipo()) {
		case 1:
			dto.getHeaders().add("Inicial");
			break;
		case 2:
			dto.getHeaders().add("Vigente");
			break;
		case 3:
			dto.getHeaders().add("Devengado");
			break;
		case 5:
			dto.getHeaders().add("Ejecucion");
			break;
		default:
			dto.getHeaders().add("Inicial");
			dto.getHeaders().add("Vigente");
			dto.getHeaders().add("Devengado");

		}

		List<LineaDto> list = ServiceFactory.get(LineaPresupuestoService.class).getExcel(form.getAnio(), form.getTipo(), form.getTipoFiltro(), form.getAjuste(), emptyAll(form.getJurisdiccion()), emptyAll(form.getEntidad()), emptyAll(form.getPrograma()), emptyAll(form.getActividad()), emptyAll(form.getFinalidad()), emptyAll(form.getFuncion()));
		for (Iterator<LineaDto> it = list.iterator(); it.hasNext();) {
			LineaDto item = it.next();

			List<Object> row = new ArrayList<Object>();
			row.add(item.getAnio());

			if (form.getTipoFiltro() == 1) {
				if (emptyAll(form.getJurisdiccion()) != null) {
					row.add(item.getJurisdiccion());
				}

				if (emptyAll(form.getEntidad()) != null) {
					row.add(item.getEntidad());
				}

				if (emptyAll(form.getPrograma()) != null) {
					row.add(item.getPrograma());
				}

				if (emptyAll(form.getActividad()) != null) {
					row.add(item.getActividad());
				}
			} else {
				if (emptyAll(form.getFinalidad()) != null) {
					row.add(item.getFinalidad());
				}

				if (emptyAll(form.getFuncion()) != null) {
					row.add(item.getFuncion());
				}

			}

			if (form.getTipo() != -1) {
				row.add(item.getInicial());
			} else {
				row.add(item.getInicial());
				row.add(item.getVigente());
				row.add(item.getDevengado());
			}
			dto.getItems().add(row);
		}

		byte[] fileData = ExcelFactory.get(GenericExcel.class).generate(dto);
		return downloadFile("excel.xlsx", fileData, MediaType.APPLICATION_OCTET_STREAM);
	}
}
