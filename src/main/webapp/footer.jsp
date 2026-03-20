<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

  <style>
    .site-footer {
      background: #2f2f2f; /* fondo oscuro */
      color: #f2f2f2;
      font-family: Arial, Helvetica, sans-serif;
    }
    .site-footer img { display: inline-block; vertical-align: middle; }
    .footer-logo { height: 44px; max-height: 44px; }
    .footer-acij { height: 48px; max-height: 48px; }
    .footer-smalltext {
      font-size: 11px;
      color: #cfcfcf;
      margin-top: 4px;
    }
    .social-icon {
      width: 20px;
      height: auto;
      opacity: .9;
      transition: transform .12s, opacity .12s;
    }
    .social-link { display:inline-block; margin: 0 .6rem; }
    .social-link:hover .social-icon {
      transform: translateY(-2px);
      opacity: 1;
    }
    @media (max-width: 767.98px) {
      .footer-logo, .footer-acij { height: 40px; }
      .footer-smalltext { display: none; } /* opcional: ocultar subtítulo en móvil */
  
    }
  </style>
    
 <footer class="site-footer py-3">
    <div class="container">
      <div class="row align-items-center">

        <!-- Logo izquierdo -->
        <div class="col-12 col-md-4 text-center text-md-left mb-2 mb-md-0">
          <a href="/" aria-label="Monitor Presupuestario">
            <img src="${pageContext.request.contextPath}/assets/img/logo-footer.png" alt="Monitor Presupuestario" class="footer-logo">
          </a>
        </div>

        <!-- Logo centro (ACIJ) -->
        <div class="col-12 col-md-4 text-center mb-2 mb-md-0">
          <a href="https://www.acij.org.ar" target="_blank" rel="noopener" aria-label="ACIJ">
            <img src="${pageContext.request.contextPath}/assets/img/acij.svg" alt="ACIJ" class="footer-acij">
          </a>
        </div>

        <!-- Redes sociales -->
        <div class="col-12 col-md-4 text-center text-md-right">
          <a class="social-link" href="https://www.facebook.com/ACIJ.ORG" aria-label="Facebook" target="_blank" rel="noopener">
            <img src="${pageContext.request.contextPath}/assets/img/facebook.svg" alt="Facebook" class="social-icon">
          </a>
          <a class="social-link" href="https://x.com/ACIJargentina" aria-label="X" target="_blank" rel="noopener">
            <img src="${pageContext.request.contextPath}/assets/img/x.svg" alt="X / Twitter" class="social-icon">
          </a>
          <a class="social-link" href="https://www.instagram.com/acij.arg/" aria-label="Instagram" target="_blank" rel="noopener">
            <img src="${pageContext.request.contextPath}/assets/img/ig.svg" alt="Instagram" class="social-icon">
          </a>
          <a class="social-link" href="https://www.linkedin.com/company/acijorg/" aria-label="LinkedIn" target="_blank" rel="noopener">
            <img src="${pageContext.request.contextPath}/assets/img/ln.svg" alt="LinkedIn" class="social-icon">
          </a>
        </div>

      </div>
    </div>
  </footer>