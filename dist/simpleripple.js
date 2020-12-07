function simpleRipple(Item) {
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
            width: buttonWidth,
            height: buttonHeight,
            top: y + 'px',
            left: x + 'px'
        }).addClass("simpleRipple-rippleEffect");
    })
}
