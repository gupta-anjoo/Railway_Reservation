function display_none(){
    document.getElementById('alert').style.display="none";
}

function valid(){
var id=document.getElementById('id').value;
var name=document.getElementById('pna').value;
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
 
}

