$(function(){
    $('.skills').myskillbar({});

    let height;
    $(window).scroll(function(){
        const oheight = $('#header').offset().top;
        console.log(oheight);
        if(oheight > 0){
            $('#header').css('background','rgba(228,228,228,0.5)')
        }else{
            $('#header').css('background','rgb(228,228,228)')
        }


    });
});