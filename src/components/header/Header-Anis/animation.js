$(document).ready(function()
{
    /* Desktop */
    $(".nav-item").on("mouseenter", function()
    {
        if($(window).width() > 1024)
        {
            $(this).css("color", "rgb(0, 180, 137)");
            $(this).parent().parent().find(".sub-nav").css("display", "flex");
        }
    });
    
    $(".nav-item").on("mouseleave", function()
    {
        if($(".sub-nav:hover").length == 0 && $(window).width() > 1024)
        {
            $(this).css("color", "black");
            $(this).parent().parent().find(".sub-nav").hide();
        }
    });

    $(".sub-nav").on("mouseleave", function()
    {
        if($(window).width() > 1024)
        {
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
                $(this).parent().parent().find(".sub-nav").slideDown();
                $(this).parent().parent().find(".sub-nav").css("display", "flex");
            }
            else 
            {
                $(this).parent().parent().find(".sub-nav").slideUp();
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
                $(".a-nav-2 .right-side").slideDown();
            }
            else 
            {
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
            $(".a-nav-2 .right-side").css("display", "flex");
            $(".sub-nav").hide();
        }
        else 
        {
            nav_on = false;
            subnav_on = false;
            $(".a-nav-2 .right-side").hide();
            $(".sub-nav").hide();
        }
    });
});