const { route } = require('@chuva.io/less');
const { PaymentForms } = require('controllers');

module.exports = {
  post: route(PaymentForms.create, []),
};
