import './NavBar.css';
import CartWidget from '../CartWidget/Cartwidget';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to='/'>
                <h1 className='titulo'>
                    Pesca Bariloche
                </h1>
            </Link>

            <div className='Categories'>
                <NavLink to={`/category/senuelo`} className={({ isActive}) => isActive ? 'activeOption' : 'option'}>Señuelos</NavLink>
                <NavLink to={`/category/reel`} className={({ isActive}) => isActive ? 'activeOption' : 'option'}>reels</NavLink>
                <NavLink to={`/category/cana`} className={({ isActive}) => isActive ? 'activeOption' : 'option'}>cañas</NavLink>
                <CartWidget />
            </div>
            


        </nav>
    )
}

export default NavBar