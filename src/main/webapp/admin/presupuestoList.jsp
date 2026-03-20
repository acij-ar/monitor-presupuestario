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
  				<c:param name="title" value="Presupuestos"/>
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
								<button type="submit" name="importar" class="btn btn-outline-primary">
									<i class="fas fa-cog"></i> PROCESAR ULTIMOS 2 AÑOS
								</button>
				
				

							</skin:formWrapper>
		
						</div>
						
						<div class="col-md-12">
							<skin:formWrapper title="Presupuestos importados" mode="LIST" icon="fas fa-list">
								<div class="col-md-12">
									<datatable:table tableName="tabla" enableView="false" enableRemove="false" enableUpdate="false"  customCommands="${command.commands}" withMenu="true" horizontalScroll="false" defaultOrder="1, 'desc'">
										<datatable:column path="id" columnName="global.codigo" align="center" orderColumnName="id"/>
										<datatable:column path="anio" columnName="Año" align="center" orderColumnName="anio"/>										
										<datatable:column path="fileReference" columnName="Archivo" align="left"  orderColumnName="file_references"/>		
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