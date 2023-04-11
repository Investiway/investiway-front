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
import Header from './containers/layout/header';
import Footer from './containers/layout/footer';
import AsideMenu from './containers/layout/asideMenu';
import SignIn from './containers/auth/signin';
//#endregion
import { AppState } from './stores/store';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './components/share/loading';
import PrivateRoutes from './routes/privateRoutes';
import { setLoading } from './stores/common';
import { setToken, setUser } from './stores/user';
import request from './services/request';
import { ToastContainer } from 'react-toastify';
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userStore = useSelector((state: AppState) => state.user);
  const loading = useSelector((state: AppState) => state.common.isLoading);
  const authenticated = !!useMemo(() => userStore.currentUser, [userStore.currentUser]);
  // const authenticated = true;

  const getUser = () => {
    if (userStore.currentUser) return;
    dispatch(setLoading(true));
    request
      .get('/auth/access')
      .then((res) => {
        if (res.data) {
          dispatch(setUser(res.data));
        }
      })
      .catch((error) => {
        if (error.response.data.statusCode === 401) {
          request
            .get('/auth/refresh')
            .then((response) => {
              dispatch(setToken(response.data));
            })
            .catch(() => {
              navigate('/auth');
              dispatch(setToken(''));
            });
        }
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  useEffect(() => {
    getUser();
  }, []);

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
          <></>
        )}
        <Routes>
          <Route path="/auth" element={<SignIn />} />
          <Route path="/sign-up" element={<>Sign</>}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
