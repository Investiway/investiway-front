import React, { useEffect, useMemo } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

//region [Import styles]
import './tailwind.css';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
//#endregion
//region [Import Components]
import Header from './layout/header';
import Footer from './layout/footer';
import AsideMenu from './layout/asideMenu';
import SignIn from './pages/auth/signin';
//#endregion
import { AppState } from './stores/store';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './components/share/loading';
import PrivateRoutes from './routes/privateRoutes';
import { setLoading } from './stores/common';
import { setUser } from './stores/user';
import { ToastContainer } from 'react-toastify';
import { GetUser } from './api/user';
function App() {
  //#region [Data]
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStore = useSelector((state: AppState) => state.user);
  const token = localStorage.getItem('token');
  const loading = useSelector((state: AppState) => state.common.isLoading);
  const authenticated = !!useMemo(() => userStore.currentUser, [userStore.currentUser]);
  //#endregion
  //#region [User]
  const getUser = () => {
    if (!token) return navigate('/auth');
    dispatch(setLoading(true));
    GetUser()
      .then((res) => {
        if (res.data) {
          dispatch(setUser(res.data));
          if (location.pathname === '/auth') navigate('/');
        }
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
  //#endregion
  //#region [Hook]
  useEffect(() => {
    getUser();
  }, [token]);
  //#endregion
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      {/*<CssBaseline />*/}
      <div className="tw-h-[100vh] tw-text-gray-300 tw-bg-black tw-shadow-lg tw-bg-opacity-70 tw-backdrop-blur-2xl">
        <Loading isLoading={loading} />
        {authenticated ? (
          <div className="App tw-grid tw-grid-cols-[250px,1fr]">
            <AsideMenu />
            <div className="tw-w-full">
              <Header />
              <PrivateRoutes isAuthenticated={authenticated} />
              <Footer />
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="/auth" element={<SignIn />} />
            <Route path="/" element={<SignIn />} />
          </Routes>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
