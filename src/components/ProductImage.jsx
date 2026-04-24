// src/components/ProductImage.jsx
import { useState, useEffect } from 'react';

const ProductImage = ({ product, category, title }) => {
  const [imageError, setImageError] = useState(false);
    const imagePath = `/images/products/${product.image}`;
  
  // Log the product object to see what's being passed
  console.log('Product object:', product);
  console.log('Image filename:', product.image);
  console.log('Full image path:', imagePath);

  const getIconByCategory = () => {
    switch(category) {
      case 'Apparel':
      case 'Campus Apparel':
        return '👕';
      case 'School Supplies':
      case 'Study Supplies':
        return '📚';
      case 'Accessories':
      case 'Daily Essentials':
        return '🎒';
      case 'Drinkware':
        return '☕';
      case 'Tech Accessories':
        return '📱';
      default:
        return '🛍️';
    }
  };

  // Preload image to test
  useEffect(() => {
    const img = new Image();
    img.src = imagePath;
    img.onload = () => {
      console.log('Image loaded successfully:', imagePath);
      setImageError(false);
    };
    img.onerror = () => {
      console.log('Image failed to load:', imagePath);
      setImageError(true);
    };
  }, [imagePath]);

   return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-nu-blue to-nu-dark-blue aspect-square">
      {!imageError ? (
        <img
          src={imagePath}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={() => setImageError(true)}
          loading="lazy"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          <div className="text-center">
            <div className="text-6xl mb-2">🎒</div>
            <p className="text-xs text-nu-gold font-semibold">{category}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductImage;