const router = require('express').Router();

const { seeHistory, addToHistory, clearHistory } = require('../controllers/history.controllers');

const verifyToken = require('../middlewares/tokenVerifiy');


router.get('/', [verifyToken], seeHistory);

router.post('/add', [verifyToken], addToHistory);

router.delete('/clear', [verifyToken], clearHistory);


module.exports = router;