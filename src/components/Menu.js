import React from 'react';
import Icon from 'react-fontawesome';

import { Link } from "react-router-dom";

const Menu = () => (
    <div className="MenuApp"> 
        <Link className="MenuItem" to="/">
        <Icon name="home"/>
        Home
        </Link>
        <Link className="MenuItem" to="/dashboard">
        <Icon name="area-chart"/>
        Dashboard
        </Link>
    </div>
);
  
export default Menu;