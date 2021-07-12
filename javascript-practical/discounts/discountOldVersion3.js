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
  if (discountValue !== undefined) {
    resultPrice.innerText = `El precio con descuento es ${priceWithDiscount}.`;
  }

  //Coupons

  coupons = [
    "descuento_secreto",
    "pero_no_digas_a_nadie",
    "es_un_secreto",
    "un_descuento_para_ti",
  ];

  const discountCoupon = document.getElementById("InputCoupon").value;
  console.log(discountCoupon);

  let discount;
  if (discountCoupon === coupons[0]) {
    discount = 5;
  } else if (discountCoupon === coupons[1]) {
    discount = 10;
  } else if (discountCoupon === coupons[2]) {
    discount = 15;
  } else if (discountCoupon === coupons[3]) {
    discount = 20;
  }

  const priceWithDiscountCoupon = calculateDiscountPrice(priceValue, discount);
  console.log({
    priceValue,
    discountCoupon,
    discount,
    priceWithDiscountCoupon,
  });

  for (let i = 0; i < coupons.length; i++) {
    if (discountCoupon === coupons[i]) {
      resultPrice.innerText = `Has elegido el coupón ${discountCoupon}. El descuento es ${discount}%. El precio con descuento es ${priceWithDiscountCoupon}.`;
    }
  }
}
