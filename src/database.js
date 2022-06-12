const mongoose = require('mongoose');

try {
    
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Database Connected');

} catch (error) {
    console.log('Error in database conection', error);
};