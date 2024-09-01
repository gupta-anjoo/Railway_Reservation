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



