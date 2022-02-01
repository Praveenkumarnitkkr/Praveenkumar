


const express=require('express');

const { redirect } = require('express/lib/response');

const { link, readdir } = require('fs');

const { url } = require('inspector');

const app=express();

app.use(express.static(__dirname+'/views/Images'));  

const path=require('path');

app.set('view engine','pug');

app.set('Pages',path.join(__dirname,'views'));

app.get('/Home',(req,res)=>{
    res.status(200).render('FrontPage',{title:"Praveen", message:"Hello there Its Praveen Here"});
});

const port=80;

app.get('/Home', (req, res)=>{
    res.status(200).render('FrontPage', { title: 'Hey Praveen', message: 'Hello there!, thanks for your code' })
  });

app.get('/Project', (req, res)=>{
    res.status(200).render('Project', { title: 'Hey Praveen', message: 'Hello there!, thanks for your code' })
  });

app.get('/About', (req, res)=>{
    res.status(200).render('AboutPage', { title: 'Hey Praveen', message: 'Hello there!, thanks for your code' })
  });

app.get('/Contact', (req, res)=>{
    res.status(200).render('ContactPage', { title: 'Hey Praveen', message: 'Hello there!, thanks for your code' })
  });

  const hostname="0.0.0.0";
  app.listen(port,hostname,()=>{
   console.log("This application started successfully on port ");
});


const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended: true
}));

/**bodyParser.json(options)
* Parses the text as JSON and exposes the resulting object on req.body.
*/
app.use(bodyParser.json());


 
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/ContactPortfolio');
}
// app.use(express.urlencoded);
const ContactShema =new  mongoose.Schema({
  Name: String,
  Email: String,
  Text: String
});
const Contact = mongoose.model('Contact', ContactShema);
app.post('/Contact',(req, res)=>{
  var data=new Contact(req.body);
   data.save().then(()=>{
     res.render('ContactPage');
   })
});

