const express = require('express');
const router = express.Router();
const listEntities = require('../../services/db/queries/list-entities');

router.get('/list-entities', async (req, res) => {
    const entityList = await listEntities();
    res.json(entityList)
});

module.exports = router;