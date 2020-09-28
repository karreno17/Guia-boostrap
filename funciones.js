$("#seleccionH3").click(function(event) {
	$("#contenedorSelecciones").load('Selecciones/seleccionColombia.html');
});

$("li a").click(function(event) {
	event.preventDefault();
	if ($(this).data('seleccion') != null) {
		$("#contenedorSelecciones").load('Selecciones/' + $(this).data('seleccion') + '.html');
	}
});

var part = "";
$.getJSON('partidos.json', function(datos){
	$("#contenido").html('');
		$.each(datos["partidos"], function(idx, partido) {
			$("#contenido".append("<tr>" +
				"<td>" + partido["fecha"] + "</td><td>" + partido["equipo1"] + "</td><td>"
				+ partido.equipo2 +"</td>" +
				"</tr>"));
		});
});