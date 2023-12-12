import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

const GastroItem = ({name, desc, img,}) => {

  const navigate = useNavigate();

  const burgerBros = () => {
    if (name === 'Burger Bros') {
    navigate('/burgerbros');
    } else if (name === 'Burger Kire') {
      navigate('/burgerkire');
    }
  }
  
  return (
    <div className='sm:1/2 pr-4 pl-4 md:w-1/4 pr-4 pl-4 lg:w-1/6 pr-4 pl-4'>
      <div className='h-42 w-32 p-2 border-2 border-slate-300 bg-slate-200 drop-shadow-lg shadow-inner'>
        <img className='drop-shadow-lg' src={img}/>
        <h3 className='text-l font-bold pt-2'>{name}</h3>
        <p className='text-xs pb-4'>{desc}</p>
        <div>
          <button onClick={()=>burgerBros()} className='rounded drop-shadow-lg bg-slate-700 text-slate-200 text-sm px-2 py-1 font-medium' type='button'>
            Open Menu
          </button>
        </div>
      </div>
    </div>
  )
}

GastroItem.propTypes = {
  name : PropTypes.node,
  desc : PropTypes.node,
  img : PropTypes.node
}

export default GastroItem
