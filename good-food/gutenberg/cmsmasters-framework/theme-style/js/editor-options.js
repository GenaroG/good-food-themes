/**
 * @package 	WordPress
 * @subpackage 	Good Food
 * @version 	1.0.7
 * 
 * Editor Styles Wrapper Options Toggles Scripts
 * Created by CMSMasters
 * 
 */


(function ($) { 
	"use strict";
	
	$(document).ready(function () { 
		/* Layout Sidebar Field Load */
		if ($('input[name="cmsmasters_layout"]:checked').val() !== 'fullwidth') {
			$('body').addClass('enable_sidebar');
		}
		
		/* Page Layout Change */
		$('input[name="cmsmasters_layout"]').on('change', function () { 
			if ($(this).val() !== 'fullwidth') {
				$('body').addClass('enable_sidebar');
			} else {
				$('body').removeClass('enable_sidebar');
			}
		} );
		
		
		/* Layout Sidebar Field Load */
		if ($('input[name="cmsmasters_post_author_box"]:checked').val() === 'true') {
			$('body').addClass('enable_author_box');
		}
		
		/* Page Layout Change */
		$('input[name="cmsmasters_post_author_box"]').on('change', function () { 
			if ($('input[name="cmsmasters_post_author_box"]:checked').val() === 'true') {
				$('body').addClass('enable_author_box');
			} else {
				$('body').removeClass('enable_author_box');
			}
		} );
	} );
} )(jQuery);

