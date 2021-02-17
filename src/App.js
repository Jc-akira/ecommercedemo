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
     <Route exact path="/" component={Home} />  
     <Route exact path="/about" component={About} />  
     <Route  path="/shop" component={Shop} /> 
     <Route  path="/contact" component={Contact} /> 
   </Switch>

   </>
  );
}

export default App;
