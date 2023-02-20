import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { CustomLoader } from './Loader.styled';

const Loader = () => {
  return (
    <CustomLoader>
      <InfinitySpin width="200" color="#4fa94d" />
    </CustomLoader>
  );
};

export default Loader;
