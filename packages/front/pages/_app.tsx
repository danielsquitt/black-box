import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import Menu from '../componets/menu';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  main {
    margin-top: 66px;
    margin-left: 80px;
    padding: 0.5rem;
  }
`;

const theme = {
};

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Page</title>
        <link rel="icon" href="favicon-32x32.png" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Menu />
        <main>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
