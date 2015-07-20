// Javscript
$(document).ready(function(){
	/*
	$(".rotate").hide();
	$.ajax({
		url: "mensajes.json",
	}).done(function (data){
		var texto = "escribiendo datos";
		for (var ele in data.mensajes) {
			texto += ", "+data.mensajes[ele];
		}
		$(".rotate").html(texto);
		$(".rotate").show();
	}).fail(function(){
		alert("Error en la construccion del JSON");
	});
	*/
	rotador();
});

function rotador() {
	$(".rotate").textrotator({
	  animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
	  separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
	  speed: 4000 // How many milliseconds until the next word show.
	});
}