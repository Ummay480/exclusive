"use client"
import React from "react";
import "./styles/ImageOverlay.css";

interface ImageOverlayProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({ imageSrc, title, description }) => {
  return (
    <div
      className="image-overlay"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      {/* Glass Effect Overlay */}
      <div className="glass-overlay">
        <div className="text-container">
          <h1 className="title">{title}</h1>
          <p className="subtitle">{description}</p>
          <button className="show-products-button">Show Products</button>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;
