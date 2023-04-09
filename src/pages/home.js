import logo from '../banana.svg';
import SignIn from './Signin';
import SignUp from '../pages/Signup';

const Home = () => {
  return (
    <div className='App'>
      <div>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='site-title'>nosrtcli</h1>
        </header>
      </div>
    </div>
  );
};

export default Home;
