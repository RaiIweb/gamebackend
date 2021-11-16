
const mongoose = require('mongoose')

var userScores = mongoose.model('userScores',
{
    email : {type:String , unique:true ,required: true} ,
    wins : {type:Number },
    defeats : {type:Number },
    username : {type:String}
        
},'userScores')

module.exports = { userScores }