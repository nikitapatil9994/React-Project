import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../redux/slices/ProductSlice';
import ProductCard from '../components/ProductCard';

const Men = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);

  useEffect(() => {
    // Fetch products from a fake API
    const fetchProducts = async () => {
      const res = await fetch('https://be-crud-nhyl.onrender.com/MEN');
      const data = await res.json();
      dispatch(setProducts(data));
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <div className="product-grid"  style={{display:"flex", justifyContent:"space-around", alignContent:"center", flexWrap:"wrap"}}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Men;