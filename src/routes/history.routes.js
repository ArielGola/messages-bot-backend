const router = require('express').Router();

const { seeHistory, addToHistory, clearHistory, getOneHistoryMsg } = require('../controllers/history.controllers');

const verifyToken = require('../middlewares/tokenVerifiy');


router.get('/', [verifyToken], seeHistory);

router.get('/:id', [verifyToken], getOneHistoryMsg);

router.post('/add', [verifyToken], addToHistory);

router.delete('/clear', [verifyToken], clearHistory);


module.exports = router;