const express = require('express');

module.exports = function (server) {
    //URL base para todas as rotas
    const router = express.Router();
    server.use('/API',router);

    //Rotas de Clclo de pagamento
    const BillingCycle = require('../API/billingCycle/billingCycleService');
    BillingCycle.register(router, '/billingCycles');
}