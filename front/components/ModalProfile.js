import Image from 'next/image';
import { AuthContext } from '../Context/AuthContext';
import { useContext, useRef } from 'react';

export default function ModalProfile() {
  const Auth = useContext(AuthContext);
  const modalProfile = useRef(null);

  if (Auth.isAuthenticated)
    return (
      <div
        onMouseEnter={() => {
          modalProfile.current.style.display = 'block';
        }}
        onMouseLeave={() => {
          modalProfile.current.style.display = 'none';
        }}
      >
        <div className="modalAuth_img_profile">
          <Image src="/img/profile.svg" width="23px" height="23px" />
        </div>
        <div ref={modalProfile} className="modalProfile">
          <div className="modalProfile_opacity"></div>
          <button
            className="modalAuth__button"
            onClick={(e) => {
              Auth.logout();
            }}
          >
            Выйти
          </button>
        </div>
      </div>
    );
  else return null;
}
