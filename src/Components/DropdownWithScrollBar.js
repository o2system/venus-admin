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

/**
 * Class DropdownWithScrollBar
 * 
 * @package Components
 */
export default class DropdownWithScrollBar {
    constructor() {
        const element = $('.dropdown');
        const elementItemsList = $('.dropdown-item-list');

        /**
         * Adding nicescroll effect to the list
         */
        elementItemsList.niceScroll({
            cursorcolor: "#333",
            cursoropacitymax: 0.5,
            cursorwidth: "3px",
            horizrailenabled: false,
            autohidemode: false,
        });

        elementItemsList.hide();

        element.on("shown.bs.dropdown", function (e) {
            elementItemsList.show().resize();
        });

        element.on("hide.bs.dropdown", function (e) {
            elementItemsList.hide();
        });
    }
}