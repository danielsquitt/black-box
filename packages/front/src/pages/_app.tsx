import React from 'react';

function App(props) {
  const { Component, pageProps, router } = props;
  return (
    <Component {...pageProps} />
  );
}

export default App;
