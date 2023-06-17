import {useLocation} from 'react-router-dom'
import './App.css'
const Greet = () => {
    const location = useLocation();
  return (
    <div className='centre'>
      <h1>Profile</h1>
       <p>Name: {location.state.name} </p>
       <p>Email: {location.state.email} </p>
    </div>
  )
}

export default Greet