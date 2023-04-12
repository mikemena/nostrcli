const Footer = () => {
  return (
    <footer className='footer-container'>
      <a
        className='footer-link'
        rel='noopener noreferrer'
        href='https://www.tky.dev'
        target='_blank'
      >
        tky.dev
      </a>{' '}
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
