import Image from 'next/image';
import Router from 'next/router';

export default function ButtonBack() {
  return (
    <div className="button_back" onClick={() => Router.back()}>
      <div className="button_img">
        <Image src="/img/arrow-back-outline.svg" width={23} height={23} />
      </div>

      <span>Назад</span>
    </div>
  );
}
