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
                    $('select').material_select();
                    $('input#input_text, textarea#textarea1').characterCounter();
                    $('ul.tabs').tabs();
                }
            ); // end of document ready

    }
)(jQuery); // end of jQuery name space
