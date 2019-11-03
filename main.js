$(document).ready(
    function(){
        $('#btn').on('click', function(){
            let slick = $('<div class="single-slide"></div>');
            images.forEach(function(item,){
                slick.append('<img src="images/'+item+'">');
            });

            $('#btn').before(slick);
            $('.single-slide').slick({
                slidesToShow: 4,
                slidesToScroll: 4,
            });
            $(this).remove();
        });
    }
);