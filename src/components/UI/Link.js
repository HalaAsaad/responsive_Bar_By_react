import React from 'react';
import classes from './Link.module.scss';
import { NavLink } from 'react-router-dom'


const NavigationItem = ({link,children,exact}) => {
   const handelClick = () => {
       window.location.hash = `${link}`;
   }
    return ( 
    <li className={classes.li}>
      {/*  <a hash={link} onClick={handelClick} className={classes.a}>
            {children}
    </a> */}
        <NavLink 
        exact
        onlyActiveOnIndex
        to={link}
        onClick={handelClick} 
        className={classes.a}
        activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}> {children} </NavLink>
    </li>
     );
}
 
export default NavigationItem ;