import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
const axios = require('axios').default;

export default function Product({ data }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="">
      ID: {id} {JSON.stringify(data)}
    </div>
  );
}
Product.getInitialProps = async ({ query, req }) => {
  const data = (await axios.get(`http://localhost:3000/product/${query.id}`))
    .data;

  return { data };
};
