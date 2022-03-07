import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams();

  return (
    <section>
      <div>Product Detail</div>
      <p>{params.productId}</p>
    </section>
  )
}

export default ProductDetail;