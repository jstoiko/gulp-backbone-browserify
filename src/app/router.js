'use strict';

var $ = require('jquery'),
    Backbone = require('backbone');

Backbone.$ = $;

var ModuleView = require('./views/module/module');

var currentView = null,
    $wrapper = $('.wrapper');

module.exports = Backbone.Router.extend({
    routes: {
        '': 'default',
        'index': 'default'
    },
    initialize: function() {
        Backbone.history.start();
    },
    default: function() {
        if (currentView) currentView.dispose();
        currentView = new ModuleView();

        $wrapper.append(currentView.render().el);
    }
});
