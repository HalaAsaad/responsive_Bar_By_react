import React, { useState }  from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import classes from './App.module.scss';
import { BrowserRouter as Router, Switch, Route , HashRouter} from 'react-router-dom';
import Contact from './container/Contact';
import Home from './container/Home';

function App() {
 const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerClickHandler = () => {
    setSideDrawerOpen(prevState => !prevState)
 }
  
  return (
  <HashRouter>
    <div className={classes.App}>
      <Toolbar drawerClickHandler={drawerClickHandler} />
      <SideDrawer sideDrawerOpen={sideDrawerOpen} drawerClickHandler={drawerClickHandler}/>
      <main className={classes.main}>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Contact" component={Contact} />
      </Switch>
      </main>
    </div>
  </HashRouter>
  );
}

export default App;
