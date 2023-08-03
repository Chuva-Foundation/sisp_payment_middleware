const Joi = require('joi');

// Define the schema for request body validation
const schema = Joi.object({
    referenceId: Joi.string().required(),
    total: Joi.number().required(),
    webhookUrl: Joi.string().uri().required(),
    userBillingInfo: Joi.object({
        acctID: Joi.string().required(),
        email: Joi.string().email().required(),
        billAddrCountry: Joi.string().required(),
        mobilePhone: Joi.object({
            cc: Joi.string().required(),
            subscriber: Joi.string().required()
        }).required()
    }).required(),
    isProduction: Joi.boolean().required()
});

module.exports = schema;
