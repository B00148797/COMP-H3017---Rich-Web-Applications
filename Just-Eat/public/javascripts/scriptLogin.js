$( "#buttonLogin" ).click(function() {

    // Get the values username
    var valueUsername = $('#username').val();
    // Get the values password
    var valuePassword = $('#password').val();
    // Get the message information
    var valueErrorMessage = $('#messageError').val();

    // Send the data
    $.post( "/login", { username: valueUsername, password: valuePassword }).done(function( data ) {

        if(data.includes("Manager")){
            window.location="/#Manager";

        }else if(data.includes("Customer")){
            window.location="/#Customer"

        }else if(data.includes("Cook")){
            window.location="/#Cook"

        }

        if(data == "Error"){
            document.getElementById("messageError").textContent = "Incorrect username or password, check the information you entered.";
            $('#username').val("");
            $('#password').val("");
        }
    });
});