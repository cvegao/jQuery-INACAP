$(document).ready(() => {
    $("img").click(function() {
        let data_alt_src = $(this).attr("data-alt-src");
        let new_character = data_alt_src.includes("cat") ? "ninja" : "cat";
        let number = (new_character == "cat") ? data_alt_src.slice(5) : data_alt_src.slice(3);
        $(this).attr("data-alt-src", new_character + number);
        $(this).attr("src", "assets/img/" + new_character + number + ".png");
        })
})