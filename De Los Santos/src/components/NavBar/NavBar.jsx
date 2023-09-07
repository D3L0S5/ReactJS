import { Typography } from '@mui/material';
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

    return ( <AppBar className='nav'>
                <toolbar className="toolbar-nav">
                    <div><img src="./" alt="Logo" /></div>
                    <button className='botones-nav'>Inicio</button>
                    <button className='botones-nav'>Productos</button>
                    <button className='botones-nav'>Nosotros</button>
                    <button className='botones-nav'>Contacto</button>
                    <CartWidget/>
                </toolbar>
    </AppBar>);
}

export default NavBar;