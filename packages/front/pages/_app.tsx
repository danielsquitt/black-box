import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { defaults } from 'react-sweet-state';
import dynamic from 'next/dynamic';
import { UserProvider, getSession } from '@auth0/nextjs-auth0';
import { NextPageContext } from 'next';
import { IncomingMessage, ServerResponse } from 'http';
import { uniqueId } from 'lodash';
import Menu from '../componets/Layout';
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

const LoadData = dynamic(() => import('../componets/LoadData'), { ssr: false });

function App({ Component, pageProps, initialUser }: AppProps) {
  return (
    <UserProvider>
      <Head>
        <title>My Page</title>
        <link rel="icon" href="favicon-32x32.png" />
      </Head>
      <>
        <GlobalStyle />
        <LoadData initialUser={initialUser}>
          <ThemeProvider theme={theme}>
            <Menu />
            <main>
              <Component {...pageProps} />
            </main>
          </ThemeProvider>
        </LoadData>
      </>
    </UserProvider>
  );
}

App.getInitialProps = async ({ ctx }: { ctx: NextPageContext }) => {
  if (ctx.req && ctx.res) {
    const session = getSession(ctx.req as IncomingMessage, ctx.res as ServerResponse);

    return {
      initialUser: session?.user,
    };
  }
  return {
    initialUser: undefined,
  };
};

export default App;
