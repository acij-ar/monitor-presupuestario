package com.acij.controller.quartz;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.acij.helpers.HttpHelper;

@Component
public class InterfaceQuartzController {

	private String portLocal = "9091";

	@Scheduled(cron = "0 0 3 1/1 * ?")
	public void scheduleFixedDelayTask() {
		try {
			System.out.println("Ejecutando Quartz");
			String response = HttpHelper.sendGet("http://localhost:" + portLocal + "/explorar/actualizar", null);
			System.out.println("Quartz Response : " + response);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
