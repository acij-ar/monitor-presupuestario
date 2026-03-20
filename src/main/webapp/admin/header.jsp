<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>

<sec:authentication var="principal" property="principal" />

<html translate="no">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="google" content="notranslate"/>
<title><spring:message code="app.name"/></title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" type="image/png" href="${pageContext.request.contextPath}/favicon.ico">

</head>
<body class="sidebar-mini" style="height: auto;">
	<div class="wrapper">
		
		<!-- Navbar -->
		<nav class="main-header navbar navbar-expand navbar-white navbar-light">
			
			<!-- Left Navbar -->
			
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
				</li>
			</ul>

			<!-- Right Navbar -->
			<ul class="navbar-nav ml-auto">
				<!-- Loguout Menu -->
				<li class="nav-item dropdown">
					<a class="nav-link" href="javascript:logout();">${fn:toUpperCase(principal.nombreCompleto)}&nbsp;&nbsp;<i class="fas fa-sign-out-alt"></i>
					</a>
				</li>
			</ul>
			
			<script>
				function logout() {
					swal.fire({
						title: '<spring:message code="logout.titulo"/>',
					  	text: '<spring:message code="logout.pregunta"/>',
					  	icon: 'question',
					  	showCancelButton: true,
					  	confirmButtonColor: '#28a745',
					  	cancelButtonColor: '#d33',
					  	focusCancel: true,
						allowEscapeKey: false,
						allowOutsideClick: false,					  	
					  	confirmButtonText: '<spring:message code="logout.pregunta.si"/>',
					  	cancelButtonText: '<spring:message code="logout.pregunta.no"/>'
					}).then( res => { 
						if (res.dismiss != 'cancel' && res.dismiss != 'backdrop') {
					  		window.location.href = '${pageContext.request.contextPath}/logout.html';
						}
					});
				}
			</script>
			
		</nav>
		<!-- Fin Navbar -->