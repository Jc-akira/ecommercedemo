import React from 'react'
import {NavLink} from 'react-router-dom';
const Menu = () =>{
return(
<>
<div className='menurct'>

<NavLink exact activeClassName="active_class" to='/'>Home</NavLink>
<NavLink exact activeClassName="active_class" to='/about'>About us</NavLink>
<NavLink exact activeClassName="active_class" to='/shop'>Shop</NavLink>
<NavLink exact activeClassName="active_class" to='/contact'>Contact us</NavLink>
</div>
</>
);
}

export default Menu;