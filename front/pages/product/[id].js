import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
const axios = require('axios').default;

export default function Product({ data }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header></Header>
      <p>
        ID: {id} {JSON.stringify(data)}
      </p>
    </div>
  );
}
Product.getInitialProps = async ({ query, req }) => {
  const data = (await axios.get(`http://localhost:3000/product/${query.id}`))
    .data;

  return { data };
};
