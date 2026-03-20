package com.acij.helpers;

import java.awt.Color;

public class ColorsHelper {
	public static String getColor(String startHex, String endHex, int value) {
		int min = 0;
		int max = 10;

		Color start = Color.decode(startHex); // oscuro
		Color end = Color.decode(endHex); // claro

		if (value <= min)
			return startHex;
		if (value >= max)
			return endHex;

		// Convertir a HSL
		float[] hslStart = rgbToHsl(start);
		float[] hslEnd = rgbToHsl(end);

		// Interpolación lineal en H, S y L
		double ratio = (double) (value - min) / (max - min);
		float h = (float) (hslStart[0] + ratio * (hslEnd[0] - hslStart[0]));
		float s = (float) (hslStart[1] + ratio * (hslEnd[1] - hslStart[1]));
		float l = (float) (hslStart[2] + ratio * (hslEnd[2] - hslStart[2]));

		// Convertir de nuevo a RGB
		Color result = hslToRgb(h, s, l);

		return String.format("#%02X%02X%02X", result.getRed(), result.getGreen(), result.getBlue());
	}
	
	  public static String lighten(String hexColor, double factor) {
	        if (hexColor.startsWith("#")) {
	            hexColor = hexColor.substring(1);
	        }

	        // Parsear el HEX
	        Color color = new Color(
	            Integer.valueOf(hexColor.substring(0, 2), 16),
	            Integer.valueOf(hexColor.substring(2, 4), 16),
	            Integer.valueOf(hexColor.substring(4, 6), 16)
	        );

	        // Calcular aclarado
	        int r = (int) Math.min(255, color.getRed()   + (255 - color.getRed())   * factor);
	        int g = (int) Math.min(255, color.getGreen() + (255 - color.getGreen()) * factor);
	        int b = (int) Math.min(255, color.getBlue()  + (255 - color.getBlue())  * factor);

	        // Devolver como HEX
	        return String.format("#%02X%02X%02X", r, g, b);
	    }

	// Conversión de RGB a HSL
	private static float[] rgbToHsl(Color color) {
		float r = color.getRed() / 255f;
		float g = color.getGreen() / 255f;
		float b = color.getBlue() / 255f;

		float max = Math.max(r, Math.max(g, b));
		float min = Math.min(r, Math.min(g, b));
		float h = 0, s, l = (max + min) / 2f;

		if (max == min) {
			h = s = 0; // gris
		} else {
			float d = max - min;
			s = l > 0.5f ? d / (2f - max - min) : d / (max + min);

			if (max == r) {
				h = (g - b) / d + (g < b ? 6f : 0f);
			} else if (max == g) {
				h = (b - r) / d + 2f;
			} else if (max == b) {
				h = (r - g) / d + 4f;
			}
			h /= 6f;
		}
		return new float[] { h, s, l };
	}

	// Conversión de HSL a RGB
	private static Color hslToRgb(float h, float s, float l) {
		float r, g, b;

		if (s == 0) {
			r = g = b = l; // escala de grises
		} else {
			float q = l < 0.5f ? l * (1 + s) : (l + s) - (l * s);
			float p = 2 * l - q;
			r = hueToRgb(p, q, h + 1f / 3f);
			g = hueToRgb(p, q, h);
			b = hueToRgb(p, q, h - 1f / 3f);
		}
		return new Color(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255));
	}

	private static float hueToRgb(float p, float q, float t) {
		if (t < 0)
			t += 1;
		if (t > 1)
			t -= 1;
		if (t < 1f / 6f)
			return p + (q - p) * 6f * t;
		if (t < 1f / 2f)
			return q;
		if (t < 2f / 3f)
			return p + (q - p) * (2f / 3f - t) * 6f;
		return p;
	}
}
