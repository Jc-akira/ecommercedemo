import React from 'react';
import{Route, Switch} from 'react-router-dom';
import About from "./About";
import Shop from "./Shop";
import Contact from "./Contact";
import Menu from "./Menu";
import Home from "./Home";
const App = () => {
  return(
   <>
   <Menu />
   <Switch>
     <Route exact path="/ecommercedemo" component={Home} />  
     <Route exact path="/ecommercedemo/about" component={About} />  
     <Route  path="/ecommercedemo/shop" component={Shop} /> 
     <Route  path="/ecommercedemo/contact" component={Contact} /> 
   </Switch>

   </>
  );
}

export default App;
