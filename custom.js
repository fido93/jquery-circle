$(function() {
    $(".percircle").each(function() {
        var a = '<div class="slice"><div class="bar"></div><div class="fill"></div></div>',
            b = $(this).data("percent"),
            c = 3.6 * b;
        $(this).find("span").text(b + "%"), $(this).append(a), b >= 50 ? ($(this).find(".slice").css("clip", "rect(auto,auto,auto,auto)"), $(this).find(".bar").css("transform", "rotate(" + c + "deg)"), $(this).addClass("gt50")) : ($(this).find(".slice").css("clip", "rect(0,1em,1em,.5em)"), $(this).find(".bar").css("transform", "rotate(" + c + "deg)"))
    })
});