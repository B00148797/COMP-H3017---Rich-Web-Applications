var totalPrice = 0;
var numberDishInList = 0;

var nameOfDish = "";
var priceOfDish = 0;

function buttonAddListPay(name, price) {
    nameOfDish = arguments[0];
    priceOfDish = arguments[1];
}

$("#buttonPay").click(function () {

    var infoOrder = "";

    //gets table
    var oTable = document.getElementById('table-column-toggle');
    //gets rows of table
    var rowLength = oTable.rows.length;
    //loops through rows    

    for (i = 1; i < rowLength - 1; i++) {
        //gets cells of current row
        var oCells = oTable.rows.item(i).cells;
        //gets amount of cells of current row

        infoOrder += oCells.item(2).innerHTML;
        infoOrder += "x";
        infoOrder += oCells.item(1).innerHTML;
        infoOrder += " (";
        infoOrder += oCells.item(3).innerHTML;
        infoOrder += ")   ";
    }

    if(totalPrice > 0){
        $.post("/Customer", { infoOrder: infoOrder, totalPrice: totalPrice.toFixed(2) }).done(function(data) {

        });
    
        if (confirm('Have you finished your order? If yes the transaction will be automatically accepted.')) {
            alert("The order has been accepted.");
            location.reload();
          } else {
              //Do nothing
          }
    }
});

$("#buttonAddListPay").click(function () {
    numberDishInList++;

    var multiplicateur = $('#slider-1').val();
    priceOfDish = priceOfDish * multiplicateur;
    totalPrice += priceOfDish;

    $("#labelTotalPrice").text(totalPrice.toFixed(2) + "€");
    $("#listTbody").append('<tr><th>' + numberDishInList + '</th><td>' + nameOfDish + '</td><td>' + multiplicateur + '</td><td>' + priceOfDish.toFixed(2) + '€</td></tr>');
});

$.post("/Customer").done(function (data) {

    for (var i = 0; i < data.length; i++) {

        if (i == 0) {
            $("#listviewDish").append('<li class="ui-li-has-alt ui-li-has-thumb ui-first-child"><a href="#" class="ui-btn"><img style="margin-top: 2.5%;" src="' + data[i].Image + '"><h2>' + data[i].Name + '</h2><p>' + data[i].Description + '</p><h2>' + data[i].Price.toFixed(2) + '€</h2></a><a href="#purchase" data-rel="popup" data-position-to="window" data-transition="pop" aria-haspopup="true" aria-owns="purchase" aria-expanded="false" class="ui-btn ui-btn-icon-notext ui-icon-plus ui-btn-a" title="" onclick="buttonAddListPay(\'' + data[i].Name + '\', ' + data[i].Price + ')"></a>');
        } else if (i == data.length - 1) {
            $("#listviewDish").append('<li class="ui-li-has-alt ui-li-has-thumb ui-last-child"><a href="#" class="ui-btn"><img style="margin-top: 2.5%;" src="' + data[i].Image + '"><h2>' + data[i].Name + '</h2><p>' + data[i].Description + '</p><h2>' + data[i].Price.toFixed(2) + '€</h2></a><a href="#purchase" data-rel="popup" data-position-to="window" data-transition="pop" aria-haspopup="true" aria-owns="purchase" aria-expanded="false" class="ui-btn ui-btn-icon-notext ui-icon-plus ui-btn-a" title="" onclick="buttonAddListPay(\'' + data[i].Name + '\', ' + data[i].Price + ')"></a>');
        } else {
            $("#listviewDish").append('<li class="ui-li-has-alt ui-li-has-thumb"><a href="#" class="ui-btn"><img style="margin-top: 2.5%;" src="' + data[i].Image + '"><h2>' + data[i].Name + '</h2><p>' + data[i].Description + '</p><h2>' + data[i].Price.toFixed(2) + '€</h2></a><a href="#purchase" data-rel="popup" data-position-to="window" data-transition="pop" aria-haspopup="true" aria-owns="purchase" aria-expanded="false" class="ui-btn ui-btn-icon-notext ui-icon-plus ui-btn-a" title="" onclick="buttonAddListPay(\'' + data[i].Name + '\', ' + data[i].Price + ')"></a>');
        }
    }
});