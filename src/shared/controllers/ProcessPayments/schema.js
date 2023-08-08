const Joi = require('joi');

const schema = Joi.object({
    urlMerchantResponse: Joi.string().uri().required(),
    amount: Joi.number().min(1).required(),
    pan: Joi.string().regex(/^\d{16}$/).required(),
}).unknown(true);

module.exports = schema;
