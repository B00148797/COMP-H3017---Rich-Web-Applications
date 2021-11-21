$("#buttonResgister").click(function() {

    var valueEmail = $('#email').val();
    var valueUsername = $('#username').val();
    var valuePassword1 = $('#password1').val();
    var valuePassword2 = $('#password2').val();

    var password1 = forge.md.sha256.create();  
    password1.start();  
    password1.update(valuePassword1, "utf8");

    var password2 = forge.md.sha256.create();  
    password2.start();  
    password2.update(valuePassword2, "utf8");

    var hashPassword1 = password1.digest().toHex();
    var hashPassword2 = password2.digest().toHex(); 

    $.post("/Register", { email: valueEmail, username: valueUsername, password1: hashPassword1, password2: hashPassword2 }).done(function( data ) {      
        
        if(data == "ErrorInput"){
            document.getElementById("messageError").textContent = "The information entered is not correct.";
            $('#email').val("");
            $('#username').val("");
            $('#password1').val("");
            $('#password2').val("");

        }else if(data == "ErrorDoublon"){
            document.getElementById("messageError").textContent = "The email address or username are already used.";
            $('#email').val("");
            $('#username').val("");
            $('#password1').val("");
            $('#password2').val("");
        }
        else
        {
            window.location = "/Login";
        }
    });
});