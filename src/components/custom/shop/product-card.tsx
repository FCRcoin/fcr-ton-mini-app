import Link from 'next/link';

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-700">{product.price} FCR</p>
        <p className="text-gray-600 text-sm line-clamp-3">
          {product.description}
        </p>
      </div>
      <div className="p-4">
        <Link href={`/product/${product.id}`} legacyBehavior>
          <a className="inline-block bg-supernova-600 text-white px-4 py-2 rounded w-full text-center">
            View Details
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
