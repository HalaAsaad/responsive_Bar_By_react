import React from 'react';
import classes from './Toolbar.module.scss'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import NavigationItem from '../UI/Link';

const Toolbar = ({drawerClickHandler}) => {
    return ( 
        <header className={classes.toolbar}>
            <nav className={classes.toolbar_nav}>
                <div className={classes.container_Toggle_Button}>
                    <DrawerToggleButton click={drawerClickHandler} />
                </div>
                <div className={classes.toolbar_logo}>
                    <a className={classes.toolbar_logo_a} href='/'>The Logo</a>
                </div>
                <div className={classes.spacer}></div>
                <div className={classes.toolbar_nav_items}>
                    <ul className={classes.toolbar_nav_items_ul}>
                        <NavigationItem link="/" exact >Home</NavigationItem>
                        <NavigationItem link="/Contact" exact>Contact</NavigationItem>
                    </ul>
                </div>
            </nav>
        </header>
     );
}
 
export default Toolbar;