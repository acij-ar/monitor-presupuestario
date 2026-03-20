package com.acij.service;

import java.util.List;

import com.acij.common.charts.ChartItem;
import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.dao.DaoFactory;
import com.acij.common.service.AbstractEntityService;
import com.acij.common.service.exceptions.ServiceException;
import com.acij.dao.LineaPresupuestoDao;
import com.acij.model.Actividad;
import com.acij.model.Entidad;
import com.acij.model.Finalidad;
import com.acij.model.Funcion;
import com.acij.model.Jurisdiccion;
import com.acij.model.LineaDto;
import com.acij.model.LineaPresupuesto;
import com.acij.model.Programa;
import com.acij.model.ResumenDto;
import com.acij.model.TimelineDto;
import com.acij.model.comparador.GrupoItem;

public class LineaPresupuestoService extends AbstractEntityService<LineaPresupuesto> {

	@Override
	protected AbstractEntityDao<LineaPresupuesto> createDao() {
		return DaoFactory.get(LineaPresupuestoDao.class);
	}

	public void procesar(String url, Integer anio, String type) throws ServiceException {
		try {
			((LineaPresupuestoDao) dao).procesarZipDesdeUrl(url, anio, type);
			super.commit();
		} catch (Exception e) {
			super.rollback();
			throw new ServiceException(e);
		}
	}
	
	public String getUltimaActualizacion() throws ServiceException {
		return ((LineaPresupuestoDao) dao).getUltimaActualizacion();
	}

	public List<ChartItem> findComparadorAnual(Integer anio, Integer type, Integer ajuste, Integer tipoFiltro, Jurisdiccion jurisdiccion, Entidad entidad, Programa programa, Actividad actividad, Finalidad finalidad, Funcion funcion) throws ServiceException {
		return ((LineaPresupuestoDao) dao).findComparadorAnual(anio, type, ajuste, tipoFiltro, jurisdiccion, entidad, programa, actividad, finalidad, funcion);
	}

	public ResumenDto getResumen(Integer anio,Integer tipoFiltro, Integer type, Integer ajuste, Jurisdiccion jurisdiccion, Entidad entidad, Programa programa, Actividad actividad, Finalidad finalidad, Funcion funcion) throws ServiceException {
		return ((LineaPresupuestoDao) dao).getResumen(anio, tipoFiltro, type, ajuste, jurisdiccion, entidad, programa, actividad, finalidad, funcion);
	}

	public List<ChartItem> getSerieForYear(Integer anio, Integer tipoFiltro, Integer type, Integer ajuste, Jurisdiccion jurisdiccion, Entidad entidad, Programa programa, Actividad actividad, Finalidad finalidad, Funcion funcion) throws ServiceException {
		return ((LineaPresupuestoDao) dao).getSerieForYear(anio, tipoFiltro, type, ajuste, jurisdiccion, entidad, programa, actividad, finalidad, funcion);
	}

	public List<ChartItem> getSerieDevengadoForYearMonth(Integer anio, Integer ajuste,Integer tipoFiltro, Jurisdiccion jurisdiccion, Entidad entidad, Programa programa, Actividad actividad, Finalidad finalidad, Funcion funcion) throws ServiceException {
		return ((LineaPresupuestoDao) dao).getSerieDevengadoForYearMonth(anio, ajuste, tipoFiltro, jurisdiccion, entidad, programa, actividad, finalidad, funcion);
	}

	public List<LineaDto> findBy(Integer anio, Integer ajuste, Integer tipoFiltro, Jurisdiccion jurisdiccion, Entidad entidad, Programa programa, Actividad actividad, Finalidad finalidad, Funcion funcion, String sqlSearch, String sqlSort) throws ServiceException {
		return ((LineaPresupuestoDao) dao).findBy(anio, ajuste, tipoFiltro, jurisdiccion, entidad, programa, actividad, finalidad, funcion, sqlSearch, sqlSort);
	}

	public List<ChartItem> findChartAnio(Integer tipo, Integer ajuste, List<GrupoItem> grupo1, List<GrupoItem> grupo2) throws ServiceException {
		return ((LineaPresupuestoDao) dao).findChartAnio(tipo, ajuste, grupo1, grupo2);
	}

	public List<LineaDto> getExcel(Integer anio, Integer type, Integer tipoFiltro, Integer ajuste, Jurisdiccion jurisdiccion, Entidad entidad, Programa programa, Actividad actividad, Finalidad finalidad, Funcion funcion) throws ServiceException {
		return ((LineaPresupuestoDao) dao).getExcel(anio, type, tipoFiltro, ajuste, jurisdiccion, entidad, programa, actividad,finalidad, funcion);
	}
	
	public List<TimelineDto> getTimeline(Integer anio, Integer type, Integer ajuste, Jurisdiccion jurisdiccion, Entidad entidad, Programa programa, Actividad actividad) {
		return ((LineaPresupuestoDao) dao).getTimeline(anio, type, ajuste, jurisdiccion, entidad, programa, actividad);
	}
}