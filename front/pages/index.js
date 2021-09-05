import Header from '../components/Header';
import Product from '../components/Product';
const axios = require('axios').default;
import React, { useCallback, useState, useEffect } from 'react';

export default function Home({ products }) {
  const [product, setProducts] = useState([...products]);

  let [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(false);
  const [totalCount, settotalCount] = useState(0);

  useEffect(() => {
    if (fetching) {
      axios
        .get(`http://localhost:3000/product`)
        .then((resp) => {
          setProducts([...product, ...resp.data]);
          setCurrentPage(currentPage++);
        })
        .finally(() => {
          setFetching(false);
        });
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="main__new">
        <span>Недавно добавленные</span>
      </div>
      <div className="product_flex">
        <div className="product_grid">
          {product.map((prod) => (
            <Product product={prod}></Product>
          ))}
        </div>
      </div>
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  const products = await (
    await axios.get('http://localhost:3000/product/')
  ).data;
  return { products };
};
