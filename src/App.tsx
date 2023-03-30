import React, {useEffect} from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'

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
import SignIn from "./containers/auth/signin";
//#endregion
import stores from "./stores/store";
import { Provider } from 'react-redux'
function App() {

    const location = useLocation()
    const navigate = useNavigate()
    function isAuthenticated() {
        return localStorage.getItem('token') !== null;
    }
    const routesNotAuth = [
        '/sign-up', '/auth', '/404',
    ]
    useEffect(() => {
        if (!isAuthenticated() && !routesNotAuth.includes(location.pathname)) navigate('/auth')
    }, [navigate])
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={stores}>
            {isAuthenticated()
                ?
                (<div className="App tw-grid tw-grid-cols-[250px,1fr]">
                    <AsideMenu/>
                    <div className="tw-w-full">
                        <Header/>
                        <Routes>
                            <Route path="/" element={<Home/>} />
                            <Route path="/statistics" element={<Statistics/>} />
                            <Route path="/plans" element={<Plans/>} />
                            <Route path="/note" element={<Notes/>} />
                        </Routes>
                        <Footer/>
                    </div>
                </div>)
                : (
                    <Routes>
                        <Route path="/auth" element={<SignIn/>} />
                        <Route path="/sign-up" element={<>Sign</>}></Route>
                    </Routes>
                )}
        </Provider>
    </ThemeProvider>
  );
}

export default App;
