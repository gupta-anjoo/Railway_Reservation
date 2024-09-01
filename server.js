const express=require('express')
var alert=require('alert')
const mailer=require('nodemailer')
var bodyParser=require("body-parser");
const {MongoClient}=require('mongodb');
const { request } = require('express');
const mongoose=require('mongoose');
const url = 'mongodb://localhost:27017';  
const client = new MongoClient(url);
const db_name='healthfit';
const app=express()
const port=9007;
const host_path={root:__dirname+''}
//static path:the entire public directory is made static
app.use(express.static(__dirname+''))
app.get('/',(req,res)=>{
    res.sendFile('public/login.html',host_path)
})

app.get('/view.html',(req,res)=>{
    res.sendFile('public/view.html',host_path)
})
app.use(bodyParser.urlencoded({
    extended: true
}));


const db=client.db(db_name)
app.post('/',async(req,res)=>{

    try{
        const login_user=req.body.loginUser
        const password=req.body.loginPassword
        const useremail=await db.collection('data').findOne({email:login_user})
        if(useremail.password==password){
            alert("Login Successful")
            res.redirect('public/main.html')
        }
        else{
            
            alert('Invalid Login Details')
            
        }
        
    }
    catch(error){
             alert("Invalid login details")
    }
})
/*app.get('/appointment',(req,res)=>{
    res.sendFile('public/appointment.html')
})*/
app.get('/signup.html',(_req,res)=>{
    res.sendFile('public/signup.html',host_path)
})

app.post('/signup.html',async (req,res)=>{

  var first_name=req.body.FirstName
  var last_name=req.body.LastName
  var email=req.body.Email
  var password=req.body.Password
  var confirm_password=req.body.ConfirmPassword
  var phone=req.body.Phone
  var gender=req.body.gender
  var dob=req.body.Dateofbirth
  var age=req.body.Age
  var dt={
      "first name":first_name,
      "last name":last_name,
      "email":email,
      "password": password,
      "confirm password": confirm_password,
      "phone": phone,
      "gender": gender,
      "dob": dob
    }

   const t = await db.collection('data').insertOne(dt,function(err,collection){
        if(err) console.log(err) 
        else alert("Signed up successful!")
      
  
  
      
    })
      
        
       
      

let transporter = mailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    requireTLS:true,
    auth: {
      user: 'vanshitajohari20@gmail.com',// generated ethereal user
      pass:  'mzmnfoyykcdqrrey',// generated ethereal password
    },
  });

  // send mail with defined transport object
  let content = {
    from: 'vanshitajohari20@gmail.com', // sender address
    to: req.body.Email, // list of receivers
    subject: "Healthfit", // Subject line
    text: "Welcome to healthfit!<br>", // plain text body
  }

 transporter.sendMail(content,(err)=>{
    if(err)console.log(err)
    else console.log("Success")
    res.redirect('public/main.html')
 })
})

/*app.post('/appointment',function(req,res){
    var patient_id=req.body.id
    var patient_name=req.body.pn
    var patient_age=req.body.pa
    var patient_gender=req.body.gender
    var last_appointment=req.body.la
    var doctor_name=req.body.d
    var appointment_date=req.body.ad
    var patient_bloodpressure=req.body.bp
    var patient_cholesterol=req.body.c
    var patient_sugar=req.body.s
    var dt={
        "pID":patient_id,
        "name":patient_name,
        "age":patient_age,
        "gender": patient_gender,
        "last_appointment": last_appointment,
        "doctor_name": doctor_name,
        "appointment_date": appointment_date,
        "patient_bp": patient_bloodpressure,
        "patient_cholesterol": patient_cholesterol,
        "patient_sugar": patient_sugar
    }
    db.collection('datas').insertOne(dt,function(err,collection){
        if(err) console.log(err) 
        else alert("Your information is recorded")
        res.sendFile('../view.html')
       })
})*/


app.get('/appointment.html',(req,res)=>{
    res.sendFile('public/appointment.html',host_path)
})
app.use(bodyParser.urlencoded({
  extended: true
}));
app.post('/appointment.html',function(req,res){
    var patient_id=req.body.id
    var patient_name=req.body.pn
    var patient_age=req.body.pa
    var patient_gender=req.body.gender
    var last_appointment=req.body.la
    var doctor_name=req.body.d
    var appointment_date=req.body.ad
    var patient_bloodpressure=req.body.bp
    var patient_cholesterol=req.body.c
    var patient_sugar=req.body.s
    var dt={
        "pID":patient_id,
        "name":patient_name,
        "age":patient_age,
        "gender": patient_gender,
        "last_appointment": last_appointment,
        "doctor_name": doctor_name,
        "appointment_date": appointment_date,
        "patient_bp": patient_bloodpressure,
        "patient_cholesterol": patient_cholesterol,
        "patient_sugar": patient_sugar
    }
    db.collection('datas').insertOne(dt,function(err,collection){
        if(err) console.log(err) 
        else alert("Your information is recorded")
        res.redirect('../view.html')
       })
})


const { kStringMaxLength}=require('buffer');
app.set('view engine','ejs');
mongoose.connect('mongodb://localhost:27017/healthfit');
const appointSchema= {
  pID:String,
  name:String,
   age:String,
  gender: String,
  last_appointment:String,
  doctor_name:String,
  appointment_date:String,
  patient_bp:String,
  patient_cholesterol:String,
  patient_sugar:String
}
const appoint=mongoose.model('datas',appointSchema);
app.get('/view.html',(req,res)=>{
    res.sendFile(__dirname+"/view.html")
})
app.post("/view.html",(req,res)=>{
  patient_id=req.body.id
  appoint.find({pID:patient_id},function(err,docs){
    if(err)
    {
      res.send("No record available")
    }
    else{
      res.render('index',{
        user :docs
      })
    }
  })
  })
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}!`)
})






