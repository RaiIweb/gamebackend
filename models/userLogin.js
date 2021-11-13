const mongoose = require('mongoose')

var userLogins = mongoose.model('userLogin',
{
    email : {type:String , unique:true ,required: true} ,
    cookie : {type:String },
    expireAt : {
        type: Date,
        default: Date.now,
        index: { expires: '2m' }, 
    }
        
},'userLogin')

module.exports = { userLogins }