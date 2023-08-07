const { create } = require('.');

describe('PaymentForms/create', () => {
  //Mocks
  const mockPaymentFormTest = '<html><head><metahttp-equiv=\"Content-Type\"content=\"text/html;charset=UTF-8\"><title>Dadosdocartão</title><metacharset=\"UTF-8\"><metaname=\"viewport\"content=\"width=device-width,initial-scale=1\"></head><style>body{display:flex;justify-content:center;max-width:40rem;margin:0auto;};.card{position:relative;display:flex;flex-direction:column;word-wrap:break-word;};.box{margin:32pxauto;max-width:400px;border:2remsolidred;}.card-body{flex:11auto;color:rgb(33,37,41);};button{padding:1rem4rem;}/*AdditionalStyles*/.text-center{text-align:center;}.mt-3{margin-top:0.75rem;}.mt-4{margin-top:1rem;}.mb-3{margin-bottom:0.75rem;}.mb-4{margin-bottom:1rem;}.form-control{display:block;width:100%;padding:0.375rem0.75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1pxsolid#ced4da;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0.375rem;transition:border-color.15sease-in-out,box-shadow.15sease-in-out;}.row{display:flex;flex-wrap:wrap;width:100%;gap:1rem;}.btn-primary{background-color:#007bff;color:#fff;border:none;cursor:pointer;border-radius:0.5rem;padding:0.75rem0.375rem;width:100%;}.btn-primary:hover{background-color:#0056b3;}.text-secondary{color:#6c757d;}.a-hover:hover{text-decoration:underline;}</style><body><formclass=\"d-none\"id=\"formPaymentData\"name=\"formPaymentData\"enctype=\"application/x-www-form-urlencoded\"style=\"\"action=\"/process_payments\"><divid=\"mainDiv\"class=\"mainDiv\"><divclass=\"cardbox\"><divclass=\"card-body\"><divclass=\"text-centermt-3\"><ahref=\"#\"class=\"text-secondarya-hover\"data-bs-toggle=\"collapse\"data-bs-target=\"#detail\"style=\"text-decoration:unset;\">Oformuláriodepagamentofornecidoéapenasparafinsdetesteenãorealizarácobranças</a></div></div><divclass=\"mb-3\"><labelfor=\"pan\"class=\"text-secondary\"id=\"txtCardNumber\">NúmerodoCartão</label><inputtype=\"tel\"class=\"form-control\"id=\"my_pan\"name=\"pan\"required=\"\"maxlength=\"19\"></div><divclass=\"row\"><divclass=\"mb-3\"><labelfor=\"expiration\"class=\"text-secondary\"id=\"txtExpiration\">DataExpiração(MM/AA)</label><inputtype=\"tel\"class=\"form-control\"id=\"my_expiration\"name=\"expiration\"required=\"\"minlength=\"5\"maxlength=\"5\"></div><div><label>CVV2</label><inputtype=\"number\"class=\"form-control\"id=\"my_cvv2\"name=\"cvv2\"required=\"\"minlength=\"3\"maxlength=\"4\"></div></div><divid=\"btn-form1-submit\"><divclass=\"d-gridgap-2\"><buttonclass=\"btnbtn-primarybtn-block\"><spanid=\"txtConfirm\">Confirmar</span>900CVE</button></div><divclass=\"text-centermt-2\"><ahref=\"#\"class=\"text-secondarya-hover\"id=\"txtCancell\"style=\"text-decoration:unset;\">Cancelar</a></div></div><divid=\"form1-loader\"class=\"text-center\"><divclass=\"spinner-bordertext-primary\"></div></div></div></div><!--HiddenFields--><inputid=\"amount\"type=\"hidden\"name=\"amount\"value=\"900\"><inputid=\"merchantRef\"type=\"hidden\"name=\"merchantRef\"value=\"999\"><inputid=\"merchantSession\"type=\"hidden\"name=\"merchantSession\"value=\"S20230803181001\"><inputid=\"posID\"type=\"hidden\"name=\"posID\"value=\"90000045\"><inputid=\"currency\"type=\"hidden\"name=\"currency\"value=\"132\"><inputid=\"urlMerchantResponse\"type=\"hidden\"name=\"urlMerchantResponse\"value=\"https://2bea-41-221-207-146.ngrok-free.app\"\"><inputid=\"is3DSec\"type=\"hidden\"name=\"is3DSec\"value=\"1\"><inputid=\"TimeStamp\"type=\"hidden\"name=\"TimeStamp\"value=\"2023-08-0318:10:01\"><inputid=\"FingerPrint\"type=\"hidden\"name=\"FingerPrint\"value=\"NHT/WX5itbnOQqWJ4lWncNM07DYfH39iTI636q8AtvL9M2DYtsjAY+DCCzJPYNmctdbtb/aIqgelhZoniNMFBw&#x3D;&#x3D;\"><inputid=\"FingerPrintVersion\"type=\"hidden\"name=\"FingerPrintVersion\"value=\"1\"><inputid=\"transactionCode\"type=\"hidden\"name=\"transactionCode\"value=\"1\"><inputid=\"languageMessages\"type=\"hidden\"name=\"languageMessages\"value=\"pt\"><inputid=\"languageMessagesDefault\"type=\"hidden\"name=\"languageMessagesDefault\"value=\"pt\"><inputid=\"referenceNumber\"type=\"hidden\"name=\"referenceNumber\"value=\"\"><inputid=\"entityCode\"type=\"hidden\"name=\"entityCode\"value=\"\"></form><formid=\"formCancel\"name=\"formCancel\"method=\"post\"enctype=\"application/x-www-form-urlencoded\"action=\"https://2bea-41-221-207-146.ngrok-free.app\"><inputtype=\"hidden\"name=\"merchantRef\"value=\"999\"><inputtype=\"hidden\"name=\"merchantSession\"value=\"S20230803181001\"><inputtype=\"hidden\"name=\"UserCancelled\"value=\"true\"></form></body></html>';
  // Mock the request and response objects
  let req, res;

  beforeEach(() => {
    // Clear all mock calls before each test
    jest.clearAllMocks();

    req = {
      body: 'transactionCode=1&posID=90000045&merchantRef=999&merchantSession=S20230803181001&amount=900&currency=132&is3DSec=1&urlMerchantResponse=https%3A%2F%2F2bea-41-221-207-146.ngrok-free.app&languageMessages=pt&timeStamp=2023-08-03+18%3A10%3A01&fingerprintversion=1&entityCode=&referenceNumber=&acctID=369&email=email%40mail.cv&billAddrCountry=132&mobilePhone%5Bcc%5D=132&mobilePhone%5Bsubscriber%5D=123456&purchaseRequest=eyJhY2N0SUQiOiIzNjkiLCJlbWFpbCI6ImVtYWlsQG1haWwuY3YiLCJiaWxsQWRkckNvdW50cnkiOiIxMzIiLCJtb2JpbGVQaG9uZSI6eyJjYyI6IjEzMiIsInN1YnNjcmliZXIiOiIxMjM0NTYifX0%3D&fingerprint=NHT%2FWX5itbnOQqWJ4lWncNM07DYfH39iTI636q8AtvL9M2DYtsjAY%2BDCCzJPYNmctdbtb%2FaIqgelhZoniNMFBw%3D%3D',
    };

    res = {
      statusCode: 200,
      body: {}
    };
  });


  describe('success cases', () => {
    it('should return 201 and the correct payment form with production credentials when isProduction is false', async () => {
      // Call the create function with the mock request and response objects
      await create(req, res);

      const expected = res.body.replace(/\s/g, '');

      // Assert the response status code and body
      expect(res.statusCode).toBe(200);
      expect(expected).toEqual(mockPaymentFormTest);
    });
  });

  describe('error cases', () => {

    it('should return 400 and error message when invalid request body is provided', async () => {
      // Prepare
      req.body += '&invalid_property=12345'

      // Call the create function with the mock request and response objects
      await create(req, res);

      // Assert the response status code, content type, and body
      expect(res.statusCode).toBe(400);
      expect(res.body).toEqual(JSON.stringify({ error: "\"invalid_property\" is not allowed" }));
    });
  });
});
