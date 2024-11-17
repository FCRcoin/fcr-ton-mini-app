// pages/index.js

import ProductCard from '@/components/custom/shop/product-card';
import { products } from '../../data/mock';
import Image from 'next/image';
import ButtonGroup from '@/components/custom/shop/button-group';
import CountryGroup from '@/components/custom/shop/countries';

export default function Page() {
  return (
    <div>
      <div className="mb-6 w-full">
        <Image
          src="/assets/epimall.svg"
          width={120}
          height={120}
          alt="coin"
          className="border-4 p-2 border-white mx-auto"
        />
      </div>

      <ButtonGroup />
      <CountryGroup />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
