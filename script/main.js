$(function () {


    function color() {

        $('.link a').on({
            mouseover: function () {
                $(this).addClass('change');
                $(this).css({border: '1px solid #DFFF9A'})
            },
            mouseout: function () {
                $(this).removeClass('change');
                $(this).css({border: '1px solid #fff'})


            }
            // mouseover: function () {
            //     $(this).css({backgroundColor:'#DFFF9A', color:'#000',border: '1px solid #DFFF9A'})
            // },
            // mouseout: function () {
            //     $(this).css({backgroundColor:'#000', color:'#fff', border: '1px solid #fff'})
            // }

        })

    }

color();



});