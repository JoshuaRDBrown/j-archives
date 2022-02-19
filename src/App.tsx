import React from 'react';
import './App.scss';
import NavBar from './Components/NavBar/NavBar';
import { FirebaseService } from './Services/FirebaseService';

const App: React.FC = () => {

  if(FirebaseService.instance.firebaseUserObject()) {
    return(
      <NavBar/>
    )
  }

  return(
    <div>login</div>
  )
}

export default App;
