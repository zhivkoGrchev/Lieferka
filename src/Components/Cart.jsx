import {items} from './DataItems.jsx'
import { ShopContext } from '../Context/ShopContext.jsx'
import { useContext } from 'react'
import CartItem from './CartItem.jsx'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate()

  return (
    <div>
      <div className="text-center font-bold my-5">
        Your Cart Items
      </div>
      <div>
        {items.map((item) => {
          if (cartItems[item.id] !== 0) {
            return (
              <div key={item.id}>
                <div className='lg:flex md:flex sm:flex justify-center'>
                  <CartItem 
                    id={ item.id}
                    type={ item.type}
                    name={ item.name}
                    desc={ item.desc}
                    price={ item.price}
                    img={ item.img}
                  />
                </div>
              </div>
            )
          }
        })}
      </div>

    {totalAmount > 0 ? (
      <div className='lg:flex md:flex sm:flex justify-center font-bold'>
        <div className='p-1 sm:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 lg:w-1/2 pr-4 pl-4'>

        <div className='flex justify-between p-2 border-2 border-slate-300 bg-slate-200 drop-shadow-lg shadow-inner'>
          <p>Subtotal:</p><p> ${totalAmount}</p>
        </div>

        <div className='flex justify-between'>
        <button 
          onClick={() => navigate('/burgerbros')}
          className='bg-slate-700 text-slate-100 font-normal rounded-md p-2 my-2'
          >Continue Shopping</button>
        <button
          className='bg-slate-700 text-slate-100 font-normal rounded-md p-2 my-2'
        >Checkout</button>
        </div>

      </div>
      </div>
    ) : (
          <p className='text-center p-20 font-bold'>Your Cart is Empty!</p>
    )}
    </div>
  )
}

export default Cart
