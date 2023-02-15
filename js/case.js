function casePrice(totalCaseAmount) {
  const casePriceElement = document.getElementById("case-price");
  const casePriceUpdate = totalCaseAmount * 59;
  casePriceElement.innerText = casePriceUpdate;
}

function subTotalFunctionForCase(inputId, isIncrease) {
    const subTotalElement = document.getElementById(inputId);
    const subTotalString = subTotalElement.innerText;
    const subTotalNumber = parseInt(subTotalString);
    let subTotal;
    const totalCaseAmount = parseInt(document.getElementById("input-case-quantity").value);
    if (isIncrease) {
      subTotal = subTotalNumber + 59;
    } else {
      if (totalCaseAmount >= 0) {
        subTotal = subTotalNumber - 59;
      } else {
        subTotal = subTotalNumber;
      }
    }
    if (subTotal < 0) {
      subTotal = 0;
    }
    subTotalElement.innerText = subTotal;
    return subTotal;
  }
   

document.getElementById("case-plus").addEventListener("click", function () {
  const totalCaseAmount = cartAmountUpdate("input-case-quantity", true);
  casePrice(totalCaseAmount);
  const subTotal = subTotalFunctionForCase("sub-total", true);
  const taxValue = taxUpdate('tax', subTotal)
  finalTotal('final-total',subTotal,taxValue)
});

document.getElementById("case-minus").addEventListener("click", function () {
  const totalCaseAmount = cartAmountUpdate("input-case-quantity", false);
  casePrice(totalCaseAmount);
  const subTotal = subTotalFunctionForCase("sub-total", false);
  const taxValue = taxUpdate('tax', subTotal)
  finalTotal('final-total',subTotal,taxValue)
});
