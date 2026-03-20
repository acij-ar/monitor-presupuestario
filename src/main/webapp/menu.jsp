<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
    
<style>
/* Icono hamburguesa blanco */
.navbar-toggler-icon {
  width: 24px;
  height: 24px;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255,0.95)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

/* Fondo del botón hamburguesa */
.navbar-toggler {
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
}

/* Menú desplegable mobile */
.menu-mobile {
  background-color: #297967; 
  padding: 10px 0;
  color: #fff;
}

/* Alineación a la derecha y sin sombra */
.menu-mobile .nav-item {
  width: 100%;
  text-align: right;
  padding-right: 10px;
}

.menu-mobile .nav-link {
  color: #fff !important; /* fuerza texto blanco */
  padding: 4px 10px;
}

.menu-mobile .nav-link:hover {
  background-color: rgba(255,255,255,0.2);
  border-radius: 4px;
}


 .logo { height: 44px; max-height: 44px; }

  @media (max-width: 767.98px) {
      .logo{ height: 40px; }
  }


  @media (max-width: 500px) {
      .logo{ height: 30px; }
  }
  
  
  @media (max-width: 400px) {
      .logo{ height: 23px; }
  }
  
  @media (max-width: 300px) {
      .logo{ height: 18px; }
  }

</style>
<div class="header d-flex justify-content-between align-items-center pb-3 flex-wrap">
  <!-- Logo -->
  <div class="d-flex align-items-center">
    <img src="${pageContext.request.contextPath}/assets/img/logo-header.png"
         alt="Monitor Presupuestario" class="logo">
  </div>

  <!-- Botón hamburguesa (solo en pantallas chicas) -->
  <button class="navbar-toggler d-lg-none border-0" type="button" data-toggle="collapse"
          data-target="#navMenu" aria-controls="navMenu" aria-expanded="false"
          aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- Menú horizontal (pantallas grandes) -->
  <ul class="nav small d-none d-lg-flex">
    <li class="nav-item"><a class="nav-link text-light" href="${pageContext.request.contextPath}/explorar/monitor.html">Monitor</a></li>
    <li class="nav-item"><a class="nav-link text-light" href="${pageContext.request.contextPath}/acercade.html">Acerca de</a></li>
    <li class="nav-item"><a class="nav-link text-light" href="${pageContext.request.contextPath}/comousar.html">Cómo usarlo</a></li>
    <li class="nav-item"><a class="nav-link text-light" href="${pageContext.request.contextPath}/metodologia.html">Metodología</a></li>
        <li class="nav-item"><a class="nav-link text-light" href="${pageContext.request.contextPath}/faq.html">FAQ</a></li>
  </ul>

  <!-- Menú vertical (solo mobile) -->
  <div class="collapse w-100 d-lg-none" id="navMenu">
    <ul class="nav small flex-column align-items-end text-right m-0 menu-mobile">
      <li class="nav-item"><a class="nav-link" href="${pageContext.request.contextPath}/explorar/monitor.html">Monitor</a></li>
      <li class="nav-item"><a class="nav-link" href="${pageContext.request.contextPath}/acercade.html">Acerca de</a></li>
      <li class="nav-item"><a class="nav-link" href="${pageContext.request.contextPath}/comousar.html">Cómo usarlo</a></li>
      <li class="nav-item"><a class="nav-link" href="${pageContext.request.contextPath}/metodologia.html">Metodología</a></li>
      <li class="nav-item"><a class="nav-link text-light" href="${pageContext.request.contextPath}/faq.html">FAQ</a></li>
    </ul>
  </div>
</div>
