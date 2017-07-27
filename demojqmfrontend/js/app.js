// Cuando Se INicia Todo JqM
$(document).on("mobileinit", function(e){
    //Se carga despues del cargar el dom, jq, jqm
    // Es adecuado para establecer elementos de configuracion
    $.mobile.loader.prototype.options.text = "Cargando";
    $.mobile.loader.prototype.options.textVisible = true;

}); // en mobileInit

var storageAvaliable = (typeof(Storage) !== "undefined");

function change_page(to) {
    $(":mobile-pagecontainer").pagecontainer("change", "#" + to);
}

function showLoading(){
    $.mobile.loading( 'show');
}
function hideLoading(){
    $.mobile.loading( 'hide');
}

/// Este me permite verificar condiciones antes de
//  inicializar una página no cargada
$(document).on("pagebeforechange", function(e, data) {
  if(!storageAvaliable){
    window.location.assign('nojs.html');
  }
  showLoading();
}); // end PageBeforeChange
// el evento analogo al form_load c# o vb .net donde se
// puede inicializar las data que ocupara un o otra página
$(document).on("pagecontainerbeforeshow", function(e, ui) {
    setTimeout(function(){hideLoading();},100000);
}); // en pagecontainerbeforeshow
//

//
//
// $("#btnAjax").on('vclick', function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     $.get(
//       "http://localhost:3000/",
//       {},
//       function(data,sTxt,xhrq){
//         if(data){
//           var htmlNewDom = "";
//           var tmpOptions = data.map(
//             function(item, i){
//               return '<li><a href>' + item.title + '</a></li>';;
//             }
//           ); // map
//           htmlNewDom = tmpOptions.join('');
//           $("#main_list").html(htmlNewDom).listview("refresh");
//         }
//       },
//       'json'
//       )
//   });
