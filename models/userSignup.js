
const mongoose = require('mongoose')

var userSignups = mongoose.model('userSignups',
{
    email : {type:String , unique:true ,required: true} ,
    password : {type:String },
    username : {type:String}
        
},'userSignups')

module.exports = { userSignups }