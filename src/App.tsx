import React from 'react';
//region [Import styles]
import './tailwind.css'
import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from "./styles/theme";
//#endregion
import stores from "./stores/store";
import { Provider } from 'react-redux'
import Main from './containers/layout/main'
import Header from "./containers/layout/header";
import Footer from "./containers/layout/footer";
function App() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
            <Header />
            <Provider store={stores}>
                <Main />
            </Provider>
            <Footer />
        </div>
    </ThemeProvider>
  );
}

export default App;
