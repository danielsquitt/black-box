import React from 'react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Menu from '../componets/menu';

function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  );
}

export default App;
