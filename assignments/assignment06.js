// --- global variables ---

var loans = [
  { loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453 }
]; 


// --- function: loadDoc() ---

//function loadDoc() {
  // loads with jQuery
$(document).ready(function(){
  // pre-fill defaults for first loan year
  var defaultYear = loans[0].loan_year;
  document.getElementById("loan_year0" + 1).value = defaultYear++;
  var defaultLoanAmount = loans[0].loan_amount;
  document.getElementById("loan_amt0" + 1).value = defaultLoanAmount.toFixed(2);
  var defaultInterestRate = loans[0].loan_int_rate;
  document.getElementById("loan_int0" + 1).value = defaultInterestRate;
  var loanWithInterest = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
  document.getElementById("loan_bal0" + 1).innerHTML = toComma(loanWithInterest.toFixed(2));
  
  // pre-fill defaults for other loan years
  for(var i=2; i<6; i++) {
    document.getElementById("loan_year0" + i).value = defaultYear++;
    document.getElementById("loan_year0" + i).disabled = true;
    document.getElementById("loan_year0" + i).style.backgroundColor = "gray";
    document.getElementById("loan_year0" + i).style.color = "white";
    
    document.getElementById("loan_amt0" + i).value = defaultLoanAmount.toFixed(2);
    
    document.getElementById("loan_int0" + i).value = defaultInterestRate;
    document.getElementById("loan_int0" + i).disabled = true;
    document.getElementById("loan_int0" + i).style.backgroundColor = "gray";
    document.getElementById("loan_int0" + i).style.color = "white";
   loanWithInterest = (loanWithInterest + defaultLoanAmount) * (1 + defaultInterestRate);
    
   document.getElementById("loan_bal0" + i).innerHTML = toComma(loanWithInterest.toFixed(2));
    } // end: "for" loop
  
  // all input fields: select contents on fucus
  $("input[type=text]").focus(function() {
    $(this).select();
    $(this).css("background-color", "yellow");
  }); 
  $("input[type=text]").blur(function() {
    $(this).css("background-color", "white");
  });
  
  // set focus to first year: messes up codepen
  // $("#loan_year01").focus();
  $("#loan_year01").blur( function() {
    updateLoansArray();
  });
  $("#loan_amt01").blur( function() {
    updateLoansArray();
  });
  $("#loan_int01").blur( function() {
    updateLoansArray();
  });
  
  
    
//} // end: function loadDoc()
}); //end document.ready

function toComma(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//checks to see if each value is numeric
function validate(){
  var numberValidate = /[^0-9]/;
  var yearResult;
  var amtResult;
  var intResult;
  var count = 0;
  for (var i; i<6; i++){
    var inputYear = document.getElementById("loan_year0" + 1).value;
    var inputAmt = document.getElementById("loan_amt0" + 1).value;
    var inputInt = document.getElementById("loan_int0" + 1).value;
   yearResult = inputYear.test(numberValidate);
  amtResult= inputAmt.test(numberValidate);
  intResult= inputInt.test(numberValidate);
    if(yearResult.value == true && amtResult.value == true && intResult.value == true){
      count++;
    }
  }
  if (count ==6)
      return true;
  else
    return false;
}

//changes:
// adds a parseInt value for loan_amount and a parseFloat for loan_int_rate (for the decimal)
// if validation is not true displays an error alert
//changes to the for loop
// changes the amount values to match the first year amount with 2 decimal points and changes the int rates to the first years rate

function updateLoansArray() {
  var result = validate();
  if(result == false){
    alert("All inputs should be in numeric format");
  }
       loans[0].loan_year = parseInt($("#loan_year01").val());
  loans[0].loan_amount = parseInt($("#loan_amt01").val());
  loans[0].loan_int_rate = parseFloat($("#loan_int01").val());
  for(var i=1; i<5; i++) {
    loans[i].loan_year = loans[0].loan_year + i;
    $("#loan_year0"+ (i+1) ).val(loans[i].loan_year);
    
loans[i].loan_amount = loans[0].loan_amount.toFixed(2);
    $("#loan_amt0"+ (i+1) ).val(loans[i].loan_amount);
    
    loans[i].loan_int_rate= loans[0].loan_int_rate;
    $("#loan_int0"+ (i+1) ).val(loans[i].loan_int_rate);
  }
  var loanStr = JSON.stringify(loans);
  localStorage.setItem("loanArray", loanStr);
  }
  

function processForm(){
  //????
}


//things to fix:
//error message displaying no matter what => validation must not be working right
//payment table not complete because angular is not understood
