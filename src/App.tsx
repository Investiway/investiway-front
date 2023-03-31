import React, {useCallback, useEffect, useMemo} from 'react';
import {Routes, Route, useLocation, useNavigate } from 'react-router-dom'

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
import SignIn from "./containers/auth/signin";
//#endregion
import stores, { AppState } from "./stores/store";
import { useDispatch, useSelector } from 'react-redux'
import Loading from "./components/share/loading";
import PrivateRoutes from "./routes/privateRoutes";
import { setLoading } from "./stores/common";
import {setUser} from "./stores/user";
import request from "./services/request";
import { Provider } from 'react-redux'
function App() {

    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userStore = useSelector((state: AppState) => state.user)
    const loading = useSelector((state:AppState) => state.common.isLoading);
    const authenticated = !!useMemo(() => userStore.currentUser, [userStore.currentUser]);

    const getUser = () => {
        if (userStore.currentUser) return
        dispatch(setLoading(true))
        request.get('/auth/access')
            .then(res => {
                if (res.data) {
                    dispatch(setUser(res.data))
                }
            })
            .catch(() => {
                navigate('/auth')
            })
            .finally(() => {
                dispatch(setLoading(false))
            })
    }
    const fetchAuth = useCallback(() => {
        console.log(authenticated)
    }, [authenticated])

    fetchAuth()
    useEffect(() => {
        getUser()
    }, []);


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Loading isLoading={loading}/>
            {authenticated ? <div className="App tw-grid tw-grid-cols-[250px,1fr]">
                <AsideMenu/>
                <div className="tw-w-full">
                    <Header/>
                    <PrivateRoutes isAuthenticated={authenticated}/>
                    <Footer/>
                </div>
            </div> : <></>}
            <Routes>
                <Route path="/auth" element={<SignIn/>} />
                <Route path="/sign-up" element={<>Sign</>}></Route>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
