const { getDoubts } = require('./helpers/get-entries');
const { saveDoubt } = require('./helpers/save-entry');
const { deleteDoubt } = require('./helpers/delete-entry');

const getDoubtsController = async (req, res) => {
  const terms = await getDoubts();
  res.json(terms);
}

const saveDoubtsController = async (req, res) => {
  await saveDoubt(req.body);
  const entries = await getDoubts();
  res.json(entries);
}

const deleteDoubtsController = async (req, res) => {
  await deleteDoubt(req.body);
  const entries = await getDoubts();
  res.json(entries);
}

module.exports = { getDoubtsController, saveDoubtsController, deleteDoubtsController };
