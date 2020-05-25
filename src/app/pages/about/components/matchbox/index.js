const React = require('react');
const ContentSection = require('../../../../components/content-section');

const AboutMatchbox = () => (
  <ContentSection id="about-matchbox" title="Matchbox">
    <p>Matchbox es uno de los formatos de apoyo intensivo de The Engine Room. En éste, trabajamos junto con las
      organizaciones aliadas en la implementación de proyectos. Ofrecemos apoyo holístico, ajustado a las necesidades y
      contextos de los equipos con los que trabajamos. Esta colaboración dura entre 12 y 18 meses y se divide en:</p>
    <ol>
      <li>Diseñar e implementar un proyecto que ataque algún problema socio-político</li>
      <li>Fortalecer a la organización en general</li>
      <li>Incrementar la intuición técnica del equipo con el que trabajamos</li>
    </ol>
    <p>Desde 2013, hemos colaborado con 10 equipos en América Latina y África Sub-sahariana. Los temas trabajados van
      desde el monitoreo de gasto de políticos para combatir la corrupción, mejorar el cumplimiento con las leyes de
      acceso a la información por parte de municipalidades, aplicación de tecnología para acceder a servicios de agua,
      campañas para acceder a información financiera para agricultores, identificar subsidios para pesca y más.</p>
  </ContentSection>
);

module.exports = AboutMatchbox;
