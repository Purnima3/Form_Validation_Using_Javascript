
const form = document.getElementById('form');

const username = document.getElementById('username');

const email = document.getElementById('email');

const phone = document.getElementById('phone');

const password = document.getElementById('password');

const cpassword = document.getElementById('cpassword');

//add event 
form.addEventListener('submit',(event)=> {
    event.preventDefault();
    validate();
})

//more validation for email
const isEmail = (emailval) =>
{
   var atSymbol = emailval.indexOf("@");
   if(atSymbol < 1) return false;

   var dot = emailval.lastIndexOf('.');//only for the last index.

   if(dot <= atSymbol + 3) return false;

   if( dot === emailval.length - 1)return false;

   return true;
   
}

//defining the validate function

//using trim function all the white spaces before and after the string will be removed.
const validate = () =>
{


     const usernameval  = username.value.trim();

     const emailval= email.value.trim();

     const phoneval = phone.value.trim();

     const passwordval = password.value.trim();

     const cpasswordval = cpassword.value.trim();


//validate the username

     if(usernameval === "")
     {
         setErrorMsg(username, 'username cannot be blank');
     }
     else if(usernameval.length <= 2)
     {
         setErrorMsg(username, 'username should be minimum three characters');
     }
     else{
         setSuccessMsg(username);
     }


//validate email 
     if(emailval === "")
     {
         setErrorMsg(email, 'email cannot be blank');
     }
     else if(!isEmail(emailval))
     {
         setErrorMsg(email, 'not a valid email');
     }
     else{
         setSuccessMsg(email);
     }

//validate phone number
     if(phoneval === "")
     {
         setErrorMsg(phone, 'phone no cannot be blank');
     }
     else if(phoneval.length != 10)
     {
         setErrorMsg(phone, 'not a valid mobile number');
     }
     else{
         setSuccessMsg(phone);
     }


//validate password
    if( passwordval=== "")
         {
             setErrorMsg(password, 'password no cannot be null');
         }
    
        else if(passwordval.length <= 5)
       {
        setErrorMsg(password, 'minimum 6 characters');
       }
       else{
        setSuccessMsg(password);
       }

//validate confirm password
       if( cpasswordval=== "")
         {
             setErrorMsg(cpassword, 'password  cannot be null');
         }
    
        else if(cpasswordval != passwordval)
       {
        setErrorMsg(cpassword, 'password not matching');
       }
       else{
        setSuccessMsg(cpassword);
       }
    }
    



     

     function setErrorMsg(input,errormsgs)
     {
        const formControl = input.parentElement;

        const small = formControl.querySelector('small');

        formControl.className = "form-control error";
        small.innerText = errormsgs;
     }

     
    function setSuccessMsg(input)
    {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    }
