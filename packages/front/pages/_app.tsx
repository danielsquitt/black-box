import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { defaults } from 'react-sweet-state';
import dynamic from 'next/dynamic';
import { UserProvider, getSession } from '@auth0/nextjs-auth0';
import { NextPageContext } from 'next';
import { IncomingMessage, ServerResponse } from 'http';
import theme, { GlobalStyle } from '../lib/theme';

defaults.devtools = true;

const LoadData = dynamic(() => import('../componets/LoadData'), { ssr: false });

function App({ Component, pageProps, initialUser }: AppProps) {
  return (
    <UserProvider>
      <Head>
        <title>BlackBox</title>
        <link rel="icon" href="favicon-32x32.png" />
      </Head>
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <LoadData initialUser={initialUser}>
            <Component {...pageProps} />
          </LoadData>
        </ThemeProvider>
      </>
    </UserProvider>
  );
}

App.getInitialProps = async ({ ctx }: { ctx: NextPageContext }) => {
  if (ctx.req && ctx.res) {
    const session = await getSession(ctx.req as IncomingMessage, ctx.res as ServerResponse);

    return {
      initialUser: session?.user,
    };
  }
  return {
    initialUser: undefined,
  };
};

export default App;
