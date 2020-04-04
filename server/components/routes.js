const express = require('express');

const spreadsheet = require('./spreadsheet');

const routes = () => {
    const router = express.Router();

    // Register route to api-layer.
    router.use('/spreadsheet', spreadsheet());

    return router;
};

module.exports = routes;
