import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 /* COMPONENTES PROPIOS */
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';

function App() 
    {
      return(
      <>
        <Header/>,
        <About/>,
        <Experience/>,
        <Education/> 
      </>
      )
    }

export default App;
