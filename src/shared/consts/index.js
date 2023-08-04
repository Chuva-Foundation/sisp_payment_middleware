const CARD_ERRORS = [
  {
    pan: '4000000000000002',
    code: '001',
    description: 'Payment processing error: Invalid fingerprint'
  },
  {
    pan: '4000000000009995',
    code: '002',
    description: 'Payment processing error: Cancelled by user'
  },
  {
    pan: '4000000000009987',
    code: '003',
    description: 'Payment processing error: Processing error'
  }
];

const SUCCESS_MESSAGE_TYPES = {
  purchase: '8',
  service_payment: 'P',
  phone_recharge: 'M',
  token_enrollment_request: 'A',
  token_payment: 'B',
  token_cancel: 'C'
};

module.exports = ({
  CARD_ERRORS,
  SUCCESS_MESSAGE_TYPES
});

