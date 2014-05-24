<?php
// The script call. Add this code to /themes/rootsthemename/lib/scripts.php

/*================================================
* The Google Map Script 
* ==============================================*/

/* Add Google Map Script to Specific Page */

function cw_map_style() {
	
	// Run on the front page (static page) only
	if (is_page('69')) {
	
		echo '<style>#map_canvas { width: 100%; height: 548px; }</style>';
		
	}
}

function carawebs_initialise_googlemaps(){
	
	if (is_page('69')) {
	
	    $googlescript = '<script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>';
	    echo $googlescript;
	    
	}
}

function carawebs_googlemaps_control(){
	
	if (is_page('69')) {
	
    // Register the control script
    wp_register_script( 'carawebs_googlemap', get_template_directory_uri() . '/assets/js/vendor/google-map.js');
	
	// Enqueue the masonry controls - they will be built into the footer
    wp_enqueue_script('carawebs_googlemap');
    
	}
}


// Add hooks for front-end
add_action('wp_head', 'cw_map_style', 1);
add_action('wp_head', 'carawebs_initialise_googlemaps', 2);
add_action('wp_enqueue_scripts', 'carawebs_googlemaps_control', 105);

/*====================================================================*/
