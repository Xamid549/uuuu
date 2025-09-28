import { Link } from 'react-router-dom'
import HEader from '../../componets/Header/HEader'
import './about.css'
function About() {
  return (
    <div>
      <HEader></HEader>
      <div className="container">
        <Link to="/"button>Orqaga qaytish</Link>
      </div>  
    </div>
  )
}

export default About
