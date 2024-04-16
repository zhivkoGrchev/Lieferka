import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <>
    <Link to='impressum'>
      <p className="hover:text-teal-400 bg-slate-900 text-white text-center py-6">
        Impressum
      </p>
    </Link> 
    <div className='bg-slate-900 text-white text-center py-6'>
       &copy;2024 Lieferka.de 
    </div>
    </>
  )
}

export default Footer
