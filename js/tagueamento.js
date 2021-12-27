// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-12345-6', 'auto');

//Pageview for all pages
ga('send', 'pageview');

//Menu "entre em contato" event
function menu_contato(event) {
    ga('send', 'event', {
      eventCategory: 'menu',
      eventAction: 'entre_em_contato',
      eventLabel: 'link_externo',
      transport: 'beacon'
    });
  }

//Menu "download PDF" event
function menu_downloadpdf(event) {
    ga('send', 'event', {
      eventCategory: 'menu',
      eventAction: 'download_pdf',
      eventLabel: 'download_pdf',
      transport: 'beacon'
    });
  }

//Buttons on "analise" page
function analise_buttons(event) {
  var name = event.getAttribute("data-name");
  ga('send', 'event', {
    eventCategory: 'analise',
    eventAction: 'ver_mais',
    eventLabel: name
  });
}

//Check form 'sobre' page
function check_form(event){
  var name = event.getAttribute("id")
  var valor = event.value
  var check = jQuery('#aceito').prop("checked");

  if (valor != '' & name != 'aceito' ){
    ga('send', 'event', {
      eventCategory: 'contato',
      eventAction: name,
      eventLabel: 'preencheu'
    });
  }

  if(check === true) {
    ga('send', 'event', {
      eventCategory: 'contato',
      eventAction: name,
      eventLabel: 'preencheu'
    });
  }
  
}

//popup event
function popup(event) {
  ga('send', 'event', {
    eventCategory: 'contato',
    eventAction: 'enviado',
    eventLabel: 'enviado'
  });
}