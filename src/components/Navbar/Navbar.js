import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar=() => {

    const [menu, setMenu] = useState("Shop");
    const {getTotalcartItems} = useContext(ShopContext);

    return (
        <div className='navbar'>
            <div className='nav-logo'>
            <Link style={{textDecoration:'none'}} to={'/'}><img src={logo} alt='logo' /></Link>
                <Link style={{textDecoration:'none'}} to={'/'}><p>SHOPPER</p></Link>
            </div>
            <div className='nav-menu'>
                <ul>
                    <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>  {menu === "Shop" ? <hr/> : ''}</li>
                    <li onClick={()=>{setMenu("Men")}}><Link style={{textDecoration:'none'}} to='/Men'>Men</Link> {menu === "Men" ? <hr/> : ''}</li>
                    <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration:'none'}} to='/Women'>Women</Link> {menu === "Women" ? <hr/> : ''}</li>
                    <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:'none'}} to='/Kid'>Kids</Link> {menu === "Kids" ? <hr/> : ''}</li>
                </ul>
            </div>
            <div className='nav-login'>
            <Link style={{textDecoration:'none'}} to='/login'><button>Login</button></Link>
            <Link style={{textDecoration:'none'}} to='/cart'><img src={cart} alt='cart-logo' /></Link>
                <div className='nav-cart-count'>{getTotalcartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar;
