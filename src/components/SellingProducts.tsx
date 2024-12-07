"use client"; 
import React from "react"; 
import ProductCard from "./ProductCard"; 

type ProductGridProps = { 
  title: string; 
};

const BestProducts: React.FC<ProductGridProps> = ({ title }) => { 
  const products = [ 
    { 
      image: "/images/image-24.jpeg", 
      name: "HAVIT HV-G92 Gamepad", 
      price: "$160", 
      discountedPrice: "$120", 
      discount: "-40%", 
      rating: 5, 
      reviews: 88 
    }, 
    { 
      image: "/images/image-25.jpeg", 
      name: "AK-900 Wired Keyboard", 
      price: "$1160", 
      discountedPrice: "$960", 
      discount: "-35%", 
      rating: 4, 
      reviews: 75 
    }, 
    { 
      image: "/images/image-26.jpeg", 
      name: "IPS LCD Gaming Monitor", 
      price: "$400", 
      discountedPrice: "$370", 
      discount: "-30%", 
      rating: 5, 
      reviews: 99 
    }, 
    { 
      image: "/images/image-23.jpeg", 
      name: "S-Series Comfort Chair", 
      price: "$400", 
      discountedPrice: "$375", 
      discount: "-25%", 
      rating: 5, 
      reviews: 99 
    }, 
  ];

  return (
    <section className="bg-gray p-6">
      <h2 className="text-2xl font-bold text-black mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            discountedPrice={product.discountedPrice}
            discount={product.discount}
            rating={product.rating}
            reviews={product.reviews}
          />
        ))}
      </div>

      {/* View All Products Button */}
      <div className="mt-6 flex justify-center">
        <button className="bg-red-700 text-white text-lg font-normal py-2 px-6 rounded-lg hover:bg-red-800 transition">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default BestProducts;
