$( "#buttonLogin" ).click(function() {

    // Get the values username
    var valueUsername = $('#username').val();

    // Get the values password
     var valuePassword = $('#password').val();

    // Send the data
    $.post( "/login", { username: valueUsername}).done(function( data ) {
                    
        // see the result come back
        if(data.includes('customer'))
        {
            //window.location="/#customer";
            alert("Gagner !"); 
        }
    });
});