'use strict';

var $ = require('jquery'),
    Backbone = require('backbone');

Backbone.$ = $;

module.exports = Backbone.View.extend({
    /* ----------------------------------------------------------------------------- *\
       Public Methods
    \* ----------------------------------------------------------------------------- */

    /**
    Executed immediately when creating a new instance. Hides the containing element so that we can use the transitioning methods to show it.

    @method initialize

    @return {null}
    **/
    initialize: function(options) {
        // overwrite in subclasses
    },

    /**
    Allows dispatching of events from the view.

    @method trigger
    @example
        this.trigger($.Event('event-name:namespace', {item: item}));

    @param {jQuery Event} evt The event to dispatch with an optional object to pass to the event payload

    @return {null}
    **/
    trigger: function(evt) {
        this.$el.trigger(evt);
    },

    /**
    Cleans up the view.  Should be extended in every subview to take care of any cleanup tasks that need to happen when that view is not currently visible.

    @method clean

    @return {null}
    **/
    clean: function() {
        throw new Error('Unimplemented AbstractView method clean().  At the least, please define it in your view and add any code necessary for cleanup, if applicable.');
    },

    /**
    Disposes of the view.  Unbinds its events and removes it from the DOM.

    @method dispose

    @return {null}
    **/
    dispose: function() {
        this.undelegateEvents();
        this.remove();
    }
});
