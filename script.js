/*function to validate email addresses and send the form data to the console.log 

Approach was to use simple javascript and edit the DOM, the validation technique is a common addapted from StackOverflow
https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript

*/

function Validate() {
    var mail = document.getElementById("email").value;
    var interest = document.getElementById("interest").value;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        //check if instance was left blank
        if (interest == "") {
            document.getElementById("error-email").innerHTML = 'please select an interest';
        }
        else{
            document.getElementById("error-email").innerHTML = '';
            console.log("Email: ", mail, " Interest: ", interest)        
        }
        //log to the console if there is a valid email and interest 
        return (true)
    }
    document.getElementById("error-email").innerHTML = 'please enter a valid email';
}


