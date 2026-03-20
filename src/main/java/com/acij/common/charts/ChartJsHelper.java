package com.acij.common.charts;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.json.JSONObject;

public class ChartJsHelper {

	private static List<String> defaultColors = new ArrayList<String>(Arrays.asList(new String[] { "#f56954", "#00a65a", "#f39c12", "#00c0ef", "#3c8dbc", "#d2d6de", "#ff6384", "#36a2eb", "#cc65fe", "#ffce56" }));

	public static String getDoughnutChartWithSeries(List<ChartItem> items) {
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

		String labelString = "'" + StringUtils.join(labels, "','") + "'";

		StringBuffer buff = new StringBuffer();
		buff.append("{ ");
		buff.append("  'type': 'doughnut', ");
		buff.append("  'options':{ ");
		buff.append("		maintainAspectRatio : true, ");
		buff.append("   	responsive : true,  ");
		buff.append("       cutout : '20%', ");
		buff.append("       spacing : 15, ");
		buff.append("		plugins: { ");
		buff.append("		    legend: { ");
		buff.append("		      display: false,  ");
		buff.append("		    }, ");
		buff.append("		    tooltip: { ");
		buff.append("		      enabled: true ");
		buff.append("		    } ");
		buff.append("		  } ");
		buff.append("   },");
		buff.append("  'data': {");
		buff.append("    'labels': [" + labelString + "], ");
		buff.append("  	'datasets': [");

		for (int i = 0; i < series.size(); i++) {
			String serieName = series.get(i);
			List<String> values = getValuesFor(serieName, labels, items);

			buff.append("  	{ ");
			buff.append("  		'label': '" + serieName + "', ");
			buff.append(" 		'backgroundColor' : '" + defaultColors.get(i) + "', ");
			buff.append("        'hoverOffset': 0, ");
			buff.append("       'data': [" + StringUtils.join(values, ",") + "], ");
			buff.append("  	}, ");
		}

		buff.append("  	] ");
		buff.append("  }");
		buff.append("}");

		JSONObject jsonObject = new JSONObject(buff.toString());
		return jsonObject.toString();
	}

	public static String getDoughnutChart(List<ChartItem> items, String drilldown) {
		List<String> labels = new ArrayList<String>();
		List<String> values = new ArrayList<String>();
		List<String> colors = new ArrayList<String>();

		for (Iterator<ChartItem> it = items.iterator(); it.hasNext();) {
			ChartItem item = it.next();
			labels.add(item.getLabel());
			values.add("{ 'value' : " + item.getValue().toString() + ", id: " + item.getId() + ", type: '" + item.getType() + "'}");

			if (item.getColor() != null) {
				colors.add(item.getColor());
			}
		}

		String colorString = "'" + StringUtils.join(colors, "','") + "'";
		if (colors.size() == 0) {
			colorString = "'" + StringUtils.join(defaultColors, "','") + "'";
		}

		String labelString = "'" + StringUtils.join(labels, "','") + "'";
		String valueString = StringUtils.join(values, ",");

		StringBuffer buff = new StringBuffer();
		buff.append("{ ");
		buff.append("  'type': 'doughnut', ");
		buff.append("  'options':{ ");
		buff.append("		maintainAspectRatio : false, ");
		buff.append("   	responsive : true,  ");
		buff.append("       cutout : '5%', ");
		buff.append("       spacing : 5, ");
		buff.append("		plugins: { ");
		buff.append("		    legend: { ");
		buff.append("		      display: false,  ");
		buff.append("		    }, ");
		buff.append("		    tooltip: { ");
		buff.append("		      enabled: true ");
		buff.append("		    } ");
		buff.append("		  }, ");

		buff.append("   },");
		buff.append("  'data': {");
		buff.append("    'labels': [" + labelString + "], ");
		buff.append("    'datasets': [{ ");
		buff.append("      'data': [" + valueString + "], ");
		buff.append("      'backgroundColor': [" + colorString + "] ");
		buff.append("    }] ");
		buff.append("  }");
		buff.append("}");

		JSONObject jsonObject = new JSONObject(buff.toString());
		return jsonObject.toString();
	}

