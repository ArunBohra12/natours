import Footer from './components/footer/footer.component';
import Main from './components/main/main.component';
import LoginSignup from './components/loginSignup/loginSignup.component';
import User from './context/userContext';
import PostSigninNavbar from './components/header/postSigninNavbar.component';
import PreSigninNavbar from './components/header/preSigninNavbar.component';

import './App.css';

const App = () => {
  const { isUserLoggedIn } = User();

  return (
    <>
      {isUserLoggedIn === true ? <PostSigninNavbar /> : <PreSigninNavbar />}
      {isUserLoggedIn === true ? <Main /> : <LoginSignup />}
      <Footer />
    </>
  );
};

export default App;
