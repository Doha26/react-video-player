import React from 'react';
import WBMPlayer from './WbnPlayer'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import  GlobalStyle from '../styles/GlobalStyle'

const App = () => (
  <BrowserRouter>
  <>
    <Switch>
      <Route exact path = "/" component = {WBMPlayer}/>
      <Route exact path = "/:activeVideo" component = {WBMPlayer}/>
    </Switch>
    <GlobalStyle/>
  </>
  </BrowserRouter>
)

export default App;