	public static String getLineChart(List<ChartItem> items) {
		List<String> series = new ArrayList<String>();
		List<String> labels = new ArrayList<String>();

		for (Iterator<ChartItem> it = items.iterator(); it.hasNext();) {
			ChartItem item = it.next();

			if (!labels.contains(item.getLabel()) && item.getLabel() != null) {
				labels.add(item.getLabel());
			}
			if (!series.contains(item.getSerie()) && item.getSerie() != null) {
				series.add(item.getSerie());
			}
		}

		StringBuffer buff = new StringBuffer();
		buff.append("{ ");
		buff.append("  'type': 'line', ");
		buff.append("  'options': { maintainAspectRatio : false, responsive : true, scales: { xAxes: [{ display: true, }], yAxes: [{ display: true,  }] } }, ");

		buff.append("  'data': { ");
		buff.append("   'labels': ['" + StringUtils.join(labels, "','") + "'], ");
		buff.append("  	'datasets': [");

		for (int i = 0; i < series.size(); i++) {
			String serieName = series.get(i);
			List<String> values = getValuesFor(serieName, labels, items);

			buff.append("  	{ ");
			buff.append("  		'label': '" + serieName + "', ");
			buff.append("  		'backgroundColor': '" + defaultColors.get(i) + "', ");
			buff.append("  		'borderColor': '" + defaultColors.get(i) + "', ");
			buff.append("  		'fill': false, ");
			buff.append("       'data': [" + StringUtils.join(values, ",") + "], ");
			buff.append("  	}, ");
		}

		buff.append("  	] ");
		buff.append("  }, ");
		buff.append("}");

		JSONObject jsonObject = new JSONObject(buff.toString());
		return jsonObject.toString();
	}

	public static String getBarChart2(List<ChartItem> items) {
		List<String> series = new ArrayList<String>();
		List<String> labels = new ArrayList<String>();

		for (Iterator<ChartItem> it = items.iterator(); it.hasNext();) {
			ChartItem item = it.next();

			if (!labels.contains(item.getLabel()) && item.getLabel() != null) {
				labels.add(item.getLabel());
			}
			if (!series.contains(item.getSerie()) && item.getSerie() != null) {
				series.add(item.getSerie());
			}
		}

		StringBuffer buff = new StringBuffer();
		buff.append("{ ");
		buff.append("  'type': 'bar', ");
		buff.append("  'plugins': [ChartZoom], ");

		buff.append("  'options': { ");
		buff.append("  				'maintainAspectRatio' : false, ");
		buff.append("				'responsive' : true , ");
		buff.append("	   'scales': { ");

		buff.append("	        'x': { ");
		buff.append("	          'type': 'category', ");
		buff.append("			  'min': 5, ");
		buff.append("			  'max': 11, ");
		buff.append("	          'title': { ");
		buff.append("	            'display': true, ");
		buff.append("	            'text': 'Año' ");
		buff.append("	          } ");
		buff.append("	        }, ");

		buff.append("	  y: { ");
		buff.append(" 			'type': 'linear', ");
		buff.append("	        title: { ");
		buff.append("				display: true, ");
		buff.append("				text: 'Monto' ");
		buff.append("			} ");
		buff.append("		} ");

		buff.append("	     }, ");

		buff.append("  'plugins': { ");
		buff.append("       'zoom': { ");
		buff.append("         'zoom': { ");
		buff.append("           'wheel': { 'enabled': true }, ");
		buff.append("           'pinch': { 'enabled': true }, ");
		buff.append("           'mode': 'x' ");
		buff.append("         }, ");
		buff.append("         'pan': { ");
		buff.append("           'enabled': true, ");
		buff.append("           'mode': 'x', ");
		buff.append(" 			threshold: 5,");
		buff.append("         }, ");
		buff.append("         'limits': { ");
		buff.append("           'x': { 'minRange': 4 }  ");// límites del eje X
		buff.append("         } ");
		buff.append("       } ");
		buff.append("      } ");
		buff.append(" 	}, ");

		buff.append("  'data': { ");
		buff.append("   'labels': ['" + StringUtils.join(labels, "','") + "'], ");
		buff.append("  	'datasets': [");

		for (int i = 0; i < series.size(); i++) {
			String serieName = series.get(i);
			List<String> values = getValuesFor(serieName, labels, items);

			buff.append("  	{ ");
			buff.append("  		'label': '" + serieName + "', ");
			buff.append("  		'backgroundColor': '" + defaultColors.get(i) + "', ");
			buff.append("  		'borderColor': '" + defaultColors.get(i) + "', ");
			buff.append("  		'fill': false, ");
			buff.append("       'data': [" + StringUtils.join(values, ",") + "], ");
			buff.append("  	}, ");
		}

		buff.append("  	] ");
		buff.append("  }, ");
		buff.append("}");

		JSONObject jsonObject = new JSONObject(buff.toString());
		return jsonObject.toString();
	}

