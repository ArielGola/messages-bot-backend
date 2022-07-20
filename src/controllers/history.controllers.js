const HistoryModel = require('../models/HistoryMessage');

historyControllers = {};


historyControllers.seeHistory = async (req, res) => {
    try {
        
        const currentUser = req.userPass.id;

        const history = await HistoryModel.find({numUser: currentUser});

        return res.status(200).json({ok: true, history});

    } catch (error) {
        return res.status(403).json({ok: false, error});
    };
};

historyControllers.getOneHistoryMsg = async (req, res) => {
    try {
        
        const message = await HistoryModel.findOne({_id: req.params.id});

        return res.status(200).json({ok: true, message});

    } catch (error) {
        return res.status(403).json({ok: false, error});
    };
};

historyControllers.addToHistory = async (req, res) => {
    try {
        
        const {numSend, timeSended, content, categor} = req.body;

        const newHistory = new HistoryModel({
            numUser: String(req.userPass.id),
            numSend,
            timeSended,
            content,
            categor
        });

        await newHistory.save();

        return res.status(200).json({ok: true});
        
    } catch (error) {
        return res.status(403).json({ok: false, error});
    };
};

historyControllers.clearHistory = async (req, res) => {
    try {
        
        await HistoryModel.remove();

        return res.status(200).json({ok: true});

    } catch (error) {
        return res.status(403).json({ok: false, error}); 
    };
};


module.exports = historyControllers;