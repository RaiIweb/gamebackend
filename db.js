const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://smsRed:tTWR38dwOR3mmvXG@cluster0.xx6st.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{useNewUrlParser:true,useUnifiedTopology:true},
    err => {
        if (!err)
            console.log('Mongodb connection succeeded.')
        else
            console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
    })