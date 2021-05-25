$(document).ready(() => {
    //
    $("#btn-add-class").click(() => {
        $("#p-add-class").addClass("red");
    })
    //
    $("#btn-slidetoggle").click(() => {
        $("#img-slidetoggle").slideToggle();
    })
    //
    $("#btn-append").click(() => {
        $("#p-append").append("<p id='new-p'><strong></strong></p>");
        $("#new-p").text("New paragraph!!");
    })
    //
    $("#btn-hide").click(function() {
        $("#p-hide-show").hide();
        $("#btn-show").slideDown();
        $(this).slideUp();
    })

    $("#btn-show").click(function() {
        $("#p-hide-show").show();
        $("#btn-hide").slideDown();
        $(this).slideUp();
    })
    //
    $("#btn-sum").click(() => {
        $("#result").val(parseInt($("#number1").val()) + parseInt($("#number2").val()));
        $("#result").fadeIn();
    })
    //
    $("#btn-before").click(() => {
        $("#p-before-after").before("<p class='text-danger'>Before</p>");
    })
    $("#btn-after").click(() => {
        $("#p-before-after").after("<p class='text-success'>After</p>");
    })
    //
    $("#btn-toggle").click(function() {
        $(this).html("Show");
        $(this).attr("style", "background-color: green;");
        $("#p-toggle").toggle();
    })
    //
    $("#btn-fade-out").dblclick(() => {
        $("p").fadeOut();
    })
    $(document).keypress(() => {
        $("p").fadeIn();
    })
})