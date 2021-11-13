$.post("/Manager").done(function (data) {

    var totalOrder = data.length;
    $("#totalOrder").text("Total order: " + totalOrder);

    var totalPrice = 0;
    for (var i = 0; i < data.length; i++) {
        totalPrice = totalPrice + parseInt(data[i].PriceOrder.toFixed(2), 10);
        $("#totalPrice").text("Total price: " + totalPrice.toFixed(2) + "€");
    }


    for (var i = 0; i < data.length; i++) {

        var dateTime = data[i].DateTime;
        var date = $.format.date(dateTime, "ddd, MMMM d, yyyy");
        var time = $.format.date(dateTime, "H:mm:ss");

        var priceOrder = data[i].PriceOrder.toFixed(2);
        var description = data[i].Description;

        if(i == 0){
            $("#listviewOrder").append('<li data-role="list-divider" role="heading" class="ui-li-divider ui-bar-inherit ui-li-has-count ui-first-child">' + date + '<span class="ui-li-count ui-body-inherit">1</span></li><li class="ui-li-static ui-body-inherit"><h2>Customer</h2><p><strong>Total price of the order: ' + priceOrder + '€</strong></p><p>Description: ' + description + '</p><p class="ui-li-aside"><strong>' + time + '</strong></p></li>');
        }else if(i == data.length){
            $("#listviewOrder").append('<li data-role="list-divider" role="heading" class="ui-li-divider ui-bar-inherit ui-li-has-count ui-last-child">' + date + '<span class="ui-li-count ui-body-inherit">1</span></li><li class="ui-li-static ui-body-inherit"><h2>Customer</h2><p><strong>Total price of the order: ' + priceOrder + '€</strong></p><p>Description: ' + description + '</p><p class="ui-li-aside"><strong>' + time + '</strong></p></li>');
        }else{
            $("#listviewOrder").append('<li data-role="list-divider" role="heading" class="ui-li-divider ui-bar-inherit ui-li-has-count ui-li-has-count">' + date + '<span class="ui-li-count ui-body-inherit">1</span></li><li class="ui-li-static ui-body-inherit"><h2>Customer</h2><p><strong>Total price of the order: ' + priceOrder + '€</strong></p><p>Description: ' + description + '</p><p class="ui-li-aside"><strong>' + time + '</strong></p></li>');
        }
    }
});