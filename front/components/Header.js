import React, { useCallback, useState, useEffect, useContext } from 'react';
import ModalRegister from '../components/ModalRegister';
import Context from '../Context/contex';
import Router from 'next/router';
import { AuthContext } from '../Context/AuthContext';

export default function Header() {
  const [isOpen, setisOpen] = useState(false);
  const Auth = useContext(AuthContext);

  return (
    <>
      <Context.Provider value={{ isOpen, setisOpen }}>
        <ModalRegister></ModalRegister>
      </Context.Provider>
      <header>
        <div className="header__wrapper">
          <div className="header__categories">
            <a className="icon" href="">
              ☰
            </a>
            <div className="header__goods">
              <span>Товары</span>
              <img src="img/Polygon 1.png" alt="" width="7px" height="7px" />
            </div>
            <span className="header__news">Новости</span>
          </div>
          <div className="header__logo" onClick={() => Router.push('/')}>
            <img src="img/RSALER.png" alt="" width="110px" height="34px" />
          </div>
          <div className="header__auth">
            <img src="img/heart.svg" alt="" width="23px" height="23px" />
            <img
              src="img/search.png"
              alt=""
              width="23px"
              height="23px"
              className="header__search"
            />
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
