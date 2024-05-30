import React from 'react';
import axios from 'axios';
import Image from 'next/image';

const fetchProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};
const truncateTitle = (title, wordLimit) => {
  const words = title.split(' ');
  if (words.length <= wordLimit) {
    return title;
  }
  return words.slice(0, wordLimit).join(' ') + '...';
};
const ProductList = async () => {
  const products = await fetchProducts();
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
    {products.map((product) => (
      <div key={product.id} className=" rounded-lg overflow-hidden shadow-lg flex flex-col bg-[#141414]">
        <div className="relative h-80 w-70">
          <Image
            className="object-cover"
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-2 right-2">
            <Image
              className="hover:opacity-75"
              src="/icons/Bookmark1.png"
              alt="Bookmark"
              height={34}
              width={26}
            />
          </div>
        </div>
        <div className="p-4 flex-grow">
          <h4 className="text-medium mb-2">{truncateTitle(product.title, 3)}</h4>
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-medium">
              ₹ {product.price}{' '}
              <span className="line-through text-sm">8999</span>{' '}
              <span className="text-blue-500 text-sm">(50% off)</span>
            </span>
            <Image
              src="/icons/bag+.png"
              alt="Add to Bag"
              height={43}
              width={35}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    ))}
  </section>
);
};


export default ProductList;
