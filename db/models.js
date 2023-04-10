const { MONGO_ADDRESS } = require('../config');
const mongoose = require('mongoose');
mongoose.connect(MONGO_ADDRESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
});

const models = {
    User: require('./user/user_model'),
};

module.exports = models;