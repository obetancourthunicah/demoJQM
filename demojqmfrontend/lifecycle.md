html
  onload // se ha cargado todo el dom y enlaces directos

jquery.min.js
  $().ready(function);

jquery.mobile.min ...js
  onMobileIinit


  lazy binding
    10 pagina
    5 eventos
    50 events memoria

    1 p -- binding 5


    jquery  === framework javascript frontend

    cross browser hell

    $(".class").attr('data-done',"ok").hide();

    var htmClassCollection = document.getElementsByClassName('class');
    for(var i = 0 ; i< htmClassCollection.length; i++){
      var c = new Element('ATTRIBUTE');
      c.name ="data-done";
      c.value="ok";
      htmClassCollection[i].addAttribute(c);
      htmClassCollection[i].style.display = "none";
    }
    
