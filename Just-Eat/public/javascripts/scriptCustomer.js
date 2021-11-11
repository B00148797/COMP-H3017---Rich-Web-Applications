var totalPrice = 0;
var numberDishInList = 0;

$("#buttonPay").click(function () {
    alert("buttonPay");
});

$("#buttonAddListPay").click(function () {
    alert($(this).parent().Name);

    numberDishInList++;
});

$.post("/Customer").done(function (data) {

    for (var i = 0; i < data.length; i++) {

        if(i == 0){
            $("#listviewDish").append('<li class="ui-li-has-alt ui-li-has-thumb ui-first-child"><a href="#" class="ui-btn"><img style="margin-top: 2.5%;" src="' + data[i].Image + '"><h2>' + data[i].Name + '</h2><p>' + data[i].Description + '</p><h2>' + data[i].Price + '0€</h2></a><a href="#purchase" data-rel="popup" data-position-to="window" data-transition="pop" aria-haspopup="true" aria-owns="purchase" aria-expanded="false" class="ui-btn ui-btn-icon-notext ui-icon-plus ui-btn-a" title=""></a>');
        }else if(i == data.length - 1){
            $("#listviewDish").append('<li class="ui-li-has-alt ui-li-has-thumb ui-last-child"><a href="#" class="ui-btn"><img style="margin-top: 2.5%;" src="' + data[i].Image + '"><h2>' + data[i].Name + '</h2><p>' + data[i].Description + '</p><h2>' + data[i].Price + '0€</h2></a><a href="#purchase" data-rel="popup" data-position-to="window" data-transition="pop" aria-haspopup="true" aria-owns="purchase" aria-expanded="false" class="ui-btn ui-btn-icon-notext ui-icon-plus ui-btn-a" title=""></a>');
        }else{
            $("#listviewDish").append('<li class="ui-li-has-alt ui-li-has-thumb"><a href="#" class="ui-btn"><img style="margin-top: 2.5%;" src="' + data[i].Image + '"><h2>' + data[i].Name + '</h2><p>' + data[i].Description + '</p><h2>' + data[i].Price + '0€</h2></a><a href="#purchase" data-rel="popup" data-position-to="window" data-transition="pop" aria-haspopup="true" aria-owns="purchase" aria-expanded="false" class="ui-btn ui-btn-icon-notext ui-icon-plus ui-btn-a" title=""></a>');
        }
    }
});