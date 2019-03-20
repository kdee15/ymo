<div class="o-hamburger m-hamburger--spin toggle-div burger-nav" name="burger-nav" id="burger-menu">
  <div class="m-hamburger-box">
    <div class="m-hamburger-inner"></div>
  </div>
</div>


<div class="toggle-content a-burger-menu" id="burger-nav">

  <!-- BURGER MENU ---------------------------------- -->
  <div class="o-hamburger m-hamburger--spin toggle-div burger-nav on" name="burger-nav">
    <div class="m-hamburger-box">
      <div class="m-hamburger-inner"></div>
    </div>
  </div>

    <?php if ( has_nav_menu( 'primary' ) ) : ?>
      <nav id="site-navigation" class="main-navigation navbar-nav" role="navigation" aria-label="<?php esc_attr_e( 'Primary Menu', 'mvbc' ); ?>">
        <?php
        wp_nav_menu( array(
          'theme_location' => 'primary',
          'menu_class'     => 'primary-menu',
        ) );
        ?>
      </nav>
    <?php endif; ?>

</div>