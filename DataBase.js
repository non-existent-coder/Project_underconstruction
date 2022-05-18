const express = require('express');
const mongoose = require('mongoose');
const app= express();

const mongoUri= 'mongodb+srv://admin:adminadmin@project-demo.3yeri.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('connected',()=>{
    console.log('Connected to MongoDB instance');
});

mongoose.connection.on('error', err => {
    console.log('Error connecting to MongoDB instance');
});

app.get('/',(req,res) => {
    res.send('Hi there!');
});

app.listen(3000,()=> {
    console.log('Listening on port 3000');
}
);