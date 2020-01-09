const mongoose = require('mongoose');
// const Schema = mongoose.Schema;  
const { Schema } = mongoose;

const userSchema = new Schema ({
    googleId: String
});

//Tell mongoose, we want to create a new collection call user.
mongoose.model('users', userSchema);