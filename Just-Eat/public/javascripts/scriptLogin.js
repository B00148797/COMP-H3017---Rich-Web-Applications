$( "#buttonLogin" ).click(function() {

    // Get the values username
    var valueUsername = $('#username').val();
    // Get the values password
    var valuePassword = $('#password').val();

    // Send the data
    $.post( "/Login", { username: valueUsername, password: valuePassword }).done(function( data ) {

        if(data == "Error"){
            document.getElementById("messageError").textContent = "Incorrect username or password, check the information you entered.";
            $('#username').val("");
            $('#password').val("");
        }
        else
        {
            if(data.includes("Manager")){
                window.location = "/Manager";
    
            }else if(data.includes("Customer")){
                window.location = "/Customer";
    
            }else if(data.includes("Cook")){
                window.location = "/Cook";
    
            }else if(data.includes(valueUsername)){
                window.location = "/Customer"; //Default
            }
        }
    });
});