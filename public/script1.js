function nutrients(){
    var age=document.getElementById('age').value;
    var cal,pro,na,ca,fe,vitA,vitC,vitD,vitB;
    var calf,prof,naf,caf,fef,vitAf,vitCf,vitDf,vitBf;
    if(document.getElementById('mg').checked==true){
        if (age=="14-18")
        {
            cal=2600;
            pro=59;
            na=1500;
            ca=1000;
            fe=8;
            vitA=900;
            vitB=16;
            vitC=90;
            vitD=15;
        }
        else if(age=="19-24"){
            cal=2600;
            pro=58;
            na=1500;
            ca=1000;
            fe=8;
            vitA=900;
            vitB=16;
            vitC=90;
            vitD=15;

        }
        else if(age=="25-50")
        {
            cal=2500;
            pro=63;
            na=1500;
            ca=1000;
            fe=8;
            vitA=900;
            vitB=16;
            vitC=90;
            vitD=15;
        }
        else if(age=="51-60"){
            cal=2400;
            pro=63;
            na=1500;
            ca=1000;
            fe=8;
            vitA=900;
            vitB=16;
            vitC=90;
            vitD=15;

        }
        else if(age=="61 and above"){
            cal=2300;
            pro=63;
            na=1500;
            ca=1300;
            fe=8;
            vitA=900;
            vitB=16;
            vitC=90;
            vitD=15;
        }
        document.getElementById('cal').value=cal;
        document.getElementById('pro').value=pro;
        document.getElementById('na').value=na;
        document.getElementById('ca').value=ca;
        document.getElementById('fe').value=fe;
        document.getElementById('A').value=vitA;
        document.getElementById('B').value=vitB;
        document.getElementById('C').value=vitC;
        document.getElementById('D').value=vitD;
        document.getElementById('nutri_valm').style.display="block";
    }
    else if(document.getElementById('fg').checked==true){
        if (age=="14-18")
        {
            calf=1900;
            prof=44;
            naf=1500;
            caf=1000;
            fef=18;
            vitAf=700;
            vitBf=14;
            vitCf=75;
            vitDf=15;
        }
        else if(age=="19-24"){
            calf=2100;
            prof=46;
            naf=1500;
            caf=1000;
            fef=18;
            vitAf=700;
            vitBf=14;
            vitCf=75;
            vitDf=15;
        }
        else if(age=="25-50")
        {
            calf=1900;
            prof=50;
            naf=1500;
            caf=1000;
            fef=18;
            vitAf=700;
            vitBf=14;
            vitCf=75;
            vitDf=15;
        }
        else if(age=="51-60"){
            calf=1900;
            prof=50;
            naf=1300;
            caf=1200;
            fef=8;
            vitAf=700;
            vitBf=14;
            vitCf=75;
            vitDf=15;
        }
        else if(age=="61 and above"){
            calf=1900;
            prof=50;
            naf=1200;
            caf=1200;
            fef=8;
            vitAf=700;
            vitBf=14;
            vitCf=75;
            vitDf=15; 
        }
        document.getElementById('calf').value=calf;
        document.getElementById('prof').value=prof;
        document.getElementById('naf').value=naf;
        document.getElementById('caf').value=caf;
        document.getElementById('fef').value=fef;
        document.getElementById('Af').value=vitAf;
        document.getElementById('Bf').value=vitBf;
        document.getElementById('Cf').value=vitCf;
        document.getElementById('Df').value=vitDf;
        document.getElementById('nutri_valf').style.display="block";
    }
    else{
        window.alert("Select gender");
    }
   
}
function sources(){
    sr=document.getElementById('source').value;
    if(sr=="cal"){
        document.getElementById('sources').innerHTML="Oats (81g)   :54g <br><br> Bananas (136g) :31g <br><br> Chickpea (100g) :27.4g <br><br> Apples(100g) :16g <br><br> Oranges (100g) :15.5g"
    }
    else if(sr=="pro"){
        document.getElementById('sources').innerHTML="Egg(50g) :6.3g <br><br> Cheese(226g) :28g <br><br> Greek yogurt(200g) :19.9g <br><br>Milk(245ml) :8.32g<br><br>Cooked lentils(100g) :9.02g"
    }
    else if(sr=="na"){
        document.getElementById('sources').innerHTML="Canned soup :700mg <br><br> Vegetable juice(240ml) :405mg <br><br> Pickle(28g) :241mg <br><br> Baked beans(127g) :524mg <br><br> Cheese(113g) :350mg"
    }
    else if(sr=="ca"){
        document.getElementById('sources').innerHTML="Milk(237ml) :325mg <br><br>Leafy green(190g) :268mg <br><br> Cheese(28g) :242mg <br><br>Poppy seeds(9g) :127mg"
    }
    else if(sr=="fe"){
        document.getElementById('sources').innerHTML="Soyabean(1 cup) :9.9mg <br><br>Nuts(28.5g) :0.8-1.7mg <br><br>Leafy vegetable(cooked) :5.7mg <br><br>Oats(234g) :1.2mg <br><br>Coconut milk(226g) :7.5mg"
    }
    else if(sr=="a"){
        document.getElementById('sources').innerHTML="Butter (1 tbsp) :97mcg <br><br> Carrot (medium) :392mcg <br><br>Mango (medium) :181mcg <br><br> Papaya (small) :74mcg <br><br> Kale (cooked) :885mcg"
    }
    else if(sr=="b"){
        document.getElementById('sources').innerHTML="Spinach (85g) :41%RDI <br><br>Eggs (50g) :15%RDI <br><br> Milk (240ml) :26%RDI<br><br>Chicken (100g) :69%RDI<br><br>Yogurt (170g) :26%RDI"
    }
    else if(sr=="c"){
        document.getElementById('sources').innerHTML="Cherries (49g) :825mg <br><br>Guavas (1 medium) :125mg <br><br>Parsley (8g) :10mg <br><br>Kiwis (1 medium) :56mg <br><br>Lemon (1 raw) :45mg"
    }
    else if(sr=="d"){
        document.getElementById('sources').innerHTML="Soy milk (237ml) :119lU <br><br>Cow milk (237ml) :115lU <br><br>Mushroom (1 small) :13.6lU <br><br>Egg yolk(1 large) :37lU <br><br>Code liver oil (4.9ml) :450lu"
    }
}
function opening(){
    window.location.href="sources.html";
}
function closingm(){
    document.getElementById('nutri_valm').style.display="none";
}

