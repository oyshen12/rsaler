import Image from 'next/image';
export default function Product({ product }) {
  return (
    <div>
      <div className="main__product">
        {/* <img src="/img/Rectangle 5.png" alt="" height="200px" width="220px" /> */}
        <Image
          src="/img/nike.png"
          alt="Picture of the author"
          width={220}
          height={220}
        />
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
          <span className="product__time">
            {Math.floor(
              ((Date.now() - Date.parse(product.createdAt)) / 3600000) % 24
            ) + ' '}
            часа назад
          </span>
        </div>
      </div>
    </div>
  );
}
