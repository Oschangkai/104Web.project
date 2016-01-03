(
    function($) {

        //var options = [
        //  {selector: '#Top', offset: 1000, callback: 'Materialize.fadeInImage("#Dot")'},];
        //Materialize.scrollFire(options);

        $
            (
                function() {
                    $('.button-collapse').sideNav();
                    $('.parallax').parallax();
                    $('.scrollspy').scrollSpy();
                    $('ul.tabs').tabs();
                }
            ); // end of document ready

    }
)(jQuery); // end of jQuery name space
