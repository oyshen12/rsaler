import { useRef, useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import { AuthContext } from '../Context/AuthContext';
const axios = require('axios').default;

export default function ModalAuth() {
  const modalAuth = useRef(null);
  const buttonIn = useRef(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const Auth = useContext(AuthContext);

  function clickDocumentHandler(e) {
    if (
      e.target.className != 'modalAuth__button_in' &&
      e.target.closest('div').className != 'modalAuth_login' &&
      e.target.className != 'modalAuth_login'
    ) {
      modalAuth.current.style.display = 'none';
    }
  }
  useEffect(() => {
    document.addEventListener('click', clickDocumentHandler);
    return function () {
      document.removeEventListener('click', clickDocumentHandler);
    };
  }, []);

  async function Authenticated(e) {
    e.preventDefault();

    try {
      const token = await axios
        .post('http://localhost:3000/auth/login', { username, password })
        .then((response) => {
          return response.data;
        });
      Auth.login(token, '1');
      modalAuth.current.style.display = 'none';
    } catch (e) {
      console.log('Ошибка входа в аккаунт ' + e);
    }
  }

  if (!Auth.isAuthenticated)
    return (
      <div className="modalAuth_profile">
        <button
          className="modalAuth__button_in"
          onClick={() => {
            modalAuth.current.style.display = 'block';
          }}
          ref={buttonIn}
        >
          Войти
        </button>

        <div ref={modalAuth} className="modalAuth_login">
          <input
            required
            placeholder="Email или телефон"
            name="name"
            type="text"
            className="modalAuth__input"
            autocomplete="off"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            required
            placeholder="Пароль"
            name="name"
            type="password"
            className="modalAuth__input"
            autocomplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="modalAuth__button"
            onClick={(e) => {
              Authenticated(e);
            }}
          >
            Войти
          </button>
          <div className="modalAuth_register">
            <span>Забыли пароль?</span>
            <span>Регистрация</span>
          </div>
        </div>
      </div>
    );
  else {
    return null;
  }
}
