package com.acij.dao;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PushbackInputStream;
import java.io.Reader;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.time.Year;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

import org.apache.commons.lang3.NotImplementedException;

import com.acij.common.charts.ChartItem;
import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.dao.DaoFactory;
import com.acij.common.model.ModelHelper;
import com.acij.common.service.exceptions.DAOException;
import com.acij.common.service.exceptions.ServiceException;
import com.acij.model.Actividad;
import com.acij.model.Entidad;
import com.acij.model.Finalidad;
import com.acij.model.Funcion;
import com.acij.model.Jurisdiccion;
import com.acij.model.LineaDto;
import com.acij.model.LineaPresupuesto;
import com.acij.model.MapeoJurisdiccional;
import com.acij.model.Presupuesto;
import com.acij.model.Programa;
import com.acij.model.Proyecto;
import com.acij.model.ResumenDto;
import com.acij.model.Servicio;
import com.acij.model.Subjurisdiccion;
import com.acij.model.Subprograma;
import com.acij.model.TimelineDto;
import com.acij.model.comparador.GrupoItem;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;

public class LineaPresupuestoDao extends AbstractEntityDao<LineaPresupuesto> {

	@Override
	protected LineaPresupuesto resultSetToObject(ResultSet rs) throws Exception {
		LineaPresupuesto o = new LineaPresupuesto();
		return o;
	}

	@Override
	protected void saveObject(LineaPresupuesto o) throws Exception {
		throw new NotImplementedException();
	}

	@Override
	protected void updateObject(LineaPresupuesto o) throws Exception {
		throw new NotImplementedException();
	}

	@Override
	protected void removeObject(LineaPresupuesto o) throws Exception {
		throw new NotImplementedException();
	}

	@Override
	protected LineaPresupuesto findByPkObject(LineaPresupuesto o) throws Exception {
		throw new NotImplementedException();
	}

