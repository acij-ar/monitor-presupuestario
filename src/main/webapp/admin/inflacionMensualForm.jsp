<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="skin" uri="../WEB-INF/tld/skin.tld"%>
<%@ taglib prefix="datatable" uri="../WEB-INF/tld/datatable.tld"%>

<jsp:include page="includes.jsp" />
<jsp:include page="header.jsp" />
<jsp:include page="menu.jsp" />

<form:form method="POST" action="${command.mode}.html" class="form-horizontal">
	<spring:bind path="*">

		<div class="content-wrapper">

			<c:import url="page-header.jsp">
  				<c:param name="title" value="Inflación Mensual"/>
			</c:import>

			<section class="content">
				<div class="container-fluid">

					<div class="row">
						<div class="col-md-12">

							<skin:formWrapper title="PAÍS" mode="${command.mode}" disableForm="${command.disableAll}" icon="fas fa-align-left">

								<form:errors path="*" cssClass="controls alert alert-danger" element="div" />

								<div class="form-group row">
			                    	<label class="col-sm-2 col-form-label text-right">Código</label>
			                    	<div class="col-sm-1">
			                      		<form:input path="entity.id" cssClass="form-control " readonly="true" />
			                    	</div>
			                  	</div>

								<div class="form-group row">
			                    	<label class="col-sm-2 col-form-label text-right">Anio</label>
			                    	<div class="col-sm-4">
			                      		<form:input path="entity.anio" cssClass="form-control ${status.errors.hasFieldErrors('entity.anio')? 'is-invalid' : ''}" maxlength="4" readonly="${command.mode != 'save'}" />
			                    	</div>
			                  	</div>

								<div class="form-group row">
			                    	<label class="col-sm-2 col-form-label text-right">Mes</label>
			                    	<div class="col-sm-4">
		                    			<c:if test="${command.mode == 'save'}">
			                      			<form:select path="entity.mes" cssClass="form-control select2bs4">
												<form:options items="${command.meses}" itemValue="id" itemLabel="descripcion" />
											</form:select>
										</c:if>		
										<c:if test="${command.mode != 'save'}">
											<form:input path="entity.mesDescripcion" cssClass="form-control ${status.errors.hasFieldErrors('entity.anio')? 'is-invalid' : ''}" readonly="true" />
										</c:if>
			                    	</div>
			                  	</div>

								
								<div class="form-group row">
			                    	<label class="col-sm-2 col-form-label text-right">Porcentaje</label>
			                    	<div class="col-sm-2">
			                      		<form:input path="entity.inflacionMensual" cssClass="form-control ${status.errors.hasFieldErrors('entity.countryCode')? 'is-invalid' : ''} allow-decimal-negative"  />
			                    	</div>
			                  	</div>

								
								
								<div class="form-group row">
			                    	<label class="col-sm-2 col-form-label text-right"></label>
			                    	<div class="col-sm-10">
										<c:if test="${command.mode != 'view'}">
											<button type="submit" name="save" class="btn btn-outline-primary ">
												<i class="fa fa-save"></i>
												<spring:message code='global.aceptar' />
											</button>
										</c:if>
										<button type="submit" name="cancel" class="btn btn-outline-danger ">
											<i class="fa fa-times"></i>
											<spring:message code='global.cancelar' />
										</button>
									</div>
			                  	</div>

							</skin:formWrapper>

						</div>


					</div>
				</div>
			</section>
		</div>

	</spring:bind>
</form:form>

<jsp:include page="footer.jsp" />