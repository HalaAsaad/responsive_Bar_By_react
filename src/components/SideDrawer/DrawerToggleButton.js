import React from 'react';
import classes from './DrawerToggleButton.module.scss'

const DrawerToggleButton = ({click}) => {
    return ( 
        <button className={classes.toggle_button} onClick={click}>
            <div  className={classes.toggle_button_line} />
            <div  className={classes.toggle_button_line} />
            <div  className={classes.toggle_button_line} />
        </button>
     );
}
 
export default DrawerToggleButton;