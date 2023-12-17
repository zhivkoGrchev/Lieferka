import { ShopContext } from '../Context/ShopContext.jsx'
import { useContext } from 'react'

const Checkout = () => {
  const {getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className="pt-6 pb-20">
      <p className=" font-bold py-4 text-2xl text-center">Checkout Page</p>
      <form className="px-4 my-4 max-w-2xl mx-auto font-semibold">
        <label>Name:</label>
        <input
          className="mb-4 block border border-slate-400 py-1 px-2 w-full rounded focus:outline-none focus:border-teal-500"
          type="text"
          required
        />
        <label>Tel:</label>
        <input
          className="mb-4 block border border-slate-400 py-1 px-2 w-full rounded focus:outline-none focus:border-teal-500"
          type="tel" 
          required
        />
        <label>Delivery adress:</label>
        <input
          className="mb-4 block border border-slate-400 py-1 px-2 w-full rounded focus:outline-none focus:border-teal-500"
          type="text"
          required
        />
        <div className="flex justify-between items-center">
        <p className='text-red-600'>Pay ${totalAmount} at the delivery.</p>
        <button
          className='bg-slate-700 text-slate-100 font-normal rounded-md p-2 my-2'
        >Place order</button>
        </div>
      </form>
    </div>
  )
}

export default Checkout
