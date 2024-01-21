window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {

  const loanAmount = document.getElementById("loan-amount");
  loanAmount.placeholder = 10000;
  const loanYears = document.getElementById("loan-years");
  loanYears.placeholder = 10;
  const loanRate = document.getElementById("loan-rate");
  loanRate.placeholder = 0.05;
  const loanValues = {amount: loanAmount, 
                      years: loanYears, 
                      rate: loanRate
                    };
  calculateMonthlyPayment(loanValues);

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const loanValues = getCurrentUIValues();
  const monthlyPayment = calculateMonthlyPayment(loanValues);
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const principal = values.amount;
  const monthlyRate = values.rate/12;
  const numberOfPay = values.years*12;
  const payment = (principal * monthlyRate)/(1-(1 + monthlyRate)**(-numberOfPay));
  return Math.round(payment * 100) / 100;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const pay = document.getElementById("monthly-payment");
  pay.textContent = monthly;
}
