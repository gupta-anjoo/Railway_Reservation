function display_none(){
    document.getElementById('alert').style.display="none";
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



