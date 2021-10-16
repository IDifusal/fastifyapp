const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/fastifycrud')
    .then(()=>console.log('DB connected'))
    .catch((err)=>console.log(err))