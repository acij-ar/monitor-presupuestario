package com.acij.helpers;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;

import com.acij.model.InflacionMensual;

public class InflacionHelper {

	public static Double calcularInflacionAcumulada(List<Double> inflacionesMensuales) {
		return inflacionesMensuales.stream().map(v -> 1 + v).reduce(1.0, (a, b) -> a * b) - 1;
	}

	public static double calcularPromedioIpcAnual(List<InflacionMensual> lista, Integer anio) {
		return lista.stream().filter(item -> item.getAnio().intValue() == anio.intValue()).mapToDouble(x -> x.getInflacionMensual().doubleValue()).average().orElse(0.0);
	}

	private static final String URL = "https://api.bcra.gob.ar/estadisticas/v4.0/Monetarias/27?desde=2026-01-01";

	public static List<InflacionMensual> getInflacionMensual() throws Exception {
		String responseJson = HttpHelper.getIgnoringSSL(URL);
		List<InflacionMensual> resultados = new ArrayList<>();

		JSONObject root = new JSONObject(responseJson);
		JSONArray results = root.getJSONArray("results");

		for (int i = 0; i < results.length(); i++) {
			JSONObject obj = results.getJSONObject(i);
			int idVariable = obj.getInt("idVariable");

			if (idVariable == 27) {

				JSONArray detalle = obj.getJSONArray("detalle");

				for (int j = 0; j < detalle.length(); j++) {
					JSONObject item = detalle.getJSONObject(j);

					String fechaStr = item.getString("fecha"); // "2026-02-28"
					BigDecimal valor = item.getBigDecimal("valor"); // mejor que double

					LocalDate fecha = LocalDate.parse(fechaStr);
					int anio = fecha.getYear();
					int mes = fecha.getMonthValue();

					resultados.add(new InflacionMensual(anio, mes, valor.setScale(2, RoundingMode.HALF_UP)));
				}
			}
		}

		return resultados;
	}

	private static final String URL1 = "https://api.estadisticasbcra.com/inflacion_mensual_oficial";
	private static final String TOKEN = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3ODE0NjI5MTIsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJib3llZGllZ29AaG90bWFpbC5jb20ifQ.KcjEil1S8gd6Ini0KMYOCQUhcDrS6bdSClPe70Axkj-uaA_sxF371lWLYYTCyZdW_k0nBd9BzYKTB5QRQ6MzrQ";

	public static List<InflacionMensual> getInflacionMensualBcra() throws Exception {
		Map<String, String> headers = new HashMap<>();
		headers.put("Authorization", "Bearer " + TOKEN);

		String responseJson = HttpHelper.sendGet(URL1, headers);
		List<InflacionMensual> resultados = new ArrayList<>();

		JSONArray array = new JSONArray(responseJson);
		for (int i = 0; i < array.length(); i++) {
			JSONObject obj = array.getJSONObject(i);
			String fechaStr = obj.getString("d"); // "1990-01-31"
			BigDecimal valor = BigDecimal.valueOf(obj.getDouble("v"));

			LocalDate fecha = LocalDate.parse(fechaStr);
			int anio = fecha.getYear();
			int mes = fecha.getMonthValue();

			resultados.add(new InflacionMensual(anio, mes, valor));
		}

		return resultados;
	}

}
