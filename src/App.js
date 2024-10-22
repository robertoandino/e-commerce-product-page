import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Automobiles from './frontend/components/Automobiles';
import Header from './frontend/components/Header';
import Footer from './frontend/components/Footer';
import Home from './frontend/components/Home';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/automobiles" element={<Automobiles/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
