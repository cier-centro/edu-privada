<script>
$(document).ready(function(){
  var names ={'.fundacion':["95161","95162","95163","95164"],
  '.calidad':["95165","95166","95167"],
  '.otros-servicios':["95169","95171","95172","95173"],
  '.inclusion': ["95180","95181","95182"],
  '.organizacion': ["95183","95186","95187","95189","95190","105457"],
  '.comunidad':["95174","95198","95194","95178","95197","95199","95200","95201","95202","105459"],
  '.formacion':["95191","95192"],
  '.secretarias':["investigadores"]};
  ///no se agrega una clase para colegios y jardines familia porque segun el documento no se muestra nada mas que buscar colegio
  ///el cual es un boton ya visible, se agrega el nodo de "organizacion familia" a "organizacion" dado que este muestra los mismos
  ///cursos, recursos y foros


  //falta agregar en comunidad los nodos de participacion, faltan dos nodos en organizacion, falta formacion, falta los nodos de discapacidad,

  
  //hide and show links of courses, forums and resources
  var exceptions=["http://aprende.colombiaaprende.edu.co/es/edu_privada/docentes","http://aprende.colombiaaprende.edu.co/es/edu_privada/familia"/*,"http://aprende.colombiaaprende.edu.co/es/edu_privada/investigadores"*/];
  var link=window.location.href;
  if(link!=exceptions[0]&&link!=exceptions[1]&&link!=exceptions[2]){
	//hide all
    for(var key in names){
      $(key).css("display", "none");;
    }
	//show specific links
    for(var key in names){

      for (var i = 0; i < names[key].length; i++) {
        if(window.location.href.indexOf(names[key][i])>-1){

          $(key).css("display", "block");;
        }
      }
    }
  }
	//view more links href link correction
  $('.views-more-link').each(function(){
    var href=$(this).attr('href');
    var splitHref=href.split("/");
    var href=splitHref[splitHref.length-1];
    if(window.location.href.indexOf('familia')>-1){
      $(this).attr('href','http://aprende.colombiaaprende.edu.co/es/edu_privada/familia/'+href);
    }
    if (window.location.href.indexOf('docentes')>-1) {
      $(this).attr('href','http://aprende.colombiaaprende.edu.co/es/edu_privada/docentes/'+href);
    }
    if (window.location.href.indexOf('investigadores')>-1) {
      $(this).attr('href','http://aprende.colombiaaprende.edu.co/es/edu_privada/investigadores/'+href);
    }
  });

  //banner view more href link correction
  $('.internal').each(function(){
    var href=$(this).attr('href');
    var splitHref=href.split("/");
    var href=splitHref[splitHref.length-1];
    if(window.location.href.indexOf('familia')>-1){
      $(this).attr('href','http://aprende.colombiaaprende.edu.co/es/edu_privada/familia/'+href);
    }
    if (window.location.href.indexOf('docentes')>-1) {
      $(this).attr('href','http://aprende.colombiaaprende.edu.co/es/edu_privada/docentes/'+href);
    }
    if (window.location.href.indexOf('investigadores')>-1) {
      $(this).attr('href','http://aprende.colombiaaprende.edu.co/es/edu_privada/investigadores/'+href);
    }
  });
});
</script>