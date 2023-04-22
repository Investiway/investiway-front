import React from 'react';
import { ReactComponent as LogoLoadingIcon } from '../../assets/icons/svg/logo-loading.svg';

const Loading = ({ isLoading }: { isLoading: boolean }) => {
  return isLoading ? (
    <div className="tw-fixed tw-z-10 tw-h-[100vh] tw-w-full tw-inset-0 tw-flex tw-items-center tw-bg-black tw-bg-opacity-60 tw-backdrop-blur">
      <LogoLoadingIcon className="tw-m-auto tw-text-center tw-animate-spin tw-duration-1000" />
    </div>
  ) : (
    <></>
  );
};
export default Loading;
