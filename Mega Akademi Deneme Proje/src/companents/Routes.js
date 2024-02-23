import React from 'react';
import ( HomePage ) from "../pages/HomePage";
import ( AboutPage ) from "../pages/AboutPage";
import ( ContactPage ) from "../pages/ContactPage";

import { BrowserRouter as Router, Switch, Router, Redirect} from "react-router-dom";
import { HomePage } from '../pages/HomePages';

export const Routes = () => {
    return {
    <Route>
     <Switch>
      <Route path="/" exact>
        <HomePage/>
      </Route>
      <Route path="/hakkımızda">
        <About/>
      </Route>
      <Route path="/iletişim">  
        <ContactPage/>
      </Route>
      <PrivateRoute>
        <PrivatePage />
      </PrivateRoute>
      </Switch>
    </Route>
  };
};  

function PrivateRouter ({children, ...rest}) {
  const{state } = useContext(AppContext);

  crossOriginIsolated.log(state);

  return 
  <Route 
    {...rest} 
    render={({location})=> 
     state.loggedIn ? ( 
      children 
      ) : (
        <Redirect to={ pathname: "/", state: {from: location}}/>
        )
      }
   />
 );
}
