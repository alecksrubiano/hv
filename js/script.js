/*-----------Pau Cuesta Arcos-----------*/

$(document).ready(main);
 
var contadormenu = 1;
var contadorformulario = 1;
 
function main () {
	$('.ioMenuMovil').click(function(){
		aparicion_menu();
	});

	var menu_cerrar = function(){
		if ($(window).width() < '758') {
			contadormenu = 1;
			$('#card_menu').animate({
				left: '-100%'
			});
		}
	}

	var aparicion_menu = function(){
		if (contadormenu == 1) {
			$('#card_menu').animate({
				left: '0%'
			});
			contadormenu = 0;
		} else {
			contadormenu = 1;
			$('#card_menu').animate({
				left: '-100%'
			});
		}
	}

	$(window).resize(function(){		
		desplazamiento_barra(section.posicion);
		posicion_menu();
		alturasAuto();
		altoSection();
	});

	var posicion_menu = function(){
		var ventana_ancho = $(window).width();
		if (ventana_ancho >= '758') {
			$('#card_menu').css({
				'left': '0',
				display: 'inline-block'
			});
			$('#barra').css({display: 'block'});
		} else{
			$('#card_menu').css({
				'left':'-100%'
			});
			$('#barra').css({display: 'none'});
		}
	}

	var section = {
		padre: $('#slider'),
		numeroSlides: $('#slider').children('.slide').length,
		posicion: 1
	};

	var desplazamiento_barra = function(pos){
		var tamaño_menu;
		var izq;
		if (pos == 1) {
			tamaño_menu = $('#home_menu').innerWidth();
			izq = $('#home_menu').position().left;
			$('#barra').animate({
				left: izq + 'px'
			});
		} else if (pos == 2) {
			tamaño_menu = $('#aboutme_menu').innerWidth();
			izq = $('#aboutme_menu').position().left;
			$('#barra').animate({
				left: izq + 'px'
			});
		} else if (pos == 3) {
			tamaño_menu = $('#skills_menu').innerWidth();
			izq = $('#skills_menu').position().left;
			$('#barra').animate({
				left: izq + 'px'
			});
		} else if (pos == 4) {
			tamaño_menu = $('#portfolio_menu').innerWidth();
			izq = $('#portfolio_menu').position().left;
			$('#barra').animate({
				left: izq + 'px'
			});
		} else if (pos == 5) {
			tamaño_menu = $('#blog_menu').innerWidth();
			izq = $('#blog_menu').position().left;
			$('#barra').animate({
				left: izq + 'px'
			});
		}
		$('#barra').animate({
			width: tamaño_menu + 'px'
		});
	};

	var skills = function(){
		$('.level').css({width: '0%'});
		$('.rest').css({width: '98%'});
		$('.hexagono').css({left: '0%'});
	}

	var animacion_skills = function(){
		$('#level11').animate({
			width: '84%'
		}, 2000);
		$('#rest11').animate({
			width: '14%'
		}, 2000);
		$('#hexagono11').animate({
			left: '85%'
		}, 2000);

		$('#level21').animate({
			width: '79%'
		}, 2000);
		$('#rest21').animate({
			width: '19%'
		}, 2000);
		$('#hexagono21').animate({
			left: '80%'
		}, 2000);

		$('#level31').animate({
			width: '55%'
		}, 2000);
		$('#rest31').animate({
			width: '43%'
		}, 2000);
		$('#hexagono31').animate({
			left: '56%'
		}, 2000);

		$('#level41').animate({
			width: '51%'
		}, 2000);
		$('#rest41').animate({
			width: '47%'
		}, 2000);
		$('#hexagono41').animate({
			left: '52%'
		}, 2000);


		$('#level12').animate({
			width: '63%'
		}, 2000);
		$('#rest12').animate({
			width: '35%'
		}, 2000);
		$('#hexagono12').animate({
			left: '64%'
		}, 2000);

		$('#level22').animate({
			width: '69%'
		}, 2000);
		$('#rest22').animate({
			width: '29%'
		}, 2000);
		$('#hexagono22').animate({
			left: '70%'
		}, 2000);

		$('#level32').animate({
			width: '57%'
		}, 2000);
		$('#rest32').animate({
			width: '40%'
		}, 2000);
		$('#hexagono32').animate({
			left: '58%'
		}, 2000);

		$('#level42').animate({
			width: '85%'
		}, 2000);
		$('#rest42').animate({
			width: '12%'
		}, 2000);
		$('#hexagono42').animate({
			left: '86%'
		}, 2000);
	};

	var alturasAuto = function(){
		$('#home').css({height: 'auto'});
		$('#aboutme').css({height: 'auto'});
		$('#skills').css({height: 'auto'});
		$('#portfolio').css({height: 'auto'});
		$('#blog').css({height: 'auto'});
	}

	var altoSection = function(){
		alturasAuto();
		var alto = section.padre.children('.active').innerHeight();
		
		if (alto >= $(window).height()) {
			section.padre.css({
			'height': alto + 'px'
			});
			section.padre.children('.active').css({
			height: '100%'
			});
		}
		else if (alto < $(window).height()){
			section.padre.css({
			'height': '100vh'
			});
			section.padre.children('.active').css({
			height: '100%'
			});
		}
	}

	alturasAuto();
	altoSection();
	posicion_menu();
	desplazamiento_barra(section.posicion);

	section.padre.children('.slide').first().css({
		'left': '0%',
		position: 'relative'
	});

	section.padre.children().not('.active').css({
		'left': '100%',
		position: 'absolute'
	});

	var mainMenu = function(i, change_section){
		if (section.posicion > i) {
			$('#slider .active').animate({
				'left': '100%'
			});
			$('#slider .active').css({
				position: 'absolute'
			});
			section.padre.children().not('.active').css({
				'left': '-100%',
				position: 'absolute'
			});
			$('#slider .active').removeClass('active');
			section.padre.children(change_section).addClass('active').animate({
				'left': 0	
			});
			section.padre.children('.active').css({
				position: 'relative'
			});
			section.posicion = i;
		}
		if (section.posicion < i) {
			$('#slider .active').animate({
				'left': '-100%'
			});
			$('#slider .active').css({
				position: 'absolute'
			});
			section.padre.children().not('.active').css({
				'left': '100%',
				position: 'absolute'
			});
			$('#slider .active').removeClass('active');
			section.padre.children(change_section).addClass('active').animate({
				'left': 0	
			});
			section.padre.children('.active').css({
				position: 'relative'
			});
			section.posicion = i;
		}
		if (section.posicion != 1) {
			$('#header').css({
				background: "#29abe2"
			});
		} else {
			$('#header').css({
				background: "#233D58"
			});
		}
		altoSection();
		desplazamiento_barra(section.posicion);
	}

	$('#home_link').click(function(e){
		e.preventDefault();
		mainMenu(1, '#home');
		menu_cerrar();
		altoSection();
	});

	$('#aboutme_link').click(function(e){
		e.preventDefault();
		mainMenu(2, '#aboutme');
		menu_cerrar();
		altoSection();
	});

	$('#skills_link').click(function(e){
		console.log("Activa");
		e.preventDefault();
		mainMenu(3, '#skills');
		menu_cerrar();
		altoSection();
		skills();
		window.setTimeout(animacion_skills(),3000);
	});

	$('#portfolio_link').click(function(e){
		e.preventDefault();
		mainMenu(4, '#portfolio');
		menu_cerrar();
		altoSection();
	});

	$('#blog_menu').click(function(e){
		e.preventDefault();
		mainMenu(5, '#blog');
		menu_cerrar();
		altoSection();
	});

	$('#next_section').click(function(e){
		e.preventDefault();

		if (section.posicion < section.numeroSlides){
			// Nos aseguramos de que las demas slides empiecen desde la derecha.
			section.padre.children().not('.active').css({
				'left': '100%',
				position: 'absolute'
			});
			// Quitamos la clase active y se la ponemos al siguiente elemento.Y lo animamos
			$('#slider .active').removeClass('active').next().addClass('active').animate({
				'left': 0
			});

			$('#slider .active').css({
				position: 'relative'
			});

			// Animamos el slide anterior para que se deslaza hacia la izquierda
			$('#slider .active').prev().animate({
				'left': '-100%'
			});

			$('#slider .active').prev().css({
				position: 'absolute'
			});
			section.posicion = section.posicion + 1;
		} else {
			// Hacemos que el slide activo (es decir el ultimo), se anime hacia la derecha
			$('#slider .active').animate({
				'left': '100%'
			});

			$('#slider .active').css({
				position: 'absolute'
			});
			// Seleccionamos todos los slides que no tengan la clase .active
			// y los posicionamos a la derecha
			section.padre.children().not('.active').css({
				'left': '-100%',
				position: 'absolute'
			});
			// Eliminamos la clase active y se la ponemos al primer elemento.
			// Despues lo animamos.
			$('#slider .active').removeClass('active');
			section.padre.children().first().addClass('active').animate({
				'left': 0
			});
			section.padre.children('.active').css({
				position: 'relative'
			});
			// Reseteamos la posicion a 1
			section.posicion = 1;
		}
		if (section.posicion != 1) {
			$('#header').css({
				background: "#29abe2"
			});
		} else {
			$('#header').css({
				background: "#233D58"
			});
		}
		altoSection();
		if (section.posicion == 3) {
			console.log("Activa");
			skills();
			window.setTimeout(animacion_skills(),3000);	
		}
		desplazamiento_barra(section.posicion);
	});

	// Boton Anterior
		$('#prev_section').click(function(e){
			e.preventDefault();

			if (section.posicion > 1){

				// Nos asegramos de todos los elementos hijos (que no sean) .active
				// se posicionen a la izquierda
				section.padre.children().not('.active').css({
					'left': '-100%',
					position: 'absolute'
				});

				// Deslpazamos el slide activo de izquierda a derecha
				$('#slider .active').animate({
					'left': '100%'
				});
				$('#slider .active').css({
					position: 'absolute'
				});

				// Eliminamos la clase active y se la ponemos al slide anterior.
				// Y lo animamos
				$('#slider .active').removeClass('active').prev().addClass('active').animate({
					'left': 0
				});

				$('#slider .active').css({
					position: 'relative'
				});

				// Reiniciamos la posicion a 1
				section.posicion = section.posicion - 1;
			} else {

				// Nos aseguramos de que los slides empiecen a la izquierda
				section.padre.children().not('.active').css({
					'left': '100%',
					position: 'absolute'
				});

				// Animamos el slide activo hacia la derecha
				$('#slider .active').animate({
					'left': '-100%'
				});

				$('#slider .active').css({
					position: 'absolute'
				});

				// Eliminamos la clase active y se la ponemos al primer elemento.
				// Despues lo animamos.
				$('#slider .active').removeClass('active');
				section.padre.children('.slide').last().addClass('active').animate({
					'left': 0
				});

				section.padre.children('.slide').css({
					position: 'relative'
				});

				// Reseteamos la posicion a 1
				section.posicion = section.numeroSlides;
			}
			if (section.posicion != 1) {
			$('#header').css({
				background: "#29abe2"
			})
		} else {
			$('#header').css({
				background: "#233D58"
			})
		}
		altoSection();
		if (section.posicion == 3) {
			console.log("Activa");
			skills();
			window.setTimeout(animacion_skills(),3000);
		}
		desplazamiento_barra(section.posicion);
	});

	$('.contact_link').click(function(e){
		e.preventDefault();
		$('#contact_form').animate({width: 'toggle'});
	});
}