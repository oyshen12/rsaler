import Image from 'next/image';
import Link from 'next/link';

export default function Product({ product }) {
  let time = Date.now() - Date.parse(product.createdAt);
  let setTime;
  if (Math.floor(time / 86400000) > 1) {
    setTime = Math.floor(time / 86400000) + ' дней';
  }

  return (
    <Link href={`/product/${product.id}`}>
      <div className="main__product">
        <div style={{ outline: 'none', width: '260px', display: 'block' }}>
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
            <span className="product__category">{product.title_full}</span>
          </div>
          <img
            src="img/heart.svg"
            alt=""
            width="23px"
            height="23px"
            className="product__heart"
          />
        </div>
        <div className="product__price">
          <span className="product__price__sp">{product.price}</span>
          <span className="product__time">{setTime}</span>
        </div>
      </div>
    </Link>
  );
}
