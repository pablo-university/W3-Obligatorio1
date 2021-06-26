<?php

// funcionalidad avanzada de menu simil bootstrap
require_once get_theme_file_path('inc/class-wp-bootstrap-navwalker.php');

// registro de opciones de menú
if (!function_exists('agustina_register_nav_menu')) {
	function agustina_register_nav_menu()
	{
		register_nav_menus(array(
			'primary' => __('Menu Izquierda', 'agustina'),
			'footer_menu'  => __('Menu Footer', 'agustina'),
		));
	}
	add_action('after_setup_theme', 'agustina_register_nav_menu', 0);
}

if (!function_exists('pablo_post_thumbnails')) {
	function pablo_post_thumbnails()
	{
		add_theme_support('post-thumbnails');
	}
}
add_action('after_setup_theme', 'pablo_post_thumbnails');
