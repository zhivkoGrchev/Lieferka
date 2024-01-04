import emailjs from '@emailjs/browser';
import { ShopContext } from '../Context/ShopContext.jsx'
import { useContext, useRef } from 'react'
import PropTypes from 'prop-types'
import {items} from './DataItems.jsx'
import YourOrder from './YourOrder.jsx'

const Checkout = () => {
  const {getTotalCartAmount, cartItems} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_88mmkt1",
        "template_2v2588e",
        form.current,
        "EVmOzzFy_ULdcwqkJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent")
        },
        (error) => {
          console.log(error.text);
        }
      )
    };


  return (
    <div className="pt-6 pb-20">
      <p className=" font-bold py-4 text-2xl text-center">Checkout Page</p>
      <form 
        ref={form}
        onSubmit={sendEmail}
        className="px-4 my-4 max-w-2xl mx-auto font-semibold"
      >
        <label>Name:</label>
        <input
          className="mb-4 block border border-slate-400 py-1 px-2 w-full rounded focus:outline-none focus:border-teal-500"
          type="text"
          required
          name="name"
        />
        <label>Tel:</label>
        <input
          className="mb-4 block border border-slate-400 py-1 px-2 w-full rounded focus:outline-none focus:border-teal-500"
          type="tel" 
          required
          name="tel"
        />
        <label>Delivery adress:</label>
        <input
          className="mb-4 block border border-slate-400 py-1 px-2 w-full rounded focus:outline-none focus:border-teal-500"
          type="text"
          required
          name="adress"
        />


<div className="text-center font-bold my-5">
        Your Order
      </div>
      <div>
        {items.map((item) => {
          if (cartItems[item.id] !== 0) {
            return (
              <div key={item.id}>
                <div className='lg:flex md:flex sm:flex justify-center'>
                  <YourOrder 
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

        <div className='lg:flex md:flex sm:flex justify-center'>
          <p>Your Order:</p><p> ${totalAmount}</p>
        </div>
        <div className='lg:flex md:flex sm:flex justify-center'>
          <p>Delivery Fee:</p><p> $3.50</p>
        </div>
        <div className='lg:flex md:flex sm:flex justify-center font-bold'>
          <p>Subtottal:</p><p> ${totalAmount + 3.50} </p>
        </div>

        <div className="flex justify-between items-center">
        <p
          type="text"
          className='text-red-600'
          name="pay"
        >
          Pay ${totalAmount+ 3.50} at the delivery.</p>
        <button
          className='bg-slate-700 text-slate-100 font-normal rounded-md p-2 my-2 hover:bg-teal-400 hover:text-slate-900'
          type='submit'
          value="Send"
        >Place order</button>
        </div>
      </form>
    </div>
  )
}

Checkout.propTypes = {
  id : PropTypes.node,
  type : PropTypes.node,
  name : PropTypes.node,
  desc : PropTypes.node,
  price : PropTypes.node,
  img : PropTypes.node
}

export default Checkout
