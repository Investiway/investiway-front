import React from 'react';
import { Routes, Route } from 'react-router-dom'

//region [Import styles]
import './tailwind.css'
import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from "./styles/theme";
//#endregion
//region [Import Components]
import Header from "./containers/layout/header";
import Footer from "./containers/layout/footer";
import AsideMenu from "./containers/layout/asideMenu";
import Home from "./containers/home";
import Statistics from "./containers/statistics";
import Plans from "./containers/plans";
import Notes from "./containers/notes";
//#endregion
import stores from "./stores/store";
import { Provider } from 'react-redux'
function App() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={stores}>
            <div className="App tw-grid tw-grid-cols-[250px,1fr]">
                <AsideMenu/>
                <div>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/statistics" element={<Statistics/>} />
                        <Route path="/plans" element={<Plans/>} />
                        <Route path="/note" element={<Notes/>} />
                    </Routes>
                    <Footer/>
                </div>
            </div>
        </Provider>
    </ThemeProvider>
  );
}

export default App;
