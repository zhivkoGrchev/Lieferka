import PropTypes from 'prop-types'
import { ShopContext } from '../Context/ShopContext.jsx'
import { useContext } from 'react'

const CartItem = ({id, name, price}) => {
  const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext)
  return (
      <div className='p-1 sm:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 lg:w-1/2 pr-4 pl-4'>
      <div className='flex justify-between p-2 border-2 border-slate-300 bg-slate-200 drop-shadow-lg shadow-inner'>
        <div><p>{name}</p></div>
        <div>
        <button 
          className='border-2 border-slate-300 w-5 font-bold'
          onClick={() => removeFromCart(id)}
          > - </button>
        <input 
          className='border-2 border-slate-300 w-5 text-center'
          value={cartItems[id]}
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
        <button 
          className='border-2 border-slate-300 w-5 font-bold'
          onClick={() => addToCart(id)}
          > + </button>
        </div>
        <div><p>${price}</p></div>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  id : PropTypes.node,
  type : PropTypes.node,
  name : PropTypes.node,
  desc : PropTypes.node,
  price : PropTypes.node,
  img : PropTypes.node
}

export default CartItem
