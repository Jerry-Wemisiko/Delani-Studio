$(document).ready(function () {
    $("#img1").click(function () {
        $("#img1").slideDown("2000").hide("1000");
        $(".design").show("2000")
    });

    $(".design").click(function () {
        $(".design").slideUp("2000");
        $("#img1").slideDown("1000");
    });


    $("#img2").click(function () {
        $("#img2").slideDown("2000").hide("1000");
        $(".dev").show("2000")
    });

    $(".dev").click(function () {
        $(".dev").slideUp("2000");
        $("#img2").slideDown("1000");
    });

    $("#img3").click(function () {
        $("#img3").slideDown("2000").hide("1000");
        $(".prod").show("2000")
    });

    $(".prod").click(function () {
        $(".prod").slideUp("2000");
        $("#img3").slideDown("1000");
    });
    



    // $(".col").hover(function(){
    //     $(this).css("background-color","yellow")
    // });

});
