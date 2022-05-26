 // File: Creates a React Component 
 
 import React from 'react';
 import TravelEntry from './components/TravelEntry'
 import TravelLog from './components/TravelLog'
 import './style.css'; 

 // includes JSX
 const App = () => (
     <div className='wow'>
         <h1>Travel Journal</h1>
         <div className="app">
         <TravelEntry/>
         <TravelLog/>
         </div>
     </div>
 );

 export default App;