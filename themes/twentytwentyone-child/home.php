<!-- https://codex.wordpress.org/The_Loop -->


<?php get_header(); ?>

<main class="py-6 bg-science">
	<section class="container ">
		<h1>Test Zone</h1>


		<section class="py-5">
			<mark>This zone is for play with custom type content</mark>
			<?php
			$args = array(
				'post_type' => 'test',
				'posts_per_page' => 10,
				'orderby'   => 'meta_value',
				'order' => 'ASC',
			);
			$the_query = new WP_Query($args);
			?>
			<?php if ($the_query->have_posts()) : ?>
				<?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
					<!-- title -->
					<h2><?php the_title(); ?></h2>
					<!-- time -->
					<small><?php the_time('F jS, Y'); ?> by <?php the_author_posts_link(); ?></small>
					<ul>
						<li><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></li>
					</ul>
				<?php endwhile;
				wp_reset_postdata(); ?>
			<?php else :  ?>
				<p><?= 'no post pablanga' ?></p>
			<?php endif; ?>
		</section>



		<mark>the code, in this page, is not all of my property, I edit the code for my target (understanding the custom post)</mark>
		<p>REFERENCE: https://codex.wordpress.org/The_Loop</p>

	</section>
</main>

<?php get_footer(); ?>