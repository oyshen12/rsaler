import { useEffect, useState, useRouter } from 'react';
import Header from '../../components/Header';
const axios = require('axios').default;
import Image from 'next/image';
import ButtonBack from '../../components/ButtonBack';
import { useAuth } from '../../hooks/auth.hook';
import { AuthContext } from '../../Context/AuthContext';

export default function Product({ product }) {
  return (
    <div>
      <Header></Header>
      <div className="productPage">
        <div className="productPage_wrapper">
          <div
            style={{
              outline: 'none',
              width: '600px',
              display: 'block',
            }}
          >
            <div className="product_img_1">
              <div className="product_img_2">
                <div
                  className="product_img_3"
                  style={{
                    backgroundImage: `url('../img/nike.png')`,
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="productPage_info">
            <ButtonBack />
            <div className="productPage_name">
              <span>{product.title_full}</span>
              <div className="productPage_name_img">
                <Image src="/img/heart.svg" width="23px" height="23px" />
              </div>
            </div>
            <div className="productPage_place">
              <div className="productPage_place_wr">
                <span>Откуда</span>
                <span>Москва</span>
              </div>
            </div>
            <hr className="productPage_hr"></hr>
            <span className="productPage_delivery">Доставка</span>
            <div className="productPage_delivery_info">
              <span>Почта</span>
              <span>500 руб.</span>
            </div>
            <div className="productPage_delivery_info">
              <span>Личная встреча</span>
              <span>Бесплатно</span>
            </div>
            <hr
              className="productPage_hr"
              style={{
                marginTop: '28px',
              }}
            ></hr>
            <div className="productPage_condition">
              <span>Состояние</span>
              <span>Новая с биркой</span>
            </div>
            <hr className="productPage_hr"></hr>
            <div className="productPage_seller_price">
              <div className="productPage_seller">
                <div className="productPage_seller_img">
                  <Image src="/img/Seller1.png" width="100px" height="100px" />
                </div>
                <div className="productPage_seller_info">
                  <span
                    style={{
                      fontSize: '24px',
                      lineHeight: '36px',
                    }}
                  >
                    Продавец Николай
                  </span>
                  <span>Рейтинг: 4.5</span>
                  <span>Сделки: 5</span>
                </div>
              </div>
              <div className="productPage_price">
                <span>{product.price} руб.</span>
                <div className="productPage_price_buy">Купить</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Product.getInitialProps = async ({ query, req }) => {
  const product = (await axios.get(`http://localhost:3000/product/${query.id}`))
    .data;

  return { product };
};
