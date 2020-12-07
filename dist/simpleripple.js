function simpleRipple(Item) {
    const RippleClass = $(".simpleRipple-ripple")
    Item.addClass("simpleRipple")
    Item.click(function (e) {

        // Remove any old one
        RippleClass.remove();

        // Setup
        var posX = $(this).offset().left,
            posY = $(this).offset().top,
            buttonWidth = $(this).width(),
            buttonHeight =  $(this).height();

        // Add the element
        $(this).prepend("<span class='simpleRipple-ripple'></span>");


        // Make it round!
        if(buttonWidth >= buttonHeight) {
            buttonHeight = buttonWidth;
        } else {
            buttonWidth = buttonHeight;
        }

        // Get the center of the element
        var x = e.pageX - posX - buttonWidth / 2;
        var y = e.pageY - posY - buttonHeight / 2;


        // Add the ripples CSS and start the animation
        RippleClass.css({
            width: buttonWidth,
            height: buttonHeight,
            top: y + 'px',
            left: x + 'px'
        }).addClass("simpleRipple-rippleEffect");
    })
}
