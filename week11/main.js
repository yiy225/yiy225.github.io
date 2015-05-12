//$(function() {
    //$("#ajaxrequest").click(
        //function(){
            //var content = $("#ajaxcontainer").html();
            //$("#ajaxcontainer").html(content + "hello everybody");
        //}
    //)
//});


//$(function() {
    //function requestFile(url){
            //$.ajax(
                //{
                    //url: url,
                    //cache: false,
                    //success: function(data){
                        //$("#ajaxcontainer").html(data);
                    //}
                //}
            //);
        //}
    //$("#ajaxrequest").click(function(){
        //requestFile("hello.html");
            //}
        //)
    //$("#ajaxrequest2").click(function(){
        //requestFile("bye.html");
            //}
        //)
    
    //});



$(function() {
    function requestFile(url){
            $.ajax(
                {
                    url: url,
                    cache: false,
                    dataType:"json",
                    success: function(data){
                        $("#fname").html(data.firstname);
                        $("#lname").html(data.lastname);
                        
                    }
                }
            );
        }
    $("#ajaxrequest").click(function(){
        requestFile("data.json");
            }
        )
    });