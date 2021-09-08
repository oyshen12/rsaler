import React, { useState, useEffect, useContext } from 'react';
import Context from '../Context/contex';
import { AuthContext } from '../Context/AuthContext';
const axios = require('axios').default;

export default function ModalRegister() {
  let { isOpen, setisOpen } = React.useContext(Context);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const Auth = useContext(AuthContext);

  async function Authenticated(e) {
    e.preventDefault();

    try {
      const token = await axios
        .post('http://localhost:3000/auth/login', { username, password })
        .then((response) => {
          return response.data;
        });
      Auth.login(token, '1');
      setisOpen(false);
    } catch (e) {
      console.log('Ошибка входа в аккаунт ' + e);
    }
  }

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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  required
                  placeholder="Пароль"
                  name="phone"
                  type="phone"
                  className="modal__input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="btn btn_dark btn_min"
                  onClick={(e) => {
                    Authenticated(e);
                  }}
                >
                  Войти
                </button>
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
