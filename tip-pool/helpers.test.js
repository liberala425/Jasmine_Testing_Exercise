describe("helper test", function() {
  
  beforeAll(function () {

      billAmtInput.value = 100;
      tipAmtInput.value = 15;
      allPayments = {'payment1': 
      {
        billAmt: '100',
        tipAmt: '15',
        tipPercent: 15
      }
    }
  });
  it('should add bill or tip amount to total after sumPaymentTotal()', function () {

    expect(sumPaymentTotal('billAmt')).toEqual(100);
    expect(sumPaymentTotal('tipAmt')).toEqual(15);
    expect(sumPaymentTotal('tipPercent')).toEqual(15);
  });

  it('should return tip percentage on calculateTipPercent()', function () {

    expect(calculateTipPercent(200,30)).toEqual(15);
   
  });

  afterAll(function() {
    // teardown logic
    serverNameInput.value = '';
    allServers = {};
    allPayments = {};
    billAmtInput.value = '';
    tipAmtInput.value = '';
    //summaryTds.innerHTML = '';
  });
});
