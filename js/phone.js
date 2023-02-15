function phonePrice(totalPhoneAmount) {
  const phonePriceElement = document.getElementById("iphone-price");
  const phonePriceUpdate = totalPhoneAmount * 1219;
  phonePriceElement.innerText = phonePriceUpdate;
  return phonePriceUpdate;
}

function subTotalFunctionForPhone(inputId, isIncrease) {
  const subTotalElement = document.getElementById(inputId);
  const subTotalString = subTotalElement.innerText;
  const subTotalNumber = parseInt(subTotalString);
  let subTotal;
  const totalPhoneAmount = parseInt(
    document.getElementById("input-iphone-quantity").value
  );
  if (isIncrease) {
    subTotal = subTotalNumber + 1219;
  } else {
    if (totalPhoneAmount >= 0) {
      subTotal = subTotalNumber - 1219;
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

document.getElementById("iphone-plus").addEventListener("click", function () {
  const totalPhoneAmount = cartAmountUpdate("input-iphone-quantity", true);
  phonePrice(totalPhoneAmount);
  const subTotal = subTotalFunctionForPhone("sub-total", true);
  const taxValue = taxUpdate("tax", subTotal);
  finalTotal('final-total',subTotal,taxValue)
});
document.getElementById("iphune-minus").addEventListener("click", function () {
  const totalPhoneAmount = cartAmountUpdate("input-iphone-quantity", false);
  phonePrice(totalPhoneAmount);
  const subTotal = subTotalFunctionForPhone("sub-total");
  const taxValue = taxUpdate("tax", subTotal);
  finalTotal('final-total',subTotal,taxValue)
});
