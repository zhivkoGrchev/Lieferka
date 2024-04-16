//import GastroItem from "./GastroItem"
import PropTypes from 'prop-types'
//import { items } from './BeelitzGastroData.jsx';

export default function City ({nameCity, slogan}) {

  /*
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
  */  

  return (
        <>
        <div className="text-center drop-shadow-lg">

          <div className="text-center pb-4">
            <h2 className=" text-3xl font-bold pt-6 pb-2 text-slate-700">{nameCity}</h2>
            <p className=" text-slate-700">{slogan}</p>
          </div>

          <div className=" text-2xl font-bold pt-1 pb-2 text-slate-700">Lieferservice für Speisen und Getränke</div>
          <div className=" text-1xl font-bold pt-1 pb-2 text-slate-700">(Alle Restaurants, Burger, Pizza, Döner, usw.)</div>
          <div className=" text-1xl font-bold pt-1 pb-2 text-pink-500">Lieferzeiten ab 15.04.2024 bis 21.04.2024</div>
          <div>
            <p><strong>Montag:</strong> ab 17:00 Uhr bis 23:00 Uhr</p>
            <p><strong>Dienstag:</strong> ab 18:00 Uhr bis 24:00 Uhr</p>
            <p><strong>Mittwoch:</strong> ab 17:00 Uhr bis 24:00 Uhr</p>
            <p><strong>Donnerstag:</strong> Keine Lieferung</p>
            <p><strong>Freitag:</strong> Keine Lieferung</p>
            <p><strong>Samstag:</strong> ab 22:00 Uhr bis 01:00 Uhr Uhr</p>
            <p><strong>Sonntag:</strong> ab 21:00 Uhr bis 01:00 Uhr</p>
          </div>
          <div className=" text-1xl font-bold pt-1 pb-2 text-teal-400">*Zurzeit haben wir jede Woche andere Lieferzeiten</div>
          <div className=" text-1xl font-bold pt-1 pb-2 text-slate-700">Telefon oder WhatsApp 01525 7539557</div>
          <div className=" text-1xl pt-1 pb-2 text-slate-700">*Die Lieferkosten innerhalb der Stadt Saalfeld betragen <strong>5€</strong>, außerhalb der Stadt plus 1€ pro 1km.</div>

          {/*<div className="flex flex-wrap px-36 py-4 gap-5 justify-center">{ListGastro}</div>*/}
        </div>
        </>
  )
}

City.propTypes = {
  nameCity : PropTypes.node,
  slogan : PropTypes.node,
}


