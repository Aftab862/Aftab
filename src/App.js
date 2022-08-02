import './App.css';
import NavBar from './Components/Nav';

import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Header from './Components/Header';
import Container from './Components/Container';
import { Route, Routes } from 'react-router-dom';

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Container />
          </>
        } />
        <Route path="/about" element={
          <>
            {/* <NavBar /> */}
            <h1>Hello about page</h1>
          </>

        } />
        <Route path="/contact" element={
          <>
            {/* <NavBar /> */}
            <h1>Hello contact us page</h1>
          </>
        } />

      </Routes>



    </ChakraProvider>


  )
}




export default App;
