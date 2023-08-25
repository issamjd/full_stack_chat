const mongoose = require('mongoose');           //load mongoose library
                                                //define user scheme, follows json conventions
const UserSchema = new mongoose.Schema({
    username: {type: String, unique:true},          
    password: String,
}, {timestamps: true});                         // _id will be auto generated for each entry in the db, username is set to string type and must be unique
                                                // password is also string, additional field is timestamps, this adds a date created and date modified field automatically

const UserModel = mongoose.model('User', UserSchema); // create a model , the collection name is User and its based on userschema.                                                   
module.exports = UserModel;                         // export model outside this module