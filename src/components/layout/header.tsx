import Clock from 'components/clock/clock';

import Logo from 'assets/images/logo.png';

function Header() {
  return (
    <header className='flex items-center justify-between px-12 mb-28'>
      <div className='flex items-center'>
        <div className='inline-block py-5 bg-white px-9 rounded-b-2xl'>
          <img src={Logo} alt='Department of Health' />
        </div>
        <p className='px-6 text-2xl'>
          <span>Good afternoon</span> <br />
          <span className='font-primary'>Mr. Mohamed</span>
        </p>
      </div>

      <Clock />
    </header>
  );
}

export default Header;
