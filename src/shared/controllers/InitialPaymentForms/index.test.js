const Sisp = require('@chuva.io/sisp/src/sisp3DS');
const { create } = require('.');

describe('create', () => {
  //Mocks
  const mockPaymentFormTest = "<html><head><title>Pagamento Vinti4</title></head><body onload='autoPost()'><div><h5>Processando...</h5><form action='https://my_api.less.chuva.io?FingerPrint=WMq3U%2FWkapIUEejvnjykY%2F%2F9OZGZyT9t%2ByVDnrfayQOT7DdKi6szjAR9AVcm7xFiKAP8hW5feFetU177itA1TQ%3D%3D&TimeStamp=2023-08-02%2008%3A00%3A27&FingerPrintVersion=1' method='post'><input type='hidden' name='transactionCode' value='1'><input type='hidden' name='posID' value='90000045'><input type='hidden' name='merchantRef' value='test_reference_id'><input type='hidden' name='merchantSession' value='S20230802080027'><input type='hidden' name='amount' value='900'><input type='hidden' name='currency' value='132'><input type='hidden' name='is3DSec' value='1'><input type='hidden' name='urlMerchantResponse' value='https://example.com/webhook'><input type='hidden' name='languageMessages' value='pt'><input type='hidden' name='timeStamp' value='2023-08-02 08:00:27'><input type='hidden' name='fingerprintversion' value='1'><input type='hidden' name='entityCode' value=''><input type='hidden' name='referenceNumber' value=''><input type='hidden' name='acctID' value='test_account_id'><input type='hidden' name='email' value='test@example.com'><input type='hidden' name='billAddrCountry' value='132'><input type='hidden' name='mobilePhone[cc]' value='132'><input type='hidden' name='mobilePhone[subscriber]' value='123456789'><input type='hidden' name='purchaseRequest' value='eyJhY2N0SUQiOiJ0ZXN0X2FjY291bnRfaWQiLCJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJiaWxsQWRkckNvdW50cnkiOiIxMzIiLCJtb2JpbGVQaG9uZSI6eyJjYyI6IjEzMiIsInN1YnNjcmliZXIiOiIxMjM0NTY3ODkifX0='><input type='hidden' name='fingerprint' value='WMq3U/WkapIUEejvnjykY//9OZGZyT9t+yVDnrfayQOT7DdKi6szjAR9AVcm7xFiKAP8hW5feFetU177itA1TQ=='></form><script>function autoPost(){document.forms[0].submit();}</script></body></html>";
  const mockPaymentFormProduction = "<html><head><title>Pagamento Vinti4</title></head><body onload='autoPost()'><div><h5>Processando...</h5><form action='https://mc.vinti4net.cv/3ds_payments_url?FingerPrint=UZ7ATkPNrOPQKSM4VBg0d0XUm2vgizkByJCNsT8Wr%2BTDlFMyThLciqTCeb2V%2FhKB6Z1YrYv7otBq5cU8vXnzTQ%3D%3D&TimeStamp=2023-08-02%2008%3A00%3A27&FingerPrintVersion=1' method='post'><input type='hidden' name='transactionCode' value='1'><input type='hidden' name='posID' value='90000036'><input type='hidden' name='merchantRef' value='test_reference_id'><input type='hidden' name='merchantSession' value='S20230802080027'><input type='hidden' name='amount' value='900'><input type='hidden' name='currency' value='132'><input type='hidden' name='is3DSec' value='1'><input type='hidden' name='urlMerchantResponse' value='https://example.com/webhook'><input type='hidden' name='languageMessages' value='pt'><input type='hidden' name='timeStamp' value='2023-08-02 08:00:27'><input type='hidden' name='fingerprintversion' value='1'><input type='hidden' name='entityCode' value=''><input type='hidden' name='referenceNumber' value=''><input type='hidden' name='acctID' value='test_account_id'><input type='hidden' name='email' value='test@example.com'><input type='hidden' name='billAddrCountry' value='132'><input type='hidden' name='mobilePhone[cc]' value='132'><input type='hidden' name='mobilePhone[subscriber]' value='123456789'><input type='hidden' name='purchaseRequest' value='eyJhY2N0SUQiOiJ0ZXN0X2FjY291bnRfaWQiLCJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJiaWxsQWRkckNvdW50cnkiOiIxMzIiLCJtb2JpbGVQaG9uZSI6eyJjYyI6IjEzMiIsInN1YnNjcmliZXIiOiIxMjM0NTY3ODkifX0='><input type='hidden' name='fingerprint' value='UZ7ATkPNrOPQKSM4VBg0d0XUm2vgizkByJCNsT8Wr+TDlFMyThLciqTCeb2V/hKB6Z1YrYv7otBq5cU8vXnzTQ=='></form><script>function autoPost(){document.forms[0].submit();}</script></body></html>";
  // Mock the request and response objects
  let req, res, request_body, realDate;
  const env = process.env

  beforeEach(() => {
    // Clear all mock calls before each test
    jest.clearAllMocks();
    // Mock process env
    process.env = { 
      ...env, 
      TEST_URL: 'https://my_api.less.chuva.io' 
    };

    // Create a fresh mock for each test
    request_body = {
      referenceId: 'test_reference_id',
      total: 900,
      webhookUrl: 'https://example.com/webhook',
      userBillingInfo: {
        acctID: 'test_account_id',
        email: 'test@example.com',
        billAddrCountry: '132',
        mobilePhone: {
          cc: '132',
          subscriber: '123456789'
        }
      },
      isProduction: false
    };

    req = {
      body: JSON.stringify(request_body),
      headers: {
        posID: '90000036',
        posAutCode: 'kfyhhKJH336ndu39',
        url: 'https://mc.vinti4net.cv/3ds_payments_url'
      }
    };

    res = {
      statusCode: 200,
      contentType: '',
      body: {}
    };

    // Mock the whole Date class with a fixed date instance
    const currentDate = new Date('2023-08-02T09:00:27.135Z');

    realDate = Date;

    global.Date = class extends Date {
      constructor(date) {
        if (date) {
          return super(date);
        }
        return currentDate;
      }
    };
  });

  afterEach(async () => {
    process.env = env;
  });

  afterAll(async () => {
    // Cleanup
    global.Date = realDate;
  })

  describe('success cases', () => {
    it('should return 201 and the correct payment form with production credentials when isProduction is false', async () => {
      // Call the create function with the mock request and response objects
      await create(req, res);
  
      // Assert the response status code and body
      expect(res.statusCode).toBe(201);
      expect(res.body).toEqual(mockPaymentFormTest);
    });
  
    it('should return 201 and the correct payment form with production credentials when isProduction is true', async () => {
      // Prepare:: Modify the request body to set isProduction to true
      request_body.isProduction = true;
      req.body = JSON.stringify(request_body);
  
      // Call the create function with the mock request and response objects
      await create(req, res);
  
      // Assert the response status code and body
      expect(res.statusCode).toBe(201);
      expect(res.body).toEqual(mockPaymentFormProduction);
    });
  });

  describe('error cases', () => {

    it('should return 400 and error message when invalid request body is provided', async () => {
      // Prepare
      request_body.referenceId = null;
      req.body = JSON.stringify(request_body);

      // Call the create function with the mock request and response objects
      await create(req, res);

      // Assert the response status code, content type, and body
      expect(res.statusCode).toBe(400);
      expect(res.body).toEqual(JSON.stringify({ error: "\"referenceId\" must be a string" }));
    });
  });
});
