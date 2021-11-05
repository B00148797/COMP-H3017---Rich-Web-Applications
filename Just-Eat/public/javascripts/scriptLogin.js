$( "#register" ).click(function() {
			
    // Get the values
    var un = $('#username').val();
    
    if(un == ''){
        alert("too short");
    } 
    else
    {
        // Send the data
        $.post( "/login", { username: un }).done(function( data ) {
                    
            // see the result come back
            alert(data);  
            if(data.includes('customer'))
            {
                window.location="/#customer";
            }
        });
    }
});

$( "#buttonLogin" ).click(function() {
    // Get the values username
    var valueUsername = $('#username').val();

    // Send the data
    $.post( "/login", { username: valueUsername}).done(function( data ) {
                    
        // see the result come back
        alert(data);  
        if(data.includes('customer'))
        {
            //window.location="/#customer";
            alert("Gagner !"); 
        }
    });
});