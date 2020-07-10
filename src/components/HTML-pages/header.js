$(document).ready(function()
{
    /* Desktop */
    $(".nav-item").on("mouseenter", function()
    {
        if($(window).width() > 1024)
        {
            $(this).find(".l-sign").removeClass("fa-angle-down");
            $(this).find(".l-sign").addClass("fa-angle-up");

            $(this).css("color", "rgb(0, 180, 137)");
            $(this).parent().parent().find(".sub-nav").css("display", "flex");
        }
    });
    
    $(".nav-item").on("mouseleave", function()
    {
        if($(".sub-nav:hover").length == 0 && $(window).width() > 1024)
        {
            $(this).find(".l-sign").removeClass("fa-angle-up");
            $(this).find(".l-sign").addClass("fa-angle-down");

            $(this).css("color", "black");
            $(this).parent().parent().find(".sub-nav").hide();
        }
    });

    $(".sub-nav").on("mouseleave", function()
    {
        if($(window).width() > 1024)
        {
            $(this).find(".l-sign").removeClass("fa-angle-up");
            $(this).find(".l-sign").addClass("fa-angle-down");

            $(".nav-item").css("color", "black");
            $(this).hide();
        }
    });

    /* Mobile + tablette */
    let nav_on = false;
    let subnav_on = false;
    
    $(".nav-item").on("click", function()
    {
        if($(window).width() <= 1024)
        {
            if(!subnav_on)
            {
                $(this).find(".n-sign").removeClass("fa-plus");
                $(this).find(".n-sign").addClass("fa-minus");
                $(this).find(".l-sign").removeClass("fa-angle-down");
                $(this).find(".l-sign").addClass("fa-angle-up");
                $(this).parent().parent().find(".sub-nav").slideDown();
                $(this).parent().parent().find(".sub-nav").css("display", "flex");
                $(this).css("color", "rgb(0, 180, 137)");
            }
            else 
            {
                $(this).find(".n-sign").removeClass("fa-minus");
                $(this).find(".n-sign").addClass("fa-plus");
                $(this).find(".l-sign").removeClass("fa-angle-up");
                $(this).find(".l-sign").addClass("fa-angle-down");
                $(this).parent().parent().find(".sub-nav").slideUp();
                $(this).css("color", "black");
            }
            subnav_on = !subnav_on
        }
    });

    $(".nav-trigger").on("click", function()
    {
        if($(window).width() <= 1024)
        {
            if(!nav_on)
            {
                $(this).removeClass("fa-bars");
                $(this).addClass("fa-close");
                $(".a-nav-2 .right-side").slideDown();
            }
            else 
            {
                $(this).removeClass("fa-close");
                $(this).addClass("fa-bars");
                $(".a-nav-2 .right-side").slideUp();
                $(".sub-nav").hide();
                subnav_on = false;
            }
            nav_on = !nav_on
        }
    });


    $(window).resize(function()
    {
        if($(window).width() > 1024)
        {
            $(".nav-trigger").removeClass("fa-close");
            $(".nav-trigger").addClass("fa-bars");
            $(".n-sign").removeClass("fa fa-close");
            $(".n-sign").addClass("fa fa-plus");
            $(".l-sign").removeClass("fa-angle-up");
            $(".l-sign").addClass("fa-angle-down");
            $(".a-nav-2 .right-side").css("display", "flex");
            $(".sub-nav").hide();
            nav_on = false;
            subnav_on = false;
        }
        else 
        {
            $(".a-nav-2 .right-side").hide();
            $(".sub-nav").hide();
        }
    });
});