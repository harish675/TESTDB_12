
const mongoose = require('mongoose');

// harishjadhav675
// nz0LXApMyqgIgDtu

mongoose.connect(`mongodb+srv://harishjadhav675:j6DECEZ9JSah2CLX@cluster0.wnlw82z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

const db = mongoose.connection;

db.on('error', console.error.bind(console,"Error connecting to mongoDB"));

db.once('open', function(){
    console.log('Connected to mongoDB');
});

module.exports = db;