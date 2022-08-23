import React from 'react';
import './App.css';
import Navigaton from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';


function App() {
  return (
    <div className="App">
  
      <Navigaton />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*<FaceRecognition />*/}

    </div>
  );
}

export default App;
