'use strict';

var Backbone = require('backbone'),
    TestModel = require('../models/model');

module.exports = Backbone.Collection.extend({
    model: TestModel
});