const { getTerms } = require('./helpers/get-entries');
const { saveTerm } = require('./helpers/save-entry');
const { deleteTerm } = require('./helpers/delete-entry');

const getTermsController = async (req, res) => {
  const terms = await getTerms();
  res.json(terms);
}

const saveTermsController = async (req, res) => {
  await saveTerm(req.body);
  const entries = await getTerms();
  res.json(entries);
}

const deleteTermsController = async (req, res) => {
  await deleteTerm(req.body);
  const entries = await getTerms();
  res.json(entries);
}

module.exports = { getTermsController, saveTermsController, deleteTermsController };
