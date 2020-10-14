$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>50)
        {
            $('.navbar').addClass('sticky');
        }
        else
        {
            $('.navbar').removeClass('sticky');
        }
    })
    $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "ZoomIn",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 2000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });
})
