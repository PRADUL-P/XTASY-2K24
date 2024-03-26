import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/image.png'


const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
      
       <Link to='/'>
          <h1 className='h-[60px] font-monton uppercase'>aakriti</h1>
          {/* <img className='h-[50px]' src={Logo} alt=''/> */}
        </Link>
        {/* <Link to=''> */}
        <button  
        className='btn btn-sm'
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href='http://google.com';
          }}
          > REGISTER</button>
        {/* </Link> */}
        
      </div>

    </div>
  </header>;
};

export default Header;
