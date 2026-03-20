<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title><spring:message code="app.name"/></title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<jsp:include page="includes.jsp" />

</head>
<body class="hold-transition login-page">
	<div class="login-box">
		<div class="login-logo">
			Admin
		</div>

		<div class="card">
			<div class="card-body login-card-body">
				<p class="login-box-msg">Login</p>

				<form:form method="post" action="login.html" modelAttribute="usuario" >
				
					<spring:bind path="*">

						<form:errors path="*" cssClass="alert alert-danger" element="div" />
						
						<div class="input-group mb-3">
							<form:input path="username" cssClass="form-control" placeholder="Username"/>
							<div class="input-group-append">
								<div class="input-group-text">
									<span class="fas fa-envelope"></span>
								</div>
							</div>
						</div>
						<div class="input-group mb-3">
							<form:password path="password" cssClass="form-control" placeholder="Password"/>
							<div class="input-group-append">
								<div class="input-group-text">
									<span class="fas fa-lock"></span>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-12">
								<button name="login" type="submit" class="btn btn-outline-primary float-right">Ingresar</button>
							</div>
						</div>
					
					</spring:bind>
				</form:form>


			</div>
		</div>
	</div>
</body>
</html>