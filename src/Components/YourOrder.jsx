import PropTypes from 'prop-types'
import { ShopContext } from '../Context/ShopContext.jsx'
import { useContext } from 'react'

const YourOrder = ({id, name, price}) => {
  const {cartItems} = useContext(ShopContext)

  return (
      <div className='p-1 sm:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 lg:w-1/2 pr-4 pl-4'>
      <div className='flex justify-between p-2 border-2 border-slate-300 bg-slate-200 drop-shadow-lg shadow-inner'>
          <p> 
          {cartItems[id]} x
          </p>
        <div><p>{name}</p></div>
        <div><p>${price}</p></div>
      </div>
    </div>
  )
}

YourOrder.propTypes = {
  id : PropTypes.node,
  type : PropTypes.node,
  name : PropTypes.node,
  desc : PropTypes.node,
  price : PropTypes.node,
  img : PropTypes.node
}

export default YourOrder
