function simpleRipple(Item,Options = null) {
    Item = $(Item)
    const DefaultOptions = {
        color:"#FFF",
        opacity:0.4,
        duration:0.4,
        easing:"linear"
    }
    var FinalOptions
    if(Options != null){
        FinalOptions = $.extend({}, DefaultOptions, Options);
    }else{
        FinalOptions = DefaultOptions
    }
    Item.addClass("simpleRipple")
    Item.click(function (e) {
        $(".simpleRipple-ripple").remove();

        var posX = $(this).offset().left,
            posY = $(this).offset().top,
            buttonWidth = $(this).width(),
            buttonHeight =  $(this).height();

        $(this).prepend("<span class='simpleRipple-ripple'></span>");

        if(buttonWidth >= buttonHeight) {
            buttonHeight = buttonWidth;
        } else {
            buttonWidth = buttonHeight;
        }

        var x = e.pageX - posX - buttonWidth / 2;
        var y = e.pageY - posY - buttonHeight / 2;

        $(".simpleRipple-ripple").css({
            background:FinalOptions.color,
            opacity: FinalOptions.opacity,
            animation:"simpleRippleDrop " + FinalOptions.duration+"s "+FinalOptions.easing,
            width: buttonWidth,
            height: buttonHeight,
            top: y + 'px',
            left: x + 'px'
        });
    })
}
