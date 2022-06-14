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

historyControllers.addToHistory = async (req, res) => {
    try {
        
        const {numSend, timeSended, content, category} = req.body;

        const newHistory = new HistoryModel({
            numSend,
            timeSended,
            content,
            category
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