// src/components/CategorySection.jsx
import ProductCard from './ProductCard';

const CategorySection = ({ title, description, imageSrc, products, icon }) => {
  if (products.length === 0) {
    return null;
  }

  return (
    <div className="mb-12 scroll-mt-24" id={title.toLowerCase().replace(/\s+/g, '-')}>
      {/* Simple text header instead of image */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">{icon}</span>
          <h2 className="text-2xl font-bold text-nu-blue">{title}</h2>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="mt-3 h-px w-12 bg-nu-gold"></div>
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