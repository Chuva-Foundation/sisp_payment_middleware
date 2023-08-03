const Sisp = require('@chuva.io/sisp/src/sisp3DS');
const schema = require('./schema');

module.exports = {
  create: async (req, res) => {
    const body = JSON.parse(req.body);
    // Validate the request body against the schema
    const { error } = schema.validate(body);
    if (error) {
      res.statusCode = 400;
      res.body = JSON.stringify({ error: error.details[0].message });
      return res;
    }

    // Sample credentials for test
    const test_credentials = {
      posID: "90000045",
      posAutCode: "kfyhhKJH875ndu44",
      url: process.env.TEST_URL
    };

    // If the form is for production, use production credentials from request headers
    const headers = req.headers;
    const credentials = body.isProduction ? {
      posID: headers.posID,
      posAutCode: headers.posAutCode,
      url: headers.url
    } : test_credentials;


    // Create the initial payment form using sisp_payments_js library
    const sisp = new Sisp(credentials);
    const { referenceId, total, webhookUrl, userBillingInfo } = body;
    const paymentForm = sisp.generatePaymentRequestForm(referenceId, total, webhookUrl, userBillingInfo);

    // Return a success response to the client
    res.statusCode = 201;
    res.headers = {
      "Content-Type": "text/html"
    }
    res.body = paymentForm;

    return res;
  }
};
