const Footer = () => {
  return (
    <footer class='footer-container'>
      <a
        class='footer-link'
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
