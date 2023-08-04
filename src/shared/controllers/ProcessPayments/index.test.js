const { create } = require('.');
const axios = require('axios');

jest.mock('axios');

describe('process payment', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('success cases', () => {
    it('should perform a purchase successful returning the expected data', async () => {
      const webhook_url = 'https://3a0d-102-213-207-25.ngrok-free.app/50f5be93-a5d2-4a16-89af-94a2656734bb?payment_id=123456789';
      const formData = 'SecurePassword=123456&askedPinWeb=true&pan=5000400030002000&posID=90000000&messageID=8287Gwaq33vdMEr2Jmfh&merchantName=ENTER+TECNOLOGIAS+SA&requestDomainAddress=&amount=300&currency=132&currencyCodeSymbol=CVE&cvv2=553&dateMonth=12&dateYear=2023&dateMonthYear=122023&merchantRef=50000-a1B1-4a21-&merchantSession=S20230804112137&binType=D&acqBin=5000000&merchantCountry=132&merchantId=9000000&urlMerchantResponse=https%3A%2F%2F3a0d-102-213-207-25.ngrok-free.app%2F50f5be93-a5d2-4a16-89af-94a2656734bb&TimeStamp=2023-08-04+11%3A21%3A37&FingerPrint=6t0JFmOsl%2B9LkNBQ%2B6mUokkgDVSYw%2FQKruIr9%2BPp6t0XbO%2FDgNrUrJa8RSLLRt92OILrWI0OWzBQxSG9PC5WNA%3D%3D&FingerPrintVersion=1&transactionCode=1&languageMessages=pt&languageMessagesDefault=pt&urlFrontend=https%3A%2F%2Fvinti4visanet%3A8443%2FBizMPIServerOnUs%2F&referenceNumber=&entityCode=';
      const expectedData = {
        messageType: '8',
        merchantRespCP: '2025',
        merchantRespTid: '758',
        merchantRespMerchantRef: '400000ew-800a-400a--',
        merchantRespMerchantSession: 'S20230804112137',
        merchantRespPurchaseAmount: '300',
        merchantRespMessageID: '8287Gwaq33vdMEr2Jmfh',
        merchantRespPan: '************0022',
        merchantResp: 'C',
        merchantRespErrorCode: '',
        merchantRespErrorDescription: '',
        merchantRespErrorDetail: '',
        languageMessages: 'pt',
        merchantRespTimeStamp: '2023-08-04 11:21:06',
        merchantRespReferenceNumber: '',
        merchantRespEntityCode: '',
        merchantRespClientReceipt: '',
        merchantRespAdditionalErrorMessage: '',
        merchantRespReloadCode: '',
        resultFingerPrint: 'IwOkGrjBmHwGZkl41XfFGO9IGupw94f4XTtdLe/DyT0svIJa58sG5gEXMOHsiuIUTejvMJxPtRzh2iBzZdQngA==',
        resultFingerPrintVersion: '1'
      };

      const req = {
        body: formData
      };

      const res = {
        statusCode: 200,
        body: {}
      };

      const spy = jest.spyOn(axios, 'post');

      await create(req, res);

      expect(spy).toHaveBeenCalledWith(webhook_url, expectedData);
    });
  });

  describe('error cases', () => {
    it('should fail when performing a purchase with a card that have an invalid fingerprint', async () => {
      const pan = '4000000000000002'; // pan with invalid fingerprint
      const webhook_url = 'https://3a0d-102-213-207-25.ngrok-free.app/50f5be93-a5d2-4a16-89af-94a2656734bb?payment_id=123456789';
      const formData = `SecurePassword=123456&askedPinWeb=true&pan=${pan}&posID=90000000&messageID=8287Gwaq33vdMEr2Jmfh&merchantName=ENTER+TECNOLOGIAS+SA&requestDomainAddress=&amount=300&currency=132&currencyCodeSymbol=CVE&cvv2=553&dateMonth=12&dateYear=2023&dateMonthYear=122023&merchantRef=50000D-a111-4B00-&merchantSession=S20230804112137&binType=D&acqBin=500000&merchantCountry=132&merchantId=9000000&urlMerchantResponse=https%3A%2F%2F3a0d-102-213-207-25.ngrok-free.app%2F50f5be93-a5d2-4a16-89af-94a2656734bb&TimeStamp=2023-08-04+11%3A21%3A37&FingerPrint=6t0JFmOsl%2B9LkNBQ%2B6mUokkgDVSYw%2FQKruIr9%2BPp6t0XbO%2FDgNrUrJa8RSLLRt92OILrWI0OWzBQxSG9PC5WNA%3D%3D&FingerPrintVersion=1&transactionCode=1&languageMessages=pt&languageMessagesDefault=pt&urlFrontend=https%3A%2F%2Fvinti4visanet%3A8443%2FBizMPIServerOnUs%2F&referenceNumber=&entityCode=`;
      const expectedData = {
        messageType: '8',
        merchantRespCP: '2025',
        merchantRespTid: '758',
        merchantRespMerchantRef: '400000ew-800a-400a--',
        merchantRespMerchantSession: 'S20230804112137',
        merchantRespPurchaseAmount: '300',
        merchantRespMessageID: '8287Gwaq33vdMEr2Jmfh',
        merchantRespPan: '************0022',
        merchantResp: 'C',
        merchantRespErrorCode: '',
        merchantRespErrorDescription: '',
        merchantRespErrorDetail: '',
        languageMessages: 'pt',
        merchantRespTimeStamp: '2023-08-04 11:21:06',
        merchantRespReferenceNumber: '',
        merchantRespEntityCode: '',
        merchantRespClientReceipt: '',
        merchantRespAdditionalErrorMessage: '',
        merchantRespReloadCode: '',
        resultFingerPrint: 'IwOkGrjBmHwGZkl41XfFGO9IGupw94f4XTtdLe/DyT0svIJa58sG5gEXMOHsiuIUTejvMJxPtRzh2iBzZdQngA==',
        resultFingerPrintVersion: '1'
      };

      const req = {
        body: formData
      };

      const res = {
        statusCode: 200,
        body: {}
      };

      const spy = jest.spyOn(axios, 'post');

      await create(req, res);

      expect(spy).toHaveBeenCalledWith(webhook_url, expectedData);
    });

    it('should fail when performing a purchase with a card cancelled by the user', async () => {
      const pan = '4000000000009995'; // pan cancelled by the user
      const webhook_url = 'https://3a0d-102-213-207-25.ngrok-free.app/50f5be93-a5d2-4a16-89af-94a2656734bb?payment_id=123456789';
      const formData = `SecurePassword=123456&askedPinWeb=true&pan=${pan}&posID=90000000&messageID=8287Gwaq33vdMEr2Jmfh&merchantName=ENTER+TECNOLOGIAS+SA&requestDomainAddress=&amount=300&currency=132&currencyCodeSymbol=CVE&cvv2=553&dateMonth=12&dateYear=2023&dateMonthYear=122023&merchantRef=50000D-a111-4B00-&merchantSession=S20230804112137&binType=D&acqBin=5000000&merchantCountry=132&merchantId=9000000&urlMerchantResponse=https%3A%2F%2F3a0d-102-213-207-25.ngrok-free.app%2F50f5be93-a5d2-4a16-89af-94a2656734bb&TimeStamp=2023-08-04+11%3A21%3A37&FingerPrint=6t0JFmOsl%2B9LkNBQ%2B6mUokkgDVSYw%2FQKruIr9%2BPp6t0XbO%2FDgNrUrJa8RSLLRt92OILrWI0OWzBQxSG9PC5WNA%3D%3D&FingerPrintVersion=1&transactionCode=1&languageMessages=pt&languageMessagesDefault=pt&urlFrontend=https%3A%2F%2Fvinti4visanet%3A8443%2FBizMPIServerOnUs%2F&referenceNumber=&entityCode=`;
      const expectedData = {
        UserCancelled: true,
        messageType: '6',
        merchantRespMerchantRef: '400000ew-800a-400a--',
        merchantRespMerchantSession: 'S20230804111232',
        merchantRespPurchaseAmount: '300',
        merchantRespMessageID: 'aV0vlMgP3hH7HK3yhvi2',
        merchantRespErrorCode: '02',
        merchantRespErrorDescription: 'Authentication failure',
        merchantRespErrorDetail: '',
        merchantRespAdditionalErrorMessage: '',
        languageMessages: 'pt',
        merchantRespTimeStamp: '2023-08-04 12:12:55',
        resultFingerPrintVersion: '1',
        resultFingerPrint: '3OSib3l3EG/bGDF4MRIv3DaewMfeqi6X5kDlncddRlBItLDSY5YR1464n95E9vApzftuPIRaenhigXCz2DascQ==',
        merchantRespCP: '',
        merchantRespTid: '',
        merchantRespPan: '****',
        merchantResp: 'C',
        merchantRespReferenceNumber: '',
        merchantRespEntityCode: '',
        merchantRespClientReceipt: '',
        merchantRespReloadCode: '',
        dcc: 'N',
        dccAmount: '',
        dccCurrency: '',
        dccMarkup: '',
        dccRate: ''
      };

      const req = {
        body: formData
      };

      const res = {
        statusCode: 200,
        body: {}
      };

      const spy = jest.spyOn(axios, 'post');

      await create(req, res);

      expect(spy).toHaveBeenCalledWith(webhook_url, expectedData);
    });

    it('should fail when the purchase was denied for some reason', async () => {
      const pan = '4000000000009987'; // pan with processing error 
      const webhook_url = 'https://3a0d-102-213-207-25.ngrok-free.app/50f5be93-a5d2-4a16-89af-94a2656734bb?payment_id=123456789';
      const formData = `SecurePassword=123456&askedPinWeb=true&pan=${pan}&posID=90000000&messageID=8287Gwaq33vdMEr2Jmfh&merchantName=ENTER+TECNOLOGIAS+SA&requestDomainAddress=&amount=300&currency=132&currencyCodeSymbol=CVE&cvv2=553&dateMonth=12&dateYear=2023&dateMonthYear=122023&merchantRef=50000D-a111-4B00-&merchantSession=S20230804112137&binType=D&acqBin=5000000&merchantCountry=132&merchantId=9000000&urlMerchantResponse=https%3A%2F%2F3a0d-102-213-207-25.ngrok-free.app%2F50f5be93-a5d2-4a16-89af-94a2656734bb&TimeStamp=2023-08-04+11%3A21%3A37&FingerPrint=6t0JFmOsl%2B9LkNBQ%2B6mUokkgDVSYw%2FQKruIr9%2BPp6t0XbO%2FDgNrUrJa8RSLLRt92OILrWI0OWzBQxSG9PC5WNA%3D%3D&FingerPrintVersion=1&transactionCode=1&languageMessages=pt&languageMessagesDefault=pt&urlFrontend=https%3A%2F%2Fvinti4visanet%3A8443%2FBizMPIServerOnUs%2F&referenceNumber=&entityCode=`;
      const expectedData = {
        messageType: '6',
        merchantRespMerchantRef: '400000ew-800a-400a--',
        merchantRespMerchantSession: 'S20230804111232',
        merchantRespPurchaseAmount: '300',
        merchantRespMessageID: 'aV0vlMgP3hH7HK3yhvi2',
        merchantRespErrorCode: '02',
        merchantRespErrorDescription: 'Authentication failure',
        merchantRespErrorDetail: '',
        merchantRespAdditionalErrorMessage: '',
        languageMessages: 'pt',
        merchantRespTimeStamp: '2023-08-04 12:12:55',
        resultFingerPrintVersion: '1',
        resultFingerPrint: '3OSib3l3EG/bGDF4MRIv3DaewMfeqi6X5kDlncddRlBItLDSY5YR1464n95E9vApzftuPIRaenhigXCz2DascQ==',
        merchantRespCP: '',
        merchantRespTid: '',
        merchantRespPan: '****',
        merchantResp: 'C',
        merchantRespReferenceNumber: '',
        merchantRespEntityCode: '',
        merchantRespClientReceipt: '',
        merchantRespReloadCode: '',
        dcc: 'N',
        dccAmount: '',
        dccCurrency: '',
        dccMarkup: '',
        dccRate: ''
      };

      const req = {
        body: formData
      };

      const res = {
        statusCode: 200,
        body: {}
      };

      const spy = jest.spyOn(axios, 'post');

      await create(req, res);

      expect(spy).toHaveBeenCalledWith(webhook_url, expectedData);
    });
  });
});
