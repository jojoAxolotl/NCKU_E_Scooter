AOS.init();  // AOS initiation

$('.aos-init').removeClass('aos-animate'); // remove ALL classes which triggers animation in document

new fullpage('#fullpage', {
    //.............................................
    //....Your other options....
    //..............................................
    anchors: ['page1', 'page2', 'page3', 'page4'],
    onLeave: function(){
        jQuery('.section [data-aos]').removeClass("aos-animate");
    },
    onSlideLeave: function(){
        jQuery('.slide [data-aos]').removeClass("aos-animate");
    },
    afterSlideLoad: function(){
        jQuery('.slide.active [data-aos]').addClass("aos-animate");
    },
    afterLoad: function(){
        jQuery('.section.active [data-aos]').addClass("aos-animate");
       //jQuery('.fp-table.active .aos-init').addClass('aos-animate');
    }
});

$(document).on('click', '#about_us', function(){
  fullpage_api.moveTo('page2');
});

$(document).on('click', '#about_scooter', function(){
  fullpage_api.moveTo('page3');
});

$(document).on('click', '#sign', function(){
  fullpage_api.moveTo('page4');
});

