<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="skin" uri="../WEB-INF/tld/skin.tld"%>
<%@ taglib prefix="datatable" uri="../WEB-INF/tld/datatable.tld"%>

<jsp:include page="includes.jsp" />
<jsp:include page="include-datatable.jsp" />
<jsp:include page="header.jsp" />
<jsp:include page="menu.jsp" />

<form:form method="POST" action="list.html" enctype="multipart/form-data">
	<spring:bind path="*">

		<div class="content-wrapper">
		
			<c:import url="page-header.jsp">
  				<c:param name="title" value="REM"/>
			</c:import>
		
			<section class="content">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-12">
		
							<skin:formWrapper title="FILTROS" mode="LIST" isFilter="true" tableId="tabla" icon="fas fa-filter">
		
								<form:errors path="*" cssClass="controls alert alert-danger" element="div" />
		
								<div class="row">
									<div class="col-md-2">
										<div class="form-group">
											<label>Anio</label>
											<form:input path="anio" cssClass="form-control "/>
										</div>
									</div>
								</div>

								<button type="button" class="btn btn-outline-primary filterButton">
									<i class="fas fa-search"></i> FILTRAR
								</button>
								<button type="submit" name="add" class="btn btn-outline-primary">
									<i class="fas fa-plus"></i> NUEVO
								</button>
				

							</skin:formWrapper>
		
						</div>
						
						<div class="col-md-12">
							<skin:formWrapper title="REM" mode="LIST" icon="fas fa-list">
								<div class="col-md-12">
									<datatable:table tableName="tabla" enableView="true" enableRemove="true" enableUpdate="true"  customCommands="${command.commands}" withMenu="true" >
										<datatable:column path="id" columnName="global.codigo" align="center" orderColumnName="id"/>
										<datatable:column path="anio" columnName="Año" align="center" orderColumnName="anio"/>										
										<datatable:column path="rem" columnName="Porcentaje REM" align="center" type="decimal2" orderColumnName="rem"/>										
										<datatable:column path="id" columnName="global.acciones" align="center"  type="actions" />
									</datatable:table>
								</div>
							</skin:formWrapper>
						</div>
		
					</div>
				</div>
			</section>
		</div>
	
	</spring:bind>
	
</form:form>

	
<skin:confirmation action="remove?pk=' + id + '" />

<jsp:include page="footer.jsp" />