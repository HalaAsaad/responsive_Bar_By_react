import React from 'react';
import classes from './SideDrawer.module.scss'
import DrawerToggleButton from './DrawerToggleButton';
import NavigationItem from '../UI/Link';

const SideDrawer = ({drawerClickHandler, sideDrawerOpen}) => {
    return ( 
        <nav className={sideDrawerOpen ? classes.side_drawer_show : classes.side_drawer_hide }>
                <div className={classes.toggle}>
                    <DrawerToggleButton click={drawerClickHandler} />
                </div>
                <ul className={classes.side_drawer_ul}>
                    <div onClick={drawerClickHandler} className={classes.nav}>
                        <NavigationItem link="/" >Home</NavigationItem>
                    </div>
                    <div onClick={drawerClickHandler} className={classes.nav}>
                        <NavigationItem link="/Contact" >Contact</NavigationItem>
                    </div>
                </ul>
        </nav>
     );
}
 
export default SideDrawer;