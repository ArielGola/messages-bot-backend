const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) => {
    try {

        const token = req.headers.authorization.split(' ')[1];

        const decode = jwt.verify(token, process.env.JWT_SECRET);

        req.userPass = decode;

        return next();

    } catch (error) {
        res.status(403).json({ok: false, error});
    };
};


module.exports = verifyToken;