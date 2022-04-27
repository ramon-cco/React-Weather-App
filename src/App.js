import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
import Logo from './components/Logo/Logo';
import Title from './components/Title/Title';

function App() {
 return (
   <div className="App">
     <header className="App-header">
     < Logo />
     < Title />
     </header>
     <main>
       <Forecast />
     </main>
     <footer>
       App de estudo RamonTI
     </footer>
   </div>
 );
}
export default App;