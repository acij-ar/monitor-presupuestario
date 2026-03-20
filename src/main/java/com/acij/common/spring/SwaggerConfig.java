package com.acij.common.spring;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.ParameterBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.schema.ModelRef;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
@ComponentScan(basePackages = { "com.*" })
public class SwaggerConfig {

	@Bean
	public Docket api() {		
	    
		ApiInfo apiInfo = new ApiInfoBuilder().title("Swagger Y3K").description("Interfaces Y3K").license("MIT").version("1.0.0").build();
		return new Docket(DocumentationType.SWAGGER_2)
				.groupName("Y3K").select()
				.apis(RequestHandlerSelectors
				.basePackage("com.y3k.swagger.api"))
				.paths(PathSelectors.any())
				.build().apiInfo(apiInfo)
				.globalOperationParameters(
					Arrays.asList(new ParameterBuilder()
			            .name("Client-ID")
			            .modelRef(new ModelRef("string"))
			            .parameterType("header")
			            .required(false)
			            .build()));
				
	}

	@Bean
	public Docket apiQr() {
		ApiInfo apiInfo = new ApiInfoBuilder().title("Swagger QREventos").description("Interfaces QREventos").license("MIT").version("1.0.0").build();
		return new Docket(DocumentationType.SWAGGER_2)
				.groupName("QREventos")
				.select()
				.apis(RequestHandlerSelectors.basePackage("com.qreventos.swagger.api"))
				.paths(PathSelectors.any())
				.build()
				.apiInfo(apiInfo)
				.globalOperationParameters(
						Arrays.asList(new ParameterBuilder()
		                	.name("Client-ID")
		                    .modelRef(new ModelRef("string"))
		                    .parameterType("header")
		                    .required(false)
		                    .build()));
				
	}
}