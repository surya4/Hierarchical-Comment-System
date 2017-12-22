const express = require('express');
const db = require('../models/schema');

/* GET home page. */
exports.index_get = function(req, res) {
    console.log("abra ka dabra");
    res.render('pages/index', {
        'title': 'Abra Ka Dabra'
    });
};