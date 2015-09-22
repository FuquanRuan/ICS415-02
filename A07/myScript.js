/**
 * Created by Fuqan_Ruan on 2015/9/20.
 */
function getClasses(elem)
{
    var elemArr = elem.className.split(" ");
    return elemArr;
}
document.getElementById("className").innerHTML = getClasses(document.getElementById("foobar"));
function callAddClass()
{
    addClass(document.getElementById("foobar"), document.getElementById("inputClass").value);
}
function addClass(elem, className)
{
    elem.className += " " + className;
    document.getElementById("className").innerHTML = getClasses(document.getElementById("foobar"));

}


function validateForm() {
    var url = location.search.slice(1).split('&');
    var error = "";
    password = url[2].split('=');
    conPassword = url[3].split('=');
    if (document.myForm.username.value == "")
    {
        document.getElementById("username").style.backgroundColor = "red";
        error += "*Please enter a User name*<br>";
    }
    if(document.myForm.email.value == "")
    {
        document.getElementById("email").style.backgroundColor = "red";
        error += "*Please enter a Email*<br>";
    }
    if(document.myForm.password.value == "")
    {
        document.getElementById("password").style.backgroundColor = "red";
        error += "*Please enter a Password*<br>"
    }
    if(document.myForm.confirm.value == "")
    {
        document.getElementById("confirm").style.backgroundColor = "red";
        error += "*Please enter a Confirm Password*<br>";
    }
    if(document.myForm.password.value != document.myForm.confirm.value)
    {
        document.getElementById("password").style.backgroundColor = "red";
        document.getElementById("confirm").style.backgroundColor = "red";
        error += "*Password & Confirm Password were not match*<br>";
    }
    if(error != "")
    {
        document.getElementById("error").innerHTML = error;
        return false;
    }else
        return true;
    {

    }
}