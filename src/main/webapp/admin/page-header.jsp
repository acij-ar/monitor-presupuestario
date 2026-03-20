<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<section class="content-header">
	<div class="container-fluid">
		<div class="row mb-2">
			<div class="col-sm-6">
				<h1><spring:message code="${param.title}"/></h1>
			</div>
			<div class="col-sm-6">
				<ol class="breadcrumb float-sm-right">
					<li class="breadcrumb-item"><a href="${pageContext.request.contextPath}/admin/main.html">Home</a></li>
					<li class="breadcrumb-item active"><spring:message code="${param.title}"/></li>
				</ol>
			</div>
		</div>
	</div>
</section>
