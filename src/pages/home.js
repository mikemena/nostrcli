import logo from '../banana.svg';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <html>
      <body>
        <div className='app'>
          <div className='main'>
            <header className='app-header'>
              <img src={logo} className='App-logo' alt='logo' />
              <h1 className='site-title'>nosrtcli</h1>
            </header>
          </div>
          <div></div>
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default Home;
