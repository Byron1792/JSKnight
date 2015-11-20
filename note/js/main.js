/**
 * Created by Road on 2015/11/18.
 */



$('.nav-left').onclick = function() {
    console.log("test");
};

//$('#img1').addEventListener('click', function(){
//    console.log("test");
//});

$('#content').innerHTML = 'Hello!';
//$('#content').onchange = function() {
//    console.log("changed");
//};



var initial = function() {
    $('#content').html("Hello!");
    var div = document.createElement("div");
    //div.innerHTML = $('#content').text;
    div.innerHTML = $('#content').html();
    $(".preview").append(div);
}
initial();

var selected = 0;

var goLeft = function() {
    if(0 == selected){
        return;
    }
    updateSelected(selected, --selected);
}

var goRight = function(){
    updateSelected(selected, ++selected);
}


var updateSelected = function(org, current){
    $(".preview").children().css("height", "80px");
    //$(".preview").children()[org].html($('#content').html());
    if($(".preview").children()[current]){
        $(".preview").children()[current].height = '100px';
    }else{
        var div = document.createElement("div");
        div.height = '100px';
        $(".preview").append(div);
    }

}