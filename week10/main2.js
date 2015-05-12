$(function(){
    
    function submitClick() {
        
        var name = $("#name").val();
        var food = $("#food").val();
        var color = $("#color").val();
        
        $("#result").fadeIn();
        $("#foodtxt").html(food);
        $("#mynametxt").html(name);
        $("#result").css("background-color", color);
    }
    
    $("#result").hide();
    $("#submit").click(submitClick);
})