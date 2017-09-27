$(document).ready(function(){
	var banner={
		padre: $('#banner'),
		numeroSlides: $('#banner').children('.slide').length,
		posicion: 1
	}

	var info={
		padre: $('#info'),
		numeroSlides: $('#info').children('.slide').length,
		posicion: 1
	}

	banner.padre.children('.slide').first().css({
		'left': 0
	});

	info.padre.children('.slide').first().css({
		'left': 0
	});

	var altoBanner = function(){
		var alto = banner.padre.children('.slide').outerHeight();
		banner.padre.css({
			'height': alto + 'px'
		});
	}

	var altoInfo = function(){
		var alto = info.padre.children('.active').outerHeight();
		info.padre.animate({
			'height': alto + 'px'
		});
	}

	var altoContenedor = function(){
		var altoVentana = $(window).height();
		if(altoVentana <= $('#contenedor').outerHeight() + 200){
			$('#contenedor').css({
				'height':''
			});
		}else {
			$('#contenedor').css({
				'height': altoVentana + px
			});
		}
	}
	altoBanner();
	altoInfo();
	altoContenedor();

	//para cambiar a tamaño de pantalla de dispositivo
	$(window).resize(function(){
		altoBanner();
		altoInfo();
		altoContenedor();
	})
	//para poner botones de recorrido
	$('#info').children('.slide').each(function(){
		$('#botones').append('<span>');
	});
	$('#botones').children('span').first().addClass('active');


	//BANNER
	//Botón siguiente
	$('#banner_next').on('click', function(e){
		e.preventDefault();

		//para mover el banner
		if(banner .posicion < banner .numeroSlides){

			banner.padre.children().not('active').css({
				'left': '100%'
			});


			$('#banner .active').removeClass('active').next().addClass('active').animate({
				'left': '0'
			});

			$('#banner .active').prev().animate({
				'left': '-100%'
			});

			banner .posicion = banner .posicion + 1;
		}else{
			$('#banner .active').animate({
				'left': '-100%'

			});

			banner.padre.children().not('active').css({
				'left': '100%'
			});

			$('#banner .active').removeClass('active');
			banner.padre.children('.slide').first().addClass('active').animate({
				'left': 0
			});
			banner .posicion=1;
		}

	})

	//Botón anterior
	$("#banner_prev").on('click', function(e){
		e.preventDefault();
		if (banner .posicion >1) {

			banner.padre.children().not('active').css({
				'left': '-100%'
			});
			$('#banner .active').animate({
				'left': '100%'
			});
			$('#banner .active').removeClass('active').prev().addClass('active').animate({
				'left': 0
			});
			banner .posicion = banner .posicion -1;
		}else {
			banner.padre.children().not('.active').css({
				'left': '-100%'
			});
			$('#banner .active').animate({
				'left': '100%'
			});
			$('#banner .active').removeClass('active');
			banner.padre.children().last().addClass('active').animate({
				'left': 0
			});
			banner .posicion = banner .numeroSlides;
		}
	});

	//BANNER INFO
	//Botón siguiente
	$('#info-next').on('click', function(e){
		e.preventDefault();

		//para mover el banner
		if(info .posicion < info .numeroSlides){

			info.padre.children().not('active').css({
				'left': '100%'
			});


			$('#info .active').removeClass('active').next().addClass('active').animate({
				'left': '0'
			});

			$('#info .active').prev().animate({
				'left': '-100%'
			});

			$('#botones').children('.active').removeClass('active').next().addClass('active');

			info .posicion = info .posicion + 1;
		}else{
			$('#info .active').animate({
				'left': '-100%'

			});

			info.padre.children().not('active').css({
				'left': '100%'
			});

			$('#info .active').removeClass('active');
			info.padre.children('.slide').first().addClass('active').animate({
				'left': 0
			});

			$('#botones').children('.active').removeClass('active');
			$('#botones').children('span').first().addClass('active');


			//Reseteamos la posición a 1
			info .posicion=1;
		}
		altoInfo();

	})

	//Botón anterior
	$("#info-prev").on('click', function(e){
		e.preventDefault();
		if (info .posicion >1) {

			info.padre.children().not('active').css({
				'left': '-100%'
			});
			$('#info .active').animate({
				'left': '100%'
			});
			$('#info .active').removeClass('active').prev().addClass('active').animate({
				'left': 0
			});

			//Para que funcione el botón atrás

			$('#botones').children('.active').removeClass('active').prev().addClass('active');

			info .posicion = info .posicion -1;
		}else {
			info.padre.children().not('.active').css({
				'left': '-100%'
			});
			$('#info .active').animate({
				'left': '100%'
			});
			$('#info .active').removeClass('active');
			info.padre.children().last().addClass('active').animate({
				'left': 0
			});

			$('#botones').children('.active').removeClass('active');
			$('#botones').children('span').last().addClass('active');

			info .posicion = info .numeroSlides;
		}
		altoInfo();
	});

})
