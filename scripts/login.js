/*var username = document.getElementById("usernameId").value;
console.log(username);
var password = document.getElementById("passwordId").value;
console.log(password);*/
function validate() {
    var username = document.getElementById("usernameId").value;
    console.log(username);
    var password = document.getElementById("passwordId").value;
    console.log(password);
    if (username == "sheetal" && password == "password") {
        alert("Login Successful!");
    } else {
        alert("Incorrect Login ):");
    }
    
    }