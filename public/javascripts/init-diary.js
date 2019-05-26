requirejs.config({
    baseUrl: '/javascripts/',

    /*
     * Disable load timeouts */
    waitSeconds: 0,
    paths: {
        /* the left side is the module ID,
         * the right side is the path to
         * the jQuery file, relative to baseUrl.
         * Also, the path should NOT include
         * the '.js' file extension. */
        jquery         : '/javascripts/ext/jquery-1.11.3.min',
		dateformat     : '/javascripts/ext/date.format',
        multipleSelect : '/javascripts/ext/wenzhixin/1.1.0/jquery.multiple.select',
        datatables     : '/javascripts/ext/jquery.dataTables.min',
        domready       : '/javascripts/ext/domReady',
        bootstrap      : '/javascripts/ext/bootstrap.3.3.7.min',
    },
    'shim' : {
        'multipleSelect' : [ 'jquery' ],
        'bootstrap'      : [ 'jquery' ],
        'datatables'     : [ 'jquery' ],
    }
});

define (function (require) {
    var $          = require('jquery');
    var bs         = require('bootstrap');
    var diary      = require('./diary');
});

