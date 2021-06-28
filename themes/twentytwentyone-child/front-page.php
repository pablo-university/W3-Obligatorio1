<!-- loop for layout of front-page.php (no used because elementor la caga jaja) -->
<?php 
if ( have_posts() ) {
	while ( have_posts() ) {
		the_post(); 
		//
		// Post Content here
		//
	} // end while
} // end if
?>