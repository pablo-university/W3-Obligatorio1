<?php
// hook para encolar estilos
function my_theme_enqueue_styles()
{
  // Estos son los estilos del tema padre recogidos por el tema hijo.
  wp_enqueue_style('child-style', get_stylesheet_uri() );
  // wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/assets/css/index.css');
  
  // encola los scripts
  // wp_enqueue_script('script-child', get_stylesheet_directory_uri() . '/assets/js/index.js', array(), '1.0.0', true);
}

add_action('wp_enqueue_scripts', 'my_theme_enqueue_styles');




// hook para registrar menu
function wpb_custom_new_menu()
{
  register_nav_menu('my-custom-menu', __('My Custom Menu'));
}

add_action('init', 'wpb_custom_new_menu');



// Include custom navwalker
require_once __DIR__.'/helpers/bs4navwalker.php';
/** 
 * Colocar archivo php
 * requerirlo en functiones
 * registrar un menu
 * usarlo en el nav al walker
 * **/

// wp_nav_menu([
//   'menu'            => 'my-custom-menu',
//   'container'       => 'div',
//   'container_id'    => '',
//   'container_class' => '',
//   'menu_id'         => false,
//   'menu_class'      => 'navbar-nav flex-column',
//   'depth'           => 2,
//   'fallback_cb'     => 'bs4navwalker::fallback',
//   'walker'          => new bs4navwalker()
// ]);

