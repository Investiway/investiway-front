import React, {useEffect ,useState} from 'react';
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
import SignIn from "./containers/auth/signin";
//#endregion
import { AppState } from "./stores/store";
import { useDispatch, useSelector } from 'react-redux'
import Loading from "./components/share/loading";
import {useGetUserMutation} from "./stores/api";
import PrivateRoutes from "./routes/privateRoutes";
import { setLoading } from "./stores/common";
function App() {

    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [authenticated, setAuthenticated] = useState(false);
    const routesNotAuth = [
        '/sign-up', '/auth', '/404',
    ]
    const userStore = useSelector((state: AppState) => state.user)
    const [ getUser, { data, isLoading, error }] = useGetUserMutation()
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token && !userStore.currentUser) {
            setAuthenticated(true)
            // dispatch(setLoading(isLoading)
            getUser(undefined).then(
                response => {
                    if (data) {
                        setAuthenticated(true);
                    }
                }
            )
                .finally(() => {
                    // dispatch(setLoading(false))
                })
        } else if (routesNotAuth.includes(location.pathname)) {
            setAuthenticated(false)
        }
    }, [location.pathname]);

    useEffect(() => {
        dispatch(setLoading(isLoading))
        console.log(isLoading)
    }, [isLoading]);

    const loading = useSelector((state:AppState) => state.common.isLoading);

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        { loading ? (<Loading />) : <></> }
        {authenticated
            ?
            (<div className="App tw-grid tw-grid-cols-[250px,1fr]">
                <AsideMenu/>
                <div className="tw-w-full">
                    <Header/>
                    <PrivateRoutes isAuthenticated={authenticated}/>
                    <Footer/>
                </div>
            </div>)
            : (
                <Routes>
                    <Route path="/auth" element={<SignIn/>} />
                    <Route path="/sign-up" element={<>Sign</>}></Route>
                </Routes>
            )}
    </ThemeProvider>
  );
}

export default App;
