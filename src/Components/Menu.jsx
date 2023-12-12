import MenuItem from "./MenuItem.jsx"
import PropTypes from 'prop-types'
import { items } from './DataItems.jsx';

export default function Menu ({nameGastro, sloganGastro}) {

  const food = items.filter(items =>
    items.type === 'food'
  );
  
  const ListFood = food.map(item =>
    <div key={item.id}>
      <div >
      <MenuItem 
                id={ item.id}
                type={ item.type}
                name={ item.name}
                desc={ item.desc}
                price={ item.price}
                img={ item.img}
              />
      </div>
    </div>
  );

const drinks = items.filter(items =>
  items.type === 'drinks'
);

const ListDrinks = drinks.map(item =>
  <div key={item.id}>
    <div >
    <MenuItem 
              id={ item.id}
              type={ item.type}
              name={ item.name}
              desc={ item.desc}
              price={ item.price}
              img={ item.img}
            />
    </div>
  </div>
  );
  return (
  <>
<div className="text-center pb-4">
            <h2 className=" text-3xl font-bold pt-6 pb-2 text-slate-700">{nameGastro}</h2>
            <p className=" text-slate-700">{sloganGastro}</p>
          </div>  <div>
    <h2 className=" text-2xl font-bold pt-4 text-slate-700 text-center">Food</h2>
  </div>
  <div className="flex flex-wrap px-36 py-4 gap-5 justify-center">{ListFood}</div>
  <div>
    <h2 className=" text-2xl font-bold pt-4 text-slate-700 text-center">Drinks</h2>
  </div>
  <div className="flex flex-wrap px-36 py-4 gap-5 justify-center">{ListDrinks}</div>
  </>
  )      
}

Menu.propTypes = {
  nameGastro : PropTypes.node,
  sloganGastro : PropTypes.node,
  nameFood : PropTypes.node,
  nameDrinks : PropTypes.node
}

