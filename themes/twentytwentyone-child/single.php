<?php get_header(); ?>

<main class="bg-home py-6 pb-7">
	<section class="container">
		<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

				<h1><?php the_title(); ?></h1>
				<?php the_post_thumbnail(); ?>


				<?php the_content(); ?>
			<?php endwhile; ?>
		<?php endif; ?>
	</section>
</main>
<?php get_footer(); ?>