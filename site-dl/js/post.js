ajaxCall = () => {
    // Set up our HTTP request
   
    var number = 999;


    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/includes/post.php');
    //xhr.setRequestHeader('Content-Type', 'application/json');
    //
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // Setup our listener to process completed requests
    xhr.onload = function () {

        // Process our return data
        if (xhr.status >= 200 && xhr.status < 300) {
            // What do when the request is successful
            // console.log('success!', xhr.response);
            //alert(xhr.response);
            window.location.reload();
        } else {
            // What do when the request fails
            console.log('The request failed! status code was ' + xhr.status);

        }

        // Code that should run regardless of the request status
        //console.log('This always runs...');
    };

    // Create and send a GET request
    // The first argument is the post type (GET, POST, PUT, DELETE, etc.)
    // The second argument is the endpoint URL


    xhr.send(encodeURI('name=' + userNm.value+'last_name='+lastNm.value+'email=' + email.value+'number=' + number+ 'message=' + myMsg));
}
function getText(){
    var text = document.getElementById("message").value;
    var words = text.split(/\s+/);
    return words;
 }


var userNm;

var lastNm;
 
var email;
var myMsg;
var captcha;
let submit = document.getElementById("submit");

submit.addEventListener(
    "click",
    function (event) {
        event.preventDefault();
       

         userNm = document.querySelector('input[name=name]');

         lastNm = document.querySelector('input[name=last_name]');

         email = document.querySelector('input[name=email]');
         myMsg = getText();
         captcha = document.querySelector('input[name=captcha]');

        if (userNm.value != " " && lastNm.value != " " && email.value != " " && captcha.value != " ") {


            if (captcha.value == 22 || captcha.value == "22") {
                ajaxCall();
               
                


            } else {
                alert("Incorrect captcha please try again");

            }

        } else {

            alert("ooopss there was a problem did you fill in all required fields and enter the correct captcha");
        }
    }
);
