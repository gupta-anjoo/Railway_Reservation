function display_none(){
    document.getElementById('alert').style.display="none";
}

function valid(){
var id=document.getElementById('id').value;
var name=document.getElementById('pna').value;
var gender=document.querySelector('input[name=gender]:checked')
var age=document.getElementById('pa').value;
var bp=document.getElementById('b').value;
var cholestrol=document.getElementById('ch').value;
var sugar=document.getElementById('su').value;
var doctor=document.getElementById('d').value;
if((parseInt(id)<0 || isNaN(id)))
{
    document.getElementById('alert').innerHTML="**Not a valid id";
    document.getElementById('alert').style.display="block";
    setTimeout(display_none,5000);
    return false;
}
if((name.length<2) || (name.length>20))
{
    document.getElementById('alert').innerHTML="**Patientname is either too short or too long";
    document.getElementById('alert').style.display="block";
    setTimeout(display_none,5000);
    return false;
}
else if(!isNaN(name))
{
    document.getElementById('alert').innerHTML="**Patientname should be in characters only";
    document.getElementById('alert').style.display="block";
    setTimeout(display_none,5000);
    return false;
}
 if(gender==null)
{
    document.getElementById('alert').innerHTML="**Select gender";
    document.getElementById('alert').style.display="block";
    setTimeout(display_none,5000);
    return false;
}
if((parseInt(age)<0 || isNaN(age)))
{
    document.getElementById('alert').innerHTML="**Not a valid age";
    document.getElementById('alert').style.display="block";
    setTimeout(display_none,5000);
    return false;
}
if(doctor==null)
{
    document.getElementById('alert').innerHTML="**Select doctor name";
    document.getElementById('alert').style.display="block";
    setTimeout(display_none,5000);
    return false;
}
 
if(isNaN(bp)){
    document.getElementById('alert').innerHTML="**Should include only numbers in blood pressure";
    document.getElementById('alert').style.display="block";
    setTimeout(display_none,5000);
    return false;
}
if(isNaN(cholestrol)){
    document.getElementById('alert').innerHTML="**Should include only numbers in cholestrol";
    document.getElementById('alert').style.display="block";
    setTimeout(display_none,5000);
    return false;
}
if(isNaN(sugar)){
    document.getElementById('alert').innerHTML="**Should include only numbers in sugar";
    document.getElementById('alert').style.display="block";
    setTimeout(display_none,5000);
    return false;
}
}

