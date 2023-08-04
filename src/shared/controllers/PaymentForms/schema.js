const Joi = require('joi');

const schema = Joi.object({
    transactionCode: Joi.string().required(),
    posID: Joi.string().required(),
    merchantRef: Joi.string().required(),
    merchantSession: Joi.string().required(),
    amount: Joi.string().required(),
    currency: Joi.string().required(),
    is3DSec: Joi.string().required(),
    urlMerchantResponse: Joi.string().uri().required(),
    languageMessages: Joi.string().required(),
    timeStamp: Joi.string().isoDate().required(),
    fingerprintversion: Joi.string().required(),
    entityCode: Joi.string().allow('').optional(),
    referenceNumber: Joi.string().allow('').optional(),
    acctID: Joi.string().required(),
    email: Joi.string().email().required(),
    billAddrCountry: Joi.string().required(),
    mobilePhone: Joi.object({
        cc: Joi.string().required(),
        subscriber: Joi.string().required()
    }).required(),
    purchaseRequest: Joi.string().required(),
    fingerprint: Joi.string().required()
});

module.exports = schema;
