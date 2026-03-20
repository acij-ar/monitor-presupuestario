<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="skin" uri="../WEB-INF/tld/skin.tld"%>

<sec:authentication var="principal" property="principal" />

<aside class="main-sidebar sidebar-dark-primary elevation-4">
	<a href="${pageContext.request.contextPath}/admin/main.html" class="brand-link"> 
		<img src="${pageContext.request.contextPath}/resources/images/home.png" class="brand-image img-circle elevation-3" >
		<span class="brand-text font-weight-light">Panel</span>
	</a>

	<div class="sidebar">
		<!-- Sidebar user (optional) -->
		<div class="user-panel mt-3 pb-3 mb-3 d-flex">
			<div class="image">
				<img src="${pageContext.request.contextPath}/resources/images/no_logo.png" class="img-circle elevation-2" >
			</div>
			<div class="info">
				<a href="#" class="d-block">${principal.nombreCompleto}</a>
			</div>
		</div>

		<nav class="mt-2">
		

			<ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="true">		

				<skin:menu 
					menu="${principal.menu}" 
					rootMenu="[MENU]" 
					submenu="[ITEMS]" 			
					menuItem="<li class='nav-item has-treeview'><a href='#' class='nav-link'> <i class='nav-icon [ICON]'></i><p>[DESCRIPTION]<i class='fas fa-angle-left right'></i></p></a><ul class='nav nav-treeview'>[SUBMENU]</ul></li>"
					leafItem="<li class='nav-item'><a href='[HREF]' class='nav-link'> <i class='[ICON] nav-icon'></i><p>[DESCRIPTION]</p></a></li>" />
		
			</ul>
		</nav>
	</div>
</aside>