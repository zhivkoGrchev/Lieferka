import GastroItem from "./GastroItem"
import PropTypes from 'prop-types'
import { items } from './BeelitzGastroData.jsx';


export default function City ({nameCity, slogan}) {

  const ListGastro = items.map(item =>
    <div key={item.id}>
      <div >
      <GastroItem 
                name={ item.name}
                desc={ item.desc}
                img={ item.img}
              />
      </div>
    </div>
    )


  return (
        <>
        <div className="text-center drop-shadow-lg">

          <div className="text-center pb-4">
            <h2 className=" text-3xl font-bold pt-6 pb-2 text-slate-700">{nameCity}</h2>
            <p className=" text-slate-700">{slogan}</p>
          </div>
          <div className="flex flex-wrap px-36 py-4 gap-5 justify-center">{ListGastro}</div>
        </div>
        </>
  )
}

City.propTypes = {
  nameCity : PropTypes.node,
  slogan : PropTypes.node,
}


