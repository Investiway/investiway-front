import React from 'react';
import { Provider } from 'react-redux'
import Main from './containers/layout/main'
import Header from "./containers/layout/header";
import Footer from "./containers/layout/footer";
import './tailwind.css'
import './index.css'
import stores from "./stores/store";
function App() {
  return (
    <div className="App">
        <Header />
        <Provider store={stores}>
            <Main />
        </Provider>
        <Footer />
    </div>
  );
}

export default App;
