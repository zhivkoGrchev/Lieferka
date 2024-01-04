import PropTypes from 'prop-types'
import { ShopContext } from '../Context/ShopContext.jsx'
import { useContext } from 'react'

const MenuItem = ({id, name, desc, price, img}) => {

  const {addToCart, cartItems} = useContext(ShopContext);

  const cartItemAmount = cartItems[id]
  
  return (
    <div className='sm:1/2 pr-4 pl-4 md:w-1/4 pr-4 pl-4 lg:w-1/6 pr-4 pl-4'>
      <div className='h-42 w-32 p-2 border-2 border-slate-300 bg-slate-200 drop-shadow-lg shadow-inner'>
        <img className='drop-shadow-lg' src={img}/>
        <h3 className='text-l font-bold'>{name}</h3>
        <p className='text-xs'>{desc}</p>
        <div>
          <p className='text-sm font-medium py-2'>${price}</p>
          <button onClick={() => addToCart(id)} className='rounded drop-shadow-lg bg-slate-700 text-slate-200 text-sm px-2 py-1 font-medium hover:bg-teal-400 hover:text-slate-900' type='button'>
            Add to Basket {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
        </div>
      </div>
    </div>
  )
}

MenuItem.propTypes = {
  id : PropTypes.node,
  name : PropTypes.node,
  desc : PropTypes.node,
  price : PropTypes.node,
  img : PropTypes.node
}

export default MenuItem
