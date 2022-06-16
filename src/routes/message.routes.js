const router = require('express').Router();

const { 
    viewMessages, 
    viewOneMessage, 
    createMessage, 
    editMessage, 
    deleteMessage 
} = require('../controllers/message.controllers');

const verifyToken = require('../middlewares/tokenVerifiy');


router.get('/', [verifyToken], viewMessages);

router.get('/:id', [verifyToken], viewOneMessage);

router.post('/create', [verifyToken], createMessage);

router.put('/edit/:id', [verifyToken], editMessage);

router.delete('/delete/:id', [verifyToken], deleteMessage);


module.exports = router;