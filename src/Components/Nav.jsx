import {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import {FaTimes} from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import PropTypes from 'prop-types'
import { ShopContext } from '../Context/ShopContext.jsx'
import { useContext } from 'react'
import imgLogo from '../Assets/neonLogo.png'

const Nav = () => {

  const {getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const content = 
  <>

    <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition'>
      <ul className='text-center text-xl p-20'>
        <Link to='/' onClick={handleClick}>
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Home</li>
        </Link>
        <Link to='About' onClick={handleClick}>
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>About</li>
        </Link>
        <Link to='Services' onClick={handleClick}>
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Services</li>
        </Link>
        <Link to='Projects' onClick={handleClick}>
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Projects</li>
        </Link>
        <Link to='Contact' onClick={handleClick}>
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Contact</li>
        </Link>
      </ul>
    </div>

  </>
  return (
    <nav>

      <div className='h-10vh flex justify-between z-50 text-white lg:py-5 px-10 py-4'>

          <div className='flex items-center flex-1'>
          <img src={imgLogo} className='h-10 pr-2'/>
            <Link to='/'>
            <span className='text-2xl font-bold'>Lieferka</span>&nbsp;
            </Link>
            <span className='text-xs'>beta v1.1</span>
          </div>

          <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
            <div className='flex-10'>
              <ul className='flex gap-8 mr-16 text-[18px]'>
                <Link to='/'>
                  <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Home</li>
                </Link>
                <Link to='About'>
                  <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>About</li>
                </Link>
                <Link to='Services'>
                  <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Services</li>
                </Link>
                <Link to='Projects'>
                  <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Projects</li>
                </Link>
                <Link to='Contact'>
                  <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Contact</li>
                </Link>
              </ul>
            </div>
          </div>

          <div>
            {click && content}
          </div>
          
          <Link to='cart'>
          <button className='flex bg-slate-100 pt-2 pb-1 px-2 rounded-lg'>
            <FaShoppingCart className='text-xl text-slate-900'/>
            <p className='text-xs pl-2 text-slate-900 font-extrabold'>${totalAmount}</p>
          </button>
          </Link>

          <button className='block lg:hidden transition pl-4 text-2xl' onClick={handleClick}>
            {click ? <FaTimes/> : <TiThMenu />}
          </button>

      </div>
    </nav>
  )
}

Nav.propTypes = {
  cartItems : PropTypes.node,
  setCartItems : PropTypes.node,
}

export default Nav
