const Texts = require('../../../services/texts');

module.exports = (req, res) => {
    Texts.saveNewContent(req.body.texts);
    res.json({success: true});
};