function closingf(){
    document.getElementById('nutri_valf').style.display="none";
}
function display_none(){
    document.getElementById('alert').style.display="none";
}

function validation(){
var first=document.getElementById('first_n').value;
var last=document.getElementById('last_n').value;
var email=document.getElementById('email').value;
var password=document.getElementById('password').value;
var cpassword=document.getElementById('cpassword').value;
var mphone=document.getElementById('phone').value;
var r=document.querySelector('input[name=gender]:checked')
var pattern= /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
var pp=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
if((first.length<2) || (first.length>20))
{
    document.getElementById('alert').innerHTML="**Firstname is either too short or too long";
    document.getElementById('alert').style.display="block";
    setTimeout(display_none,5000);
    return false;
}
else if(!isNaN(first))
{
    document.getElementById('alert').innerHTML="**Firstname should be in characters only";
    document.getElementById('alert').style.display="block";
    setTimeout(display_none,5000);
    return false;
}
if((last.length<2) || (last.length>20))
{
    document.getElementById('alert').innerHTML="**Lastname is either too short or too long";
    document.getElementById('alert').style.display="block";
    setTimeout(display_none,5000);
    return false;
}
else if(!isNaN(last))
{
    document.getElementById('alert').innerHTML="**Lastname should be in characters only";
    document.getElementById('alert').style.display="block";
    setTimeout(display_none,5000);
    return false;
}
if(email.length>30)
{
     document.getElementById('alert').innerHTML="**Email is too long";
     document.getElementById('alert').style.display="block";
     setTimeout(display_none,5000);
     return false;
 }
else if(email.match(pattern)!=email)
{
    document.getElementById('alert').innerHTML="**Invalid email address";
    document.getElementById('alert').style.display="block";
    setTimeout(display_none,5000);
    return false;
}
 if(password.match(pp)!=password)
 {
    document.getElementById('alert').innerHTML="**Minimum 8 characters including one number,one letter and one special character";
    document.getElementById('alert').style.display="block";
    setTimeout(display_none,5000);
    return false;
 }
else if(cpassword!=password){
    document.getElementById('alert').innerHTML="**Passwords are not matching";  
    document.getElementById('alert').style.display="block";
    setTimeout(display_none,5000);
    return false;
 }
 if(r==null)
{
    document.getElementById('alert').innerHTML="**Select gender";
    document.getElementById('alert').style.display="block";
    setTimeout(display_none,5000);
    return false;
}
 if(mphone.length!=10)
 {
    document.getElementById('alert').innerHTML="**Minimum 10 digits"; 
     document.getElementById('alert').style.display="block";
    setTimeout(display_none,5000);
    return false;
 }
 else if(isNaN(mphone)){
    document.getElementById('alert').innerHTML="**Should include only numbers";
    document.getElementById('alert').style.display="block";
    setTimeout(display_none,5000);
    return false;
}
 else if((mphone.charAt(0)!='9') && (mphone.charAt(0)!='8') && (mphone.charAt(0)!='7') && (mphone.chatAt(0)!='6'))
 {
    document.getElementById('alert').innerHTML="**Invalid number";
    document.getElementById('alert').style.display="block";
    setTimeout(display_none,5000);
    return false;
 }
}
function valid(){
    var email=document.getElementById('LoginUser').value;
    var pass=document.getElementById('LoginPassword').value;
    var pattern= /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    var pp=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if(email.length>30)
    {
         document.getElementById('alert').innerHTML="**Email is too long";
         document.getElementById('alert').style.display="block";
         setTimeout(display_none,5000);
         return false;
     }
    else if(email.match(pattern)!=email)
    {
        document.getElementById('alert').innerHTML="**Invalid email address";
        document.getElementById('alert').style.display="block";
        setTimeout(display_none,5000);
        return false;
    }
    if(pass.match(pp)!=pass)
     {
        document.getElementById('alert').innerHTML="**Minimum 8 characters including one number,one letter and one special character";
        document.getElementById('alert').style.display="block";
        setTimeout(display_none,5000);
        return false;
     }
    }
    function bmi(){
        var h = document.getElementById('height').value;
        var w = document.getElementById('weight').value;
        if(h=="" || w=="")
        {
            window.alert("Enter all details");
        }
        else if(isNaN(h) )
        {
            window.alert("Enter valid number");
        }
        else if(isNaN(w) )
        {
            window.alert("Enter valid number");
        }
        else{
            
            var bmi = w / (h /100 * h /100); 
            var total = bmi.toFixed(2);
            document.getElementById('result').innerHTML = "Your BMI is" + total
        }
    }
    

