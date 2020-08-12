import productApi from 'api/productApi';
import SignIn from 'features/Auth/pages/SignIn';
import React, { Suspense, useEffect, useState, useRef } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import firebase from 'firebase';

const Photo = React.lazy(() => import('./features/Photo/index'));

// Configure Firebase.
const config = {
  apiKey: 'AIzaSyClEuBMS8feB6B_NbJ_eNbcVczPEzfN8tw',
  authDomain: 'lvt-photo-app.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);

function App() {
  const [productlist, setProductList] = useState([])
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unregisterAuthObservert = firebase.auth().onAuthStateChanged( async (user) => {
      if(!user) {
        console.log('user isn\'t login');
        return;
      }
      console.log("name: ", user.displayName);
      const token = await user.getIdToken();
      console.log("token:", token);
    });

    return () => unregisterAuthObservert();
  }, [])

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page:1,
          _limit: 10
        }
        const response = await productApi.getAll(params);
        console.log(response);
        setProductList(response.data)
      } catch (e) {
        console.log(e)
      }
    }
    fetchProductList();
  }, []);

  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ... </div>}>
        <BrowserRouter>
          <Header/>
                    
          <Switch>
            <Redirect exact from='/' to='/photos' />
            <Route path="/photos" component={Photo}/>
            <Route path="/sign-in" component={SignIn}/>
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
