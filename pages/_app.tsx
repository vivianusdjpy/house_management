// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyles from '../styles/globals'; // Import your global styles
import { StyledJsxRegistry } from '@/components'; // Import StyledJsxRegistry component

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <StyledJsxRegistry>
        <Component {...pageProps} />
      </StyledJsxRegistry>
    </>
  );
}

export default MyApp;
