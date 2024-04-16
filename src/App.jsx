import { Routes, Route } from 'react-router-dom'
import Menu from './Components/Menu.jsx'
import City from './Components/City.jsx'
import NotFound from './Pages/NotFound.jsx'
import Cart from './Components/Cart.jsx'
import Checkout from './Components/Checkout.jsx'
import Contact from './Pages/Contact.jsx'
import Impressum from './Pages/Impressum.jsx'

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

            <Route path='gasthofbros' element={
              <Menu 
                nameGastro='Gasthof Bros'
                sloganGastro='The best place in town'
              />
            }/>

            <Route path='burgerbros' element={
              <Menu 
                nameGastro='Burger Bros'
                sloganGastro='The best burgers in town'
              />
            }/>

            <Route path='dönerbros' element={
              <Menu 
                nameGastro='Döner Bros'
                sloganGastro='The best döner in town'
              />
            }/>

            <Route path='pizzabros' element={
              <Menu 
                nameGastro='Pizza Bros'
                sloganGastro='The best pizza in town'
              />
            }/>

            <Route path='cart' element={<Cart />} />

            <Route path='checkout' element={<Checkout />} />

            <Route path='contact' element={<Contact />} />

            <Route path='impressum' element={<Impressum />} />

            <Route path='*' element={<NotFound />} />
            
          </Routes>
      </div>
    </>
  )
}

export default App
