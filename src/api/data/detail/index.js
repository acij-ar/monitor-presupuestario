const genericQuery = require('../helpers/query');
const rows2obj = require('../helpers/rows-to-obj');

module.exports = async (req, res, next) => {
  const { jurisdiction, entity, program, activity } = req.query;
  const anythingSelected = jurisdiction || entity || program || activity || req.query.function;

  if (!anythingSelected) {
    res.json({
      total: '12.345.678 M'
    })
    return
  }

  try {
    // const rows = await genericQuery(req.query);
    // const obj = rows2obj(req.query, rows);
    res.json({
      jurisdiction: {
        name: 'Ministerio de una y otra cosa',
        percentage: '14.73',
      },
      entity: {
        name: 'Ministerio de la otra cosa',
        percentage: '40.85',
      },
      program: {
        name: 'Programa de nosoqué',
        percentage: '29.48',
      },
      activity: {
        name: 'Actividad del programa',
        percentage: '14.72',
      },
    });
  } catch (e) {
    next(e);
  }
};
