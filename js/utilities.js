function cartAmountUpdate(inputId, isIncrease) {
  const cartAmount = parseInt(document.getElementById(inputId).value);
  let totalCartAmount;
  if (isIncrease) {
    totalCartAmount = cartAmount + 1;
  } else {
    if (cartAmount === 0) {
      return cartAmount; // Return without updating cart amount
    }
    totalCartAmount = cartAmount - 1;
  }
  document.getElementById(inputId).value = totalCartAmount;
  return totalCartAmount;
}

function taxUpdate(inputId, value) {
  const taxElement = document.getElementById(inputId);
  const subTotalInt = parseInt(value);
  const taxFLoat = subTotalInt * 0.1;
  const tax = Math.round(taxFLoat);
  taxElement.innerText = tax;
  return tax;
}

function finalTotal (inputId, subTotalValues, taxValues){
    const finalTotalString = document.getElementById(inputId);
    const subTotalValue = parseInt(subTotalValues);
    const taxValue = parseInt(taxValues);
    const finalTotal = subTotalValue + taxValue;
    finalTotalString.innerText = finalTotal;
}