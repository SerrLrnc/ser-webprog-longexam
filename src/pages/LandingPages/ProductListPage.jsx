// src/pages/LandingPages/ProductListPage.jsx
import { useState } from 'react';
import Button from '../../components/Button.jsx';
import ProductCard from '../../components/ProductCard.jsx';
import CategorySection from '../../components/CategorySection.jsx';
import products from '../../assets/product-content.js';

const ProductListPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter products by category
  const dailyEssentials = products.filter(p => p.category === "Daily Essentials");
  const bulldogAccessories = products.filter(p => p.category === "Bulldog Accessories");  
  const campusApparel = products.filter(p => p.category === "Campus Apparel");

  // Category tabs configuration
  const categories = [
    { id: 'all', name: 'All Products', icon: '🛍️', count: products.length },
    { id: 'daily-essentials', name: 'Daily Essentials', icon: '🎒', count: dailyEssentials.length },
    { id: 'bulldog-accessories', name: 'Bulldog Accessories', icon: '🐶', count: bulldogAccessories.length },  
    { id: 'campus-apparel', name: 'Campus Apparel', icon: '👕', count: campusApparel.length },
  ];

  // Get products to display based on active category
  const getDisplayedProducts = () => {
    switch(activeCategory) {
      case 'daily-essentials':
        return dailyEssentials;
      case 'bulldog-accessories':  
        return bulldogAccessories;
      case 'campus-apparel':
        return campusApparel;
      default:
        return products;
    }
  };

  const displayedProducts = getDisplayedProducts();

  return (
    <div className="flex w-full flex-col gap-6">
      {/* Hero Section */}
      <section className="border-y-2 border-nu-blue bg-gradient-to-br from-blue-50 to-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold">
            Our Collection
          </p>
          <h1 className="text-3xl font-bold leading-tight text-nu-blue sm:text-4xl">
            Shop Campus Essentials
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm leading-7 text-gray-600 sm:text-base">
            Browse practical items for class, study, commute, and everyday campus routines.
            Find everything you need as a proud NU Bulldog!
          </p>
          <div className="mt-6">
            <Button to="/">← Back Home</Button>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group px-5 py-2 rounded-full border-2 transition-all duration-200 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-nu-blue border-nu-blue text-white shadow-lg'
                  : 'bg-white border-nu-blue text-nu-blue hover:bg-nu-blue hover:text-white'
              }`}
            >
              <span className="text-base">{category.icon}</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                {category.name}
              </span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                activeCategory === category.id
                  ? 'bg-nu-gold text-nu-blue'
                  : 'bg-nu-blue text-white group-hover:bg-nu-gold group-hover:text-nu-blue'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Products Display */}
      <section className="border-y-2 border-nu-blue bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {activeCategory === 'all' ? (
          <div>
            <CategorySection 
              title=""
              description=""
              imageSrc="/images/sections/daily-essentials.jpg"
              products={dailyEssentials}
              icon="🎒"
            />
            
            <div className="my-8 h-px bg-gradient-to-r from-transparent via-nu-gold to-transparent" />
            
            <CategorySection 
              title=""  // ← Changed
              description=""
              imageSrc="/images/sections/bulldog-accessories.jpg"  // ← Change image name if needed
              products={bulldogAccessories}
              icon="🐶"  // ← Changed from 📚 to 🐶
            />
            
            <div className="my-8 h-px bg-gradient-to-r from-transparent via-nu-gold to-transparent" />
            
            <CategorySection 
              title=""
              description=""
              imageSrc="/images/sections/campus-apparel.jpg"
              products={campusApparel}
              icon="👕"
            />
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-nu-blue">
                {categories.find(c => c.id === activeCategory)?.name}
              </h2>
              <p className="text-gray-600 mt-1">
                Showing {displayedProducts.length} product{displayedProducts.length !== 1 ? 's' : ''}
              </p>
            </div>
            
            {displayedProducts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {displayedProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-3xl border-2 border-nu-blue">
                <p className="text-gray-500">No products found in this category.</p>
                <Button to="/products" className="mt-4" onClick={() => setActiveCategory('all')}>
                  View All Products
                </Button>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductListPage;