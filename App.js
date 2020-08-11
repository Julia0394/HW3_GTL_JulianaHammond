import React from 'react';
import logo from './logo.svg';
import './App.css';
import './global.css';
import './layout.css';
import './sample-wallpaper.css';
import './components.css';
import TheText from './Text';
import Navb from './navb';
import Wallpaper from './wallpaper'
import venom1 from './img/venom-1.jpg'
import hulk from './img/hulk-1.jpg'
import venom2 from './img/venom-2.jpg'


function App() {
  return (
    <div>
      <Navb/>
      <br/>
      <br/>
      <header className = 'header'>
        <div className = 'container'>
        <TheText/>

        <div className = 'sample-wallpaper'>
          <Wallpaper pic = {venom1} />
          <Wallpaper pic = {hulk} />
          <Wallpaper pic = {venom2} />

        </div>

        </div>

      </header>

    </div>
  );
}

export default App;
