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
import Form from 'o2system-venus-form';
import $ from 'jquery';
import toastr from 'toastr';
import Sidebar from './Partials/Sidebar';
window.JSZip = require('jszip');
require("./Components/js/pdfmake.js");
require( 'datatables.net-bs4' );
require( 'datatables.net-autofill-bs4' );
require( 'datatables.net-buttons-bs4' );
require( 'datatables.net-buttons/js/buttons.colVis.js' );
require( 'datatables.net-buttons/js/buttons.flash.js' );
require( 'datatables.net-buttons/js/buttons.html5.js' );
require( 'datatables.net-buttons/js/buttons.print.js' );
require( 'datatables.net-colreorder-bs4' );
require( 'datatables.net-fixedcolumns-bs4' );
require( 'datatables.net-fixedheader-bs4' );
require( 'datatables.net-keytable-bs4' );
require( 'datatables.net-responsive-bs4' );
require( 'datatables.net-rowgroup-bs4' );
require( 'datatables.net-rowreorder-bs4' );
require( 'datatables.net-scroller-bs4' );
require( 'datatables.net-select-bs4' );

/**
 * Class Admin
 */
class Admin {
    constructor() {
        window.$ = window.jQuery = $;
        const sidebarPartial = new Sidebar;

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

        $('.datatables-basic, .datatables-fixed, .datatables-unorder').prop('width', '100%');
        var printCounter = 0;
        var dataAjax = $('table').data('ajax');

        if (typeof dataAjax !== 'undefined') {
            var datatablesBasic = $('.datatables-basic').DataTable({
                "searching": false,
                "lengthChange": false,
                "scrollX": true,
                "processing": true,
                "serverSide": true,
                "ajax": dataAjax,
                buttons: [
                    { 
                        extend: 'copy', 
                        className: 'btn btn-default'
                    },
                    { 
                        extend: 'excel', 
                        className: 'btn btn-default' ,
                        footer: true,
                        messageTop: function () {
                            var headerPeriode = $('.header-periode').text();
                            return headerPeriode;
                        },
                        
                        messageBottom: function () {
                            
                            var footerPrint = $('.footer-print').text();
        
                            return footerPrint;
                        },
                    },
                    { 
                        extend: 'csv', 
                        className: 'btn btn-default' 
                    },
                    { 
                        extend: 'pdf', 
                        className: 'btn btn-default',
                        footer: true,
                        messageTop: function () {
                            printCounter++;
                            
                            var headerPrint = $('.header-print').html();
                            var headerPeriode = $('.header-periode').html();
                            if ( printCounter === 1 ) {
                                return headerPrint+headerPeriode+'This is the first time you have printed this document.';
                            }
                            else {
                                return headerPrint+headerPeriode+'You have printed this document '+printCounter+' times';
                            } 
                        },
                        
                        messageBottom: function () {
                            
                            var footerPrint = $('.footer-print').html();
        
                            return footerPrint;
                        },
                        
                    },
                    { 
                        extend: 'print', 
                        className: 'btn btn-default',
                        footer: true,
                        messageTop: function () {
                            printCounter++;
                            
                            var headerPrint = $('.header-print').html();
                            var headerPeriode = $('.header-periode').html();
                            if ( printCounter === 1 ) {
                                return headerPrint+headerPeriode+'This is the first time you have printed this document.';
                            }
                            else {
                                return headerPrint+headerPeriode+'You have printed this document '+printCounter+' times';
                            } 
                        },
                        
                        messageBottom: function () {
                            
                            var footerPrint = $('.footer-print').html();
        
                            return footerPrint;
                        },
                    },
                ],
                drawCallback: function (settings) {
                    $('[data-toggle="tooltip"]').tooltip();
                }
            });
    
            var datatablesFixed = $('.datatables-fixed').DataTable({
                "searching": false,
                "lengthChange": false,
                "scrollX": true,
                fixedHeader: true,
                fixedColumns: true,
                "processing": true,
                "serverSide": true,
                "ajax": dataAjax,
                
                buttons: [
                    { 
                        extend: 'copy', 
                        className: 'btn btn-default'
                    },
                    { 
                        extend: 'excel', 
                        className: 'btn btn-default' ,
                        footer: true,
                        messageTop: function () {
                            var headerPeriode = $('.header-periode').text();
                            return headerPeriode;
                        },
                        
                        messageBottom: function () {
                            
                            var footerPrint = $('.footer-print').text();
        
                            return footerPrint;
                        },
                    },
                    { 
                        extend: 'csv', 
                        className: 'btn btn-default' 
                    },
                    { 
                        extend: 'pdf', 
                        className: 'btn btn-default',
                        footer: true,
                        messageTop: function () {
                            printCounter++;
                            
                            var headerPrint = $('.header-print').html();
                            var headerPeriode = $('.header-periode').html();
                            if ( printCounter === 1 ) {
                                return headerPrint+headerPeriode+'This is the first time you have printed this document.';
                            }
                            else {
                                return headerPrint+headerPeriode+'You have printed this document '+printCounter+' times';
                            } 
                        },
                        
                        messageBottom: function () {
                            
                            var footerPrint = $('.footer-print').html();
        
                            return footerPrint;
                        },
                        
                    },
                    { 
                        extend: 'print', 
                        className: 'btn btn-default',
                        footer: true,
                        messageTop: function () {
                            printCounter++;
                            
                            var headerPrint = $('.header-print').html();
                            var headerPeriode = $('.header-periode').html();
                            if ( printCounter === 1 ) {
                                return headerPrint+headerPeriode+'This is the first time you have printed this document.';
                            }
                            else {
                                return headerPrint+headerPeriode+'You have printed this document '+printCounter+' times';
                            } 
                        },
                        
                        messageBottom: function () {
                            
                            var footerPrint = $('.footer-print').html();
        
                            return footerPrint;
                        },
                    },
                ],
                drawCallback: function (settings) {
                    $('[data-toggle="tooltip"]').tooltip();
                }
            });
    
            var datatablesUnorder = $('.datatables-unorder').DataTable({
                "searching": false,
                "lengthChange": false,
                "scrollX": true,
                "ordering": false,
                "processing": true,
                "serverSide": true,
                "ajax": dataAjax,
                
                buttons: [
                    { 
                        extend: 'copy', 
                        className: 'btn btn-default'
                    },
                    { 
                        extend: 'excel', 
                        className: 'btn btn-default' ,
                        footer: true,
                        messageTop: function () {
                            var headerPeriode = $('.header-periode').text();
                            return headerPeriode;
                        },
                        
                        messageBottom: function () {
                            
                            var footerPrint = $('.footer-print').text();
            
                            return footerPrint;
                        },
                    },
                    { 
                        extend: 'csv', 
                        className: 'btn btn-default' 
                    },
                    { 
                        extend: 'pdf', 
                        className: 'btn btn-default',
                        footer: true,
                        messageTop: function () {
                            printCounter++;
                            
                            var headerPrint = $('.header-print').html();
                            var headerPeriode = $('.header-periode').html();
                            if ( printCounter === 1 ) {
                                return headerPrint+headerPeriode+'This is the first time you have printed this document.';
                            }
                            else {
                                return headerPrint+headerPeriode+'You have printed this document '+printCounter+' times';
                            } 
                        },
                        
                        messageBottom: function () {
                            
                            var footerPrint = $('.footer-print').html();
            
                            return footerPrint;
                        },
                        
                    },
                    { 
                        extend: 'print', 
                        className: 'btn btn-default',
                        footer: true,
                        messageTop: function () {
                            printCounter++;
                            
                            var headerPrint = $('.header-print').html();
                            var headerPeriode = $('.header-periode').html();
                            if ( printCounter === 1 ) {
                                return headerPrint+headerPeriode+'This is the first time you have printed this document.';
                            }
                            else {
                                return headerPrint+headerPeriode+'You have printed this document '+printCounter+' times';
                            } 
                        },
                        
                        messageBottom: function () {
                            
                            var footerPrint = $('.footer-print').html();
            
                            return footerPrint;
                        },
                    },
                ],
                drawCallback: function (settings) {
                    $('[data-toggle="tooltip"]').tooltip();
                }
            });
        } else {
            var datatablesBasic = $('.datatables-basic').DataTable({
                "searching": false,
                "lengthChange": false,
                "scrollX": true,
                
                buttons: [
                    { 
                        extend: 'copy', 
                        className: 'btn btn-default'
                    },
                    { 
                        extend: 'excel', 
                        className: 'btn btn-default' ,
                        footer: true,
                        messageTop: function () {
                            var headerPeriode = $('.header-periode').text();
                            return headerPeriode;
                        },
                        
                        messageBottom: function () {
                            
                            var footerPrint = $('.footer-print').text();
        
                            return footerPrint;
                        },
                    },
                    { 
                        extend: 'csv', 
                        className: 'btn btn-default' 
                    },
                    { 
                        extend: 'pdf', 
                        className: 'btn btn-default',
                        footer: true,
                        messageTop: function () {
                            printCounter++;
                            
                            var headerPrint = $('.header-print').html();
                            var headerPeriode = $('.header-periode').html();
                            if ( printCounter === 1 ) {
                                return headerPrint+headerPeriode+'This is the first time you have printed this document.';
                            }
                            else {
                                return headerPrint+headerPeriode+'You have printed this document '+printCounter+' times';
                            } 
                        },
                        
                        messageBottom: function () {
                            
                            var footerPrint = $('.footer-print').html();
        
                            return footerPrint;
                        },
                        
                    },
                    { 
                        extend: 'print', 
                        className: 'btn btn-default',
                        footer: true,
                        messageTop: function () {
                            printCounter++;
                            
                            var headerPrint = $('.header-print').html();
                            var headerPeriode = $('.header-periode').html();
                            if ( printCounter === 1 ) {
                                return headerPrint+headerPeriode+'This is the first time you have printed this document.';
                            }
                            else {
                                return headerPrint+headerPeriode+'You have printed this document '+printCounter+' times';
                            } 
                        },
                        
                        messageBottom: function () {
                            
                            var footerPrint = $('.footer-print').html();
        
                            return footerPrint;
                        },
                    },
                ],
                drawCallback: function (settings) {
                    $('[data-toggle="tooltip"]').tooltip();
                }
            });
    
            var datatablesFixed = $('.datatables-fixed').DataTable({
                "searching": false,
                "lengthChange": false,
                "scrollX": true,
                fixedHeader: true,
                fixedColumns: true,
                
                buttons: [
                    { 
                        extend: 'copy', 
                        className: 'btn btn-default'
                    },
                    { 
                        extend: 'excel', 
                        className: 'btn btn-default' ,
                        footer: true,
                        messageTop: function () {
                            var headerPeriode = $('.header-periode').text();
                            return headerPeriode;
                        },
                        
                        messageBottom: function () {
                            
                            var footerPrint = $('.footer-print').text();
        
                            return footerPrint;
                        },
                    },
                    { 
                        extend: 'csv', 
                        className: 'btn btn-default' 
                    },
                    { 
                        extend: 'pdf', 
                        className: 'btn btn-default',
                        footer: true,
                        messageTop: function () {
                            printCounter++;
                            
                            var headerPrint = $('.header-print').html();
                            var headerPeriode = $('.header-periode').html();
                            if ( printCounter === 1 ) {
                                return headerPrint+headerPeriode+'This is the first time you have printed this document.';
                            }
                            else {
                                return headerPrint+headerPeriode+'You have printed this document '+printCounter+' times';
                            } 
                        },
                        
                        messageBottom: function () {
                            
                            var footerPrint = $('.footer-print').html();
        
                            return footerPrint;
                        },
                        
                    },
                    { 
                        extend: 'print', 
                        className: 'btn btn-default',
                        footer: true,
                        messageTop: function () {
                            printCounter++;
                            
                            var headerPrint = $('.header-print').html();
                            var headerPeriode = $('.header-periode').html();
                            if ( printCounter === 1 ) {
                                return headerPrint+headerPeriode+'This is the first time you have printed this document.';
                            }
                            else {
                                return headerPrint+headerPeriode+'You have printed this document '+printCounter+' times';
                            } 
                        },
                        
                        messageBottom: function () {
                            
                            var footerPrint = $('.footer-print').html();
        
                            return footerPrint;
                        },
                    },
                ],
                drawCallback: function (settings) {
                    $('[data-toggle="tooltip"]').tooltip();
                }
            });
    
            var datatablesUnorder = $('.datatables-unorder').DataTable({
                "searching": false,
                "lengthChange": false,
                "scrollX": true,
                "ordering": false,
                
                buttons: [
                    { 
                        extend: 'copy', 
                        className: 'btn btn-default'
                    },
                    { 
                        extend: 'excel', 
                        className: 'btn btn-default' ,
                        footer: true,
                        messageTop: function () {
                            var headerPeriode = $('.header-periode').text();
                            return headerPeriode;
                        },
                        
                        messageBottom: function () {
                            
                            var footerPrint = $('.footer-print').text();
            
                            return footerPrint;
                        },
                    },
                    { 
                        extend: 'csv', 
                        className: 'btn btn-default' 
                    },
                    { 
                        extend: 'pdf', 
                        className: 'btn btn-default',
                        footer: true,
                        messageTop: function () {
                            printCounter++;
                            
                            var headerPrint = $('.header-print').html();
                            var headerPeriode = $('.header-periode').html();
                            if ( printCounter === 1 ) {
                                return headerPrint+headerPeriode+'This is the first time you have printed this document.';
                            }
                            else {
                                return headerPrint+headerPeriode+'You have printed this document '+printCounter+' times';
                            } 
                        },
                        
                        messageBottom: function () {
                            
                            var footerPrint = $('.footer-print').html();
            
                            return footerPrint;
                        },
                        
                    },
                    { 
                        extend: 'print', 
                        className: 'btn btn-default',
                        footer: true,
                        messageTop: function () {
                            printCounter++;
                            
                            var headerPrint = $('.header-print').html();
                            var headerPeriode = $('.header-periode').html();
                            if ( printCounter === 1 ) {
                                return headerPrint+headerPeriode+'This is the first time you have printed this document.';
                            }
                            else {
                                return headerPrint+headerPeriode+'You have printed this document '+printCounter+' times';
                            } 
                        },
                        
                        messageBottom: function () {
                            
                            var footerPrint = $('.footer-print').html();
            
                            return footerPrint;
                        },
                    },
                ],
                drawCallback: function (settings) {
                    $('[data-toggle="tooltip"]').tooltip();
                }
            });
        }

        datatablesBasic.buttons().container().appendTo( $('.col-md-6:eq(0)', datatablesBasic.table().container() ) );

        datatablesFixed.buttons().container().appendTo( $('.col-md-6:eq(0)', datatablesFixed.table().container() ) );
        
        datatablesUnorder.buttons().container().appendTo( $('.col-md-6:eq(0)', datatablesUnorder.table().container() ) );
    }
}

export default new Admin;