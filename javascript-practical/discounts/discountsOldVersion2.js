"use srict";

//calculate the price with discount
function calculateDiscountPrice(originalPrice, discount) {
  const discountInDecimal = discount / 100;
  const discountOfOriginalPrice = originalPrice * discountInDecimal;
  const priceWithDiscount = originalPrice - discountOfOriginalPrice;
  return priceWithDiscount;
}

//take values from inputs and print the result
function calculateDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const priceWithDiscount = calculateDiscountPrice(priceValue, discountValue);
  console.log({ priceValue, discountValue, priceWithDiscount });

  const resultPrice = document.getElementById("resultPrice");
  resultPrice.innerText = `El precio con descuento es ${priceWithDiscount}.`;

  //Coupons

  const discountSelected =
    document.getElementById("selectOption").options.selectedIndex;
  console.log(discountSelected);

  let discountCoupon;
  if (discountSelected === 0) {
    discountCoupon = 5;
  } else if (discountSelected === 1) {
    discountCoupon = 10;
  } else if (discountSelected === 2) {
    discountCoupon = 15;
  } else {
    discountCoupon = 20;
  }
  console.log(discountCoupon);

  const priceWithDiscountCoupon = calculateDiscountPrice(
    priceValue,
    discountCoupon
  );
  console.log({ priceValue, discountCoupon, priceWithDiscountCoupon });

  resultPrice.innerText = `El precio con descuento es ${priceWithDiscountCoupon}.`;
}
