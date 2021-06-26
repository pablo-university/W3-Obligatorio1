<!DOCTYPE html>
<html>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title><?php wp_title('|', true, 'right'); ?></title>

	<!-- bootstrap js cdn -->
	<script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
	<!-- nprogresJS cdn -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js"></script>
	<!-- nprogresCSS cdn -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
	<!-- particle cdn -->
	<script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>

	<!-- font -->
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
	<!-- secondary font -->
	<link href="https://fonts.googleapis.com/css2?family=Volkhov:wght@400;700&display=swap" rel="stylesheet">

	<!-- js -->
	<script defer async src=" <?php echo esc_url(get_stylesheet_directory_uri()); ?>/src/assets/js/index.js" type="module"></script>
	<!-- css -->
	<link rel="stylesheet" href="<?php echo esc_url(get_stylesheet_uri()); ?>" type="text/css" />
	<?php wp_head(); ?>
</head>

<body <?php body_class('class-name'); ?>>

	<!-- en conjunto con el nav se pone show, me prendo de el para hablarle al header -->
	<input type="hidden" id="navbarNav">
	<!-- absoluto para superar neuronas animadas y crear animacion mobil de menu -->
	<header id="header" class="position-absolute top-0 w-100 pt-3"></header>

	<!-- esto se posiciona por sobre todo para poder interactuar con el, 
        en consecunecia como hay menu botones etc en esta area, estos deben
        SUPERAR este elemento por lo que hay otros elementos posicionados (header(nav) y boton por ahora) -->
	<div id="particles-js"></div>

	<main>
		<!-- cierra en footer.php -->