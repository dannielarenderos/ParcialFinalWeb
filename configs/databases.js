const mongoose = require('mongoose');
const {mongodb} = require('./keys');

mongoose.connect(mongodb.URI, {
    useCreateIndex: true, 
    useNewUrlParser: true
})
.then(console.log('Conectado!!!'))
.catch(err => console.log(err));
