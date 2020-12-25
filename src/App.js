import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Produtos from './Components/Produtos';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contato from './Components/Contato';
import Produto from './Components/Produto';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Produtos />}/>
              <Route exact path="/produto/:id" element={<Produto />}/>
              <Route exact path="/contato" element={<Contato />}/>
            </Routes>
          </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;