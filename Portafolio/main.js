function changeWeb() {
  console.log('Click');
  document.getElementById('code').style.visibility = 'hidden';
  document.getElementById('code').style.opacity = 0;
 
  setTimeout(() => {
      document.getElementById('all').style.display = 'block';
      setTimeout(() => {
          document.getElementById('all').style.visibility = 'visible';
          document.getElementById('all').style.opacity = 1;
          document.getElementById('code').style.display = 'none';
      });
  }, 1500);
}



/**window.onload = function() {
  const portfolioDiv = document.getElementById('all');
  const portfolioCode = `
  <html>
  <head>
    <title>Raúl Abad Torralaba</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    
  </head>
  
  <body>
  <div class="container"  >
  
      <section>
          <div id="contenedor-inicio" class="clearfix">
              <div id="lateral">
                  <img src="image/ImagePerfil.jpeg" id="imagen" alt="Tu Foto" class="profile-image" >
              </div>
              <div id="principal" >
                  <h2>Raúl Abad Torralba</h2>
                  <p><b>Fecha de Nacimiento:</b> 03/08/1998 </p>
                  <p><b>E-mail:</b> raulabadtorralba@gmail.com</p>
                  <p><b>Telf.:</b> 671837509</p>
                  <p><b>Dirección: </b> Francisco Martínez Soria, 1. Portal 7. 1ºA </p>
              </div>       
              
          </div>
        </section>
      
        <section id="formacion">
          <h2>Formación</h2>
          <p><b>Técnico Superior en Desarrollo de Aplicaciones Multiplataforma.</b></p>
          <p>Colegio María Montessori.</p>
          <p><b>Técnico en Sistemas Microinformáticos y Redes.</b></p>
          <p>Colegio María Montessori.</p>
          <p><b>Educación Secundaria Obligatoria.</b></p>
          <p>Colegio La Anunciata.</p>
        </section>
  
        <section id="idiomas">
          <h2>Idiomas</h2>
          <div class="idiomas">
              <p><b>Ingles:</b> Nivel equivalente A2. </p>
              <p> Curso de inmersión lingüistica en Londres.</p>
              <p>Curso de Inglés en academia English Connection.</p>
          </div>
        </section>
  
        <section id="experiencia-laboral">
          <h2>Experiencia laboral</h2>
          <div class="project">
            <p>Jun. 2021 – Mar. 2023 Desarrollador full-stack NTT Data Solutions Tecnology.</p>
            <p>3 meses en el departamento de Informática (TIC) en el colegio
              Santa María del Pilar Marianistas (430 horas de prácticas de formación).</p>
          </div>
        </section>
        
        <section id="skills">
          <h2>Skills</h2>
          <div class="container-colmns">
            <div class="column">
              
              <p>PHP</p>
              <p>JavaScript</p>
              <p>HTML 5</p>
              <p>PostgreSql</p>
            </div>
            <div class="column">
              
              <p>Java 8</p>
              <p>Docker</p>
              <p>Github</p>
              <p>Drupal</p>
            </div>
            <div class="column">  
              
              <p>Linux 1</p>
              <p>Apache</p>
              <p>MySQL</p>
              <p>ApiRest</p>
            </div>
          </div>
        </section>
  
  
      
        <section id="proyectos">
          <h2>Proyectos</h2>
          <div class="container-colmns">
            <div class="column">
              
              <p>ERC - European research council.</p>
              <p>ESMA – European Security and Markets authority.</p>
              
            </div>
            <div class="column">
              
              <p>UNDRR – Naciones Unidas</p>
              <p>UN News – Global Prespective human stories.</p>
  
            </div>
          </div>
        </section>
      
        <section id="contacto">
          <h2>Contacto</h2>
  
          <div class="container-colmns">
            <div class="column">
              
              <p> <a href="https://www.linkedin.com/in/raul-abad-a5aa78164/"> 
              <img src="contacto/linkedin.png"  id="imagen" alt="Tu Foto" class="contact-image"> </a></p>
              
              
  
            </div>
            <div class="column">
              
              <p> <a href="https://github.com/raulabadt"> 
              <img src="contacto/github.png"  id="imagen" alt="Tu Foto" class="contact-image"> </a></p>
  
            </div>
            <div class="column">  
              
              <p> <a href="mailto:raulabadtorralba@gmail.com"> 
              <img src="contacto/gmail.png"  id="imagen" alt="Tu Foto" class="contact-image"> </a></p>            
            </div>
          </div>
          
        </section>
  
  </div>
    
  <script src="main.js"></script>
  </body>
  
  </html>
  
  `;



  portfolioDiv.addEventListener('mouseenter', function() {
    portfolioDiv.innerHTML = portfolioCode;
    
  });
    //portfolioDiv.innerHTML = portfolioCode;

  portfolioDiv.addEventListener('mouseleave', function() {
    portfolioDiv.innerHTML = `<pre>${escapeHtml(portfolioCode)}</pre>`;
  });

  function escapeHtml(html) {
    return html.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
};*/
