const express = require('express');

const routes = () => {
    const router = express.Router();

    router.get('/', async (request, response) => {
        console.log(response.json);

        response.json({'data': 'hello world'});
    });
    return router;
};

module.exports = routes;
