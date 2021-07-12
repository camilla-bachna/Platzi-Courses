"use srict";

function calculateDiscountPrice(originalPrice, discount) {
  const discountInDecimal = discount / 100;
  const discountOfOriginalPrice = originalPrice * discountInDecimal;
  const priceWithDiscount = originalPrice - discountOfOriginalPrice;
  console.log({ originalPrice, discount, priceWithDiscount });
  return priceWithDiscount;
}

//Coupons #1

//take values from inputs and print the result
function calculateDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const discountCoupon = document.getElementById("InputCoupon");
  discountValue = discountCoupon.value;
  const resultPrice = document.getElementById("resultPrice");

  //validate input of user with discounts
  let discount;
  /*   switch (true) {
    case discountValue === "descuento_secreto":
      discount = 5;
      priceWithDiscount = calculateDiscountPrice(priceValue, discount);
      resultPrice.innerText = `El precio con descuento son ${priceWithDiscount}.`;
      break;
    case discountValue === "pero_no_digas_a_nadie":
      discount = 10;
      priceWithDiscount = calculateDiscountPrice(priceValue, discount);
      resultPrice.innerText = `El precio con descuento son ${priceWithDiscount}.`;
      break;
    case discountValue === "es_un_secreto":
      discount = 15;
      priceWithDiscount = calculateDiscountPrice(priceValue, discount);
      resultPrice.innerText = `El precio con descuento son ${priceWithDiscount}.`;
      break;
    case discountValue === "un_descuento_para_ti":
      discount = 20;
      priceWithDiscount = calculateDiscountPrice(priceValue, discount);
      resultPrice.innerText = `El precio con descuento son ${priceWithDiscount}.`;
      break;
    default:
      resultPrice.innerText = `El cupón con el nombre ${discountValue} no es valido.`;
  } */

  //Coupons #2

  /* coupons = [
    "descuento_secreto",
    "pero_no_digas_a_nadie",
    "es_un_secreto",
    "un_descuento_para_ti",
  ];

  if (!coupons.includes(discountValue)) {
    alert(`El coupon con el ${discountValue} no es valido.`);
  } else if (discountValue === "descuento_secreto") {
    discount = 5;
  } else if (discountValue === "pero_no_digas_a_nadie") {
    discount = 10;
  } else if (discountValue === "es_un_secreto") {
    discount = 15;
  } else if (discountValue === "un_descuento_para_ti") {
    discount = 20;
  }

  const priceWithDiscount = calculateDiscountPrice(priceValue, discount);
  resultPrice.innerText = `El precio con descuento son ${priceWithDiscount}.`; */

  //Coupons #3

  //array with objects
  coupons = [
    {
      name: "descuento_secreto",
      discount: 5,
    },
    {
      name: "pero_no_digas_a_nadie",
      discount: 10,
    },
    {
      name: "es_un_secreto",
      discount: 15,
    },
    {
      name: "un_descuento_para_ti",
      discount: 20,
    },
  ];

  const couponIsvalid = function (coupon) {
    return coupon.name === discountValue;
  };

  const userCoupon = coupons.find(couponIsvalid);

  if (!userCoupon) {
    resultPrice.innerText = `El cupón con el nombre ${discountValue} no es valido.`;
  } else {
    const userDiscount = userCoupon.discount;
    const priceWithDiscount = calculateDiscountPrice(priceValue, userDiscount);
    resultPrice.innerText = `El precio con descuento son ${priceWithDiscount}.`;
  }
}
