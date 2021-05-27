import { BrowserRouter,Switch, Route,Link } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import MainPage from './Component/mainPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateDisplay from './Component/PrivateDisplay';
import Private from './Component/Private';
import Research from './Component/Research';
import Clinic from './Component/Clinic';


function App() {
  return (
    <BrowserRouter>
      <div className="wrapper login-wrapper">
        <Switch>
          <Route path = "/" exact component={MainPage} />
          <Route path = "/Private" exact component={Private} />
          <Route path = "/PrivateDisplay" exact component={PrivateDisplay} />
          <Route path = "/Research" exact component={Research} />
          <Route path = "/Clinic" exact component={Clinic} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
