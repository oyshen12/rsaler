import Image from 'next/image';
export default function Product({ product }) {
  let time = Date.now() - Date.parse(product.createdAt);
  let setTime;
  if (Math.floor(time / 86400000) > 1) {
    setTime = Math.floor(time / 86400000) + ' дней';
  }

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
          <span className="product__time">{setTime}</span>
        </div>
      </div>
    </div>
  );
}
