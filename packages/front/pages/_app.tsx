import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { defaults } from 'react-sweet-state';
import Menu from '../componets/menu';
import theme from '../lib/theme';

defaults.devtools = true;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    font-family: 'Segoe UI';
    font-size: 18px;
  }
  main {
    margin-top: ${theme.size.navbar};
    margin-left: ${theme.size.sidebar_collapse};
    padding: 0.5rem;
  }
  body {
    background-color: ${theme.color.main.background};
    color: ${theme.color.main.color}
  }
`;

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
