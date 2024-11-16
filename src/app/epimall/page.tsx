// pages/index.js

import ProductCard from '@/components/custom/shop/product-card';
import { products } from '../../data/mock';

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Epimall</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
