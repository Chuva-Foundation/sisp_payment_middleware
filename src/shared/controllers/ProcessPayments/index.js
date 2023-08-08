const axios = require('axios');
const qs = require('qs');

const schema = require('./schema');

const { generateMockedResponse, processPan } = require('utils');

const { CARD_ERRORS } = require('consts');

module.exports = {
  create: async (req, res) => {

    const payload = qs.parse(req.body);

    // Validate the request body against the schema
    const { error } = schema.validate(payload);

    if (error) {
      console.error(error);

      res.statusCode = 400;
      res.body = JSON.stringify({ error: error.details[0].message });
      return res;
    }

    const {
      urlMerchantResponse,
      amount,
      pan
    } = payload;

    const params = new URLSearchParams();
    params.append('payment_id', '123456789');
    const webhook_url = urlMerchantResponse + '?' + params;

    let data;

    try {
      processPan(pan, CARD_ERRORS);

      data = generateMockedResponse(true, amount, true);
      
    } catch (e) {
      console.error(e);
      if (e.code === CARD_ERRORS[1].code) {
        data = generateMockedResponse(false, amount, false, true);
      }
      else {
        data = generateMockedResponse(false, amount, false, false);
      }
    } 
    await axios.post(webhook_url, data);
  }
}
