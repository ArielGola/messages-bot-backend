const router = require('express').Router();

const { signIn, signUp, deleteUser } = require('../controllers/user.controllers');

const verifyToken = require('../middlewares/tokenVerifiy');


router.post('/signin', signIn);

router.post('/signup', signUp);

router.delete('/delete/:id', [verifyToken], deleteUser);


module.exports = router;