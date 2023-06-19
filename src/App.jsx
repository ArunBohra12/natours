import Footer from './components/footer/footer.component';
import Main from './components/main/main.component';
import LoginSignup from './components/loginSignup/loginSignup.component';
import User from './context/userContext';
import Navbar from './components/header/navbar.component';

import './App.css';

const App = () => {
  const { isUserLoggedIn } = User();

  return (
    <>
      <Navbar isUserLoggedIn={isUserLoggedIn} />
      {isUserLoggedIn === true ? <Main /> : <LoginSignup />}
      <Footer />
    </>
  );
};

export default App;