	public static String getBarChart(List<ChartItem> items) {
		List<String> series = new ArrayList<String>();
		List<String> labels = new ArrayList<String>();

		for (Iterator<ChartItem> it = items.iterator(); it.hasNext();) {
			ChartItem item = it.next();

			if (!labels.contains(item.getLabel()) && item.getLabel() != null) {
				labels.add(item.getLabel());
			}
			if (!series.contains(item.getSerie()) && item.getSerie() != null) {
				series.add(item.getSerie());
			}
		}

		StringBuffer buff = new StringBuffer();
		buff.append("{ ");
		buff.append("  'type': 'bar', ");
		buff.append("  'plugins': [ChartZoom], ");

		buff.append("  'options': { ");
		buff.append("  				'maintainAspectRatio' : false, ");
		buff.append("				'responsive' : true , ");
		buff.append("	   'scales': { ");

		buff.append("	        'x': { ");
		buff.append("	          'type': 'category', ");
		buff.append("			  'min': 5, ");
		buff.append("			  'max': 11, ");
		buff.append("	          'title': { ");
		buff.append("	            'display': true, ");
		buff.append("	            'text': 'Año' ");
		buff.append("	          } ");
		buff.append("	        }, ");

		buff.append("	  y: { ");
		buff.append(" 			'type': 'linear', ");
		buff.append("	        title: { ");
		buff.append("				display: true, ");
		buff.append("				text: 'Monto' ");
		buff.append("			} ");
		buff.append("		} ");

		buff.append("	     }, ");

		buff.append("  'plugins': { ");
		buff.append("       'zoom': { ");
		buff.append("         'zoom': { ");
		buff.append("           'wheel': { 'enabled': true }, ");
		buff.append("           'pinch': { 'enabled': true }, ");
		buff.append("           'mode': 'x' ");
		buff.append("         }, ");
		buff.append("         'pan': { ");
		buff.append("           'enabled': true, ");
		buff.append("           'mode': 'x', ");
		buff.append(" 			threshold: 5,");
		buff.append("         }, ");
		buff.append("         'limits': { ");
		buff.append("           'x': { 'minRange': 4 }  ");// límites del eje X
		buff.append("         } ");
		buff.append("       } ");
		buff.append("      } ");
		buff.append(" 	}, ");

		buff.append("  'data': { ");
		buff.append(" 'labels': ['" + StringUtils.join(labels, "','") + "'], ");
		buff.append("  	'datasets': [");

		for (int i = 0; i < series.size(); i++) {
			String serieName = series.get(i);
			List<String> values = getValuesFor(serieName, labels, items);

			buff.append("  	{ ");
			buff.append("  		'label': " + serieName + ", ");
			buff.append("  		'backgroundColor': '" + defaultColors.get(i) + "', ");
			buff.append("  		'borderColor': '" + defaultColors.get(i) + "', ");
			buff.append("  		'fill': false, ");
			buff.append("       'data': [" + StringUtils.join(values, ",") + "], ");

			buff.append("  	}, ");

		}

		buff.append("  	] ");
		buff.append("  }, "); // END DATA
		buff.append("}");

		JSONObject jsonObject = new JSONObject(buff.toString());
		return jsonObject.toString();
	}

	public static String getHorizontalBarChart(List<ChartItem> items) {
		List<String> series = new ArrayList<String>();
		List<String> labels = new ArrayList<String>();

		for (Iterator<ChartItem> it = items.iterator(); it.hasNext();) {
			ChartItem item = it.next();

			if (!labels.contains(item.getLabel()) && item.getLabel() != null) {
				labels.add(item.getLabel());
			}
			if (!series.contains(item.getSerie()) && item.getSerie() != null) {
				series.add(item.getSerie());
			}
		}

		StringBuffer buff = new StringBuffer();
		buff.append("{ ");
		buff.append("  'type': 'horizontalBar', ");
		buff.append("  'options': { maintainAspectRatio : false, responsive : true, scales: { xAxes: [{ display: true, }], yAxes: [{ display: true,  }] } }, ");

		buff.append("  'data': { ");
		buff.append("   'labels': ['" + StringUtils.join(labels, "','") + "'], ");
		buff.append("  	'datasets': [");

		for (int i = 0; i < series.size(); i++) {
			String serieName = series.get(i);
			List<String> values = getValuesFor(serieName, labels, items);

			buff.append("  	{ ");
			buff.append("  		'label': '" + serieName + "', ");
			buff.append("  		'backgroundColor': '" + defaultColors.get(i) + "', ");
			buff.append("  		'borderColor': '" + defaultColors.get(i) + "', ");
			buff.append("  		'fill': false, ");
			buff.append("       'data': [" + StringUtils.join(values, ",") + "], ");
			buff.append("  	}, ");
		}

		buff.append("  	] ");
		buff.append("  }, ");
		buff.append("}");

		JSONObject jsonObject = new JSONObject(buff.toString());
		return jsonObject.toString();
	}

