import PostSigninNavbar from './postSigninNavbar.component';
import PreSigninNavbar from './preSigninNavbar.component';

import './navbar.styles.css';

const Navbar = props => {
  const { isUserLoggedIn } = props;

  return isUserLoggedIn === true ? <PostSigninNavbar /> : <PreSigninNavbar />;
};

export default Navbar;
