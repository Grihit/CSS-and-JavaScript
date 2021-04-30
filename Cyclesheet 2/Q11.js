function ValidateForm(){
    if(document.getElementById("username").validity.patternMismatch)
    {
        document.getElementById("disp").innerHTML = "Invalid Form Data";
        alert("Username does not follow the pattern 'Username X.'");
        return false;
    }
    else if(document.getElementById("email").validity.patternMismatch)
    {
        document.getElementById("disp").innerHTML = "Invalid Form Data";
        alert("Invalid Email Format");
        return false;
    }
    else if(document.getElementById("mobile").validity.patternMismatch)
    {
        document.getElementById("disp").innerHTML = "Invalid Form Data";
        alert("Invalid mobile no format");
        return false;
    }
    else if(document.getElementById("age").validity.rangeOverflow || document.getElementById("age").validity.rangeUnderflow)
    {
        document.getElementById("disp").innerHTML = "Invalid Form Data";
        alert("Age not between 18 and 60");
        return false;
    }
    else
    {
        document.getElementById("disp").innerHTML = "Valid Form Data";
        return true;
    }
}