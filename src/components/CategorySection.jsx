// src/components/CategorySection.jsx
import ProductCard from './ProductCard';

const CategorySection = ({ title, description, imageSrc, products, icon }) => {
  if (products.length === 0) {
    return null;
  }

  return (
    <div className="mb-12 scroll-mt-24" id={title.toLowerCase().replace(/\s+/g, '-')}>
      {/* Category Header */}
      <div className="relative rounded-3xl overflow-hidden mb-6 group">
        <img 
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/1200x300/003C71/white?text=${title}`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-nu-blue/80 to-transparent flex items-center">
          <div className="px-6 md:px-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{icon}</span>
              <p className="text-nu-gold text-[11px] font-semibold uppercase tracking-[0.28em]">
                Category
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h2>
            <p className="text-white/90 text-sm md:text-base max-w-2xl">{description}</p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;