import React from 'react';

function ProductCard({ image, title, tailorName, icon, price }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-texts">
        <p>{title}</p>
        <h4>{price}</h4>
        <div className="tailor">
          <img src={icon} alt="sewing machine icon" />
          <span>{tailorName}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
