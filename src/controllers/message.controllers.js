const MsgModel = require('../models/Message');

msgControllers = {};


msgControllers.viewMessages = async (req, res) => {
    try {
        
        const currentUser = req.userPass.id;

        const messages = await MsgModel.find({numUser: currentUser});

        return res.status(200).json({ok: true, messages});

    } catch (error) {
        return res.status(403).json({ok: false, error});  
    };
};


msgControllers.viewOneMessage = async (req, res) => {
    try {  

        const message = await MsgModel.findOne({_id: req.params.id});

        return res.status(200).json({ok: true, message});
        
    } catch (error) {
        return res.status(403).json({ok: false, error});  
    };
};


msgControllers.createMessage = async (req, res) => {
    try {

        const {numSend, content, timeSend, categor, frequency} = req.body;

        const newMsg = new MsgModel({
            numUser: String(req.userPass.id),
            numSend,
            content,
            timeSend,
            categor,
            frequency
        });

        await newMsg.save();

        res.status(200).json({ok: true});
        
    } catch (error) {
        return res.status(403).json({ok: false, error}); 
    };
};


msgControllers.editMessage = async (req, res) => {
    try {
        
        const {numSend, content, timeSend, categor, frequency} = req.body;

        await MsgModel.findOneAndUpdate({_id: req.params.id}, {
            numSend,
            content,
            timeSend,
            categor,
            frequency
        });

        res.status(200).json({ok: true});

    } catch (error) {
        return res.status(403).json({ok: false, error}); 
    };
};


msgControllers.deleteMessage = async (req, res) => {
    try {
        
        await MsgModel.findOneAndDelete({_id: req.params.id});

        res.status(200).json({ok: true});

    } catch (error) {
        return res.status(403).json({ok: false, error}); 
    };
};


module.exports = msgControllers;