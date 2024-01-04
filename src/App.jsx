import { Routes, Route } from 'react-router-dom'
import Menu from './Components/Menu.jsx'
import City from './Components/City.jsx'
import NotFound from './Pages/NotFound.jsx'
import Cart from './Components/Cart.jsx'
import Checkout from './Components/Checkout.jsx'
import Contact from './Pages/Contact.jsx'


const App = () => {
  return (
    <>
      <div className='bg-slate-200 pt-20 pb-20'>
          <Routes>

            <Route path='/' element={
              <City
                nameCity='Saalfeld'
                slogan='an der Saale'
              />
            }/>

            <Route path='burgerbros' element={
              <Menu 
                nameGastro='Burger Bros'
                sloganGastro='The best burgers in town'
              />
            }/>

            <Route path='cart' element={<Cart />} />

            <Route path='checkout' element={<Checkout />} />

            <Route path='contact' element={<Contact />} />


            <Route path='*' element={<NotFound />} />
            
          </Routes>
      </div>
    </>
  )
}

export default App
