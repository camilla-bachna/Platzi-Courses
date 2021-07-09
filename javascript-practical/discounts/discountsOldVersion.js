"use srict";

function calculateDiscountPrice(originalPrice, discount) {
  const discountInDecimal = discount / 100;
  const discountOfOriginalPrice = originalPrice * discountInDecimal;
  const priceWithDiscount = originalPrice - discountOfOriginalPrice;
  console.log({ originalPrice, discount, priceWithDiscount });
  return priceWithDiscount;
}

calculateDiscountPrice(originalPrice, discount);
