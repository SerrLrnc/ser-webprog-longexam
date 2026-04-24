// src/pages/LandingPages/ProductListPage.jsx
import { useState } from 'react';
import Button from '../../components/Button.jsx';
import ProductCard from '../../components/ProductCard.jsx';
import products from '../../assets/product-content.js';

const ProductListPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter products by category
  const dailyEssentials = products.filter(p => p.category === "Daily Essentials");
  const studySupplies = products.filter(p => p.category === "Study Supplies");
  const campusApparel = products.filter(p => p.category === "Campus Apparel");

  // Category tabs configuration
  const categories = [
    { id: 'all', name: 'All Products', icon: '🛍️', count: products.length, color: 'bg-gray-600' },
    { id: 'daily-essentials', name: 'Daily Essentials', icon: '🎒', count: dailyEssentials.length, color: 'bg-blue-600' },
    { id: 'study-supplies', name: 'Study Supplies', icon: '📚', count: studySupplies.length, color: 'bg-green-600' },
    { id: 'campus-apparel', name: 'Campus Apparel', icon: '👕', count: campusApparel.length, color: 'bg-purple-600' },
  ];

  // Get products to display based on active category
  const getDisplayedProducts = () => {
    switch(activeCategory) {
      case 'daily-essentials':
        return { products: dailyEssentials, title: 'Daily Essentials', icon: '🎒', color: 'from-blue-600 to-blue-800' };
      case 'study-supplies':
        return { products: studySupplies, title: 'Study Supplies', icon: '📚', color: 'from-green-600 to-green-800' };
      case 'campus-apparel':
        return { products: campusApparel, title: 'Campus Apparel', icon: '👕', color: 'from-purple-600 to-purple-800' };
      default:
        return { products: products, title: 'All Products', icon: '🛍️', color: 'from-nu-blue to-nu-dark-blue' };
    }
  };

  const { products: displayedProducts, title, icon, color } = getDisplayedProducts();

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
        <div className="flex flex-wrap justify-center gap-3 mb-4">
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

      {/* Category Banner (shows when a specific category is selected) */}
      {activeCategory !== 'all' && (
        <section className="px-4 sm:px-6 lg:px-8 -mt-2">
          <div className={`rounded-3xl bg-gradient-to-r ${color} p-6 text-white`}>
            <div className="flex items-center gap-3">
              <span className="text-4xl">{icon}</span>
              <div>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-white/80 text-sm mt-1">
                  {displayedProducts.length} product{displayedProducts.length !== 1 ? 's' : ''} available
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Products Display - SEPARATED by category */}
      <section className="border-y-2 border-nu-blue bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {/* Show message when no products */}
        {displayedProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🛒</div>
            <h3 className="text-xl font-semibold text-nu-blue mb-2">No products found</h3>
            <p className="text-gray-600 mb-4">This category doesn't have any products yet.</p>
            <Button onClick={() => setActiveCategory('all')} variant="primary">
              View All Products
            </Button>
          </div>
        ) : (
          <>
            {/* Category Title for "All Products" view */}
            {activeCategory === 'all' && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-nu-blue">All Products</h2>
                <p className="text-gray-600 mt-1">Showing all {displayedProducts.length} products</p>
                <div className="mt-3 h-px w-12 bg-nu-gold"></div>
              </div>
            )}

            {/* Products Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {displayedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default ProductListPage;