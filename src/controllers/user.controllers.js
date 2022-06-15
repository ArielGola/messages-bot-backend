const UserModel = require('../models/User');
const jwt = require('jsonwebtoken');

userControllers = {};


userControllers.signIn = async (req, res) => {
    try {
        
        const {numUser, password} = req.body;

        const userFounded = await UserModel.findOne({numUser: numUser});

        const matchPassword = await UserModel.comparePassword(password, userFounded.password);

        if (!userFounded || !matchPassword) {
            return res.status(403).json({ok: false, error: 'User not founded'});
        };

        const jwtToken = jwt.sign({
            id: userFounded._id,
            numUser: userFounded.numUser
        }, process.env.JWT_SECRET, {
            expiresIn: 60*60*6
        });

        return res.status(200).json({ok: true, token: jwtToken});

    } catch (error) {
        return res.status(403).json({ok: false});  
    };
};


userControllers.signUp = async (req, res) => {
    try {
        
        const {numUser, password} = req.body;

        const newUser = new UserModel({
            numUser,
            password: await UserModel.encryptPassword(password)
        });

        await newUser.save();

        const jwtToken = jwt.sign({
            id: newUser._id,
            numUser: newUser.numUser
        }, process.env.JWT_SECRET, {
            expiresIn: 60*60*6
        });

        return res.status(200).json({ok: true, token: jwtToken});

    } catch (error) {
        return res.status(403).json({ok: false});    
    };
};


userControllers.deleteUser = async (req, res) => {
    try {
        
        const currentUser = req.userPass.id;

        await UserModel.findOneAndDelete({_id: currentUser});

        return res.status(200).json({ok: true});

    } catch (error) {
        return res.status(403).json({ok: false});
    };
};


module.exports = userControllers;