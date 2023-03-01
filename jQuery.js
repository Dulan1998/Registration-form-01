
$('.loginbtn').click(function(){
    $('.login').show();
    $('.signUp').hide();
    /* border bottom on button click */
    $('.loginbtn').css({'border-bottom' : '2px solid #ff4141'});
    /* remove border after click */
    $('.signUpbtn').css({'border-style' : 'none'});
  });


  $('.signUpbtn').click(function(){
    $('.login').hide();
    $('.signUp').show();
    /* border bottom on button click */
    $('.signUpbtn').css({'border-bottom' : '2px solid #ff4141'});
     /* remove border after click */
     $('.loginbtn').css({'border-style' : 'none'});
  });