<?php get_template_part( 'inc/page-header' ); ?>

<!-- C. WORK AREA +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

    <!-- C.2. SITE MAST ------------------------------------------------------------------------------------------- -->

    <section class="page archive" id="mast">

        <!-- C.2.1. INTRO ----------------------------------------------------------------------------------------- -->

        <?php get_template_part( 'section-front' ); ?>

        <!-- C.2.1. End ------------------------------------------------------------------------------------------- -->
        
        <!-- C.2.2. SLIDER AREA ----------------------------------------------------------------------------------- -->
        
        <div class="wrapper">
        
            <!-- C.2.2.1. ABOUT US -------------------------------------------------------------------------------- -->
            
            <section class="content">
            
                <div class="container">
                    
                    <h1>Blog Archive</h1>
                
                    <?php
                        $args=array(
                          'post_type' => 'post',
                          'post_status' => 'publish'
                        );
                        $my_query = null;
                        $my_query = new WP_Query($args);

                        if( $my_query->have_posts() ) {
                          while ($my_query->have_posts()) : $my_query->the_post(); ?>

                            <?php the_title() ?>

                            <?php
                          //the_excerpt();
                          endwhile;
                        }

                        wp_reset_query();  // Restore global post data stomped by the_post().
                    ?>
                
                </div>
                
            </section>
            
            <!-- C.2.2.1. END ------------------------------------------------------------------------------------- -->
        
        </div>
        
        <!-- C.2.2. End ------------------------------------------------------------------------------------------- -->

    </section>
    
    <!-- C.2. END ------------------------------------------------------------------------------------------------- -->
<?php get_footer(); ?>
<!-- C. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

<!-- D. JAVASCRIPT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

<!-- D.1. FOOTER JS -->

<?php get_template_part( 'inc/footer-scripts' ); ?>

<!-- D. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->