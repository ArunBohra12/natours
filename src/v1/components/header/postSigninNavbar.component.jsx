import { Link, useHistory } from 'react-router-dom-v5';
import { userLogout } from '../../api/auth';
import { SERVER_BASE_URL } from '../../constants/serverConstants';
import User from '../../context/userContext';
import logoWhite from '../../assets/img/logo-white.png';

const PostSigninNavbar = () => {
  const { userInfo, removeUser } = User();

  const history = useHistory();

  const handleUserLogout = () => {
    userLogout();
    removeUser();
    history.push('/login');
  };

  return (
    <header className='header'>
      <nav className='nav nav--tours'>
        <Link className='nav__el' to='/'>
          All tours
        </Link>
      </nav>

      <div className='header__logo'>
        <img src={logoWhite} alt='Natours logo' />
      </div>

      <nav className='nav nav--user'>
        <button className='nav__el nav__el--logout' onClick={handleUserLogout}>
          Log out
        </button>

        <Link className='nav__el' to='/me'>
          <img
            className='nav__user-img'
            src={`${SERVER_BASE_URL}/img/users/${userInfo.photo}`}
            alt={userInfo.name.split(' ')[0]}
          />
          <span>{userInfo.name.split(' ')[0]}</span>
        </Link>
      </nav>
    </header>
  );
};

export default PostSigninNavbar;
