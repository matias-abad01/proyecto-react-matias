import logo from '../../assets/imglogo.png'
import './Navbar.css';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const categories = [
        {name:"electronics", id:0, route: "/category/electronics"},
        {name:"jewelery", id:1, route: "/category/jewelery"},
        {name:"men's clothing", id:2, route: "/category/men's clothing"},
        {name:"women's clothing", id:3, route: "/category/women's clothing"}
    ]
    return (
        <header>
            <div className="menu">
                <Link to="/" className='logo'> <img src={logo} alt="shopmen" /></Link>
                <nav className="links">
                    {categories.map((a)=><NavLink key={a.id} to={a.route}>{a.name}</NavLink>)} 
                </nav>
                <Link to="/cart"><CartWidget /></Link>
                <div className="boton">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px"  viewBox="0 0 45 29" enable-background="new 0 0 45 29">
                        <g>
                        <line fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" x1="1.5" y1="4.5" x2="44" y2="4"/>
                        </g>
                        <g>
                        <line fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" x1="1.3" y1="14.8" x2="43.8" y2="14.3"/>
                        </g>
                        <g>
                        <line fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" x1="1.3" y1="24.8" x2="43.8" y2="24.3"/>
                        </g>
                    </svg>
                </div>
            </div>    
        </header>
    );
}

export default Navbar;