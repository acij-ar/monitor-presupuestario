const MYSQLConnection = require('./mysql-connection');

module.exports = async (req, res, next) => {
  try {
    const db_connection = MYSQLConnection();
    //make a test query

    //mapa de unicos
    var jurisdicciones = new Set();
    var entidades = new Set();
    var programas = new Set();
    var proyectos = new Set();
    var actividades = new Set();
    var datos = [];
    var sunburst_data = [];
    var level = 1;


    //traer todos los objetos de la funcion seleccionada
    //TODO: parametrizar en uri
    var funcion = 'Agricultura';
    var ejercicio = 2019;

    var qry = 'SELECT * FROM monitor.simplificado WHERE funcion_desc = ? AND ejercicio = ?;';
    const [rows] = await db_connection.promise().query(qry, [funcion, ejercicio]);

    //console.log(rows[10]);

    //close the connection
    db_connection.end();

    //extraer uniques
    rows.forEach(function (item) {

      jurisdicciones.add(item.jurisdiccion_desc);
      entidades.add(item.entidad_desc);
      programas.add(item.programa_desc);
      proyectos.add(item.proyecto_desc);


      actividades.add(item.actividad_desc);

      datos.push(item);

    });

    //generar estructura del sunburst
    sunburst_data.push({
      id: '0.0',
      parent: '',
      label: funcion
    });

    //jurisdicciones
    var inner_level = 1;
    jurisdicciones.forEach(function (item) {
      var filtered_j = datos.filter(dato => dato.jurisdiccion_desc == item);
      var total_j = filtered_j.reduce(function (prevVal, currentVal) {
        return prevVal + parseInt(currentVal.credito_presupuestado);
      }, 0);
      console.log(total_j);
      sunburst_data.push({
        id: level + '.' + inner_level,
        parent: '0.0',
        name: item,
        value: total_j
      });

      inner_level++;
    });

    /* para pruebas */

    sunburst_data.push({
      id: '2.1',
      parent: '1.2',
      label: '',
      value: 4000
    });
    sunburst_data.push({
      id: '2.2',
      parent: '1.2',
      label: '',
      value: 4321
    });
    sunburst_data.push({
      id: '2.3',
      parent: '1.3',
      label: '',
      value: 500
    });
    sunburst_data.push({
      id: '2.4',
      parent: '1.3',
      label: '',
      value: 500
    });
    sunburst_data.push({
      id: '2.5',
      parent: '1.1',
      label: '',
      value: 29
    });

    //output
    res.json({
      entidades: Array.from(entidades),
      jurisdicciones: Array.from(jurisdicciones),
      programas: Array.from(programas),
      proyectos: Array.from(proyectos),
      actividades: Array.from(actividades),
      data: sunburst_data
    });

  } catch (e) {
    console.log(e);
    next(e);
  }

};
