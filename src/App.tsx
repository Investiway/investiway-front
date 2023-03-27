import React from 'react';
import Main from './containers/layout/main'
import Header from "./containers/layout/header";
import Footer from "./containers/layout/footer";
import './tailwind.css'
import './index.css'
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
