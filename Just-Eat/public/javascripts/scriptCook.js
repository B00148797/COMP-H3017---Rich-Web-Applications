$("#buttonSubmit").click(function () {
    
});

$("#buttonCancel").click(function () {
    
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