/**
 * This file is part of the O2System Venus UI Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 * @copyright      Copyright (c) Steeve Andrian Salim
 */
// ------------------------------------------------------------------------

import $ from "jquery";
import metismenu from 'metismenu';

/**
 * Class Sidebar
 * 
 * @package Partials
 */
export default class Sidebar {
    constructor() {
        /**
         * Add metis menu effect
         */
        $('.sidebar-menu > ul').metisMenu();
    };

    toggle() {
        const leftSidebar = $('.sidebar-left');
        const leftSidebarToggle = $('[data-toggle="sidebar-left"]');
        const leftSidebarScrollOptions = {
            cursorcolor: "#fff",
            cursoropacitymax: 0.5,
            cursorwidth: "3px"
        };

        /**
         * Adding nicescroll effect to the left sidebar
         */
        leftSidebar.niceScroll(leftSidebarScrollOptions);

        if ($(window).width() < 991) {
            $('.venus-admin').removeClass('mini-sidebar-left');
            leftSidebarToggle.on('click', function () {
                $('.venus-admin').toggleClass('open-sidebar-left');
            });
        } else {
            leftSidebarToggle.on('click', function () {
                $('.venus-admin').toggleClass('mini-sidebar-left');

                if ($('.venus-admin').hasClass('mini-sidebar-left')) {
                    leftSidebar.getNiceScroll().remove();
                } else {
                    leftSidebar.css('overflow', 'visible');
                    setTimeout(function () {
                        leftSidebar.css('overflow', 'hidden');
                        leftSidebar.niceScroll(leftSidebarScrollOptions);
                    }, 300);
                }
            });
        }
    }
}