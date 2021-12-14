import React from 'react';
import { productsData } from '../data/productsData';
import ProductCard from './ProductCard';

function SearchResult() {
  return (
    <div className="search-result">
      <p>16 items found</p>

      <div className="products">
        {productsData.map(({ image, title, price, icon, tailor }, index) => (
          <ProductCard
            image={image}
            title={title}
            price={price}
            icon={icon}
            tailorName={tailor}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResult;
