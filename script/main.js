$(function () {


    $(window).resize(function () {

        // let size = innerHeight();
        let size =    $(window).innerWidth();

        if (size > 767) {

                $('.link a').on({
                    mouseover: function () {
                        $(this).addClass('change');
                        $(this).css({ border: '1px solid #DFFF9A' })
                    },
                    mouseout: function () {
                        $(this).removeClass('change');
                        $(this).css({ border: '1px solid #fff' })

                    }

                })
            
        } 
        
    });
    
});