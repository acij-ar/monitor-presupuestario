const React = require('react');
const Page = require('../../components/page');
require('./index.scss');

const App = () => (
    <Page>
        <div className="monitor-highlight">
            <div className="monitor-content">
                <h1>Acerca de</h1>
            </div>
        </div>
        <input type="radio" id="monitor-about-presupuesto" name="menu" className="monitor-about-radio-button"
               defaultChecked/>
        <input type="radio" id="monitor-about-metodologia" name="menu" className="monitor-about-radio-button"/>
        <input type="radio" id="monitor-about-publicacion" name="menu" className="monitor-about-radio-button"/>
        <input type="radio" id="monitor-about-glosario" name="menu" className="monitor-about-radio-button"/>
        <div className="monitor-content monitor-about-menu">
            <label htmlFor="monitor-about-presupuesto">Presupuesto para los derechos</label>
            <label htmlFor="monitor-about-metodologia">Metodología</label>
            <label htmlFor="monitor-about-publicacion">Publicación de información</label>
            <label htmlFor="monitor-about-glosario">Glosario</label>
        </div>

        <div className="monitor-content monitor-about-bugdet">
            <h2>Presupuesto para los derechos</h2>
            <p>
                Las asignaciones presupuestarias tienen implicancias sobre la implementación de políticas públicas
                destinadas a garantizar la igualdad y superar las condiciones de exclusión de grupos en situación de
                vulnerabilidad. La conexión inmediata entre el cumplimiento de los derechos y los recursos
                presupuestarios destinados a realizarlos impone claros límites a las atribuciones estatales sobre el
                proceso de elaboración de la ley de presupuesto y su ejecución.
            </p>
            <p>
                El acceso a información presupuestaria de manera sencilla, desagregada y accesible, mejora las
                posibilidades de incidencia e impacto en las acciones tendientes a visibilizar situaciones de
                discriminación, exclusión y garantía de derechos.
            </p>
            <strong>
                El análisis presupuestario es una herramienta poderosa ya que permite:
            </strong>
            <ul>
                <li>
                    Conocer las diferentes etapas del ciclo presupuestario y los organismos involucrados, los
                    principales documentos y la información presupuestaria relevante para entender las prioridades de
                    los gobiernos y sus políticas públicas.
                </li>
                <li>
                    Monitorear la ejecución, las reasignaciones y subejecuciones que ocurren durante el ciclo
                    presupuestario.
                </li>
                <li>
                    Entablar acciones judiciales y administrativas en reclamo del reconocimiento de derechos
                    económicos, sociales y culturales, con objeto de poder refutar las excusas alegadas, en la
                    generalidad de los casos, por el Estado con relación a la escasez de recursos.
                </li>
                <li>
                    Mostrar que en muchos casos esa supuesta falta de recursos enmascara una distribución injusta de
                    los recursos disponibles, que no son destinados prioritariamente a asegurar el respeto de los
                    derechos fundamentales.
                </li>
            </ul>
            <p>
                Desde la Asociación Civil por la Igualdad y la Justicia (ACIJ), creamos el <strong>Monitor
                presupuestario</strong> con el objetivo de promover el acceso a información presupuestaria de manera
                sencilla, desagregada y accesible, y así contribuir a mejorar las posibilidades de incidencia e
                impacto en las acciones tendientes a visibilizar situaciones de discriminación, exclusión y garantía
                de derechos.
            </p>
            <p>
                El <strong>Monitor presupuestario</strong> es una plataforma que contiene información de los diferentes
                organismos, ministerios, secretarías, programas y actividades presupuestarias desde el año 2007,
                incluyendo el presupuesto proyectado por el Poder Ejecutivo para 2019.
            </p>
            <p>
                La plataforma permite monitorear la asignación presupuestaria de cada año, el presupuesto aprobado
                por el Congreso y el presupuesto vigente (con las modificaciones del Poder Ejecutivo), así como la
                ejecución de años anteriores.
            </p>
        </div>

        <div className="monitor-content monitor-about-metodologia">
            <h2>Apartado Metodológico</h2>
            <p>
                Para desarrollar el <strong>Monitor presupuestario</strong> utilizamos la información provista por el
                Ministerio de Hacienda, específicamente los dataset de Crédito y Gasto completo (distribución diaria
                acumulada de los créditos presupuestarios con clasificadores completos) desde el año 2007 al año 2018,
                disponible en el sitio <a href="https://www.presupuestoabierto.gob.ar/sici/" target="_blank">
                presupuestoabierto.gob.ar </a>.
            </p>
            <p>
                La información sobre el proyecto de presupuesto 2019 fue solicitada por ACIJ al Ministerio de Hacienda
                por medio de un pedido de acceso a la información. Asimismo, actualmente se encuentra disponible en el
                sitio del Ministerio de Hacienda
                en <a href="https://www.minhacienda.gob.ar/onp/presupuesto_ciudadano/index.html" target="_blank">
                este link</a>.
            </p>
            <strong>Presupuesto 2019</strong>
            <p>
                El día 23 de octubre, cuando se trató el Proyecto de Ley de Presupuesto en la Comisión de Presupuesto
                y hacienda, se emitió un dictamen que modifica el artículo 16 de la Ley, en el cual se establecen las
                siguientes asignaciones para el ejercicio 2019:
            </p>
            <ul>
                <li>
                    $ 25.000.000 al Programa 28 Actividad 02 Acciones Inherentes a la Defensa del Consumidor de la
                    Secretaría de Comercio Interior de la Jurisdicción 51 - Ministerio de Producción y Trabajo con
                    destino a transferencias a las asociaciones de consumidores según lo determine la autoridad de
                    aplicación.
                </li>
                <li>
                    $ 900.000.000 para los programas ejecutados por la Secretaría Nacional de la Niñez, Adolescencia y
                    Familia (SENNAF) de la Jurisdicción 85 - Ministerio de Salud y Desarrollo Social
                </li>
                <li>
                    $ 500.000.000 destinados a la Secretaría de Gobierno de Cultura de la jurisdicción 70 - Ministerio
                    de Educación, Cultura, Ciencia y Tecnología.
                </li>
                <li>
                    $ 25.000.000 a la actividad 02 del Programa 17; $ 23.000.000 al Programa 43; $ 5.900.000 al Programa
                    45; $ 6.320.000 al Programa 42; $ 3.600.000 al Programa 22; $ 4.000.000 al Programa 41; $ 28.000.000
                    al Programa 44; $ 10.000.000 a la Comisión Bicameral Permanente de Fiscalización de los Órganos y
                    Actividades de Seguridad Interior, ley 24.059 y sus modificatorias, todos ellos pertenecientes a la
                    Jurisdicción 1 - Poder Legislativo nacional.
                </li>
                <li>
                    $ 30.000.000 a la entidad 918 - Instituto Nacional de las Mujeres destinados al Plan Nacional de
                    Acción para la Prevención, Asistencia y Erradicación de la Violencia contra las Mujeres,
                </li>
                <li>
                    $ 100.000.000 para el Programa Casas de Atención y Acompañamiento Comunitario (CAACS) dependiente de
                    la Secretaría de Políticas Integrales sobre Drogas de la Nación Argentina de la Jurisdicción 20.
                </li>
                <li>
                    $ 18.900.000 a la entidad 209 - Agencia de Acceso a la Información Pública.
                </li>
                <li>
                    $ 60.000.000 para la Actividad 01 del Programa 26 de la Jurisdicción 85 con destino a la provincia
                    de Salta.
                </li>
                <li>
                    $ 70.000.000 al proyecto 25 - Subprograma 01 - Programa 50 - Entidad 604 de la Jurisdicción 57 -
                    Ministerio de Transporte.
                </li>
                <li>
                    $ 400.000.000 para la Entidad 606 - Instituto Nacional de Tecnología Agropecuaria (INTA).
                </li>
                <li>
                    $ 500.000.000 para la Entidad 103 - Consejo Nacional de Investigaciones Científicas y Tecnológicas
                    (Conicet).
                </li>
                <li>
                    $ 15.000.000 a la Entidad 101 - Fundación Miguel Lillo.
                </li>
                <li>
                    $ 70.000.000 a la Entidad 804 - Comisión Nacional de Evaluación y Acreditación Universitaria
                    (CONEAU).
                </li>
                <li>
                    $50.000.000 para el Centro Universitario San Francisco-Córdoba.
                </li>
                <li>
                    $ 550.000.000 a la Entidad 119 - Instituto Nacional de Promoción Turística (Inprotur).
                </li>
                <li>
                    $ 150.000.000 a la Secretaría de Gobierno de Turismo dependiente de la Jurisdicción 20.
                </li>
                <li>
                    $ 3.000.000 para la Congregación Israelita de la República Argentina (CIRA) para ser utilizados en
                    la puesta en valor de la Sala del Museo Judío de Buenos Aires.
                </li>
                <li>
                    $ 1.000.000 para la Fundación Raíces de Emprendimientos Productivos.
                </li>
                <li>
                    $ 3.373.000.000, con destino al Ministerio del Interior, Obras Públicas y Vivienda.
                </li>
            </ul>
            <strong>Sobre el ajuste por inflación</strong>
            <p>
                El análisis del presupuesto, para poder evaluar sus incrementos o disminuciones a lo largo de la
                gestión, requiere incorporar como variable la tasa de inflación. Para actualizar los montos a precios
                comparables se debe aplicar la tasa de inflación correspondiente a cada periodo.
            </p>
            <p>
                La serie de precios utilizada surge de los cálculos realizados por EPyCA Consultores, basados en el
                Índice de Precios al Consumidor (IPC) de Institutos de Estadística Provinciales (hasta marzo de 2016) e
                IPC Nacional del Instituto Nacional de Estadísticas y Censos (INDEC) (desde marzo de 2016).
            </p>
            <p>
                Los montos del presupuesto para el año en curso se ajustan según el índice de inflación especificado por
                el Poder Ejecutivo en el proyecto del ley.
            </p>
        </div>

        <div className="monitor-content monitor-about-publicacion">
            <h2>Sobre la publicación de información presupuestaria</h2>
            <p>
                ACIJ impulsa acciones para promover mejoras en materia de transparencia, participación ciudadana y
                rendición de cuentas en el proceso presupuestario bajo la concepción de que el presupuesto es una
                herramienta clave para discutir la asignación de recursos adecuados para las políticas públicas
                destinadas a garantizar los derechos de los grupos vulnerabilizados.
            </p>

            <strong>Transparencia presupuestaria</strong>
            <p>
                Para analizar los presupuestos con un enfoque de derechos humanos, resulta clave acceder oportunamente a
                información completa y adecuadamente desagregada sobre los recursos asignados y ejecutados para la
                realización de cada una de las actividades que desarrolla el Estado, a través de la administración
                centralizada y descentralizada, así como comprender adecuadamente en qué consisten esas actividades.
            </p>

            <p>
                A su vez, para relacionar la asignación y los recursos efectivamente utilizados con la realización o
                violación de derechos fundamentales también resulta indispensable acceder a información adecuada en
                relación con indicadores estadísticos sociales y económicos desagregados, que permitirán evaluar en
                forma concreta el impacto del gasto sobre los niveles de cumplimiento de los derechos.
            </p>

            <p>
                La falta de acceso oportuno a información presupuestaria adecuadamente desagregada es un desafío
                constante que debemos enfrentar, pero de manera reciente se han producido mejoras significativas en la
                cantidad de la información accesible de manera pública, en relación con la asignación y ejecución de la
                Administración centralizada.
            </p>

            <p>
                Si bien aún resta mucha información por abrir para asegurar una verdadera transparencia presupuestaria,
                el trabajo constante de organizaciones de la sociedad civil ha generado avances concretos en la cantidad
                de información disponible, y en la sanción de normas claras que establecen la obligación estatal de
                publicar proactivamente la información hasta el máximo nivel de desagregación.
            </p>

            <p>
                A modo de ejemplo, anteriormente no se publicaba información sobre la asignación y ejecución que
                estuviera desagregada al nivel de “actividad”, ya que sólo se proporcionaba información hasta el nivel
                de “programa”. Los programas estatales involucran la realización de diversas actividades, cuyo detalle
                es fundamental para conocer de manera concreta y real, exactamente a qué acciones concretas y puntuales
                se destinan los recursos. A su vez, tampoco se podía acceder a la información disponible en formato de
                datos abiertos, lo que dificultaba enormemente la utilización y procesamiento de la información. También
                era extremadamente limitada la información disponible sobre metas físicas, es decir, sobre los bienes y
                servicios que se producen con la realización de las actividades estatales, y la información
                presupuestaria disponible era actualizada con una periodicidad mucho mayor, con lo cual su acceso no era
                realmente oportuno.
            </p>

            <p>
                El Ministerio de Hacienda publica datasets en formato de datos abiertos, que permiten acceder a
                información actualizada con una frecuencia de 48 horas y desagregada hasta el nivel de actividad,
                clasificada por tipo de gasto, finalidad-función, objeto del gasto, fuente de financiamiento, por
                naturaleza económica, etc.
            </p>

            <p>
                Los mayores niveles de apertura de datos hacen posible su utilización efectiva por la sociedad civil,
                para participar de la discusión presupuestaria, e incidir sobre las prioridades estatales en la
                asignación y ejecución de los recursos públicos.
            </p>

            <p>
                Corresponde aclarar, a su vez, que esta apertura de datos aún tiene limitaciones. En efecto, la apertura
                de datos no alcanza a todos los organismos de la administración descentralizada, en muchos casos aún
                falta información debidamente detallada sobre algunas actividades, no se publica información sobre
                beneficiarios/as de cada una de las transferencias de recursos estatales, como pagos a proveedores,
                beneficiarios/as de subsidios, entre otros supuestos. A su vez, si bien desde hace varios años se están
                generando algunos avances en la generación de indicadores de impacto concreto de los programas, todavía
                resta la definición de indicadores adecuados en muchos programas estatales. Tampoco es posible acceder
                al presupuesto original en datos abiertos sino solo a los presupuestos inicial, vigente y devengado.
            </p>
        </div>

        <div className="monitor-content monitor-about-glosario">
            <h2>Glosario</h2>
            <p>
                <strong>Actividades</strong>: son las categorías en que se distribuye el presupuesto dentro de los
                diferentes programas presupuestarios específicos.
            </p>
            <p>
                <strong>Ciclo presupuestario</strong>: comprende las etapas de formulación, aprobación, ejecución y
                auditoría o monitoreo del presupuesto.
            </p>
            <p>
                <strong>Distribución administrativa</strong>: consiste en la presentación desagregada de los créditos y
                realizaciones contenidas en la Ley de Presupuesto. Una vez aprobada la Ley de Presupuesto, el Poder
                Ejecutivo emite una Decisión Administrativa donde distribuye los gastos corrientes y de capital, los
                gastos figurativos, las aplicaciones financieras, los recursos, las contribuciones figurativas y las
                fuentes de financiamiento previstas en la Ley de Presupuesto General de la Administración Nacional del
                ejercicio en curso.
            </p>
            <p>
                <strong>Jurisdicciones</strong>: son organizaciones públicas sin personalidad jurídica ni patrimonio
                propio, que integran la Administración Central y representan los Poderes (Legislativo, Judicial y
                Ejecutivo) establecidos por la Constitución Nacional. Algunas de ellas son: Ministerio Público,
                Presidencia de la Nación, Jefatura de Gabinete de Ministros, Ministerios y Secretarías del Poder
                Ejecutivo Nacional.
            </p>
            <p>
                <strong>Metas físicas</strong>: es la medición física, en términos de bienes y servicios, de los
                resultados que se persiguen con los programas presupuestarios. Por ejemplo, la cantidad de libros que se
                repartirán, la cantidad de viandas y becas que se otorgarán, etc.
            </p>
            <p>
                <strong>Presupuesto devengado</strong>: nivel de gastos efectivamente gastados o ejecutados a una
                determinada fecha. El porcentaje de ejecución mide el grado de avance de la ejecución de los gastos
                sobre el nivel del presupuesto vigente.
            </p>
            <p>
                <strong>Presupuesto inicial</strong>: crédito distribuido por el Poder Ejecutivo al inicio del ciclo
                presupuestario.
            </p>
            <p>
                <strong>Presupuesto original</strong>: crédito aprobado por el Congreso en la Ley de Presupuesto del
                correspondiente ejercicio.
            </p>
            <p>
                <strong>Presupuesto vigente</strong>: límite máximo disponible para gastar en el momento en que se
                presenta determinada información, independientemente de lo que haya sido aprobado al inicio del año (si
                el presupuesto no tuvo modificaciones durante el año, el crédito vigente coincidirá con el original)
                porque incorpora las modificaciones presupuestarias que afectan el presupuesto original en más o en
                menos.
            </p>
            <p>
                <strong>Programas</strong>: categoría de programación que es unidad formal de asignación de recursos y
                tiene el propósito de satisfacer demandas de la comunidad en el contexto de una política presupuestaria
                específica.
            </p>
            <p>
                <strong>Reasignación</strong>: cambio en el destino de fondos que se habían asignado para determinado
                fin en la Ley de Presupuesto aprobada por el Congreso.
            </p>
            <p>
                <strong>Subejecución presupuestaria</strong>: utilización de un monto de dinero inferior al disponible
                para gastar. Normalmente es calculado como la diferencia entre el crédito vigente y el monto devengado.
                Los montos subejecutados también suelen ser identificados como “saldos no utilizados”.
            </p>

        </div>
    </Page>
);

module.exports = App;
