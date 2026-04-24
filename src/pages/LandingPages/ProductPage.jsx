// src/pages/LandingPages/ProductPage.jsx
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Button from '../../components/Button.jsx';
import products from '../../assets/product-content.js';

function ProductPage() {
  const { name } = useParams();
  const [imageError, setImageError] = useState(false);
  
  // Find the product by name
  const product = products.find(product => product.name === name);

  if (!product) {
    return (
      <div className="flex w-full flex-col gap-6">
        <section className="border-y-2 border-nu-blue bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold text-nu-blue">Product not found</h1>
            <Button to="/products" className="mt-6">Back to Products</Button>
          </div>
        </section>
      </div>
    );
  }

  const getCategoryIcon = () => {
    switch(product.category) {
      case 'Daily Essentials': return '🎒';
      case 'Bulldog Accessories': return '🐶';
      case 'Campus Apparel': return '👕';
      default: return '🛍️';
    }
  };

  const getCategoryColor = () => {
    switch(product.category) {
      case 'Daily Essentials': return 'bg-blue-100 text-nu-blue';
      case 'Bulldog Accessories': return 'bg-yellow-100 text-yellow-700';
      case 'Campus Apparel': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  // Construct image path
  const imagePath = `/images/products/${product.image}`;

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-nu-blue bg-gradient-to-br from-blue-50 to-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Back Button */}
          <div className="mb-6">
            <Button to="/products" variant="secondary">
              ← Back to Products
            </Button>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Product Image Section - THIS IS WHERE THE IMAGE GOES */}
            <div className="rounded-3xl border-2 border-nu-blue bg-white p-6">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-nu-blue to-nu-dark-blue">
                {!imageError ? (
                  <img 
                    src={imagePath}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  // Fallback if image doesn't exist
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-3">{getCategoryIcon()}</div>
                      <p className="text-white/80 text-sm">{product.category}</p>
                      <p className="text-white/50 text-xs mt-2">Image coming soon</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Product Info Section */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border-2 border-nu-blue bg-white mb-4">
                <span className="text-base">{getCategoryIcon()}</span>
                <span className={`text-[10px] font-semibold uppercase tracking-[0.24em] px-2 py-0.5 rounded-full ${getCategoryColor()}`}>
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold leading-tight text-nu-blue sm:text-4xl">
                {product.title}
              </h1>
              
              <div className="mt-4 flex items-baseline gap-3">
                <p className="text-3xl font-bold text-nu-blue">₱{product.price.toLocaleString()}</p>
                <p className="text-sm text-green-600 font-medium">{product.stock} in stock</p>
              </div>
              
              <p className="mt-4 text-gray-600 leading-relaxed">
                {product.description}
              </p>
              
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/products" variant="primary" className="px-8 py-3">
                  Add to Cart 🛒
                </Button>
                <Button to="/products" variant="secondary" className="px-8 py-3">
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="border-y-2 border-nu-blue bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-nu-blue mb-6">Product Details</h2>
          
          <div className="space-y-4">
            {product.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;