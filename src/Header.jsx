import Nav from './Components/Nav.jsx'
import PropTypes from 'prop-types'

const Header = (props) => {
  
  return (
    <>
      <div className='bg-slate-900 fixed w-full z-50'>
      <Nav 
       cartItems = {props.cartItems}
       setCartItems = {props.setCartItems}
      />
      </div>
    </>
  )
}

Header.propTypes = {
  cartItems : PropTypes.node,
  setCartItems : PropTypes.node,
}


export default Header
