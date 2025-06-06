import React from "react";
import { ProductCard } from "../components/ProductCard";
import { getProductList } from "../helpers/Products";
import { useNavigate } from "react-router-dom";

export const Clothes = () => {
  const products = getProductList();
  const clothes = products.filter((p) => p.category === "ropa");

  const navigate = useNavigate();

  const onNavigate = (p) => {
    navigate(`/item/${p.alt}`, { state: { ...p } });
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {clothes.map((p, i) => (
        <div
          key={i}
          className="flex flex-grow basis-[300px] max-w-[300px]"
          onClick={() => onNavigate(p)}
        >
          <ProductCard {...p} />
        </div>
      ))}
    </div>
  );
};
