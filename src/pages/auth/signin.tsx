import React, { useEffect } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ReactComponent as FacebookIcon } from '../../assets/icons/svg/facebook.svg';
import { ReactComponent as GoogleIcon } from '../../assets/icons/svg/google.svg';
import { useDispatch } from 'react-redux';
import { setToken } from '../../stores/user';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const token: string | null = searchParams.get('access_token');
    const refreshToken: string | null = searchParams.get('refresh_token');
    if (!!token && !!refreshToken) {
      dispatch(setToken({ token, refreshToken }));
      navigate('/');
    }
  }, []);
  const facebookAction = async () => {
    window.location.href = process.env.VITE_BASE_API_URL + '/auth/facebook';
  };
  const googleAction = async () => {
    window.location.href = process.env.VITE_BASE_API_URL + '/auth/google';
  };
  const signInTypes = [
    {
      iconElement: <GoogleIcon />,
      typeName: 'Google',
      action: () => googleAction(),
    },
    {
      iconElement: <FacebookIcon />,
      typeName: 'Facebook',
      action: () => facebookAction(),
    },
  ];
  return (
    <div className="tw-m-auto tw-text-center tw-w-1/4 tw-py-6">
      <div className="tw-flex tw-flex-col tw-space-y-4 tw-p-4">
        <Typography variant="h5">LOGIN</Typography>
        <TextField placeholder="Username" />
        <TextField placeholder="Password" />
        <Button variant="contained" className="!tw-bg-transparent !tw-text-white tw-shadow-2xl">
          Sign in
        </Button>
      </div>
      <div className="tw-space-x-4">
        {signInTypes.map((type) => (
          <Button key={type.typeName} variant="outlined" className="tw-space-x-4 tw-p-2" onClick={type.action}>
            {type.iconElement}
            <span className="tw-text-white">{type.typeName}</span>
          </Button>
        ))}
      </div>
      {/*<Link to="/sign-up">Signup</Link>*/}
    </div>
  );
};
export default SignIn;
