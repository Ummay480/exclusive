import React from "react";

import HeroSection from "@/components/HeroSection";
import FlashSale from "@/components/FlashSale";
import ProductGrid from "@/components/ProductGrid";
import Category from "@/components/Category";
import BestSelling from "@/components/BestSelling"
import ImageOverlay from "@/components/ImageOverlay"
import BestProducts from "@/components/BestProducts";
import SellingProducts from "@/components/BestSelling"
import Products from "@/components/ProductCard";
import Collage  from "@/components/Collage";
import  Icons from "@/components/Icons";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div>
        <HeroSection/>
    </div>
  
    <div>
      <FlashSale />
    </div>

    <div>
      <ProductGrid />
    </div>

    <div>
      <Category/>
    </div>

    <div>
         <SellingProducts/>
         <Products/>
    </div>

    <div>
     <ImageOverlay/> 
    </div>

    <div>
    <BestSelling/>

      <BestProducts/>
    </div>

    <div>
      <Collage/>
    </div>

      <div>
        <Icons/>
      </div>

      <div>
        <Footer/>
      </div>

     </main> 
  );
}
