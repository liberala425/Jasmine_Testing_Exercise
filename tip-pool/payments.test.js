describe("Payment test", function() {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 100;
    tipAmtInput.value = 15;
  });

  it('should return current payment', function () {
    expect(createCurPayment()).toEqual({
      billAmt: '100',
      tipAmt: '15',
      tipPercent: 15
    })
  });

  it('should clean up bill and tip amount after submitPaymentInfo()', function () {
    submitPaymentInfo();

    expect(billAmtInput.value).toEqual("");
    expect(tipAmtInput.value).toEqual("");
   
  });

  it('should update bill and tip total after updateSummary()', function () {
    allPayments = {'payment1': 
      {
        billAmt: '100',
        tipAmt: '15',
        tipPercent: 15
      }
    }
    updateSummary();

    expect(summaryTds[0].innerHTML).toEqual("$100");
    expect(summaryTds[1].innerHTML).toEqual("$15");
   
  });
  afterEach(function() {
    // teardown logic
    serverNameInput.value = '';
    allServers = {};
    allPayments = {};
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
  });
});
