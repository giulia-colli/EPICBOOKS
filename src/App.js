import React from 'react';
import MyNav from './MyNav';
import Welcome from './Welcome';
import MyFooter from './MyFooter';
import AllTheBooks from './AllTheBooks';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import myBackground from './sfondo-horror.webp';


function App() {
  const appStyle ={
    backgroundImage: `url(${myBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  };
  
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}

export default App;

