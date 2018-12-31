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

require("babel-runtime/regenerator");
require("babel-register");
require("webpack-hot-middleware/client?reload=true");
require('o2system-venus-ui');
require("./main.scss");
require("./index.html");

import VenusAdmin from './VenusAdmin';

/**
 * VenusAdmin Object
 */
module.exports = new VenusAdmin();