import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Passions from "./components/Passions";
import AddPassion from "./components/AddPassion";
import EditPassion from "./components/EditPassion";
import {Provider} from 'react-redux'
import store from "./Store";
function App() {
  return (
   <Provider store={store}>
    <Router>
     <div className="App">
      <Navbar/>
       <Switch>
         <Route exact path="/" component={Passions}/>
         <Route exact path="/passion/add" component={AddPassion}/>
         <Route exact path="/passion/edit/:phone" component={EditPassion}/>
       </Switch>
     </div>
    </Router>
   </Provider>
  );
}

export default App;