	public static String getStackedBarChart(List<ChartItem> items) {
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

		StringBuffer buff = new StringBuffer();
		buff.append("{ ");
		buff.append("  'type': 'bar', ");
		buff.append("  'plugins': [ChartZoom], ");
		
		buff.append("  'options': { ");
		buff.append("  				'maintainAspectRatio' : false, ");
		buff.append("				'responsive' : true , ");
		buff.append("	   scales: { xAxes: [{ display: true, }], yAxes: [{ display: true,  }], x: { stacked: true }, y: { stacked: true } } , ");



		buff.append("  'plugins': { ");
		buff.append("       'zoom': { ");
		buff.append("         'zoom': { ");
		buff.append("           'wheel': { 'enabled': true }, ");
		buff.append("           'pinch': { 'enabled': true }, ");
		buff.append("           'mode': 'x' ");
		buff.append("         }, ");
		buff.append("         'pan': { ");
		buff.append("           'enabled': true, ");
		buff.append("           'mode': 'x', ");
		buff.append(" 			threshold: 5,");
		buff.append("         }, ");
		buff.append("         'limits': { ");
		buff.append("           'x': { 'minRange': 4 }  ");// límites del eje X
		buff.append("         } ");
		buff.append("       } ");
		buff.append("      } ");
		buff.append(" 	}, ");
		
		buff.append("  'data': { ");
		buff.append("   'labels': ['" + StringUtils.join(labels, "','") + "'], ");
		buff.append("  	'datasets': [");

		for (int j = 0; j < stacks.size(); j++) {
			String stack = stacks.get(j);
			for (int i = 0; i < series.size(); i++) {
				String serieName = series.get(i);
				List<String> values = getValuesFor(serieName, labels, items, stack);
				if (!items.stream().anyMatch(x -> x.getSerie().equals(serieName) && x.getType().equals(stack))) {
					continue;
				}
				
				buff.append("  	{ ");
				buff.append("  		'label': '" + serieName + "', ");
				buff.append("  		'backgroundColor': '" + defaultColors.get(i) + "', ");
				buff.append("  		'borderColor': '" + defaultColors.get(i) + "', ");
				buff.append("  		'fill': true, ");
				buff.append("  		'stack': '" + stack + "', ");
				buff.append("       'data': [" + StringUtils.join(values, ",") + "], ");
				buff.append("  	}, ");
			}
		}

		buff.append("  	] ");
		buff.append("  }, ");
		buff.append("}");

		JSONObject jsonObject = new JSONObject(buff.toString());
		return jsonObject.toString();
	}

	private static List<String> getValuesFor(String serieName, List<String> labels, List<ChartItem> items) {
		String[] result = new String[labels.size()];

		for (int i = 0; i < labels.size(); i++) {
			String label = labels.get(i);
			result[i] = "0";
			for (Iterator<ChartItem> it = items.iterator(); it.hasNext();) {
				ChartItem chartItem = it.next();

				if (chartItem.getSerie().equals(serieName) && chartItem.getLabel().equals(label)) {
					result[i] = chartItem.getValue().toString();
				}
			}
		}
		return Arrays.asList(result);
	}
	
	private static List<String> getValuesFor(String serieName, List<String> labels, List<ChartItem> items, String stack) {
		String[] result = new String[labels.size()];

		for (int i = 0; i < labels.size(); i++) {
			String label = labels.get(i);
			result[i] = "0";
			for (Iterator<ChartItem> it = items.iterator(); it.hasNext();) {
				ChartItem chartItem = it.next();

				if (chartItem.getSerie().equals(serieName) && chartItem.getLabel().equals(label) && chartItem.getType().equals(stack)) {
					result[i] = chartItem.getValue().toString();
				}
			}
		}
		return Arrays.asList(result);
	}

	private static List<String> getValuesObjectFor(String serieName, List<String> labels, List<ChartItem> items) {
		String[] result = new String[labels.size()];

		for (int i = 0; i < labels.size(); i++) {
			String label = labels.get(i);
			result[i] = "0";
			for (Iterator<ChartItem> it = items.iterator(); it.hasNext();) {
				ChartItem chartItem = it.next();

				if (chartItem.getSerie().equals(serieName) && chartItem.getLabel().equals(label)) {
					result[i] = "{'x': " + chartItem.getLabel() + ", 'y':" + chartItem.getValue().toString() + "}";
				}
			}
		}
		return Arrays.asList(result);
	}

}