import React, { createContext } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Review from './components/Review/Review';
import ManageInventory from './components/Inventory/ManageInventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Login from './components/Login/Login';
import Hook from './components/Hook/Hook';
import { PrivateRoute } from './components/Login/useAuth';
import Inventory from './components/Inventory/Inventory';

export const userContext = createContext();
function App() {
  const user = { name: 'hablu marka kotha barta', email: 'saifur@test.com' };
  return (
    <div className='App'>
      <userContext.Provider value={user.name}>
        <Header></Header>
        <Router>
          <Switch>
            <Route path='/shop'>
              <Shop></Shop>
            </Route>
            <Route path='/review'>
              <Review></Review>
            </Route>
            <Route path='/inventory'>
              <Inventory />
            </Route>
            <PrivateRoute path='/manageinventory'>
              <ManageInventory></ManageInventory>
            </PrivateRoute>

            <Route exact path='/'>
              <Shop></Shop>
            </Route>
            <Route path='/product/:productkey'>
              <ProductDetail></ProductDetail>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/hook'>
              <Hook></Hook>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
