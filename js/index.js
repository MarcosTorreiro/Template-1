    $(document).ready(function(){

      new WOW().init();

      $('#banner').css({'height':$(window).height()+'px'});
      var flag = false;
      var scroll;
      $(window).scroll(function(){
        scroll = $(window).scrollTop();
        if(scroll>200){
          if(!flag){
            $('#logo').css({'margin-top':'-14px','width':'55px','height':'55px'});
            $('header').css({'background-color':'#1f1f1f','color':'grey'});
            $('nav a').css({'color':'white'});
            $('nav a').hover(function(){
              $(this).css({'color':'#86EFCC'});
            },function(){
              $(this).css({'color':'white'});
            });
            flag = true;
          }
        }else{
          if(flag){
            var tamaño = $(window).width();
            if(tamaño > 1450){
              $('#logo').css({'margin-top':'150px','width':'250px','height':'250px'});
            }else if(tamaño > 750){
              $('#logo').css({'margin-top':'150px','width':'175px','height':'175px'});
            }else{
              $('#logo').css({'margin-top':'150px','width':'125px','height':'125px'});
            }
            $('header').css({'background-color':'transparent', 'color':'yellow'});
            $('nav a').css({'color':'#86EFCC'});
            $('nav a').hover(function(){
              $(this).css({'color':'white'});
            },function(){
              $(this).css({'color':'#86EFCC'});
            });
            flag = false;
          }
        }
      });

      $('nav a').click(function(){
        if($(this).attr('id')=='nosotros'){
          $('html, body').animate({
            scrollTop: $("#part1").offset().top-100
          }, 2000);
        }else if($(this).attr('id')=='servicios'){
          $('html, body').animate({
            scrollTop: $("#part2A").offset().top-25
          }, 2000);
        }else if($(this).attr('id')=='tienda'){
          $('html, body').animate({
            scrollTop: $("#part3A").offset().top-25
          }, 2000);
        }else if($(this).attr('id')=='contacto'){
          $('html, body').animate({
            scrollTop: $("#part4A").offset().top-25
          }, 2000);
        }
      });

      $("#logo").click(function() {
        $('html, body').animate({
          scrollTop: 0
        }, 2000);
      });

      $(window).scroll(function(){
        if($(window).scrollTop()>$("#part2A").offset().top-25){
            $("#part1 h1").removeClass('wow fadeInUp');
            $("#part1 p").removeClass('wow fadeInUp');
            $("#part1 img").removeClass('wow fadeInUp');
            if($(window).scrollTop()>$("#part3A").offset().top-25){
              $(".servicio").removeClass('wow fadeInUp');
              if($(window).scrollTop()>$("#part4A").offset().top-25){
                $(".contenido").removeClass('wow fadeInUp');
              }
            }
          }
      });

        $(window).resize(function(){
          var tamaño = $(window).width();
          if($(window).scrollTop()<201){
          if(tamaño > 1450){
            $('#logo').css({'width':'250px','height':'250px'});
          }else if(tamaño > 750){
            $('#logo').css({'width':'175px','height':'175px'});
          }else{
            $('#logo').css({'width':'125px','height':'125px'});
          }
        }
        });

    });
