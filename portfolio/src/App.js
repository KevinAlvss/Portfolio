import React from 'react';

import GlobalStyle from './style/global';


// components
import Top from './components/Top';
import Habilities from './components/Habilities';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <>
     <Top />
     <About />
     <Habilities />
     <Footer />

     <GlobalStyle />
    </>
  );
}

export default App;