	public String getUltimaActualizacion() throws DAOException {
		try {
			PreparedStatement pstmt = getConnection().prepareStatement("select ultima_actualizacion from general where id = 1");
			return super.findValueBy(pstmt, String.class);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public void procesarZipDesdeUrl(String urlZip, Integer anio, String type) throws DAOException {
		try {
			SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
			System.out.println(sdf.format(new Date(System.currentTimeMillis())) + "Obteniendo ZIP de url " + urlZip);
			try (InputStream inputStream = new URL(urlZip).openStream(); ZipInputStream zipIn = new ZipInputStream(inputStream)) {
				ZipEntry entry;
				while ((entry = zipIn.getNextEntry()) != null) {
					if (entry.getName().toLowerCase().endsWith(".csv")) {
						if (type.equals("datos_mensuales")) {
							procesarCSV(urlZip, zipIn, anio);
						} else if (type.equals("mapeo")) {
							procesarCSVMapeo(urlZip, zipIn, anio);
						}
						break;
					}
				}
			}

			try {
			actualizarPeriodos();
			} catch(Exception e) {
				System.out.println(sdf.format(new Date(System.currentTimeMillis())) + "Error actualizando periodos ");
				e.printStackTrace();
			}
			System.out.println(sdf.format(new Date(System.currentTimeMillis())) + "Fin proceso");
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	private void procesarCSVMapeo(String urlZip, InputStream csvStream, Integer anio) throws Exception {
		// 1. Leer CSV y parsear

		String INSERT_SQL = "INSERT INTO mapeo_jurisdiccional (" + "ejercicio_presupuestario, sector_id, subsector_id, caracter_id, jurisdiccion_id, subjurisdiccion_id, entidad_id, servicio_id, programa_id, subprograma_id, proyecto_id, actividad_id, obra_id, inciso_id, principal_id, parcial_id, subparcial_id, procedencia_id, fuente_id, ubicacion_geografica_id, clasificador_economico_8_digitos_id, finalidad_id, funcion_id, "
				+ "ejercicio_presupuestario_mapeado, sector_mapeado_id, subsector_mapeado_id, caracter_mapeado_id, jurisdiccion_mapeado_id, subjurisdiccion_mapeado_id, entidad_mapeado_id, servicio_mapeado_id, programa_mapeado_id, subprograma_mapeado_id, proyecto_mapeado_id, actividad_mapeado_id, obra_mapeado_id, inciso_mapeado_id, principal_mapeado_id, parcial_mapeado_id, subparcial_mapeado_id, procedencia_mapeado_id, fuente_mapeado_id, ubicacion_geografica_mapeado_id, clasificador_economico_8_digitos_mapeado_id, finalidad_mapeado_id, funcion_mapeado_id"
				+ ") VALUES (" + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, " + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?" + ") " + "";

		PreparedStatement pstmt = getConnection().prepareStatement("delete from mapeo_jurisdiccional where ejercicio_presupuestario_mapeado = ?");
		pstmt.setLong(1, anio);
		super.execute(pstmt);

		System.out.println("\tAbriendo CSV");
		pstmt = getConnection().prepareStatement(INSERT_SQL);
		try (BufferedReader reader = new BufferedReader(new InputStreamReader(csvStream, StandardCharsets.UTF_8))) {
			String line;
			int lineNumber = 0;
			System.out.println("\tLeyendo CSV");
			while ((line = reader.readLine()) != null) {
				lineNumber++;
				if (lineNumber == 1)
					continue; // Encabezado

				String[] p = line.split(",", -1); // -1 para conservar vacÃ­os

				MapeoJurisdiccional r = new MapeoJurisdiccional();

				r.setEjercicioPresupuestario(parseInt(p[0]));
				r.setSectorId(parseInt(p[1]));
				r.setSubsectorId(parseInt(p[2]));
				r.setCaracterId(parseInt(p[3]));
				r.setJurisdiccionId(parseInt(p[4]));
				r.setSubjurisdiccionId(parseInt(p[5]));
				r.setEntidadId(parseInt(p[6]));
				r.setServicioId(parseInt(p[7]));
				r.setProgramaId(parseInt(p[8]));
				r.setSubprogramaId(parseInt(p[9]));
				r.setProyectoId(parseInt(p[10]));
				r.setActividadId(parseInt(p[11]));
				r.setObraId(parseInt(p[12]));
				r.setIncisoId(parseInt(p[13]));
				r.setPrincipalId(parseInt(p[14]));
				r.setParcialId(parseInt(p[15]));
				r.setSubparcialId(parseInt(p[16]));
				r.setProcedenciaId(p[17]);
				r.setFuenteId(p[18]);
				r.setUbicacionGeograficaId(parseInt(p[19]));
				r.setClasificadorEconomico8DigitosId(parseInt(p[20]));
				r.setFinalidadId(parseInt(p[21]));
				r.setFuncionId(parseInt(p[22]));

				r.setEjercicioPresupuestarioMapeado(parseInt(p[23]));
				r.setSectorMapeadoId(parseInt(p[24]));
				r.setSubsectorMapeadoId(parseInt(p[25]));
				r.setCaracterMapeadoId(parseInt(p[26]));
				r.setJurisdiccionMapeadoId(parseInt(p[27]));
				r.setSubjurisdiccionMapeadoId(parseInt(p[28]));
				r.setEntidadMapeadoId(parseInt(p[29]));
				r.setServicioMapeadoId(parseInt(p[30]));
				r.setProgramaMapeadoId(parseInt(p[31]));
				r.setSubprogramaMapeadoId(parseInt(p[32]));
				r.setProyectoMapeadoId(parseInt(p[33]));
				r.setActividadMapeadoId(parseInt(p[34]));
				r.setObraMapeadoId(parseInt(p[35]));
				r.setIncisoMapeadoId(parseInt(p[36]));
				r.setPrincipalMapeadoId(parseInt(p[37]));
				r.setParcialMapeadoId(parseInt(p[38]));
				r.setSubparcialMapeadoId(parseInt(p[39]));
				r.setProcedenciaMapeadoId(p[40]);
				r.setFuenteMapeadoId(p[41]);
				r.setUbicacionGeograficaMapeadoId(parseInt(p[42]));
				r.setClasificadorEconomico8DigitosMapeadoId(parseInt(p[43]));
				r.setFinalidadMapeadoId(parseInt(p[44]));
				r.setFuncionMapeadoId(parseInt(p[45]));

				int i = 1;
				pstmt.setObject(i++, r.getEjercicioPresupuestario());
				pstmt.setObject(i++, r.getSectorId());
				pstmt.setObject(i++, r.getSubsectorId());
				pstmt.setObject(i++, r.getCaracterId());
				pstmt.setObject(i++, r.getJurisdiccionId());
				pstmt.setObject(i++, r.getSubjurisdiccionId());
				pstmt.setObject(i++, r.getEntidadId());
				pstmt.setObject(i++, r.getServicioId());
				pstmt.setObject(i++, r.getProgramaId());
				pstmt.setObject(i++, r.getSubprogramaId());
				pstmt.setObject(i++, r.getProyectoId());
				pstmt.setObject(i++, r.getActividadId());
				pstmt.setObject(i++, r.getObraId());
				pstmt.setObject(i++, r.getIncisoId());
				pstmt.setObject(i++, r.getPrincipalId());
				pstmt.setObject(i++, r.getParcialId());
				pstmt.setObject(i++, r.getSubparcialId());
				pstmt.setString(i++, r.getProcedenciaId());
				pstmt.setString(i++, r.getFuenteId());
				pstmt.setObject(i++, r.getUbicacionGeograficaId());
				pstmt.setObject(i++, r.getClasificadorEconomico8DigitosId());
				pstmt.setObject(i++, r.getFinalidadId());
				pstmt.setObject(i++, r.getFuncionId());

				/* ---------- MAPEADO ---------- */
				pstmt.setObject(i++, r.getEjercicioPresupuestarioMapeado());
				pstmt.setObject(i++, r.getSectorMapeadoId());
				pstmt.setObject(i++, r.getSubsectorMapeadoId());
				pstmt.setObject(i++, r.getCaracterMapeadoId());
				pstmt.setObject(i++, r.getJurisdiccionMapeadoId());
				pstmt.setObject(i++, r.getSubjurisdiccionMapeadoId());
				pstmt.setObject(i++, r.getEntidadMapeadoId());
				pstmt.setObject(i++, r.getServicioMapeadoId());
				pstmt.setObject(i++, r.getProgramaMapeadoId());
				pstmt.setObject(i++, r.getSubprogramaMapeadoId());
				pstmt.setObject(i++, r.getProyectoMapeadoId());
				pstmt.setObject(i++, r.getActividadMapeadoId());
				pstmt.setObject(i++, r.getObraMapeadoId());
				pstmt.setObject(i++, r.getIncisoMapeadoId());
				pstmt.setObject(i++, r.getPrincipalMapeadoId());
				pstmt.setObject(i++, r.getParcialMapeadoId());
				pstmt.setObject(i++, r.getSubparcialMapeadoId());
				pstmt.setString(i++, r.getProcedenciaMapeadoId());
				pstmt.setString(i++, r.getFuenteMapeadoId());
				pstmt.setObject(i++, r.getUbicacionGeograficaMapeadoId());
				pstmt.setObject(i++, r.getClasificadorEconomico8DigitosMapeadoId());
				pstmt.setObject(i++, r.getFinalidadMapeadoId());
				pstmt.setObject(i++, r.getFuncionMapeadoId());

				pstmt.addBatch();

				if (lineNumber % 10000 == 0) {
					System.out.println("Procesadas " + lineNumber);
					pstmt.executeBatch();
					pstmt.clearBatch();
				}
			}

			System.out.println("Ejecutando batch");
			pstmt.executeBatch();
		} finally {
			super.close(pstmt);
		}
	}

	private Integer parseInt(String s) {
		try {
			return (s == null || s.trim().isEmpty()) ? null : Integer.parseInt(s.trim());
		} catch (NumberFormatException e) {
			return null;
		}
	}

	private Reader removeBOM(InputStream is) throws IOException {
		PushbackInputStream pushbackInputStream = new PushbackInputStream(is, 3);
		byte[] bom = new byte[3];
		int read = pushbackInputStream.read(bom, 0, bom.length);

		if (read == 3) {
			if (!(bom[0] == (byte) 0xEF && bom[1] == (byte) 0xBB && bom[2] == (byte) 0xBF)) {
				pushbackInputStream.unread(bom, 0, read); // No BOM
			}
		} else if (read != -1) {
			pushbackInputStream.unread(bom, 0, read);
		}

		return new InputStreamReader(pushbackInputStream, StandardCharsets.UTF_8);
	}

	private void procesarCSV(String urlZip, InputStream csvStream, Integer anio) throws Exception {
		// 1. Leer CSV y parsear
		List<LineaPresupuesto> lineas = new ArrayList<>();
		System.out.println("\tLeyendo CSV");
		CsvToBean<LineaPresupuesto> csvToBean = null;
		try (Reader reader = removeBOM(csvStream); BufferedReader bufferedReader = new BufferedReader(reader)) {
			csvToBean = new CsvToBeanBuilder<LineaPresupuesto>(bufferedReader).withType(LineaPresupuesto.class).withIgnoreLeadingWhiteSpace(true).withSkipLines(0).withSeparator(',').build();

			lineas = csvToBean.parse();
		}
		// 2. Listas para cache
		System.out.println("\tObteniendo tablas maestras");
		List<Jurisdiccion> jurisdicciones = DaoFactory.get(JurisdiccionDao.class).findAll();
		List<Subjurisdiccion> subjurisdicciones = DaoFactory.get(SubjurisdiccionDao.class).findAll();
		List<Entidad> entidades = DaoFactory.get(EntidadDao.class).findAll();
		List<Servicio> servicios = DaoFactory.get(ServicioDao.class).findAll();
		List<Programa> programas = DaoFactory.get(ProgramaDao.class).findAll();
		List<Subprograma> subprogramas = DaoFactory.get(SubprogramaDao.class).findAll();
		List<Proyecto> proyectos = DaoFactory.get(ProyectoDao.class).findAll();
		List<Actividad> actividades = DaoFactory.get(ActividadDao.class).findAll();
		List<Finalidad> finalidades = DaoFactory.get(FinalidadDao.class).findAll();
		List<Funcion> funciones = DaoFactory.get(FuncionDao.class).findAll();

		// Creo el presupuesto
		Presupuesto presupuesto = DaoFactory.get(PresupuestoDao.class).findByAnio(anio);

		if (presupuesto != null) {
			System.out.println("\tPresupuesto " + presupuesto.getId() + " encontrado");
			PreparedStatement pstmt = getConnection().prepareStatement("delete from lineas_presupuestos where id_presupuesto = ?");
			pstmt.setLong(1, presupuesto.getId());
			super.execute(pstmt);
			DaoFactory.get(PresupuestoDao.class).remove(presupuesto);
			System.out.println("\tPresupuesto " + presupuesto.getId() + " eliminado");
		}
		presupuesto = new Presupuesto();
		presupuesto.setAnio(anio);
		presupuesto.setFileReference(urlZip);
		DaoFactory.get(PresupuestoDao.class).save(presupuesto);

		// 3. Preparar statements
		System.out.println("\tPreparando stataments");
		PreparedStatement insertJ = getConnection().prepareStatement("insert into juridiscciones (id, descripcion, anio, id_externo) values (?, ?, ?, ?)");

		PreparedStatement insertSj = getConnection().prepareStatement("insert into subjurisdicciones (id, descripcion, anio, id_externo, id_jurisdiccion) values (?, ?, ?, ?, ?)");

		PreparedStatement insertE = getConnection().prepareStatement("insert into entidades (id, descripcion, anio, id_externo, id_subjurisdiccion) values (?, ?, ?, ?, ?)");

		PreparedStatement insertServ = getConnection().prepareStatement("insert into servicios (id, descripcion, anio,id_externo, id_entidad) values (?, ?, ?, ?, ?)");

		PreparedStatement insertP = getConnection().prepareStatement("insert into programas (id, descripcion, anio,id_externo, id_servicio) values (?, ?, ?, ?, ?)");

		PreparedStatement insertSp = getConnection().prepareStatement("insert into subprograma (id, descripcion, anio,id_externo, id_programa) values (?, ?, ?, ?, ?)");

		PreparedStatement insertProyecto = getConnection().prepareStatement("insert into proyectos (id, descripcion, anio, id_externo, id_subprograma) values (?, ?, ?, ?, ?)");

		PreparedStatement insertA = getConnection().prepareStatement("insert into actividades (id, descripcion, anio, id_externo, id_proyecto) values (?, ?, ?, ?, ?)");

		PreparedStatement insertFina = getConnection().prepareStatement("insert into finalidades (id, descripcion, anio, id_externo) values (?, ?, ?, ?)");

		PreparedStatement insertF = getConnection().prepareStatement("insert into funciones (id, descripcion, anio, id_externo, id_finalidad) values (?, ?, ?, ?, ?)");

		StringBuffer buff = new StringBuffer();
		buff.append("insert into lineas_presupuestos (anio, mes, id_juridisccion,id_subjurisdiccion, id_entidad,id_servicio, id_programa, id_subprograma, id_proyecto, id_actividad,id_finalidad, id_funcion, credito_presupuestado, credito_vigente, credito_devengado, credito_pagado, id_presupuesto) ");
		buff.append(" values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, " + presupuesto.getId() + ")");

		buff.append(" on conflict (anio, mes, id_juridisccion, id_subjurisdiccion,  id_entidad, id_servicio, id_programa,id_subprograma, id_proyecto,  id_actividad, id_finalidad, id_funcion) ");
		buff.append(" do update set ");
		buff.append(" 		credito_vigente = lineas_presupuestos.credito_vigente + excluded.credito_vigente, ");
		buff.append(" 		credito_devengado = lineas_presupuestos.credito_devengado + excluded.credito_devengado, ");
		buff.append(" 		credito_pagado = lineas_presupuestos.credito_pagado + excluded.credito_pagado, ");
		buff.append(" 		credito_presupuestado = lineas_presupuestos.credito_presupuestado + excluded.credito_presupuestado ");

		PreparedStatement insertLinea = getConnection().prepareStatement(buff.toString());

		try {
			int cantidad = lineas.size();
			System.out.println("Procesando lineas " + cantidad);
			int linea = 0;
			for (LineaPresupuesto l : lineas) {

				// for (Iterator<LineaPresupuesto> iterator = csvToBean.iterator();
				// iterator.hasNext();) {
				// LineaPresupuesto l = iterator.next();
				linea++;
				if (linea % 10000 == 0) {
					System.out.println("Procesadas " + linea);

				}
				// 4. Insertar si no existe (y actualizar cache)
				Jurisdiccion nuevaJ = new Jurisdiccion(l.getJurisdiccionId(), l.getJurisdiccionDescripcion(), l.getImpactoPresupuestarioAnio());
				if (!jurisdicciones.contains(nuevaJ)) {
					nuevaJ.setId(super.sequenceNextVal("jurisdicciones_id_seq"));
					insertJ.setLong(1, nuevaJ.getId());
					insertJ.setString(2, nuevaJ.getDescripcion());
					insertJ.setInt(3, nuevaJ.getAnio());
					insertJ.setLong(4, nuevaJ.getIdExterno());
					insertJ.addBatch();
					jurisdicciones.add(nuevaJ);
				} else {
					Jurisdiccion existente = jurisdicciones.get(jurisdicciones.indexOf(nuevaJ));
					if (!existente.getDescripcion().equals(nuevaJ.getDescripcion())) {
						// System.out.println("WARN Jurisdiccion: Linea ["+linea+"] " +
						// existente.getDescripcion() + " --> " + nuevaJ.getDescripcion());
					}

					nuevaJ = existente;
				}

				// Subjurisdiccion
				Subjurisdiccion nuevaSj = new Subjurisdiccion(l.getSubjurisdiccionId(), l.getSubjurisdiccionDescripcion(), l.getImpactoPresupuestarioAnio(), nuevaJ);
				if (!subjurisdicciones.contains(nuevaSj)) {
					nuevaSj.setId(super.sequenceNextVal("subjurisdicciones_id_seq"));
					insertSj.setLong(1, nuevaSj.getId());
					insertSj.setString(2, nuevaSj.getDescripcion());
					insertSj.setInt(3, nuevaSj.getAnio());
					insertSj.setLong(4, nuevaSj.getIdExterno());
					insertSj.setLong(5, nuevaSj.getJurisdiccion().getId());
					insertSj.addBatch();
					subjurisdicciones.add(nuevaSj);
				} else {
					Subjurisdiccion existente = subjurisdicciones.get(subjurisdicciones.indexOf(nuevaSj));
					if (!existente.getDescripcion().equals(nuevaSj.getDescripcion())) {
						throw new Exception("Error de importaciÃ³n linea" + linea);
					}

					nuevaSj = existente;
				}

				// Entidad
				Entidad nuevaE = new Entidad(l.getEntidadId(), l.getEntidadDescripcion(), l.getImpactoPresupuestarioAnio(), nuevaSj);
				if (!entidades.contains(nuevaE)) {
					nuevaE.setId(super.sequenceNextVal("entidades_id_seq"));
					insertE.setLong(1, nuevaE.getId());
					insertE.setString(2, nuevaE.getDescripcion());
					insertE.setInt(3, nuevaE.getAnio());
					insertE.setLong(4, nuevaE.getIdExterno());
					insertE.setLong(5, nuevaE.getSubjurisdiccion().getId());
					insertE.addBatch();
					entidades.add(nuevaE);
				} else {
					Entidad existente = entidades.get(entidades.indexOf(nuevaE));
					if (!existente.getDescripcion().equals(nuevaE.getDescripcion())) {
						throw new Exception("Error de importaciÃ³n linea" + linea);
					}

					nuevaE = existente;
				}

				// Servicio
				Servicio nuevaS = new Servicio(l.getServicioId(), l.getServicioDescripcion(), l.getImpactoPresupuestarioAnio(), nuevaE);
				if (!servicios.contains(nuevaS)) {
					nuevaS.setId(super.sequenceNextVal("servicios_id_seq"));
					insertServ.setLong(1, nuevaS.getId());
					insertServ.setString(2, nuevaS.getDescripcion());
					insertServ.setInt(3, nuevaS.getAnio());
					insertServ.setLong(4, nuevaS.getIdExterno());
					insertServ.setLong(5, nuevaS.getEntidad().getId());
					insertServ.addBatch();
					servicios.add(nuevaS);
				} else {
					Servicio existente = servicios.get(servicios.indexOf(nuevaS));
					if (!existente.getDescripcion().equals(nuevaS.getDescripcion())) {
						System.out.println("WARN PROGRAMA: Linea [" + linea + "] " + existente.getDescripcion() + " --> " + nuevaS.getDescripcion());
					}

					nuevaS = existente;
				}

				// Programa
				Programa nuevaP = new Programa(l.getProgramaId(), l.getProgramaDescripcion(), l.getImpactoPresupuestarioAnio(), nuevaS);
				if (!programas.contains(nuevaP)) {
					nuevaP.setId(super.sequenceNextVal("programas_id_seq"));
					insertP.setLong(1, nuevaP.getId());
					insertP.setString(2, nuevaP.getDescripcion());
					insertP.setInt(3, nuevaP.getAnio());
					insertP.setLong(4, nuevaP.getIdExterno());
					insertP.setLong(5, nuevaP.getServicio().getId());
					insertP.addBatch();
					programas.add(nuevaP);
				} else {
					Programa existente = programas.get(programas.indexOf(nuevaP));
					if (!existente.getDescripcion().equals(nuevaP.getDescripcion()) && !"".equals(nuevaP.getDescripcion())) {
						// System.out.println("WARN PROGRAMA: Linea ["+linea+"] " +
						// existente.getDescripcion() + " --> " + nuevaP.getDescripcion());
					}

					nuevaP = existente;
				}

				// Subprograma
				Subprograma nuevoSubprograma = new Subprograma(l.getSubprogramaId(), l.getSubprogramaDescripcion(), l.getImpactoPresupuestarioAnio(), nuevaP);
				if (!subprogramas.contains(nuevoSubprograma)) {
					nuevoSubprograma.setId(super.sequenceNextVal("subprograma_id_seq"));
					insertSp.setLong(1, nuevoSubprograma.getId());
					insertSp.setString(2, nuevoSubprograma.getDescripcion());
					insertSp.setInt(3, nuevoSubprograma.getAnio());
					insertSp.setLong(4, nuevoSubprograma.getIdExterno());
					insertSp.setLong(5, nuevoSubprograma.getPrograma().getId());
					insertSp.addBatch();
					subprogramas.add(nuevoSubprograma);
				} else {
					Subprograma existente = subprogramas.get(subprogramas.indexOf(nuevoSubprograma));
					if (!existente.getDescripcion().equals(nuevoSubprograma.getDescripcion()) && !"".equals(nuevoSubprograma.getDescripcion())) {
						// throw new Exception("Error de importaciÃ³n linea" + linea);
						// System.out.println("WARN SUBPROGRAMA: Linea ["+linea+"] " +
						// existente.getDescripcion() + " --> " + nuevoSubprograma.getDescripcion());
					}

					nuevoSubprograma = existente;
				}

				// Proyecto
				Proyecto nuevoProyecto = new Proyecto(l.getProyectoId(), l.getProyectoDescripcion(), l.getImpactoPresupuestarioAnio(), nuevoSubprograma);
				if (!proyectos.contains(nuevoProyecto)) {
					nuevoProyecto.setId(super.sequenceNextVal("proyectos_id_seq"));
					insertProyecto.setLong(1, nuevoProyecto.getId());
					insertProyecto.setString(2, nuevoProyecto.getDescripcion());
					insertProyecto.setInt(3, nuevoProyecto.getAnio());
					insertProyecto.setLong(4, nuevoProyecto.getIdExterno());
					insertProyecto.setLong(5, nuevoProyecto.getSubsubprograma().getId());
					insertProyecto.addBatch();
					proyectos.add(nuevoProyecto);
				} else {
					Proyecto existente = proyectos.get(proyectos.indexOf(nuevoProyecto));
					if (!existente.getDescripcion().equals(nuevoProyecto.getDescripcion()) && !"".equals(nuevoProyecto.getDescripcion())) {
						// System.out.println("WARN PROYECTO: Linea ["+linea+"] " +
						// existente.getDescripcion() + " --> " + nuevoProyecto.getDescripcion());
					}

					nuevoProyecto = existente;
				}

				// Actividad
				Actividad nuevaA = new Actividad(l.getActividadId(), l.getActividadDescripcion(), l.getImpactoPresupuestarioAnio(), nuevoProyecto);
				if (!actividades.contains(nuevaA)) {
					nuevaA.setId(super.sequenceNextVal("actividades_id_seq"));
					insertA.setLong(1, nuevaA.getId());
					insertA.setString(2, nuevaA.getDescripcion());
					insertA.setInt(3, nuevaA.getAnio());
					insertA.setLong(4, nuevaA.getIdExterno());
					insertA.setLong(5, nuevaA.getProyecto().getId());
					insertA.addBatch();
					actividades.add(nuevaA);
				} else {
					Actividad existente = actividades.get(actividades.indexOf(nuevaA));
					if (!existente.getDescripcion().equals(nuevaA.getDescripcion())) {
						// System.out.println("WARN Actividad: Linea ["+linea+"] " +
						// existente.getDescripcion() + " --> " + nuevaA.getDescripcion());
					}

					nuevaA = existente;
				}

				// Finalidad
				Finalidad nuevaFinalidad = new Finalidad(l.getFinalidadId(), l.getFinalidadDescripcion(), l.getImpactoPresupuestarioAnio());
				if (!finalidades.contains(nuevaFinalidad)) {
					nuevaFinalidad.setId(super.sequenceNextVal("finalidades_id_seq"));
					insertFina.setLong(1, nuevaFinalidad.getId());
					insertFina.setString(2, nuevaFinalidad.getDescripcion());
					insertFina.setInt(3, nuevaFinalidad.getAnio());
					insertFina.setLong(4, nuevaFinalidad.getIdExterno());
					insertFina.addBatch();
					finalidades.add(nuevaFinalidad);
				} else {
					Finalidad existente = finalidades.get(finalidades.indexOf(nuevaFinalidad));
					if (!existente.getDescripcion().equals(nuevaFinalidad.getDescripcion())) {
						throw new Exception("Error de importaciÃ³n linea" + linea + " - " + existente.getDescripcion() + " - " + nuevaFinalidad.getDescripcion());
					}

					nuevaFinalidad = existente;
				}

				// Funcion
				Funcion nuevaFunc = new Funcion(l.getFuncionId(), l.getFuncionDescripcion(), l.getImpactoPresupuestarioAnio(), nuevaFinalidad);
				if (!funciones.contains(nuevaFunc)) {
					nuevaFunc.setId(super.sequenceNextVal("funciones_id_seq"));
					insertF.setLong(1, nuevaFunc.getId());
					insertF.setString(2, nuevaFunc.getDescripcion());
					insertF.setInt(3, nuevaFunc.getAnio());
					insertF.setLong(4, nuevaFunc.getIdExterno());
					insertF.setLong(5, nuevaFunc.getFinalidad().getId());
					insertF.addBatch();
					funciones.add(nuevaFunc);
				} else {
					Funcion existente = funciones.get(funciones.indexOf(nuevaFunc));
					if (!existente.getDescripcion().equals(nuevaFunc.getDescripcion())) {
						throw new Exception("Error de importaciÃ³n linea" + linea);
					}

					nuevaFunc = existente;
				}

				// LÃ­nea de presupuesto
				insertLinea.setInt(1, l.getImpactoPresupuestarioAnio());
				insertLinea.setInt(2, l.getImpactoPresupuestarioMes());
				insertLinea.setLong(3, nuevaJ.getIdExterno());
				insertLinea.setLong(4, nuevaSj.getIdExterno());
				insertLinea.setLong(5, nuevaE.getIdExterno());
				insertLinea.setLong(6, nuevaS.getIdExterno());
				insertLinea.setLong(7, nuevaP.getIdExterno());
				insertLinea.setLong(8, nuevoSubprograma.getIdExterno());
				insertLinea.setLong(9, nuevoProyecto.getIdExterno());
				insertLinea.setLong(10, nuevaA.getIdExterno());
				insertLinea.setLong(11, nuevaFinalidad.getIdExterno());
				insertLinea.setLong(12, nuevaFunc.getIdExterno());
				insertLinea.setBigDecimal(13, l.getCreditoPresupuestado().multiply(new BigDecimal("1")));// 1000000
				insertLinea.setBigDecimal(14, l.getCreditoVigente().multiply(new BigDecimal("1")));
				insertLinea.setBigDecimal(15, l.getCreditoDevengado().multiply(new BigDecimal("1")));
				insertLinea.setBigDecimal(16, l.getCreditoPagado().multiply(new BigDecimal("1")));

				insertLinea.addBatch();
			}

			String ultimActualizacion = lineas.get(lineas.size() - 1).getUltimaActualizacionFecha();

			// 6. Ejecutar todos los batchs
			// Ejecutar todos los batchs
			System.out.println("Insertando datos en DB.");
			insertJ.executeBatch();
			insertSj.executeBatch();
			insertE.executeBatch();
			insertServ.executeBatch();
			insertP.executeBatch();
			insertSp.executeBatch();
			insertProyecto.executeBatch();
			insertA.executeBatch();
			insertFina.executeBatch();
			insertF.executeBatch();
			insertLinea.executeBatch();
			System.out.println("Fin batch");

			PreparedStatement pstmt = getConnection().prepareStatement("update general set ultima_actualizacion = ? where id = 1");
			pstmt.setString(1, ultimActualizacion);
			super.execute(pstmt);

		} finally {
			super.close(insertLinea);
			super.close(insertA);
			super.close(insertE);
			super.close(insertServ);
			super.close(insertP);
			super.close(insertSp);
			super.close(insertProyecto);
			super.close(insertJ);
			super.close(insertF);
			super.close(insertFina);
			super.close(insertSj);
		}

	}

	public ResumenDto getResumen(Integer anio, Integer tipoFiltro, Integer type, Integer ajuste, Jurisdiccion jurisdiccion, Entidad entidad, Programa programa, Actividad actividad, Finalidad finalidad, Funcion funcion) throws DAOException {
		try {
			ResumenDto dto = new ResumenDto();

			// Si el tipo elegido es TODOS muestra el vigente
			if (type == -1) {
				type = 2;
			}

			String columnName = getColumnName(type, ajuste);

			String tablaInflacion = "";
			if (ajuste > 1) {
				tablaInflacion = " inner join inflacion_anual inf on inf.anio = lp.anio ";
			}

			String sql = "select " + columnName + " from lineas_presupuestos lp " + tablaInflacion + " where lp.anio = " + anio;
			PreparedStatement pstmt = getConnection().prepareStatement(sql);
			BigDecimal total = super.findValueBy(pstmt, BigDecimal.class);
			dto.setAnio(anio.toString());
			dto.setPresupuestoAño(total.setScale(2, RoundingMode.HALF_UP));

			if (tipoFiltro == 1) {
				if (jurisdiccion != null) {
					jurisdiccion = DaoFactory.get(JurisdiccionDao.class).findByPk(jurisdiccion);
					sql = "select " + columnName + " from lineas_presupuestos lp " + tablaInflacion + " where lp.anio = " + anio + " and id_juridisccion = " + jurisdiccion.getIdExterno();
					pstmt = getConnection().prepareStatement(sql);
					total = super.findValueBy(pstmt, BigDecimal.class);
					dto.setJurisdiccion(jurisdiccion.getDescripcion());
					dto.setPresupuestoJurisdiccion(total.setScale(2, RoundingMode.HALF_UP));

					if (entidad != null) {
						entidad = DaoFactory.get(EntidadDao.class).findByPk(entidad);
						Subjurisdiccion subjurisdiccion = DaoFactory.get(SubjurisdiccionDao.class).findByPk(entidad.getSubjurisdiccion());
						sql = "select " + columnName + " from lineas_presupuestos lp " + tablaInflacion + " where lp.anio = " + anio + " and id_juridisccion = " + jurisdiccion.getIdExterno() + " and id_subjurisdiccion = " + subjurisdiccion.getIdExterno() + " and id_entidad =" + entidad.getIdExterno();
						pstmt = getConnection().prepareStatement(sql);
						total = super.findValueBy(pstmt, BigDecimal.class);
						dto.setEntidad(entidad.getDescripcion());
						dto.setPresupuestoEntidad(total.setScale(2, RoundingMode.HALF_UP));

						if (programa != null) {
							programa = DaoFactory.get(ProgramaDao.class).findByPk(programa);
							Servicio servicio = DaoFactory.get(ServicioDao.class).findByPk(programa.getServicio());
							sql = "select " + columnName + " from lineas_presupuestos lp " + tablaInflacion + " where lp.anio = " + anio + " and id_juridisccion = " + jurisdiccion.getIdExterno() + " and id_subjurisdiccion = " + subjurisdiccion.getIdExterno() + " and id_entidad =" + entidad.getIdExterno();
							sql += " and id_servicio = " + servicio.getIdExterno() + " and id_programa = " + programa.getIdExterno();
							pstmt = getConnection().prepareStatement(sql);
							total = super.findValueBy(pstmt, BigDecimal.class);
							dto.setPrograma(programa.getDescripcion());
							dto.setPresupuestoPrograma(total.setScale(2, RoundingMode.HALF_UP));

							if (actividad != null) {
								actividad = DaoFactory.get(ActividadDao.class).findByPk(actividad);
								Proyecto proyecto = DaoFactory.get(ProyectoDao.class).findByPk(actividad.getProyecto());
								Subprograma subprograma = DaoFactory.get(SubprogramaDao.class).findByPk(proyecto.getSubsubprograma());
								sql = "select " + columnName + " from lineas_presupuestos lp " + tablaInflacion + " where lp.anio = " + anio + " and id_juridisccion = " + jurisdiccion.getIdExterno() + " and id_subjurisdiccion = " + subjurisdiccion.getIdExterno() + " and id_entidad =" + entidad.getIdExterno();
								sql += " and id_servicio = " + servicio.getIdExterno() + " and id_programa = " + programa.getIdExterno();
								sql += " and id_subprograma = " + subprograma.getIdExterno() + " and id_proyecto = " + proyecto.getIdExterno() + " and id_actividad =" + actividad.getIdExterno();
								pstmt = getConnection().prepareStatement(sql);
								total = super.findValueBy(pstmt, BigDecimal.class);
								dto.setActividad(actividad.getDescripcion());
								dto.setPresupuestoActividad(total.setScale(2, RoundingMode.HALF_UP));
							}
						}

					}
				}
			} else {
				if (finalidad != null) {
					finalidad = DaoFactory.get(FinalidadDao.class).findByPk(finalidad);
					sql = "select " + columnName + " from lineas_presupuestos lp " + tablaInflacion + " where lp.anio = " + anio + " and id_finalidad = " + finalidad.getIdExterno();
					pstmt = getConnection().prepareStatement(sql);
					total = super.findValueBy(pstmt, BigDecimal.class);
					dto.setFinalidad(finalidad.getDescripcion());
					dto.setPresupuestoFinalidad(total.setScale(2, RoundingMode.HALF_UP));

					if (funcion != null) {
						funcion = DaoFactory.get(FuncionDao.class).findByPk(funcion);
						sql = "select " + columnName + " from lineas_presupuestos lp " + tablaInflacion + " where lp.anio = " + anio + " and id_finalidad = " + finalidad.getIdExterno() + " and id_funcion=" + funcion.getIdExterno();
						pstmt = getConnection().prepareStatement(sql);
						total = super.findValueBy(pstmt, BigDecimal.class);
						dto.setFuncion(funcion.getDescripcion());
						dto.setPresupuestoFuncion(total.setScale(2, RoundingMode.HALF_UP));
					}
				}
			}

			return dto;
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	private String getSerieName(Integer type) throws Exception {
		switch (type) {
		case -1:
			return "Todos";
		case 1:
			return "Credito Inicial";
		case 2:
			return "Credito Vigente";
		case 3:
			return "Credito Devengado";
		case 4:
			return "Credito Pagado";
		case 5:
			return "% Ejecucion";
		default:
			throw new Exception("Tipo invalido");
		}
	}

	private String getColumnName(Integer type, Integer ajuste) throws Exception {
		String ajusteQuery = "";
		switch (ajuste) {
		case 1:
			ajusteQuery = "*1)";
			break;
		case 2:
			ajusteQuery = "*inf.valor_ajuste_promedio)";
			break;
		case 3:
			ajusteQuery = "*inf.valor_ajuste_acumulado)";
			break;
		case 4:
			ajusteQuery = "*coalesce(inf.valor_ajuste_mensual,1))";
			break;
		}

		switch (type) {
		case 1:
			return "sum(credito_presupuestado" + ajusteQuery;
		case 2:
			return "sum(credito_vigente" + ajusteQuery;
		case 3:
			return "sum(credito_devengado" + ajusteQuery;
		case 4:
			return "sum(credito_pagado" + ajusteQuery;
		case 5:
			return "case when sum(credito_vigente) =0 then 0 else sum(credito_devengado) / sum(credito_vigente) *100 end ";
		case -1:
			return "sum(credito_presupuestado" + ajusteQuery + " inicial, " + "sum(credito_vigente" + ajusteQuery + " vigente, " + "sum(credito_devengado" + ajusteQuery + " devengado ";
		default:
			throw new Exception("Tipo invalido");
		}
	}

	/*
	 * Busca una serie para el aÃ±o actual no mapea con nada va directo a linea
	 * presupuesto
	 */
	public List<ChartItem> getSerieForYear(Integer anio, Integer tipoFiltro, Integer type, Integer ajuste, Jurisdiccion jurisdiccion, Entidad entidad, Programa programa, Actividad actividad, Finalidad finalidad, Funcion funcion) throws DAOException {
		List<ChartItem> result = new ArrayList<ChartItem>();
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		try {
			StringBuffer buff = new StringBuffer();

			String serieName = getSerieName(type);
			String columnName = getColumnName(type, ajuste);

			Subjurisdiccion subjurisdiccion = null;
			Servicio servicio = null;
			Subprograma subprograma = null;
			Proyecto proyecto = null;

			if (tipoFiltro == 1) {
				if (jurisdiccion != null) {
					jurisdiccion = DaoFactory.get(JurisdiccionDao.class).findByPk(jurisdiccion);
				}

				if (entidad != null) {
					entidad = DaoFactory.get(EntidadDao.class).findByPk(entidad);
					subjurisdiccion = DaoFactory.get(SubjurisdiccionDao.class).findByPk(entidad.getSubjurisdiccion());
				}

				if (programa != null) {
					programa = DaoFactory.get(ProgramaDao.class).findByPk(programa);
					servicio = DaoFactory.get(ServicioDao.class).findByPk(programa.getServicio());
				}

				if (actividad != null) {
					actividad = DaoFactory.get(ActividadDao.class).findByPk(actividad);
					proyecto = DaoFactory.get(ProyectoDao.class).findByPk(actividad.getProyecto());
					subprograma = DaoFactory.get(SubprogramaDao.class).findByPk(proyecto.getSubsubprograma());
				}
			} else {
				if (finalidad != null) {
					finalidad = DaoFactory.get(FinalidadDao.class).findByPk(finalidad);
				}

				if (funcion != null) {
					funcion = DaoFactory.get(FuncionDao.class).findByPk(funcion);
				}

			}

			buff.append(" select  '" + serieName + "' as serie , ");

			if (tipoFiltro == 1) {
				if (actividad != null) {
					buff.append(" a.descripcion as label, ");
					buff.append(" a.id, ");
					buff.append(" 'a' as type, ");
				} else if (programa != null) {
					buff.append(" a.descripcion as label, ");
					buff.append(" a.id, ");
					buff.append(" 'a' as type, ");
				} else if (entidad != null) {
					buff.append(" p.descripcion as label, ");
					buff.append(" p.id, ");
					buff.append(" 'p' as type, ");
				} else if (jurisdiccion != null) {
					buff.append(" e.descripcion as label, ");
					buff.append(" e.id, ");
					buff.append(" 'e' as type, ");
				} else {
					buff.append(" j.descripcion as label, ");
					buff.append(" j.id , ");
					buff.append(" 'j' as type, ");
				}
			} else {
				if (funcion != null) {
					buff.append(" fun.descripcion as label, ");
					buff.append(" fun.id, ");
					buff.append(" 'fun' as type, ");
				} else if (finalidad != null) {
					buff.append(" fun.descripcion as label, ");
					buff.append(" fun.id, ");
					buff.append(" 'fun' as type, ");
				} else {
					buff.append(" fin.descripcion as label, ");
					buff.append(" fin.id , ");
					buff.append(" 'fin' as type, ");
				}
			}

			if (type > 0) {
				buff.append(" " + columnName + " as valor  from lineas_presupuestos lp ");
			} else {
				buff.append(" " + columnName + " from lineas_presupuestos lp ");
			}
			if (ajuste > 1) {
				buff.append(" inner join inflacion_anual inf on inf.anio = lp.anio ");
			}

			if (tipoFiltro == 1) {
				buff.append(" 	inner join juridiscciones j on j.id_externo  = lp.id_juridisccion and lp.anio = j.anio ");
				buff.append(" 	inner join subjurisdicciones s2 on s2.id_externo  = lp.id_subjurisdiccion and lp.anio = s2.anio and j.id = s2.id_jurisdiccion ");
				buff.append(" 	inner join entidades e  on e.id_externo  = lp.id_entidad  and lp.anio = e.anio and s2.id = e.id_subjurisdiccion  ");
				buff.append(" 	inner join servicios s on s.id_externo  = lp.id_servicio and lp.anio = s.anio and e.id = s.id_entidad  ");
				buff.append(" 	inner join programas p on p.id_externo = lp.id_programa and lp.anio = p.anio and s.id = p.id_servicio  ");
				buff.append(" 	inner join subprograma sp on sp.id_externo = lp.id_subprograma and lp.anio = p.anio and p.id = sp.id_programa ");
				buff.append(" 	inner join proyectos proy on proy.id_externo = lp.id_proyecto and lp.anio = proy.anio and sp.id = proy.id_subprograma ");
				buff.append(" 	inner join actividades a on a.id_externo = lp.id_actividad and lp.anio = a.anio and proy.id = a.id_proyecto ");
			} else {
				buff.append(" 	inner join finalidades fin on fin.id_externo  = lp.id_finalidad and lp.anio = fin.anio ");
				buff.append(" 	inner join funciones fun on fun.id_externo  = lp.id_funcion and lp.anio = fun.anio and fin.id = fun.id_finalidad ");

			}

			buff.append(" where 1=1 and lp.anio = " + anio);

			if (tipoFiltro == 1) {
				if (jurisdiccion != null) {
					buff.append(" and lp.id_juridisccion=  " + jurisdiccion.getIdExterno());
				}

				if (entidad != null) {
					buff.append(" and lp.id_subjurisdiccion = " + subjurisdiccion.getIdExterno());
					buff.append(" and lp.id_entidad = " + entidad.getIdExterno());
				}

				if (programa != null) {
					buff.append(" and lp.id_servicio = " + servicio.getIdExterno());
					buff.append(" and lp.id_programa = " + programa.getIdExterno());
				}

				if (actividad != null) {
					buff.append(" 				and lp.id_subprograma = " + subprograma.getIdExterno());
					buff.append(" 				and lp.id_proyecto = " + proyecto.getIdExterno());
					buff.append(" 				and lp.id_actividad = " + actividad.getIdExterno());
				}
				if (actividad != null) {
					buff.append(" group by lp.anio,  j.id,  lp.id_subjurisdiccion, e.id, lp.id_servicio,  p.id, lp.id_subprograma, lp.id_proyecto, a.id  ");
				} else if (programa != null) {
					buff.append(" group by lp.anio,  j.id, lp.id_subjurisdiccion, e.id, lp.id_servicio,  p.id, lp.id_subprograma, lp.id_proyecto, a.id ");
				} else if (entidad != null) {
					buff.append(" group by lp.anio,  j.id, lp.id_subjurisdiccion, e.id, lp.id_servicio,  p.id ");
				} else if (jurisdiccion != null) {
					buff.append(" group by lp.anio,  j.id, lp.id_subjurisdiccion, e.id ");
				} else {
					buff.append(" group by lp.anio,  j.id  ");
				}

			} else {
				if (finalidad != null) {
					buff.append(" and lp.id_finalidad=  " + finalidad.getIdExterno());
				}

				if (funcion != null) {
					buff.append(" and lp.id_funcion = " + funcion.getIdExterno());
				}

				if (funcion != null) {
					buff.append(" group by lp.anio,  fin.id, fun.id  ");
				} else if (finalidad != null) {
					buff.append(" group by lp.anio,  fin.id, fun.id ");
				} else {
					buff.append(" group by lp.anio,  fin.id  ");
				}
			}

			if (type > 0) {
				buff.append(" order by " + columnName + " desc");
			} else {
				buff.append(" order by inicial desc");
			}

			pstmt = getConnection().prepareStatement(buff.toString());
			rs = pstmt.executeQuery();
			while (rs.next()) {
				ChartItem item = new ChartItem();
				item.setSerie(rs.getString("serie"));
				item.setLabel(rs.getString("label").replaceAll("'", "").replaceAll("\"", ""));

				if (contains(rs, "valor")) {
					item.setValue(rs.getDouble("valor"));
				}

				if (contains(rs, "inicial")) {
					item.setValue(rs.getDouble("inicial"));
				}

				if (contains(rs, "vigente")) {
					item.setValue1(rs.getDouble("vigente"));
				}

				if (contains(rs, "devengado")) {
					item.setValue2(rs.getDouble("devengado"));
				}

				item.setId(rs.getString("id"));
				item.setType(rs.getString("type"));
				result.add(item);
			}

			return result;
		} catch (Exception ex) {
			throw new DAOException(ex);
		} finally {
			super.close(pstmt);
			super.close(rs);
		}
	}

	/*
	 * Busca una serie para el aÃ±o actual no mapea con nada va directo a linea
	 * presupuesto
	 */
	public List<ChartItem> getSerieDevengadoForYearMonth(Integer anio, Integer ajuste, Integer tipoFiltro, Jurisdiccion jurisdiccion, Entidad entidad, Programa programa, Actividad actividad, Finalidad finalidad, Funcion funcion) throws DAOException {
		List<ChartItem> result = new ArrayList<ChartItem>();
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		try {
			StringBuffer buff = new StringBuffer();

			if (ajuste > 1) {
				ajuste = 4;// Ajuste Mensual
			}

			String columnName = getColumnName(3, ajuste);

			Subjurisdiccion subjurisdiccion = null;
			Servicio servicio = null;
			Subprograma subprograma = null;
			Proyecto proyecto = null;

			if (jurisdiccion != null) {
				jurisdiccion = DaoFactory.get(JurisdiccionDao.class).findByPk(jurisdiccion);
			}

			if (entidad != null) {
				entidad = DaoFactory.get(EntidadDao.class).findByPk(entidad);
				subjurisdiccion = DaoFactory.get(SubjurisdiccionDao.class).findByPk(entidad.getSubjurisdiccion());
			}

			if (programa != null) {
				programa = DaoFactory.get(ProgramaDao.class).findByPk(programa);
				servicio = DaoFactory.get(ServicioDao.class).findByPk(programa.getServicio());
			}

			if (actividad != null) {
				actividad = DaoFactory.get(ActividadDao.class).findByPk(actividad);
				proyecto = DaoFactory.get(ProyectoDao.class).findByPk(actividad.getProyecto());
				subprograma = DaoFactory.get(SubprogramaDao.class).findByPk(proyecto.getSubsubprograma());
			}

			if (finalidad != null) {
				finalidad = DaoFactory.get(FinalidadDao.class).findByPk(finalidad);
			}

			if (funcion != null) {
				funcion = DaoFactory.get(FuncionDao.class).findByPk(funcion);
			}

			buff.append(" select  lp.anio, lp.mes, 'serie' as label, ");
			buff.append(" " + columnName + " as valor  from lineas_presupuestos lp ");
			if (ajuste > 1) {
				buff.append(" left join inflacion inf on inf.anio = lp.anio and inf.mes = lp.mes ");
			}

			buff.append(" where 1=1  ");

			if (tipoFiltro == 1) {
				if (jurisdiccion != null && entidad == null) {
					buff.append(" and lp.id_juridisccion=  " + jurisdiccion.getIdExterno());
				} else {

					if (entidad != null) {
						if (programa == null) {
							if (entidad.getIdExterno() < 10) {
								// buff.append(" and lp.id_juridisccion= " + jurisdiccion.getIdExterno());
								// buff.append(" and lp.id_subjurisdiccion = " +
								// subjurisdiccion.getIdExterno());
								// buff.append(" and lp.id_entidad = " + entidad.getIdExterno());

								List<Servicio> servicios = DaoFactory.get(ServicioDao.class).findBy(entidad);
								String strServicio = servicios.stream().map(o -> String.valueOf(o.getIdExterno())).collect(Collectors.joining(","));
								buff.append(" and lp.id_entidad = " + entidad.getIdExterno());
								buff.append(" and lp.id_servicio in (" + strServicio + ") ");
							} else {
								buff.append(" and lp.id_entidad = " + entidad.getIdExterno());
							}
						} else {
							buff.append(" and lp.id_servicio = " + servicio.getIdExterno());
							buff.append(" and lp.id_programa = " + programa.getIdExterno());
						}

						if (actividad != null) {
							// buff.append(" and lp.id_juridisccion= " + jurisdiccion.getIdExterno());
							// buff.append(" and lp.id_subjurisdiccion = " +
							// subjurisdiccion.getIdExterno());
							// buff.append(" and lp.id_entidad = " + entidad.getIdExterno());
							// buff.append(" and lp.id_servicio = " + servicio.getIdExterno());
							buff.append(" and lp.id_programa = " + programa.getIdExterno());
							buff.append(" and lp.id_subprograma = " + subprograma.getIdExterno());
							buff.append(" and lp.id_proyecto = " + proyecto.getIdExterno());
							buff.append(" and lp.id_actividad = " + actividad.getIdExterno());
						}
					}
				}
			} else {
				if (finalidad != null) {
					buff.append(" 				and lp.id_finalidad = " + finalidad.getIdExterno());
				}

				if (funcion != null) {
					buff.append(" 				and lp.id_funcion = " + funcion.getIdExterno());
				}
			}

			buff.append(" group by lp.anio, lp.mes");

			buff.append(" order by 1,2,3");

			pstmt = getConnection().prepareStatement(buff.toString());
			rs = pstmt.executeQuery();
			while (rs.next()) {
				ChartItem item = new ChartItem();
				item.setxData(rs.getString("mes")); // Eje X
				item.setyData(rs.getString("anio")); // Eje Y
				item.setLabel(rs.getString("label"));
				item.setValue(rs.getDouble("valor"));
				result.add(item);
			}

			int anioActual = Year.now().getValue();

			// Agrupamos: serieName -> set de aÃ±os existentes
			Map<String, Set<String>> seriesMap = new HashMap<>();
			for (ChartItem item : result) {
				seriesMap.computeIfAbsent(item.getSerie(), k -> new HashSet<>()).add(item.getyData());
			}

			Set<String> existentes = seriesMap.get(null);
			for (int a = 1995; a <= anioActual; a++) {
				String label = String.valueOf(a);
				if (!existentes.contains(label)) {
					for (Integer mes = 1; mes <= 12; mes++) {
						result.add(new ChartItem(null, label, 0d, mes.toString(), label));
					}

				}
			}

			return result;
		} catch (Exception ex) {
			throw new DAOException(ex);
		} finally {
			super.close(pstmt);
			super.close(rs);
		}
	}

	public List<ChartItem> getSerie(Integer anio, Integer type, Integer ajuste, Integer filtrarPor, Jurisdiccion jurisdiccion, Entidad entidad, Programa programa, Actividad actividad, Finalidad finalidad, Funcion funcion) throws DAOException {
		if (filtrarPor == 1) {
			return getSerie(anio, type, ajuste, jurisdiccion, entidad, programa, actividad);
		} else {
			return getSerie(anio, type, ajuste, finalidad, funcion);
		}
	}

	public List<ChartItem> getSerie(Integer anio, Integer type, Integer ajuste, Jurisdiccion jurisdiccion, Entidad entidad, Programa programa, Actividad actividad) throws DAOException {
		List<ChartItem> result = new ArrayList<ChartItem>();
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		try {
			StringBuffer buff = new StringBuffer();

			String serieName = getSerieName(type);
			String columnName = getColumnName(type, ajuste);

			Subjurisdiccion subjurisdiccion = null;
			Servicio servicio = null;
			Subprograma subprograma = null;
			Proyecto proyecto = null;

			if (jurisdiccion != null) {
				jurisdiccion = DaoFactory.get(JurisdiccionDao.class).findByPk(jurisdiccion);
			}

			if (entidad != null) {
				entidad = DaoFactory.get(EntidadDao.class).findByPk(entidad);
				subjurisdiccion = DaoFactory.get(SubjurisdiccionDao.class).findByPk(entidad.getSubjurisdiccion());

			}

			if (programa != null) {
				programa = DaoFactory.get(ProgramaDao.class).findByPk(programa);
				servicio = DaoFactory.get(ServicioDao.class).findByPk(programa.getServicio());
			}

			if (actividad != null) {
				actividad = DaoFactory.get(ActividadDao.class).findByPk(actividad);
				proyecto = DaoFactory.get(ProyectoDao.class).findByPk(actividad.getProyecto());
				subprograma = DaoFactory.get(SubprogramaDao.class).findByPk(proyecto.getSubsubprograma());
			}

			buff.append(" select distinct '" + serieName + "' as serie ,lp.anio as label, " + columnName + " as valor  from lineas_presupuestos lp ");
			if (ajuste > 1) {
				buff.append(" inner join inflacion_anual inf on inf.anio = lp.anio ");
			}

			buff.append(" where 1=1 ");

			if (jurisdiccion != null && entidad == null) {
				buff.append(" and lp.id_juridisccion=  " + jurisdiccion.getIdExterno());
			} else {

				if (entidad != null) {
					if (programa == null) {
						if (entidad.getIdExterno() < 10) {
							// buff.append(" and lp.id_juridisccion= " + jurisdiccion.getIdExterno());
							// buff.append(" and lp.id_subjurisdiccion = " +
							// subjurisdiccion.getIdExterno());

							List<Servicio> servicios = DaoFactory.get(ServicioDao.class).findBy(entidad);
							String strServicio = servicios.stream().map(o -> String.valueOf(o.getIdExterno())).collect(Collectors.joining(","));
							buff.append(" and lp.id_entidad = " + entidad.getIdExterno());
							buff.append(" and lp.id_servicio in (" + strServicio + ") ");

						} else {
							buff.append(" and lp.id_entidad = " + entidad.getIdExterno());
						}
					} else {
						buff.append(" and lp.id_servicio = " + servicio.getIdExterno());
						buff.append(" and lp.id_programa = " + programa.getIdExterno());
					}

					if (actividad != null) {
						// buff.append(" and lp.id_juridisccion= " + jurisdiccion.getIdExterno());
						// buff.append(" and lp.id_subjurisdiccion = " +
						// subjurisdiccion.getIdExterno());
						// buff.append(" and lp.id_entidad = " + entidad.getIdExterno());
						// buff.append(" and lp.id_servicio = " + servicio.getIdExterno());
						buff.append(" and lp.id_programa = " + programa.getIdExterno());
						buff.append(" and lp.id_subprograma = " + subprograma.getIdExterno());
						buff.append(" and lp.id_proyecto = " + proyecto.getIdExterno());
						buff.append(" and lp.id_actividad = " + actividad.getIdExterno());
					}
				}
			}

			buff.append(" group by 2 ");
			buff.append(" order by 2");

			pstmt = getConnection().prepareStatement(buff.toString());
			rs = pstmt.executeQuery();
			while (rs.next()) {
				ChartItem item = new ChartItem();
				item.setSerie(rs.getString("serie"));
				item.setLabel(rs.getString("label").replaceAll("'", "").replaceAll("\"", ""));
				item.setValue(rs.getDouble("valor"));
				result.add(item);
			}
			super.close(pstmt);
			super.close(rs);

			int anioActual = Year.now().getValue();

			// Agrupamos: serieName -> set de aÃ±os existentes
			Map<String, Set<String>> seriesMap = new HashMap<>();
			for (ChartItem item : result) {
				seriesMap.computeIfAbsent(item.getSerie(), k -> new HashSet<>()).add(item.getLabel());
			}

			Set<String> existentes = seriesMap.get(serieName);
			for (int a = 1995; a <= anioActual; a++) {
				String label = String.valueOf(a);
				if (!existentes.contains(label)) {
					for (Integer mes = 1; mes <= 12; mes++) {
						result.add(new ChartItem(serieName, label, 0d, null, null));
					}

				}
			}

			result.sort(Comparator.comparingInt(item -> Integer.parseInt(item.getLabel())));
			return result;
		} catch (Exception ex) {
			throw new DAOException(ex);
		} finally {
			super.close(pstmt);
			super.close(rs);
		}
	}

	public List<ChartItem> getSerie(Integer anio, Integer type, Integer ajuste, Finalidad finalidad, Funcion funcion) throws DAOException {
		List<ChartItem> result = new ArrayList<ChartItem>();
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		try {
			StringBuffer buff = new StringBuffer();

			String serieName = getSerieName(type);
			String columnName = getColumnName(type, ajuste);

			if (finalidad != null) {
				finalidad = DaoFactory.get(FinalidadDao.class).findByPk(finalidad);
			}

			if (funcion != null) {
				funcion = DaoFactory.get(FuncionDao.class).findByPk(funcion);
			}

			buff.append(" select distinct '" + serieName + "' as serie ,lp.anio as label, " + columnName + " as valor  from lineas_presupuestos lp ");
			if (ajuste > 1) {
				buff.append(" inner join inflacion_anual inf on inf.anio = lp.anio ");
			}

			buff.append(" where 1=1 ");
			if (finalidad != null) {
				buff.append(" and lp.id_finalidad =  " + finalidad.getIdExterno());
			}

			if (funcion != null) {
				buff.append(" and lp.id_funcion =  " + funcion.getIdExterno());
			}

			buff.append(" group by 2 ");
			buff.append(" order by 2");

			pstmt = getConnection().prepareStatement(buff.toString());
			rs = pstmt.executeQuery();
			while (rs.next()) {
				ChartItem item = new ChartItem();
				item.setSerie(rs.getString("serie"));
				item.setLabel(rs.getString("label").replaceAll("'", "").replaceAll("\"", ""));
				item.setValue(rs.getDouble("valor"));
				result.add(item);
			}
			super.close(pstmt);
			super.close(rs);

			int anioActual = Year.now().getValue();

			// Agrupamos: serieName -> set de aÃ±os existentes
			Map<String, Set<String>> seriesMap = new HashMap<>();
			for (ChartItem item : result) {
				seriesMap.computeIfAbsent(item.getSerie(), k -> new HashSet<>()).add(item.getLabel());
			}

			Set<String> existentes = seriesMap.get(serieName);
			for (int a = 1995; a <= anioActual; a++) {
				String label = String.valueOf(a);
				if (!existentes.contains(label)) {
					for (Integer mes = 1; mes <= 12; mes++) {
						result.add(new ChartItem(serieName, label, 0d, null, null));
					}

				}
			}

			result.sort(Comparator.comparingInt(item -> Integer.parseInt(item.getLabel())));
			return result;

		} catch (Exception ex) {
			throw new DAOException(ex);
		} finally {
			super.close(pstmt);
			super.close(rs);
		}
	}

	public List<LineaDto> getExcel(Integer anio, Integer type, Integer tipoFiltro, Integer ajuste, Jurisdiccion jurisdiccion, Entidad entidad, Programa programa, Actividad actividad, Finalidad finalidad, Funcion funcion) throws DAOException {
		List<LineaDto> result = new ArrayList<LineaDto>();
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		try {
			StringBuffer buff = new StringBuffer();

			String columnName = getColumnName(type, ajuste);

			Subjurisdiccion subjurisdiccion = null;
			Servicio servicio = null;
			Subprograma subprograma = null;
			Proyecto proyecto = null;

			if (jurisdiccion != null) {
				jurisdiccion = DaoFactory.get(JurisdiccionDao.class).findByPk(jurisdiccion);
			}

			if (entidad != null) {
				entidad = DaoFactory.get(EntidadDao.class).findByPk(entidad);
				subjurisdiccion = DaoFactory.get(SubjurisdiccionDao.class).findByPk(entidad.getSubjurisdiccion());
			}

			if (programa != null) {
				programa = DaoFactory.get(ProgramaDao.class).findByPk(programa);
				servicio = DaoFactory.get(ServicioDao.class).findByPk(programa.getServicio());
			}

			if (actividad != null) {
				actividad = DaoFactory.get(ActividadDao.class).findByPk(actividad);
				proyecto = DaoFactory.get(ProyectoDao.class).findByPk(actividad.getProyecto());
				subprograma = DaoFactory.get(SubprogramaDao.class).findByPk(proyecto.getSubsubprograma());
			}

			if (finalidad != null) {
				finalidad = DaoFactory.get(FinalidadDao.class).findByPk(finalidad);
			}

			if (funcion != null) {
				funcion = DaoFactory.get(FuncionDao.class).findByPk(funcion);
			}

			if (type != -1) {
				buff.append(" select lp.anio as label," + columnName + " as valor");
			} else {
				buff.append(" select lp.anio as label," + columnName + " ");
			}

			if (tipoFiltro == 1) {
				if (actividad != null) {
					buff.append(" , a.descripcion as actividad ");
				}

				if (programa != null) {
					buff.append(" , p.descripcion as programa ");
				}

				if (entidad != null) {
					buff.append(" , e.descripcion as entidad ");
				}

				if (jurisdiccion != null) {
					buff.append(" , j.descripcion as jurisdiccion ");
				}
			} else {
				if (finalidad != null) {
					buff.append(" , fin.descripcion as finalidad ");
				}

				if (funcion != null) {
					buff.append(" , fun.descripcion as funcion ");
				}
			}

			buff.append(" from lineas_presupuestos lp ");
			if (ajuste > 1) {
				buff.append(" inner join inflacion_anual inf on inf.anio = lp.anio ");
			}

			if (tipoFiltro == 1) {
				if (jurisdiccion != null) {
					buff.append(" 	inner join juridiscciones j on j.id_externo  = lp.id_juridisccion and lp.anio = j.anio ");
				}

				if (entidad != null) {
					buff.append(" 	inner join subjurisdicciones s2 on s2.id_externo  = lp.id_subjurisdiccion and lp.anio = s2.anio and j.id = s2.id_jurisdiccion ");
					buff.append(" 	inner join entidades e  on e.id_externo  = lp.id_entidad  and lp.anio = e.anio and s2.id = e.id_subjurisdiccion  ");
				}

				if (programa != null) {
					buff.append(" 	inner join servicios s on s.id_externo  = lp.id_servicio and lp.anio = s.anio and e.id = s.id_entidad  ");
					buff.append(" 	inner join programas p on p.id_externo = lp.id_programa and lp.anio = p.anio and s.id = p.id_servicio  ");
				}

				if (actividad != null) {
					buff.append(" 	inner join subprograma sp on sp.id_externo = lp.id_subprograma and lp.anio = p.anio and p.id = sp.id_programa ");
					buff.append(" 	inner join proyectos proy on proy.id_externo = lp.id_proyecto and lp.anio = proy.anio and sp.id = proy.id_subprograma ");
					buff.append(" 	inner join actividades a on a.id_externo = lp.id_actividad and lp.anio = a.anio and proy.id = a.id_proyecto ");
				}
			} else {
				buff.append(" 	inner join finalidades fin on fin.id_externo  = lp.id_finalidad and lp.anio = fin.anio ");
				buff.append(" 	inner join funciones fun on fun.id_externo  = lp.id_funcion and lp.anio = fun.anio and fun.id_finalidad  = fin.id");

			}

			buff.append(" where 1=1 ");

			if (tipoFiltro == 1) {
				if (jurisdiccion != null && entidad == null) {
					buff.append(" and lp.id_juridisccion=  " + jurisdiccion.getIdExterno());
				} else {

					if (entidad != null) {
						if (programa == null) {
							if (entidad.getIdExterno() < 10) {
								// buff.append(" and lp.id_juridisccion= " + jurisdiccion.getIdExterno());
								// buff.append(" and lp.id_subjurisdiccion = " +
								// subjurisdiccion.getIdExterno());
								// buff.append(" and lp.id_entidad = " + entidad.getIdExterno());

								List<Servicio> servicios = DaoFactory.get(ServicioDao.class).findBy(entidad);
								String strServicio = servicios.stream().map(o -> String.valueOf(o.getIdExterno())).collect(Collectors.joining(","));
								buff.append(" and lp.id_entidad = " + entidad.getIdExterno());
								buff.append(" and lp.id_servicio in (" + strServicio + ") ");

							} else {
								buff.append(" and lp.id_entidad = " + entidad.getIdExterno());
							}
						} else {
							buff.append(" and lp.id_servicio = " + servicio.getIdExterno());
							buff.append(" and lp.id_programa = " + programa.getIdExterno());
						}

						if (actividad != null) {
							buff.append(" and lp.id_programa = " + programa.getIdExterno());
							buff.append(" and lp.id_subprograma = " + subprograma.getIdExterno());
							buff.append(" and lp.id_proyecto = " + proyecto.getIdExterno());
							buff.append(" and lp.id_actividad = " + actividad.getIdExterno());
						}
					}
				}
			} else {
				if (finalidad != null) {
					buff.append(" 				and lp.id_finalidad = " + finalidad.getIdExterno());
				}

				if (funcion != null) {
					buff.append(" 				and lp.id_funcion = " + funcion.getIdExterno());
				}

			}

			buff.append(" group by lp.anio ");

			if (tipoFiltro == 1) {
				if (jurisdiccion != null) {
					buff.append(" , j.descripcion ");
				}

				if (entidad != null) {
					buff.append(" , e.descripcion ");
				}

				if (programa != null) {
					buff.append(" , p.descripcion ");
				}

				if (actividad != null) {
					buff.append(" , a.descripcion");
				}
			} else {
				if (finalidad != null) {
					buff.append(" , fin.descripcion ");
				}

				if (funcion != null) {
					buff.append(" , fun.descripcion ");
				}

			}

			buff.append(" order by 1");

			pstmt = getConnection().prepareStatement(buff.toString());
			rs = pstmt.executeQuery();
			while (rs.next()) {

				LineaDto item = new LineaDto();
				if (contains(rs, "actividad")) {
					item.setActividad(rs.getString("actividad"));
				}
				if (contains(rs, "programa")) {
					item.setPrograma(rs.getString("programa"));
				}
				if (contains(rs, "entidad")) {
					item.setEntidad(rs.getString("entidad"));
				}
				if (contains(rs, "jurisdiccion")) {
					item.setJurisdiccion(rs.getString("jurisdiccion"));
				}
				item.setAnio(rs.getString("label"));

				if (contains(rs, "valor")) {
					item.setInicial(rs.getBigDecimal("valor"));
				}

				if (contains(rs, "inicial")) {
					item.setInicial(rs.getBigDecimal("inicial"));
				}

				if (contains(rs, "vigente")) {
					item.setVigente(rs.getBigDecimal("vigente"));
				}

				if (contains(rs, "devengado")) {
					item.setDevengado(rs.getBigDecimal("devengado"));
				}

				if (contains(rs, "finalidad")) {
					item.setFinalidad(rs.getString("finalidad"));
				}

				if (contains(rs, "funcion")) {
					item.setFuncion(rs.getString("funcion"));
				}

				result.add(item);
			}
			super.close(pstmt);
			super.close(rs);

			return result;
		} catch (Exception ex) {
			throw new DAOException(ex);
		} finally {
			super.close(pstmt);
			super.close(rs);
		}
	}

	public List<LineaDto> findBy(Integer anio, Integer ajuste, Integer tipoFiltro, Jurisdiccion jurisdiccion, Entidad entidad, Programa programa, Actividad actividad, Finalidad finalidad, Funcion funcion, String sqlSearch, String sortColumn) throws DAOException {
		if (tipoFiltro == 1) {
			return findBy(anio, ajuste, jurisdiccion, entidad, programa, actividad, sqlSearch, sortColumn);
		} else {
			return findBy(anio, ajuste, finalidad, funcion, sqlSearch, sortColumn);
		}
	}

	public List<LineaDto> findBy(Integer anio, Integer ajuste, Jurisdiccion jurisdiccion, Entidad entidad, Programa programa, Actividad actividad, String sqlSearch, String sortColumn) throws DAOException {
		List<LineaDto> result = new ArrayList<>();
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		try {
			StringBuffer buff = new StringBuffer();

			String columnName = "";

			columnName = getColumnName(1, ajuste) + " as inicial";
			columnName += "," + getColumnName(2, ajuste) + " as vigente";
			columnName += "," + getColumnName(3, ajuste) + " as devengado";
			columnName += "," + getColumnName(4, ajuste) + " as pagado";
			columnName += "," + getColumnName(5, ajuste) + " as ejecutado ";

			Subjurisdiccion subjurisdiccion = null;
			Servicio servicio = null;
			Subprograma subprograma = null;
			Proyecto proyecto = null;

			if (jurisdiccion != null) {
				jurisdiccion = DaoFactory.get(JurisdiccionDao.class).findByPk(jurisdiccion);
			}

			if (entidad != null) {
				entidad = DaoFactory.get(EntidadDao.class).findByPk(entidad);
				subjurisdiccion = DaoFactory.get(SubjurisdiccionDao.class).findByPk(entidad.getSubjurisdiccion());
			}

			if (programa != null) {
				programa = DaoFactory.get(ProgramaDao.class).findByPk(programa);
				servicio = DaoFactory.get(ServicioDao.class).findByPk(programa.getServicio());
			}

			if (actividad != null) {
				actividad = DaoFactory.get(ActividadDao.class).findByPk(actividad);
				proyecto = DaoFactory.get(ProyectoDao.class).findByPk(actividad.getProyecto());
				subprograma = DaoFactory.get(SubprogramaDao.class).findByPk(proyecto.getSubsubprograma());
			}

			buff.append("select * from (");
			buff.append(" select lp.anio, '' as finalidad, '' as funcion, ");

			if (actividad != null) {
				buff.append(" a.descripcion as actividad, ");
				buff.append(" a.id as id_actividad, ");
			} else if (programa != null) {
				buff.append(" a.descripcion as actividad, ");
				buff.append(" a.id as id_actividad, ");
			} else {
				buff.append(" '' as actividad, ");
			}

			if (entidad != null) {
				buff.append(" p.descripcion as programa, ");
				buff.append(" p.id as id_programa, ");
			} else {
				buff.append(" '' as programa, ");
			}

			if (jurisdiccion != null) {
				buff.append(" e.descripcion as entidad, ");
				buff.append(" e.id as id_entidad, ");
			} else {
				buff.append(" '' as entidad, ");
			}

			buff.append(" j.descripcion as jurisdiccion, ");
			buff.append(" j.id as id_jurisdiccion, ");

			buff.append(" " + columnName + "   from lineas_presupuestos lp ");
			if (ajuste > 1) {
				buff.append(" inner join inflacion_anual inf on inf.anio = lp.anio ");
			}
			buff.append(" 		inner join actividades a on 	a.id_externo  = lp.id_actividad and a.anio = lp.anio ");
			buff.append(" 		inner join proyectos proy on proy.id = a.id_proyecto  and proy.id_externo = lp.id_proyecto  ");
			buff.append(" 		inner join subprograma sp on sp.id = proy.id_subprograma and sp.id_externo = lp.id_subprograma  ");
			buff.append(" 		inner join programas p on p.id = sp.id_programa   and p.id_externo = lp.id_programa  ");
			buff.append(" 		inner join servicios s on s.id = p.id_servicio  and s.id_externo = lp.id_servicio ");
			buff.append(" 		inner join entidades e  on e.id = s.id_entidad  and e.id_externo = lp.id_entidad ");
			buff.append(" 		inner join subjurisdicciones s2 on s2.id = e.id_subjurisdiccion and s2.id_externo = lp.id_subjurisdiccion ");
			buff.append(" 		inner join juridiscciones j on j.id = s2.id_jurisdiccion and j.id_externo = lp.id_juridisccion  ");

			if (jurisdiccion != null) {
				buff.append(" and lp.id_juridisccion=  " + jurisdiccion.getIdExterno());
			}

			if (entidad != null) {
				buff.append(" and lp.id_subjurisdiccion = " + subjurisdiccion.getIdExterno());
				buff.append(" and lp.id_entidad = " + entidad.getIdExterno());
			}

			if (programa != null) {
				buff.append(" and lp.id_servicio = " + servicio.getIdExterno());
				buff.append(" and lp.id_programa = " + programa.getIdExterno());
			}

			if (actividad != null) {
				buff.append(" 				and lp.id_subprograma = " + subprograma.getIdExterno());
				buff.append(" 				and lp.id_proyecto = " + proyecto.getIdExterno());
				buff.append(" 				and lp.id_actividad = " + actividad.getIdExterno());
			}
			buff.append(" 	where lp.anio = " + anio);

			if (actividad != null) {
				buff.append(" group by lp.anio,	 j.id,  lp.id_subjurisdiccion, e.id, lp.id_servicio,  p.id, lp.id_subprograma, lp.id_proyecto, a.id  ");
			} else if (programa != null) {
				buff.append(" group by lp.anio,  j.id, lp.id_subjurisdiccion, e.id, lp.id_servicio,  p.id, lp.id_subprograma, lp.id_proyecto, a.id ");
			} else if (entidad != null) {
				buff.append(" group by lp.anio,  j.id, lp.id_subjurisdiccion, e.id, lp.id_servicio,  p.id ");
			} else if (jurisdiccion != null) {
				buff.append(" group by lp.anio,  j.id, lp.id_subjurisdiccion, e.id ");
			} else {
				buff.append(" group by lp.anio , j.id  ");
			}

			buff.append(") as t ");

			buff.append(" where 1=1 " + sqlSearch);

			if (sortColumn != null && !"".equals(sortColumn)) {
				buff.append(" order by " + sortColumn);
			} else {
				buff.append(" order by 2 ");
			}

			pstmt = getConnection().prepareStatement(buff.toString());
			SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
			System.out.println("[TABLE]\t" + sdf.format(new Date(System.currentTimeMillis())) + "\tQUERY TABLE");
			rs = pstmt.executeQuery();
			while (rs.next()) {
				LineaDto item = new LineaDto();
				if (contains(rs, "actividad")) {
					item.setActividad(rs.getString("actividad"));
				}
				if (contains(rs, "programa")) {
					item.setPrograma(rs.getString("programa"));
				}
				if (contains(rs, "entidad")) {
					item.setEntidad(rs.getString("entidad"));
				}
				if (contains(rs, "jurisdiccion")) {
					item.setJurisdiccion(rs.getString("jurisdiccion"));
				}

				item.setInicial(rs.getBigDecimal("inicial"));
				item.setVigente(rs.getBigDecimal("vigente"));
				item.setDevengado(rs.getBigDecimal("devengado"));
				item.setEjecutado(rs.getBigDecimal("ejecutado"));
				result.add(item);
			}
			System.out.println("[TABLE]\t" + sdf.format(new Date(System.currentTimeMillis())) + "\tRETURNING TABLE");
			return result;
		} catch (Exception ex) {
			throw new DAOException(ex);
		} finally {
			super.close(pstmt);
			super.close(rs);
		}
	}

	public List<LineaDto> findBy(Integer anio, Integer ajuste, Finalidad finalidad, Funcion funcion, String sqlSearch, String sortColumn) throws DAOException {
		List<LineaDto> result = new ArrayList<>();
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		try {
			StringBuffer buff = new StringBuffer();

			String columnName = "";

			columnName = getColumnName(1, ajuste) + " as inicial";
			columnName += "," + getColumnName(2, ajuste) + " as vigente";
			columnName += "," + getColumnName(3, ajuste) + " as devengado";
			columnName += "," + getColumnName(4, ajuste) + " as pagado";
			columnName += "," + getColumnName(5, ajuste) + " as ejecutado ";

			if (finalidad != null) {
				finalidad = DaoFactory.get(FinalidadDao.class).findByPk(finalidad);
			}

			if (funcion != null) {
				funcion = DaoFactory.get(FuncionDao.class).findByPk(funcion);
			}

			buff.append("select * from (");
			buff.append(" select lp.anio, '' as jurisdiccion, '' as entidad, '' as programa, '' as actividad,  ");

			if (finalidad != null) {
				buff.append(" func.descripcion as funcion, ");
				buff.append(" func.id as id_funcion, ");
			} else {
				buff.append(" '' as funcion, ");
			}

			buff.append(" fin.descripcion as finalidad, ");
			buff.append(" fin.id as id_finalidad, ");

			buff.append(" " + columnName + "   from lineas_presupuestos lp ");
			if (ajuste > 1) {
				buff.append(" inner join inflacion_anual inf on inf.anio = lp.anio ");
			}
			buff.append(" 		inner join funciones func on 	func.id_externo  = lp.id_funcion and func.anio = lp.anio ");
			buff.append(" 		inner join finalidades fin on fin.id = func.id_finalidad  and fin.id_externo = lp.id_finalidad ");

			if (finalidad != null) {
				buff.append(" and lp.id_finalidad =  " + finalidad.getIdExterno());
			}

			if (funcion != null) {
				buff.append(" and lp.id_funcion = " + funcion.getIdExterno());
			}
			buff.append(" 	where lp.anio = " + anio);

			if (funcion != null || finalidad != null) {
				buff.append(" group by lp.anio,	 fin.id, func.id, func.descripcion  ");
			} else {
				buff.append(" group by lp.anio , fin.id  ");
			}

			buff.append(") as t ");

			buff.append(" where 1=1 " + sqlSearch);

			if (sortColumn != null && !"".equals(sortColumn)) {
				buff.append(" order by " + sortColumn);
			} else {
				buff.append(" order by 2 ");
			}

			pstmt = getConnection().prepareStatement(buff.toString());
			rs = pstmt.executeQuery();
			while (rs.next()) {
				LineaDto item = new LineaDto();
				if (contains(rs, "actividad")) {
					item.setActividad(rs.getString("actividad"));
				}
				if (contains(rs, "programa")) {
					item.setPrograma(rs.getString("programa"));
				}
				if (contains(rs, "entidad")) {
					item.setEntidad(rs.getString("entidad"));
				}
				if (contains(rs, "jurisdiccion")) {
					item.setJurisdiccion(rs.getString("jurisdiccion"));
				}

				if (contains(rs, "funcion")) {
					item.setFuncion(rs.getString("funcion"));
				}

				if (contains(rs, "finalidad")) {
					item.setFinalidad(rs.getString("finalidad"));
				}

				item.setInicial(rs.getBigDecimal("inicial"));
				item.setVigente(rs.getBigDecimal("vigente"));
				item.setDevengado(rs.getBigDecimal("devengado"));
				item.setEjecutado(rs.getBigDecimal("ejecutado"));
				result.add(item);
			}

			return result;
		} catch (Exception ex) {
			throw new DAOException(ex);
		} finally {
			super.close(pstmt);
			super.close(rs);
		}
	}

	private List<ChartItem> getSerieForYears(String serieName, Integer type, Integer ajuste, Jurisdiccion jurisdiccion, Entidad entidad, Programa programa, Actividad actividad, Finalidad finalidad, Funcion funcion) throws DAOException {
		List<ChartItem> result = new ArrayList<ChartItem>();
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		try {
			StringBuffer buff = new StringBuffer();

			String columnName = getColumnName(type, ajuste);

			Subjurisdiccion subjurisdiccion = null;
			Servicio servicio = null;
			Subprograma subprograma = null;
			Proyecto proyecto = null;

			if (jurisdiccion != null) {
				jurisdiccion = DaoFactory.get(JurisdiccionDao.class).findByPk(jurisdiccion);
			}

			if (entidad != null) {
				entidad = DaoFactory.get(EntidadDao.class).findByPk(entidad);
				subjurisdiccion = DaoFactory.get(SubjurisdiccionDao.class).findByPk(entidad.getSubjurisdiccion());
			}

			if (programa != null) {
				programa = DaoFactory.get(ProgramaDao.class).findByPk(programa);
				servicio = DaoFactory.get(ServicioDao.class).findByPk(programa.getServicio());
			}

			if (actividad != null) {
				actividad = DaoFactory.get(ActividadDao.class).findByPk(actividad);
				proyecto = DaoFactory.get(ProyectoDao.class).findByPk(actividad.getProyecto());
				subprograma = DaoFactory.get(SubprogramaDao.class).findByPk(proyecto.getSubsubprograma());
			}

			buff.append(" select  lp.anio , ");

			buff.append(" " + columnName + " as valor  from lineas_presupuestos lp ");
			if (ajuste > 1) {
				buff.append(" inner join inflacion_anual inf on inf.anio = lp.anio ");
			}

			buff.append(" where 1=1 ");

			/*
			 * if (jurisdiccion != null) { buff.append(" and lp.id_juridisccion=  " +
			 * jurisdiccion.getIdExterno()); }
			 * 
			 * if (entidad != null) { buff.append(" and lp.id_subjurisdiccion = " +
			 * subjurisdiccion.getIdExterno()); buff.append(" and lp.id_entidad = " +
			 * entidad.getIdExterno()); }
			 * 
			 * if (programa != null) { buff.append(" and lp.id_servicio = " +
			 * servicio.getIdExterno()); buff.append(" and lp.id_programa = " +
			 * programa.getIdExterno()); }
			 * 
			 * if (actividad != null) {
			 * buff.append(" 				and lp.id_subprograma = " +
			 * subprograma.getIdExterno());
			 * buff.append(" 				and lp.id_proyecto = " +
			 * proyecto.getIdExterno()); buff.append(" 				and lp.id_actividad = "
			 * + actividad.getIdExterno()); }
			 */

			if (jurisdiccion != null && entidad == null) {
				buff.append(" and lp.id_juridisccion=  " + jurisdiccion.getIdExterno());
			} else {

				if (entidad != null) {
					if (programa == null) {
						if (entidad.getIdExterno() < 10) {
							// buff.append(" and lp.id_juridisccion= " + jurisdiccion.getIdExterno());
							// buff.append(" and lp.id_subjurisdiccion = " +
							// subjurisdiccion.getIdExterno());

							List<Servicio> servicios = DaoFactory.get(ServicioDao.class).findBy(entidad);
							String strServicio = servicios.stream().map(o -> String.valueOf(o.getIdExterno())).collect(Collectors.joining(","));
							buff.append(" and lp.id_entidad = " + entidad.getIdExterno());
							buff.append(" and lp.id_servicio in (" + strServicio + ") ");

						} else {
							buff.append(" and lp.id_entidad = " + entidad.getIdExterno());
						}
					} else {
						buff.append(" and lp.id_servicio = " + servicio.getIdExterno());
						buff.append(" and lp.id_programa = " + programa.getIdExterno());
					}

					if (actividad != null) {
						// buff.append(" and lp.id_juridisccion= " + jurisdiccion.getIdExterno());
						// buff.append(" and lp.id_subjurisdiccion = " +
						// subjurisdiccion.getIdExterno());
						// buff.append(" and lp.id_entidad = " + entidad.getIdExterno());
						// buff.append(" and lp.id_servicio = " + servicio.getIdExterno());
						buff.append(" and lp.id_programa = " + programa.getIdExterno());
						buff.append(" and lp.id_subprograma = " + subprograma.getIdExterno());
						buff.append(" and lp.id_proyecto = " + proyecto.getIdExterno());
						buff.append(" and lp.id_actividad = " + actividad.getIdExterno());
					}
				}
			}

			if (finalidad != null) {
				buff.append(" 				and lp.id_finalidad = " + finalidad.getIdExterno());
			}

			if (funcion != null) {
				buff.append(" 				and lp.id_funcion = " + funcion.getIdExterno());
			}

			buff.append(" group by lp.anio ");

			pstmt = getConnection().prepareStatement(buff.toString());
			rs = pstmt.executeQuery();
			while (rs.next()) {
				ChartItem item = new ChartItem();
				item.setSerie(serieName);
				item.setLabel(rs.getString("anio"));
				item.setValue(rs.getDouble("valor"));
				result.add(item);
			}

			return result;
		} catch (Exception ex) {
			throw new DAOException(ex);
		} finally {
			super.close(pstmt);
			super.close(rs);
		}
	}

	private List<ChartItem> getChartSeriesForAllyears(Integer tipoSerie, Integer ajuste, GrupoItem item) throws ServiceException, Exception {
		List<ChartItem> items = new ArrayList<>();
		Jurisdiccion jurisdiccion;
		Subjurisdiccion subjurisdiccion;
		Entidad entidad;
		Servicio servicio;
		Programa programa;
		Subprograma subprograma;
		Proyecto proyecto;
		Actividad actividad;

		Finalidad finalidad;
		Funcion funcion;

		Long id = item.getId();
		switch (item.getTipo()) {
		case "j":
			jurisdiccion = DaoFactory.get(JurisdiccionDao.class).findByPk(ModelHelper.create(Jurisdiccion.class, id));
			items.addAll(getSerieForYears(jurisdiccion.getDescripcion(), tipoSerie, ajuste, ModelHelper.create(Jurisdiccion.class, id), null, null, null, null, null));
			break;
		case "e":
			entidad = DaoFactory.get(EntidadDao.class).findByPk(ModelHelper.create(Entidad.class, id));
			subjurisdiccion = DaoFactory.get(SubjurisdiccionDao.class).findByPk(ModelHelper.create(Subjurisdiccion.class, entidad.getSubjurisdiccion().getId()));
			jurisdiccion = DaoFactory.get(JurisdiccionDao.class).findByPk(ModelHelper.create(Jurisdiccion.class, subjurisdiccion.getJurisdiccion().getId()));
			items.addAll(getSerieForYears(entidad.getDescripcion(), tipoSerie, ajuste, jurisdiccion, entidad, null, null, null, null));
			break;
		case "p":
			programa = DaoFactory.get(ProgramaDao.class).findByPk(ModelHelper.create(Programa.class, id));
			servicio = DaoFactory.get(ServicioDao.class).findByPk(programa.getServicio());
			entidad = DaoFactory.get(EntidadDao.class).findByPk(servicio.getEntidad());
			subjurisdiccion = DaoFactory.get(SubjurisdiccionDao.class).findByPk(entidad.getSubjurisdiccion());
			jurisdiccion = DaoFactory.get(JurisdiccionDao.class).findByPk(subjurisdiccion.getJurisdiccion());
			items.addAll(getSerieForYears(programa.getDescripcion(), tipoSerie, ajuste, jurisdiccion, entidad, programa, null, null, null));
			break;
		case "a":
			actividad = DaoFactory.get(ActividadDao.class).findByPk(ModelHelper.create(Actividad.class, id));
			proyecto = DaoFactory.get(ProyectoDao.class).findByPk(actividad.getProyecto());
			subprograma = DaoFactory.get(SubprogramaDao.class).findByPk(proyecto.getSubsubprograma());
			programa = DaoFactory.get(ProgramaDao.class).findByPk(subprograma.getPrograma());
			servicio = DaoFactory.get(ServicioDao.class).findByPk(programa.getServicio());
			entidad = DaoFactory.get(EntidadDao.class).findByPk(servicio.getEntidad());
			subjurisdiccion = DaoFactory.get(SubjurisdiccionDao.class).findByPk(entidad.getSubjurisdiccion());
			jurisdiccion = DaoFactory.get(JurisdiccionDao.class).findByPk(subjurisdiccion.getJurisdiccion());
			items.addAll(getSerieForYears(actividad.getDescripcion(), tipoSerie, ajuste, jurisdiccion, entidad, programa, actividad, null, null));
			break;
		case "fin":
			finalidad = DaoFactory.get(FinalidadDao.class).findByPk(ModelHelper.create(Finalidad.class, id));
			items.addAll(getSerieForYears(finalidad.getDescripcion(), tipoSerie, ajuste, null, null, null, null, finalidad, null));
			break;
		case "fun":
			funcion = DaoFactory.get(FuncionDao.class).findByPk(ModelHelper.create(Funcion.class, id));
			finalidad = DaoFactory.get(FinalidadDao.class).findByPk(ModelHelper.create(Finalidad.class, funcion.getFinalidad().getId()));
			items.addAll(getSerieForYears(funcion.getDescripcion(), tipoSerie, ajuste, null, null, null, null, finalidad, funcion));
			break;

		default:
			items.addAll(getSerieForYears("", tipoSerie, ajuste, null, null, null, null, null, null));
			break;
		}

		/*
		 * List<Integer> anios = items.stream().map(z ->
		 * Integer.parseInt(z.getLabel())).collect(Collectors.toList()); String etiqueta
		 * = obtenerRangos(anios);
		 */

		// items.stream().forEach(x -> x.setSerie(x.getSerie() + "(" + etiqueta + ")"));
		items.stream().forEach(x -> x.setSerie(x.getSerie())); // Ya incluye los aÃ±os

		return items;
	}

	public static String obtenerRangos(List<Integer> anios) {
		if (anios == null || anios.isEmpty())
			return "";

		Collections.sort(anios); // Ordenar los aÃ±os
		List<String> rangos = new ArrayList<>();

		int inicio = anios.get(0);
		int anterior = inicio;

		for (int i = 1; i < anios.size(); i++) {
			int actual = anios.get(i);
			if (actual == anterior + 1) {
				anterior = actual;
			} else {
				rangos.add(formatearRango(inicio, anterior));
				inicio = actual;
				anterior = actual;
			}
		}
		rangos.add(formatearRango(inicio, anterior)); // Ãšltimo rango

		return String.join(", ", rangos);
	}

	private static String formatearRango(int inicio, int fin) {
		return (inicio == fin) ? String.valueOf(inicio) : inicio + " a " + fin;
	}

	public void completarSeries(List<ChartItem> items, String grupo) {
		int anioActual = Year.now().getValue();

		// Agrupamos: serieName -> set de aÃ±os existentes
		Map<String, Set<String>> seriesMap = new HashMap<>();
		for (ChartItem item : items) {
			seriesMap.computeIfAbsent(item.getSerie(), k -> new HashSet<>()).add(item.getLabel());
		}

		// Para cada serie, agregamos los aÃ±os faltantes
		for (String serie : seriesMap.keySet()) {
			Set<String> existentes = seriesMap.get(serie);
			for (int anio = 1995; anio <= anioActual; anio++) {
				String label = String.valueOf(anio);
				if (!existentes.contains(label)) {
					items.add(new ChartItem(serie, label, 0d, grupo));
				}
			}
		}
	}

	public List<ChartItem> findChartAnio(Integer tipo, Integer ajuste, List<GrupoItem> grupo1, List<GrupoItem> grupo2) {
		try {
			List<ChartItem> results = new ArrayList<>();

			List<ChartItem> items = new ArrayList<>();

			Integer tipoSerie = tipo;
			for (Iterator<GrupoItem> iterator = grupo1.iterator(); iterator.hasNext();) {
				GrupoItem item = iterator.next();
				items.addAll(getChartSeriesForAllyears(tipoSerie, ajuste, item));
			}

			completarSeries(items, "Grupo 1");
			items.forEach(x -> x.setType("Grupo 1"));
			results.addAll(items);

			items = new ArrayList<>();
			for (Iterator<GrupoItem> iterator = grupo2.iterator(); iterator.hasNext();) {
				GrupoItem item = iterator.next();
				items.addAll(getChartSeriesForAllyears(tipoSerie, ajuste, item));
			}

			completarSeries(items, "Grupo 2");
			items.forEach(x -> x.setType("Grupo 2"));
			results.addAll(items);

			results.sort(Comparator.comparingInt(item -> Integer.parseInt(item.getLabel())));

			return results;
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public List<ChartItem> findComparadorAnual(Integer anio, Integer type, Integer ajuste, Integer tipoFiltro, Jurisdiccion jurisdiccion, Entidad entidad, Programa programa, Actividad actividad, Finalidad finalidad, Funcion funcion) {
		try {
			if (type == -1) {
				List<ChartItem> results = new ArrayList<>();
				results.addAll(getSerie(anio, 1, ajuste, tipoFiltro, jurisdiccion, entidad, programa, actividad, finalidad, funcion));
				results.addAll(getSerie(anio, 2, ajuste, tipoFiltro, jurisdiccion, entidad, programa, actividad, finalidad, funcion));
				results.addAll(getSerie(anio, 3, ajuste, tipoFiltro, jurisdiccion, entidad, programa, actividad, finalidad, funcion));
				return results;
			} else {
				List<ChartItem> results = new ArrayList<>();
				results.addAll(getSerie(anio, type, ajuste, tipoFiltro, jurisdiccion, entidad, programa, actividad, finalidad, funcion));
				return results;
			}
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public List<TimelineDto> getTimeline(Integer anio, Integer type, Integer ajuste, Jurisdiccion jurisdiccion, Entidad entidad, Programa programa, Actividad actividad) throws DAOException {
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		List<TimelineDto> results = new ArrayList<>();
		try {
			if (programa == null) {
				return new ArrayList<>();
			}

			Subjurisdiccion subjurisdiccion = null;
			Servicio servicio = null;
			Subprograma subprograma = null;
			Proyecto proyecto = null;

			if (jurisdiccion != null) {
				jurisdiccion = DaoFactory.get(JurisdiccionDao.class).findByPk(jurisdiccion);
			}

			if (entidad != null) {
				entidad = DaoFactory.get(EntidadDao.class).findByPk(entidad);
				subjurisdiccion = DaoFactory.get(SubjurisdiccionDao.class).findByPk(entidad.getSubjurisdiccion());
			}

			if (programa != null) {
				programa = DaoFactory.get(ProgramaDao.class).findByPk(programa);
				servicio = DaoFactory.get(ServicioDao.class).findByPk(programa.getServicio());
			}

			if (actividad != null) {
				actividad = DaoFactory.get(ActividadDao.class).findByPk(actividad);
				proyecto = DaoFactory.get(ProyectoDao.class).findByPk(actividad.getProyecto());
				subprograma = DaoFactory.get(SubprogramaDao.class).findByPk(proyecto.getSubsubprograma());
			}

			StringBuffer buff = new StringBuffer();
			buff.append("WITH datos AS ( ");
			buff.append("  SELECT ");
			buff.append("    p.anio, ");
			buff.append("    j.descripcion AS jurisdiccion, ");
			buff.append("    p.descripcion AS objetivo, ");
			buff.append("    LOWER(unaccent(j.descripcion)) AS jurisdiccion_norm, ");
			buff.append("    LOWER(unaccent(p.descripcion)) AS objetivo_norm ");
			buff.append("  FROM programas p ");
			buff.append("  INNER JOIN servicios s2 ON s2.id = p.id_servicio ");
			buff.append("  INNER JOIN entidades e ON e.id = s2.id_entidad ");
			buff.append("  INNER JOIN subjurisdicciones s ON e.id_subjurisdiccion = s.id ");
			buff.append("  INNER JOIN juridiscciones j ON j.id = s.id_jurisdiccion ");
			buff.append("  WHERE s2.id_externo = ? ");
			buff.append("    AND p.id_externo = ? ");
			buff.append("), ");
			buff.append("agrupados AS ( ");
			buff.append("  SELECT ");
			buff.append("    *, ");
			buff.append("    anio - ROW_NUMBER() OVER ( ");
			buff.append("      PARTITION BY jurisdiccion_norm, objetivo_norm ");
			buff.append("      ORDER BY anio ");
			buff.append("    ) AS grupo ");
			buff.append("  FROM datos ");
			buff.append(") ");
			buff.append("SELECT ");
			buff.append("  MIN(anio) || ' a ' || MAX(anio) AS periodo, ");
			buff.append("  unaccent(jurisdiccion) AS jurisdiccion, ");
			buff.append("  unaccent(objetivo) AS programa ");
			buff.append("FROM agrupados ");
			buff.append("GROUP BY jurisdiccion_norm, objetivo_norm, unaccent(jurisdiccion), unaccent(objetivo), grupo ");
			buff.append("ORDER BY MIN(anio);");

			pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, servicio.getIdExterno());
			pstmt.setLong(2, programa.getIdExterno());
			rs = pstmt.executeQuery();
			while (rs.next()) {
				TimelineDto item = new TimelineDto();
				item.setPeriodo(rs.getString("periodo"));
				item.setJurisdiccion(rs.getString("jurisdiccion"));
				item.setObjetivo(rs.getString("programa"));
				results.add(item);
			}

			return results;
		} catch (Exception e) {
			throw new DAOException(e);
		} finally {
			super.close(rs);
			super.close(pstmt);
		}
	}


	private void actualizarPeriodos() throws Exception {
		System.out.println("Iniciando actualización de periodos...");
		String[] procedures = { 
			"public.actualizar_periodos_jurisdicciones()", 
			"public.actualizar_periodos_entidades()", 
			"public.actualizar_periodos_programas()", 
			"public.actualizar_periodos_entidades_por_jurisdiccion()", 
			"public.actualizar_periodos_programas_por_jurisdiccion()", 
			"public.actualizar_periodos_actividades_por_jurisdiccion()" 
		};

		for (String proc : procedures) {
			System.out.println("Ejecutando " + proc);
			try (PreparedStatement pstmt = getConnection().prepareStatement("CALL " + proc)) {
				super.execute(pstmt);
			}
		}
		System.out.println("Actualización de periodos finalizada.");
	}
}
