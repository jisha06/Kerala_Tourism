let username=document.getElementById("username")
let email=document.getElementById("email")
let phonenumber=document.getElementById("phonenumber")
let password=document.getElementById("password")
let confirmpassword=document.getElementById("confirmpassword")
let submitError=document.getElementById("submitErr")


function showErrorMsg(index, msg)
    {
        const form_group= document.getElementsByClassName("form-group")[index]
        form_group.classList.add("error")
        form_group.getElementsByTagName("span")[0].textContent = msg
    }
function showSuccessMsg(index)
    {
        const form_group= document.getElementsByClassName("form-group")[index]
        form_group.classList.remove("error")
        form_group.classList.add("success")
    }

function validateUsername()
{
    let userError = ""
    
    if(username.value == "")
        {
            userError= "* Please Enter Your Name"
            showErrorMsg(0,userError)
            return false
        }
        else if(username.value.length <= 4)
        {
            userError = "* Username must be atleast 5 Characters"
            showErrorMsg(0,userError)
            return false
        }
        else if(username.value.length > 14)
        {
            userError= "* Username should not exceeds 14 Characters"
            showErrorMsg(0,userError)
            return false
        }
        else
        {
            userError=""
            showSuccessMsg(0) 
            return true           
        }
}
 
function validateEmail()
{
    let emailError=""
    const regExp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,4})(.[a-z]{2,4})?$/
   
    if(email.value == "")
    {
        emailError = "* Please Enter valid E-mail"
        showErrorMsg(1,emailError)
        return false
    }
    else if(!(regExp.test(email.value)))
    {
        emailError = "* Invalid E-mail"
        showErrorMsg(1,emailError)
        return false
    }
    else
    {
        emailError=""
        showSuccessMsg(1)
        return true
    }
}

function validatePhonenumber()
{
    let phoneError = ""
    const phoneno = /^[0-9]{3}?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/
    
    if(phonenumber.value == "")
    {
        phoneError = "* Please Enter Your Phone Number"
        this.showErrorMsg(2,phoneError)
        return false
    }
    else if((phoneno.test(phonenumber.value)))
    {
        phoneError=""
        showSuccessMsg(2)
        return true
    }
    else
    {
        phoneError = "* Invalid Phonenumber"
        showErrorMsg(2,phoneError)
        return false       
    }
}

function validatePassword()
{
    const indicator = document.querySelector(".indicator");
    const weak = document.querySelector(".weak");
    const medium = document.querySelector(".medium");
    const strong = document.querySelector(".strong");
    const text = document.querySelector(".text");
    
    let regExpWeak = /[a-z]/;
    let regExpMedium = /[A-Z]/;
    let regExpStrong = /\d+/;
    let level = 0;
    
    if(password.value != ""){
		indicator.style.display = "block";
		indicator.style.display = "flex";

		if(password.value.match(regExpWeak) || 
        password.value.match(regExpMedium) || 
        password.value.match(regExpStrong))
			level =1;

		if( ((password.value.match(regExpWeak) && password.value.match(regExpMedium)) || 
			(password.value.match(regExpMedium) && password.value.match(regExpStrong))|| 
			(password.value.match(regExpWeak) && password.value.match(regExpStrong))))
			level =2;

		if( password.value.match(regExpWeak) &&
        password.value.match(regExpMedium) &&
        password.value.match(regExpStrong))
			level =3;

		if(level ==1){
			weak.classList.add("active");
			text.style.display = "block";
			text.textContent = "Your password is too week";
			text.classList.add("weak");
            return false
		}

		if(level ==2)
        {
			medium.classList.add("active");
			text.textContent = "Your password is medium";
			text.classList.add("medium");
            return false
		}
        else
        {
			medium.classList.remove("active");
			text.classList.remove("medium");
            
		}

        if(level ==3 )
        {
            if(password.value.length > 8)
            {
			medium.classList.add("active");
			strong.classList.add("active");
			text.textContent = "Your password is strong";
			text.classList.add("strong");
            return true
            }
            else
            {
                text.textContent = "Password must be minimum 8 character";
                return false
            }
		}
        else
        {
			strong.classList.remove("active");
			text.classList.remove("strong");
            return true
		}
        
	} 
   
    else 
    {
		indicator.style.display = "none";
		text.style.display = "none";
		return false
	}
}

function validateConfirmpassword()
{
    let confirmpassError=""
    console.log(confirmpassword.value)
    if(confirmpassword.value == "")
    {
        confirmpassError = "Please enter confirm password"
        showErrorMsg(4,confirmpassError)
        return false
    }
    else if(confirmpassword.value === password.value)
    {
        confirmpassError=""
        showSuccessMsg(4)
        return true
    }
    else if( !validatePassword())
    {
        confirmpassError="An error occured in Password field"
        showErrorMsg(4,confirmpassError)
        return false
    }
    else
    {
        confirmpassError = "Password must match"
        showErrorMsg(4,confirmpassError)
        return false
    }

}

function validateForm()
{
    if(!validateUsername() || !validateEmail() || !validatePhonenumber() || !validatePassword() || !validateConfirmpassword())
    {
        submitError.innerHTML = "Please fix the error to submit"
        return false
    }
    else
    {
        return true
    }
}

function validateLoginEmail()
{
    let emailError=""
    const regExp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,4})(.[a-z]{2,4})?$/
   
    if(email.value == "")
    {
        emailError = "* Please Enter valid E-mail"
        showErrorMsg(0,emailError)
        return false
    }
    else if(!(regExp.test(email.value)))
    {
        emailError = "* Invalid E-mail"
        showErrorMsg(0,emailError)
        return false
    }
    else
    {
        emailError=""
        showSuccessMsg(0)
        return true
    }
}

function validateloginForm()
{
    if(!validateLoginEmail() || !validatePassword())
    {
        submitError.innerHTML = "Please fix the error to submit"
        return false
    }
    else
    {
        return true
    }
}