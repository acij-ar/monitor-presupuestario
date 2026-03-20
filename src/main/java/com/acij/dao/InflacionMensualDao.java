package com.acij.dao;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.time.Year;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import com.acij.common.dao.AbstractEntityDao;
import com.acij.common.dao.DaoFactory;
import com.acij.common.service.exceptions.DAOException;
import com.acij.helpers.InflacionHelper;
import com.acij.model.InflacionAnual;
import com.acij.model.InflacionMensual;
import com.acij.model.InflacionRem;

public class InflacionMensualDao extends AbstractEntityDao<InflacionMensual> {

	@Override
	protected InflacionMensual resultSetToObject(ResultSet rs) throws Exception {
		InflacionMensual o = new InflacionMensual();
		o.setId(rs.getLong("id"));
		o.setAnio(rs.getInt("anio"));
		o.setMes(rs.getInt("mes"));
		o.setInflacionMensual(rs.getBigDecimal("inflacion_mensual"));
		return o;
	}

	@Override
	protected void saveObject(InflacionMensual o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" insert into inflacion ");
			buff.append(" 	(anio, mes, inflacion_mensual) ");
			buff.append(" values ");
			buff.append(" 	(?, ?, ?) ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setInt(1, o.getAnio());
			pstmt.setInt(2, o.getMes());
			pstmt.setBigDecimal(3, o.getInflacionMensual());
			super.execute(pstmt);

			recalcularInflacionAnualActual();
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected void updateObject(InflacionMensual o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" update inflacion ");
			buff.append(" 	set inflacion_mensual = ? ");
			buff.append(" where ");
			buff.append(" 	id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setBigDecimal(1, o.getInflacionMensual());
			pstmt.setLong(2, o.getId());
			super.execute(pstmt);

			recalcularInflacionAnualActual();
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected void removeObject(InflacionMensual o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" delete from inflacion ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, o.getId());
			super.execute(pstmt);

			recalcularInflacionAnualActual();
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	@Override
	protected InflacionMensual findByPkObject(InflacionMensual o) throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * from inflacion ");
			buff.append(" where id = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setLong(1, o.getId());
			return findEntityBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public List<InflacionMensual> findAll() throws Exception {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select * from inflacion order by anio asc, mes asc ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			return findBy(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public List<InflacionMensual> findBy(Integer anio, Long mes, String columnSort, String sqlSearch) throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select i.* ");
			buff.append(" from inflacion i ");
			buff.append(" where anio > 1990 " + sqlSearch + " ");

			if (anio != null && anio > 0) {
				buff.append(" and anio = ? ");
			}

			if (mes != null && mes > 0) {
				buff.append(" and mes = ? ");
			}

			if (columnSort != null && !"".equals(columnSort)) {
				buff.append(" order by " + columnSort);
			} else {
				buff.append(" order by p.id  ");
			}
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			int index = 1;
			if (anio != null && anio > 0) {
				pstmt.setInt(index++, anio);
			}
			if (mes != null && mes > 0) {
				pstmt.setLong(index++, mes);
			}
			return findBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	public InflacionMensual findBy(Integer anio, Integer mes) throws DAOException {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" select i.* ");
			buff.append(" from inflacion i ");
			buff.append(" where anio = ? ");
			buff.append(" and mes = ? ");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setInt(1, anio);
			pstmt.setInt(2, mes);
			return findEntityBy(pstmt);
		} catch (Exception ex) {
			throw new DAOException(ex);
		}
	}

	public void importarInflacion() throws DAOException {
		try {

			List<InflacionMensual> existentes = findAll();
			List<InflacionMensual> externalData = InflacionHelper.getInflacionMensual();

			for (InflacionMensual nuevo : externalData) {
				boolean yaExiste = existentes.stream().anyMatch(e -> e.getAnio().intValue() == nuevo.getAnio().intValue() && e.getMes().intValue() == nuevo.getMes().intValue());

				if (!yaExiste) {
					save(nuevo);
				}
			}

			recalcularInflacionAnualActual();
		} catch (Exception e) {
			throw new DAOException(e);
		}
	}

	public void recalcularInflacionAnualActual() throws Exception {
		int anioActual = Year.now().getValue();

		DaoFactory.get(InflacionAnualDao.class).removeAll();
		InflacionRem rem = DaoFactory.get(InflacionRemDao.class).findBy(anioActual);
		BigDecimal remValue = new BigDecimal("0");
		if (rem != null) {
			remValue = new BigDecimal(rem.getRem().doubleValue() / 100).setScale(2, RoundingMode.HALF_UP);
		}
		recalcularInflacionAnual(anioActual, remValue);
	}

	private double calcularInflacionMensualPromedioEstimada(double inflacionAnualActual, double remAnioEnCurso, int mesesRestantes) {
		if (mesesRestantes <= 0)
			return 0.0;

		double inflacionRestante = (1 + remAnioEnCurso) / (1 + inflacionAnualActual) - 1;
		return Math.pow(1 + inflacionRestante, 1.0 / mesesRestantes) - 1;
	}

	private void agregarMesesFaltantes(List<InflacionMensual> existentes, BigDecimal rem, Integer anioBase) throws Exception {
		if (existentes == null )
			return;

		Integer lastYear = existentes.stream().mapToInt(InflacionMensual::getAnio).max().getAsInt();
		
		//Quiere decir que estoy en enero y no tengo inflacion todavia
		if (lastYear.intValue() != anioBase) {
			lastYear = anioBase.intValue();
		}

		final Integer ultimoAnio = lastYear;
		Set<Integer> mesesPresentes = existentes.stream().filter(im -> im.getAnio().intValue() == ultimoAnio).map(InflacionMensual::getMes).collect(Collectors.toSet());

		List<Double> inflaciones = existentes.stream().filter(x -> x.getAnio().intValue() == ultimoAnio).map(x -> x.getInflacionMensual().doubleValue() / 100).collect(Collectors.toList());
		Double inflacionAnual = InflacionHelper.calcularInflacionAcumulada(inflaciones);
		Double inflacionMensualEstimada = calcularInflacionMensualPromedioEstimada(inflacionAnual, rem.doubleValue(), 12 - mesesPresentes.size());

		IntStream.rangeClosed(1, 12).filter(mes -> !mesesPresentes.contains(mes)).forEach(mes -> {
			InflacionMensual im = new InflacionMensual();
			im.setAnio(ultimoAnio);
			im.setMes(mes);
			im.setInflacionMensual(new BigDecimal(inflacionMensualEstimada * 100).setScale(2, RoundingMode.HALF_UP));
			existentes.add(im);
		});

		existentes.sort(Comparator.comparing(InflacionMensual::getAnio).thenComparing(InflacionMensual::getMes));
	}

	private void recalcularInflacionAnual(Integer anioBase, BigDecimal remAnioEnCurso) throws DAOException {
		try {
			Map<Integer, InflacionAnual> resumenPorAnio = new HashMap<>();
			
			List<InflacionMensual> existentes = findAll(); // Ordenado cronológicamente

			Integer ultimoAnio = existentes.stream().mapToInt(InflacionMensual::getAnio).max().getAsInt();

			Set<Integer> mesesPresentes = existentes.stream().filter(im -> im.getAnio().intValue() == ultimoAnio).map(InflacionMensual::getMes).collect(Collectors.toSet());
			int ultimoMes = mesesPresentes.stream().mapToInt(x -> x).max().getAsInt();
			if (ultimoMes < 12) {
				ultimoMes += 1;
			}
			agregarMesesFaltantes(existentes, remAnioEnCurso, anioBase); // Estima con REM los meses restantes del ultimo año

			Double acumulado = 40.77; // Valor acumulado a dic-1990
			for (Iterator<InflacionMensual> iterator = existentes.iterator(); iterator.hasNext();) {
				InflacionMensual inflacionMensual = (InflacionMensual) iterator.next();
				acumulado *= (1 + (inflacionMensual.getInflacionMensual().doubleValue() / 100.0));
				System.out.println(inflacionMensual.getAnio() + "/" + inflacionMensual.getMes() + " = " + acumulado + " inf ->" + inflacionMensual.getInflacionMensual().doubleValue());
				inflacionMensual.setIpcAcumuladoConRem(new BigDecimal(acumulado).setScale(4, RoundingMode.HALF_UP));
			}

			Map<Integer, List<InflacionMensual>> porAnio = existentes.stream().collect(Collectors.groupingBy(InflacionMensual::getAnio));
			
			
			
			List<InflacionAnual> resultado = new ArrayList<>();

			for (Map.Entry<Integer, List<InflacionMensual>> entry : porAnio.entrySet()) {
				int anio = entry.getKey();
				System.out.println(anio);
				List<InflacionMensual> meses = entry.getValue();

				// Extraer la inflación mensual como double para el cálculo anual
				List<Double> inflacionesDelAnio = meses.stream().map(im -> new BigDecimal(im.getInflacionMensual().doubleValue() / 100).setScale(4, RoundingMode.HALF_UP).doubleValue()).collect(Collectors.toList());

				double inflacionAnual = InflacionHelper.calcularInflacionAcumulada(inflacionesDelAnio);

				// Calcular ipcPromedio de ipcAcumuladoConRem
				double ipcPromedio = meses.stream().mapToDouble(im -> im.getIpcAcumuladoConRem().doubleValue()).average().orElse(0);
				if (meses.size() < 11) {
					throw new Exception("Faltan datos de meses de inflacion para el año " + anio);
				}

				double ipcAcumulado = meses.get(11).getIpcAcumuladoConRem().doubleValue();
				InflacionAnual ia = new InflacionAnual();
				ia.setAnio(anio);
				ia.setInflacionAnual(BigDecimal.valueOf(inflacionAnual).setScale(4, RoundingMode.HALF_UP));
				ia.setIpcPromedio(BigDecimal.valueOf(ipcPromedio).setScale(4, RoundingMode.HALF_UP));
				ia.setIpcAcumulado(BigDecimal.valueOf(ipcAcumulado).setScale(4, RoundingMode.HALF_UP));

				resumenPorAnio.put(anio, ia);
				resultado.add(ia);
			}

			final Integer anioSearch = anioBase;
			InflacionAnual base = resultado.stream().filter(x -> x.getAnio().intValue() == anioSearch).findFirst().get();

			for (Iterator<InflacionAnual> iterator = resultado.iterator(); iterator.hasNext();) {
				InflacionAnual inflacionAnual = iterator.next();
				Double vaa = base.getIpcAcumulado().doubleValue() / inflacionAnual.getIpcAcumulado().doubleValue();
				Double vap = base.getIpcPromedio().doubleValue() / inflacionAnual.getIpcPromedio().doubleValue();
				inflacionAnual.setValorAjusteAcumulado(new BigDecimal(vaa).setScale(2, RoundingMode.HALF_UP));
				inflacionAnual.setValorAjustePromedio(new BigDecimal(vap).setScale(2, RoundingMode.HALF_UP));

				DaoFactory.get(InflacionAnualDao.class).save(inflacionAnual);
			}

			final int compareInt = ultimoMes;
			InflacionMensual last = existentes.stream().filter(x -> x.getAnio().intValue() == ultimoAnio.intValue() && x.getMes().intValue() == compareInt).findFirst().get();
			Double baseMensual = last.getIpcAcumuladoConRem().doubleValue();

			for (Map.Entry<Integer, List<InflacionMensual>> entry : porAnio.entrySet()) {
				List<InflacionMensual> mensual = entry.getValue();
				for (Iterator<InflacionMensual> iterator = mensual.iterator(); iterator.hasNext();) {
					InflacionMensual item = iterator.next();
					Double vam = baseMensual / item.getIpcAcumuladoConRem().doubleValue();
					item.setValorAjusteMensual(new BigDecimal(vam).setScale(2, RoundingMode.HALF_UP));
					DaoFactory.get(InflacionMensualDao.class).updateValorAjuste(item);
				}
			}

			/*
			 * System.out.printf("%-6s | %-15s | %-15s | %-20s | %-15s | %-20s%n", "Año",
			 * "Inflación Anual", "IPC Promedio", "Valor Ajuste Promedio", "IPC Acumulado",
			 * "Valor Ajuste Acumulado"); System.out.println(
			 * "-------------------------------------------------------------------------------------------------------------"
			 * );
			 * 
			 * for (Map.Entry<Integer, InflacionAnual> entry : resumenPorAnio.entrySet()) {
			 * InflacionAnual ia = entry.getValue();
			 * 
			 * System.out.printf("%-6d | %-15s | %-15s | %-20s | %-15s | %-20s%n",
			 * ia.getAnio(), formatPercent(ia.getInflacionAnual()),
			 * ia.getIpcPromedio().setScale(4, RoundingMode.HALF_UP),
			 * ia.getValorAjustePromedio().setScale(4, RoundingMode.HALF_UP),
			 * ia.getIpcAcumulado().setScale(4, RoundingMode.HALF_UP),d
			 * ia.getValorAjusteAcumulado().setScale(4, RoundingMode.HALF_UP)); }
			 */

		} catch (Exception e) {
			throw new DAOException(e);
		}

	}

	private void updateValorAjuste(InflacionMensual o) {
		try {
			StringBuffer buff = new StringBuffer();
			buff.append(" update inflacion ");
			buff.append(" 	set valor_ajuste_mensual = ? ");
			buff.append(" where ");
			buff.append(" 	anio = ? and mes = ?");
			PreparedStatement pstmt = getConnection().prepareStatement(buff.toString());
			pstmt.setBigDecimal(1, o.getValorAjusteMensual());
			pstmt.setLong(2, o.getAnio());
			pstmt.setLong(3, o.getMes());
			super.execute(pstmt);
		} catch (Exception e) {
			throw new DAOException(e);
		}

	}

}