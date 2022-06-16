const router = require('express').Router();

const { 
    viewMessages, 
    viewOneMessage, 
    createMessage, 
    editMessage, 
    deleteMessage 
} = require('../controllers/message.controllers');


router.get('/', viewMessages);

router.get('/:id', viewOneMessage);

router.post('/create', createMessage);

router.put('/edit/:id', editMessage);

router.delete('/delete/:id', deleteMessage);


module.exports = router;