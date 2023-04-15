import { useEffect } from 'react';

const Header = () => {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = e => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky');
  };
  return (
    <>
      <header className='header-section'>
        <img
          className='header-item'
          src='../banana.svg'
          alt='triangle with all three sides equal'
          height='87'
          width='100'
        />

        <h4 className='header-item'>nostrcli</h4>
      </header>
    </>
  );
};

export default Header;
