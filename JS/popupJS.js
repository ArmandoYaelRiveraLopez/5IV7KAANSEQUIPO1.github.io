


document.addEventListener("DOMContentLoaded", function() {


  document.getElementById("signin").addEventListener('click',
  function(){

    $('.modal-sign-in').fadeIn('slow');
    document.querySelector('.modal-sign-in').style.display = 'flex';

  });

  document.getElementById("close").addEventListener('click',
  function(){

    $('.modal-sign-in').fadeOut('slow');

  });

  document.getElementById("acount-1").addEventListener('click',
  function(){

    $('.modal-sign-in').fadeOut('slow');
    $('.modal-sign-up').fadeIn('slow');
    document.querySelector('.modal-sign-up').style.display = 'flex';

  });

  document.getElementById("acount-2").addEventListener('click',
  function(){


    $('.modal-sign-up').fadeIn('slow');
    document.querySelector('.modal-sign-up').style.display = 'flex';

  });

  document.getElementById("close-2").addEventListener('click',
  function(){

    $('.modal-sign-up').fadeOut('slow');


  });

});
