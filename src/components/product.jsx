import React from "react";
import "../App.css"

export const Product = ({ media, titles, productBrand, pricing }) => {
  const imageUrl = media?.images[0].url
    .replace("{@height}", "540")
    .replace("{@width}", "648")
    .replace("{@quality}", "50");
  return (
    <div>
      <div className="h-52 w-52 overflow-hidden my-4 shadow-2xl ">
        <img src={imageUrl} className="  object-cover w-full h-full rounded-sm  " alt={titles.newTitle} />
      </div>
      <p className="text-xs mt-1">{titles.coSubtitle}</p>
      <p className="text-xs mb-1">Brand: {productBrand}</p>
      <p className="text-sm" style={{ width: "208px" }}>
        {titles.newTitle}
      </p>
      <p className="text-xs mt-1">
        {pricing.finalPrice.decimalValue} {pricing.finalPrice.currency}
      </p>
    </div>
  );
};
