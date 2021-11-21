$("#buttonLogin").click(function() {

    // Get the values username
    var valueUsername = $('#username').val();
    // Get the values password
    var valuePassword = $('#password').val();

    var password = forge.md.sha256.create();  
    password.start();  
    password.update(valuePassword, "utf8");

    var hashPassword = password.digest().toHex();

    // Send the data
    $.post("/Login", { username: valueUsername, password: hashPassword }).done(function(data) {

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