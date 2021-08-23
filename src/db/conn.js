const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/formproject",{
    useCreateIndex:true,
    useUnifiedTopology:true,
    useNewUrlParser:true,
}).then(()=>{
    console.log("database connection sussesful")
}).catch((error)=>{
    console.log(error);
})