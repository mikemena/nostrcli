import logo from '../banana.svg';
import SignIn from '../components/signin';

const Home = ({ onAdd }) => {
  return (
    <div className='App'>
      <div>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='site-title'>nosrtcli</h1>
        </header>
      </div>
      <SignIn />
    </div>
  );
};

export default Home;
