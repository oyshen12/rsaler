import React, { useCallback, useState, useEffect, useContext } from 'react';
import ModalRegister from '../components/ModalRegister';
import ModalContext from '../Context/ModalContext';
import Router from 'next/router';
import { AuthContext } from '../Context/AuthContext';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setisOpen] = useState(false);
  const Auth = useContext(AuthContext);

  return (
    <>
      <ModalContext.Provider value={{ isOpen, setisOpen }}>
        <ModalRegister></ModalRegister>
      </ModalContext.Provider>
      <header>
        <div className="header__wrapper">
          <div className="header__categories">
            <a className="icon" href="">
              ☰
            </a>
            <div className="header__goods">
              <span>Товары</span>
              <Image src="/img/Polygon 1.png" width="7px" height="7px" />
            </div>
            <span className="header__news">Новости</span>
          </div>
          <div className="header__logo" onClick={() => Router.push('/')}>
            <Image src="/img/RSALER.png" width="110px" height="34px" />
          </div>
          <div className="header__auth">
            <Image src="/img/heart.svg" width="23px" height="23px" />
            <div className="header__search">
              <Image src="/img/search.png" width="23px" height="23px" />
            </div>
            <div className="header__login">
              <button
                className={
                  Auth.isAuthenticated ? 'hide' : 'header__login_button'
                }
                onClick={() => {
                  setisOpen(true);
                }}
              >
                Войти
              </button>
              <button
                onClick={() => {
                  Auth.logout();
                }}
              >
                Выйти
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
