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
import Swal from 'sweetalert2';
import toastr from 'toastr';
import Sidebar from './Partials/Sidebar';
import DropdownWithScrollBar from './Components/DropdownWithScrollBar';

/**
 * Class Admin
 */
export default class Admin {
    constructor() {
        window.$ = window.jQuery = $;
        const sidebarPartial = new Sidebar;
        const dropdownWithScrollBar = new DropdownWithScrollBar;

        /**
         * Run sidebar toggle
         */
        sidebarPartial.toggle();

        /**
         * Run toggle on window resize
         */
        $(window).resize(function () {
            sidebarPartial.toggle();
        });
    }
}