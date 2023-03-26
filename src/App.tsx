import React from 'react';
import './App.css';
import Main from './containers/layout/main'
import Header from "./containers/layout/header";
import Footer from "./containers/layout/footer";
function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
