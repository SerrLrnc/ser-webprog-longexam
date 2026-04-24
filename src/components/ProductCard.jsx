// src/components/ProductCard.jsx
import Button from './Button';
import ProductImage from './ProductImage';

const getCategoryColor = (category) => {
  switch(category) {
    case 'Daily Essentials': return 'bg-blue-100 text-nu-blue';
    case 'Bulldogs Accesories': return 'bg-green-100 text-green-700';
    case 'Campus Apparel': return 'bg-purple-100 text-purple-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

const ProductCard = ({ product, index }) => {
  return (
    <article className="group rounded-3xl border-2 border-nu-blue bg-white p-4 transition hover:-translate-y-1 hover:shadow-lg">
      <ProductImage 
        product={product}
        category={product.category} 
        title={product.title} 
      />
      
      <div className="mt-4 flex items-center justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-nu-gold">
          {product.category}
        </p>
        <span className={`text-[10px] px-2 py-0.5 rounded-full ${getCategoryColor(product.category)}`}>
          {product.category === 'Daily Essentials' ? '🎒 Daily' : 
           product.category === 'Bulldogs Acceories' ? '📚 Study' : '👕 Apparel'}
        </span>
      </div>
      
      <h3 className="mt-2 text-lg font-semibold text-nu-blue line-clamp-2">{product.title}</h3>
      <p className="mt-2 text-xl font-bold text-nu-blue">{product.price}</p>
      <p className="mt-2 text-xs text-green-600">{product.stock}</p>
      <p className="mt-3 text-sm leading-6 text-gray-600 line-clamp-2">
        {product.description}
      </p>
      <Button to={`/products/${product.name}`} className="mt-4 w-full" variant="primary">
        View Product →
      </Button>
    </article>
  );
};

export default ProductCard;