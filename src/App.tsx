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
import AsideMenu from "./containers/layout/asideMenu";
function App() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={stores}>
            <div className="App tw-grid tw-grid-cols-[250px,1fr]">
                <AsideMenu/>
                <div>
                    <Header />
                        <Main />
                    <Footer />
                </div>
            </div>
        </Provider>
    </ThemeProvider>
  );
}

export default App;
