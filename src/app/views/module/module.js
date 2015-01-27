'use strict';

var kaka = 1;

var BaseView = require('../_extend/baseView'),
    template = require('./module.html');

module.exports = BaseView.extend({
    className: 'module',
    events: {},
    initialize: function(options) {

    },
    render: function() {
        this.$el.html(template());

        return this;
    }
});
