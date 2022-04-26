import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000223;
  }
`;

export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
