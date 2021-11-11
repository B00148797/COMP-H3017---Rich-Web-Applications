$("#buttonSubmit").click(function () {
    var valueNameDish = $("#nameDish").val();
    var valueDescriptionDish = $("#descriptionDish").val();
    var valueImageDish = $("#imageDish").val();
    var valueQuantityDish = $("#quantityDish").val();
    var valuePriceDish = $("#priceDish").val();

    $.post( "/Cook", { nameDish: valueNameDish, descriptionDish: valueDescriptionDish, imageDish: valueImageDish, quantityDish: valueQuantityDish, priceDish: valuePriceDish }).done(function(data) {

    });

    /*
    var sql_INSERT = "INSERT INTO products (Name, Description, Image, Quantity, Price) VALUES ('" + nameDish + "', '" + descriptionDish + "', '" + imageDish + "', '" + quantityDish + "', '" + priceDish + "')";
		console.log(sql_INSERT);
        connection.query(sql_INSERT, function (error, results) {
            if (error) throw error;
        });
    */
});

$("#buttonCancel").click(function () {
    $("#nameDish").val("");
    $("#descriptionDish").val("");
    $("#imageDish").val("");
    $("#quantityDish").val(1);
    $("#priceDish").val("");   
});

$.post("/Cook").done(function (data) {

    for (var i = 0; i < data.length; i++) {

        if(i == 0){
            $("#listviewDish").append('<li class="ui-li-static ui-body-inherit ui-li-has-count ui-first-child">' + data[i].Name + '<span class="ui-li-count ui-body-b">' + data[i].Quantity + '</span></a></li>');
        }else if(i == data.length - 1){
            $("#listviewDish").append('<li class="ui-li-static ui-body-inherit ui-li-has-count ui-last-child">' + data[i].Name + '<span class="ui-li-count ui-body-b">' + data[i].Quantity + '</span></a></li>');
        }else{
            $("#listviewDish").append('<li class="ui-li-static ui-body-inherit ui-li-has-count">' + data[i].Name + '<span class="ui-li-count ui-body-b">' + data[i].Quantity + '</span></a></li>');
        }
    }
});