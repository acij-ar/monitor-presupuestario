package com.acij.helpers;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URL;
import java.security.SecureRandom;
import java.security.cert.X509Certificate;
import java.util.Map;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

public class HttpHelper {
	public static String sendGet(String url, Map<String, String> header) throws Exception {
		URL obj = URI.create(url).toURL();
		HttpURLConnection con = (HttpURLConnection) obj.openConnection();

		if (header != null) {
			for (Map.Entry<String, String> entry : header.entrySet()) {
				con.setRequestProperty(entry.getKey(), entry.getValue());
			}
		}

		con.setRequestMethod("GET");

		StringBuffer response = new StringBuffer();
		if (con.getResponseCode() >= 200 && con.getResponseCode() <= 299) {
			BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));
			String inputLine;

			while ((inputLine = in.readLine()) != null) {
				response.append(inputLine);
			}
			in.close();
		} else {
			InputStream stream = con.getErrorStream();
			if (stream == null) {
				if (con.getResponseCode() < 400) {
					stream = con.getInputStream();
				}
			}

			if (stream != null) {
				BufferedReader br = new BufferedReader(new InputStreamReader(stream));
				String strCurrentLine;
				while ((strCurrentLine = br.readLine()) != null) {
					response.append(strCurrentLine);
				}
			} else {
				response.append("No se pudo leer la respuesta");
			}
		}

		return response.toString();
	}

	public static String getIgnoringSSL(String endpoint) throws Exception {
		// Crear contexto SSL que confía en todo
		TrustManager[] trustAllCerts = new TrustManager[] { new X509TrustManager() {
			public X509Certificate[] getAcceptedIssuers() {
				return new X509Certificate[0];
			}

			public void checkClientTrusted(X509Certificate[] certs, String authType) {
			}

			public void checkServerTrusted(X509Certificate[] certs, String authType) {
			}
		} };

		SSLContext sc = SSLContext.getInstance("TLS");
		sc.init(null, trustAllCerts, new SecureRandom());

		HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());

		// Ignorar verificación del hostname
		HostnameVerifier allHostsValid = (hostname, session) -> true;

		URL url = new URL(endpoint);
		HttpsURLConnection con = (HttpsURLConnection) url.openConnection();

		// Solo para esta conexión
		con.setSSLSocketFactory(sc.getSocketFactory());
		con.setHostnameVerifier(allHostsValid);

		con.setRequestMethod("GET");

		BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
		String inputLine;
		StringBuilder response = new StringBuilder();

		while ((inputLine = in.readLine()) != null)
			response.append(inputLine);

		in.close();
		return response.toString();
	}
}
