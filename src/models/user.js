const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        
    },
    lastname:{
        type:String,
       
        
    },
    email:{
        type:String,
        required: true,
        
    },
    password:{
        type:String,
        required: true,
        
    },
    address:{
        type:String,
        required: true,
        
    },
    address2:{
        type:String,
        required: true,
        
    },
    city:{
        type:String,
       
        
    },
    state:{
        type:String,
       
    },
    zip:{
        type:Number,
        required: true,
        
    },
});

const UserData = mongoose.model('UserData',UserSchema);

module.exports = UserData;