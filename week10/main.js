$(function(){
    
    function dayClick() {
        
        var day = $("#dayText").val();
        
        $("#sentence .day").html(day);
    
        if( day == "awesome") {
            $("#sentence .day").addClass("awesome");
            $("#sentence .day").removeClass("sad");
        }
    
        if( day == "sad") {
            $("#sentence .day").addClass("sad");
            $("#sentence .day").removeClass("awesome");
        }
    }
    
    $("#dayCTA").click(dayClick);
})