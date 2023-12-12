import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="text-center pt-20">
      <p className="text-5xl font-medium">Page not found!</p>
      <p className="p-20 font-bold">Go to the <Link to='/' className="underline">Homepage</Link>.</p>
    </div>
  )
}

export default NotFound
