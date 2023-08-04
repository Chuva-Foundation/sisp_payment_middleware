const { SUCCESS_MESSAGE_TYPES } = require('../consts');

function generateMockedResponse (isSuccess, amount, isInvalidFingerPrint, isCancelledByUser) {
  if (isCancelledByUser) {
    return {
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
    }
  }

  if (isSuccess) {
    if (!isInvalidFingerPrint) {
      return {
        messageType: SUCCESS_MESSAGE_TYPES.purchase,
        merchantRespCP: '2025',
        merchantRespTid: '758',
        merchantRespMerchantRef: '400000ew-800a-400a--',
        merchantRespMerchantSession: 'S20230804112137',
        merchantRespPurchaseAmount: amount,
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
      }
    }
    else {
      return {
        messageType: SUCCESS_MESSAGE_TYPES.purchase,
        merchantRespCP: '2025',
        merchantRespTid: '758',
        merchantRespMerchantRef: '400000ew-800a-400a--',
        merchantRespMerchantSession: 'S20230804112137',
        merchantRespPurchaseAmount: amount,
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
      }
    }
  }

  return {
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
  }
}

module.exports = generateMockedResponse;
