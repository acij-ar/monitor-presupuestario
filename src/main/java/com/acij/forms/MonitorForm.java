package com.acij.forms;

import java.util.List;

import com.acij.common.forms.CommonForm;
import com.acij.common.model.IdLabelEntity;
import com.acij.model.Actividad;
import com.acij.model.Entidad;
import com.acij.model.Finalidad;
import com.acij.model.Funcion;
import com.acij.model.Jurisdiccion;
import com.acij.model.Programa;

public class MonitorForm extends CommonForm {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private List<Integer> anios;
	private List<IdLabelEntity> meses;

	private List<Entidad> entidades;
	private List<Programa> programas;
	private List<Jurisdiccion> jurisdicciones;
	private List<Actividad> actividades;

	private List<Finalidad> finalidades;
	private List<Funcion> funciones;

	private Entidad entidad;
	private Programa programa;
	private Jurisdiccion jurisdiccion;
	private Actividad actividad;
	private Finalidad finalidad;
	private Funcion funcion;

	private Integer anio = 2025;
	private Integer mes;

	private Integer tipo = -1;
	private Integer ajuste = 1;
	private Integer tipoFiltro = 1;
	

	public Entidad getEntidad() {
		return entidad;
	}

	public void setEntidad(Entidad entidad) {
		this.entidad = entidad;
	}

	public Programa getPrograma() {
		return programa;
	}

	public void setPrograma(Programa programa) {
		this.programa = programa;
	}

	public Jurisdiccion getJurisdiccion() {
		return jurisdiccion;
	}

	public void setJurisdiccion(Jurisdiccion jurisdiccion) {
		this.jurisdiccion = jurisdiccion;
	}

	public Actividad getActividad() {
		return actividad;
	}

	public void setActividad(Actividad actividad) {
		this.actividad = actividad;
	}

	public Integer getAnio() {
		return anio;
	}

	public void setAnio(Integer anio) {
		this.anio = anio;
	}

	public Integer getMes() {
		return mes;
	}

	public void setMes(Integer mes) {
		this.mes = mes;
	}

	public Integer getTipo() {
		return tipo;
	}

	public void setTipo(Integer tipo) {
		this.tipo = tipo;
	}

	public Integer getAjuste() {
		return ajuste;
	}

	public void setAjuste(Integer ajuste) {
		this.ajuste = ajuste;
	}

	public List<Integer> getAnios() {
		return anios;
	}

	public void setAnios(List<Integer> anios) {
		this.anios = anios;
	}

	public List<IdLabelEntity> getMeses() {
		return meses;
	}

	public void setMeses(List<IdLabelEntity> meses) {
		this.meses = meses;
	}

	public List<Entidad> getEntidades() {
		return entidades;
	}

	public void setEntidades(List<Entidad> entidades) {
		this.entidades = entidades;
	}

	public List<Programa> getProgramas() {
		return programas;
	}

	public void setProgramas(List<Programa> programas) {
		this.programas = programas;
	}

	public List<Jurisdiccion> getJurisdicciones() {
		return jurisdicciones;
	}

	public void setJurisdicciones(List<Jurisdiccion> jurisdicciones) {
		this.jurisdicciones = jurisdicciones;
	}

	public List<Actividad> getActividades() {
		return actividades;
	}

	public void setActividades(List<Actividad> actividades) {
		this.actividades = actividades;
	}

	public Integer getTipoFiltro() {
		return tipoFiltro;
	}

	public void setTipoFiltro(Integer tipoFiltro) {
		this.tipoFiltro = tipoFiltro;
	}

	public List<Finalidad> getFinalidades() {
		return finalidades;
	}

	public void setFinalidades(List<Finalidad> finalidades) {
		this.finalidades = finalidades;
	}

	public List<Funcion> getFunciones() {
		return funciones;
	}

	public void setFunciones(List<Funcion> funciones) {
		this.funciones = funciones;
	}

	public Finalidad getFinalidad() {
		return finalidad;
	}

	public void setFinalidad(Finalidad finalidad) {
		this.finalidad = finalidad;
	}

	public Funcion getFuncion() {
		return funcion;
	}

	public void setFuncion(Funcion funcion) {
		this.funcion = funcion;
	}

	

	
}
