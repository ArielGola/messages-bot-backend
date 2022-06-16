const router = require('express').Router();

const { seeHistory, addToHistory, clearHistory } = require('../controllers/history.controllers');


router.get('/', seeHistory);

router.post('/add', addToHistory);

router.delete('/clear', clearHistory);


module.exports = router;