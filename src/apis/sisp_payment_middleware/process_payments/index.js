const { route } = require('@chuva.io/less');
const { ProcessPayments } = require('controllers');

module.exports = {
  post: route(ProcessPayments.create, [])
}
