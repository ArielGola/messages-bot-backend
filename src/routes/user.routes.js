const router = require('express').Router();

const { signIn, signUp, deleteUser } = require('../controllers/user.controllers');


router.post('/signin', signIn);

router.post('/signup', signUp);

router.delete('/user/delete/:id', deleteUser);


module.exports = router;