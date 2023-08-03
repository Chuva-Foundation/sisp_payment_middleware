const { route } = require('@chuva.io/less');
const { InitialPaymentForms } = require('controllers');

module.exports = {
    post: route(InitialPaymentForms.create, [])
}