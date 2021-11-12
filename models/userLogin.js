const mongoose = require('mongoose')

var userLogins = mongoose.model('userLogin',
{
    email : {type:String , unique:true ,required: true} ,
    cookie : {type:String },
        
},'userLogin')

module.exports = { userLogins }