import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import Router from 'next/router';
import * as timeago from 'timeago.js';

export default function Product({ product }) {
  function formatNum(f1, f, s, t, n) {
    const n10 = n % 10;
    let str = t;

    if (n === 1) {
      str = f1;
    } else if (n10 === 1 && n > 20) {
      str = f;
    } else if (n10 > 1 && n10 < 5 && (n > 20 || n < 10)) {
      str = s;
    }

    return str;
  }

  const seconds = formatNum.bind(
      null,
      'секунду',
      '%s секунду',
      '%s секунды',
      '%s секунд'
    ),
    minutes = formatNum.bind(
      null,
      'минуту',
      '%s минуту',
      '%s минуты',
      '%s минут'
    ),
    hours = formatNum.bind(null, 'час', '%s час', '%s часа', '%s часов'),
    days = formatNum.bind(null, 'день', '%s день', '%s дня', '%s дней'),
    weeks = formatNum.bind(
      null,
      'неделю',
      '%s неделю',
      '%s недели',
      '%s недель'
    ),
    months = formatNum.bind(
      null,
      'месяц',
      '%s месяц',
      '%s месяца',
      '%s месяцев'
    ),
    years = formatNum.bind(null, 'год', '%s год', '%s года', '%s лет');
  const localeFunc = (number, index, totalSec) => {
    // number: the timeago / timein number;
    // index: the index of array below;
    // totalSec: total seconds between date to be formatted and today's date;
    switch (index) {
      case 0:
        return ['только что', 'через несколько секунд'];
      case 1:
        return [seconds(number) + ' назад', 'через ' + seconds(number)];
      case 2: // ['минуту назад', 'через минуту'];
      case 3:
        return [minutes(number) + ' назад', 'через ' + minutes(number)];
      case 4: // ['час назад', 'через час'];
      case 5:
        return [hours(number) + ' назад', 'через ' + hours(number)];
      case 6:
        return ['вчера', 'завтра'];
      case 7:
        return [days(number) + ' назад', 'через ' + days(number)];
      case 8: // ['неделю назад', 'через неделю'];
      case 9:
        return [weeks(number) + ' назад', 'через ' + weeks(number)];
      case 10: // ['месяц назад', 'через месяц'];
      case 11:
        return [months(number) + ' назад', 'через ' + months(number)];
      case 12: // ['год назад', 'через год'];
      case 13:
        return [years(number) + ' назад', 'через ' + years(number)];
      default:
        return ['', ''];
    }
  };

  timeago.register('my-locale', localeFunc);

  let setTime = timeago.format(Date.parse(product.createdAt), 'my-locale');

  function goToPageProduct(e) {
    if (e.target.className !== 'product__heart_img') {
      Router.push(`/product/${product.id}`);
    }
  }

  return (
    <div className="main__product" onClick={goToPageProduct}>
      <div style={{ outline: 'none', width: '255px', display: 'block' }}>
        <div className="product_img_1">
          <div className="product_img_2">
            <div
              className="product_img_3"
              style={{
                backgroundImage: `url('img/nike.png')`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="product__name">
        <div>
          <span className="product__name__sp">
            {product.title}
            <br />
          </span>
        </div>

        <div className="product__heart" onClick={() => {}}>
          <Image
            src="/img/heart.svg"
            width="23px"
            height="23px"
            className="product__heart_img"
          />
        </div>
      </div>
      <div className="product_name_size">
        <span className="product__title_full">{product.title_full}</span>
        <span className="product__size">{product.size}</span>
      </div>
      <div className="product__price">
        <span className="product__price__sp">{product.price} руб.</span>
        <span className="product__time">{setTime}</span>
      </div>
    </div>
  );
}
