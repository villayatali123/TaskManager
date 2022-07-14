const mongoose = require('mongoose');

const connectDB = (password) => {
    return mongoose.connect(password,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        }
    )
}

module.exports = connectDB