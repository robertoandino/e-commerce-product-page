import React from 'react';
import ProductPage from './frontend/components/ProductPage';
import Header from './frontend/components/Header';
import Footer from './frontend/components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <ProductPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
