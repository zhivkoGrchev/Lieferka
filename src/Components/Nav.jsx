import {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import {FaTimes} from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import PropTypes from 'prop-types'
import { ShopContext } from '../Context/ShopContext.jsx'
import { useContext } from 'react'
import imgLogo from '../Assets/logo_lieferka.png'

const Nav = () => {

  const {getTotalCartItems} = useContext(ShopContext);
  const totalItems = getTotalCartItems();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const content = 
  <>

    <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition'>
      <ul className='text-center text-xl p-20'>
        <Link to='/' onClick={handleClick}>
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Home</li>
        </Link>
        <Link to='Services' onClick={handleClick}>
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Add your restaurant</li>
        </Link>
        <Link to='Projects' onClick={handleClick}>
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Sign up to deliver</li>
        </Link>
        <Link to='contact' onClick={handleClick}>
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Contact</li>
        </Link>
      </ul>
    </div>

  </>
  return (
    <nav>

      <div className='h-10vh flex justify-between z-50 text-white lg:py-5 px-10 py-4'>

          <div className='flex items-center flex-1'>
          <img src={imgLogo} className='h-4 pr-1.5 mt-0.5'/>
            <Link to='/'>
            <span className='text-2xl font-bold'>Lieferka</span>&nbsp;
            </Link>
            <span className='text-xs text-teal-400'>beta v1.12</span>
          </div>

          <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
            <div className='flex-10'>
              <ul className='flex gap-8 mr-16 text-[18px]'>
                <Link to='/'>
                  <li className='hover:text-teal-400 transition border-b-2 border-slate-900 cursor-pointer'>Home</li>
                </Link>
                <Link to='Services'>
                  <li className='hover:text-teal-400 transition border-b-2 border-slate-900 cursor-pointer'>Add your restaurant</li>
                </Link>
                <Link to='Projects'>
                  <li className='hover:text-teal-400 transition border-b-2 border-slate-900 cursor-pointer'>Sign up to deliver</li>
                </Link>
                <Link to='contact'>
                  <li className='hover:text-teal-400 transition border-b-2 border-slate-900 cursor-pointer'>Contact</li>
                </Link>
              </ul>
            </div>
          </div>

          <div>
            {click && content}
          </div>
          
          <Link to='cart'>
          <button className='flex bg-slate-100 pt-2 pb-1 px-2 rounded-lg hover:bg-teal-400'>
            <FaShoppingCart className='text-xl text-slate-900'/>
            <p className='text-xs pl-2 text-slate-900 font-extrabold'>{totalItems}</p>
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
