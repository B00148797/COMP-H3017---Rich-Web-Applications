$("#buttonResgister").click(function() {

    var valueEmail = $('#email').val();
    var valueUsername = $('#username').val();
    var valuePassword1 = $('#password1').val();
    var valuePassword2 = $('#password2').val();

    $.post("/Register", { email: valueEmail, username: valueUsername, password1: valuePassword1, password2: valuePassword2 }).done(function( data ) {      
        
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