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

import $ from 'jquery';
import metisMenu from 'metismenu';
import Swal from 'sweetalert2';
import toastr from 'toastr';
/**
 * Class Venus
 */
class VenusAdmin {
    constructor() {
        window.$ = window.jQuery = $;

        let sidebarLeftScroll = $('.sidebar-left').niceScroll({
            cursorcolor: "#fff",
            cursoropacitymax: 0.5,
            cursorwidth: "3px"
        });

        let dropdownItemList = $('.dropdown-item-list').niceScroll({
            cursorcolor: "#333",
            cursoropacitymax: 0.5,
            cursorwidth: "3px",
            horizrailenabled: false,
            autohidemode: false,
        });

        $('.dropdown').on("shown.bs.dropdown", function (e) {
            dropdownItemList.show().resize();
        });

        $('.dropdown').on("hide.bs.dropdown", function (e) {
            dropdownItemList.hide();
        });

        $('.sidebar-menu > ul').metisMenu();

        function sidebarLeftToggle() {
            if ($(window).width() < 991) {
                $('.venus-admin').removeClass('mini-sidebar-left');
                $('[data-toggle="sidebar-left"]').on('click', function () {
                    $('.venus-admin').toggleClass('open-sidebar-left');
                });
            } else {
                $('[data-toggle="sidebar-left"]').on('click', function () {
                    $('.venus-admin').toggleClass('mini-sidebar-left');

                    if ($('.venus-admin').hasClass('mini-sidebar-left')) {
                        sidebarLeftScroll.remove().hide();
                    } else {
                        $('.sidebar-left').css('overflow', 'visible');
                        setTimeout(function () {
                            $('.sidebar-left').css('overflow', 'hidden');
                            $('.sidebar-left').niceScroll({
                                cursorcolor: "#fff",
                                cursoropacitymax: 0.5,
                                cursorwidth: "3px"
                            });
                        }, 300);
                    }
                });
            }
        }

        sidebarLeftToggle();

        $(window).resize(function () {
            sidebarLeftToggle();
        });
    }
}

export default VenusAdmin;