import './App.css';
import NavBar from './Components/Nav';

import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './Components/Header';
import Container from './Components/Container';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import BookAppoinment from './Components/BookAppoinment'
import Contact from './Components/Contact';
function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Container />
            <BookAppoinment />
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            {/* <NavBar /> */}
            <h1>Hello About us page</h1>
          </>

        } />
        <Route path="/contact" element={
          <Contact />
        } />
      </Routes>

    </ChakraProvider>

  )
}




export default App;
