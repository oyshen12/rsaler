import React, { useState, useEffect } from 'react';
import Context from './contex';

export default function ModalRegister() {
  let { isOpen, setisOpen } = React.useContext(Context);

  //   useEffect(() => {
  //     if (isOpen) document.body.style.overflow = 'hidden';
  //     else {
  //       document.body.style.overflow = 'visible';
  //     }
  //   }, [isOpen]);

  if (isOpen) {
    return (
      <>
        <div
          className="modal"
          onClick={(e) => {
            if (e.target.className == 'modal') {
              setisOpen(false);
            }
          }}
        >
          <div className="modal__dialog">
            <div className="modal__content">
              <form action="#">
                <div
                  data-close
                  className="modal__close"
                  onClick={() => setisOpen(false)}
                >
                  &times;
                </div>
                <div className="modal__title">Вход в аккаунт</div>
                <input
                  required
                  placeholder="Email"
                  name="name"
                  type="text"
                  className="modal__input"
                />
                <input
                  required
                  placeholder="Пароль"
                  name="phone"
                  type="phone"
                  className="modal__input"
                />
                <button className="btn btn_dark btn_min">Войти</button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
