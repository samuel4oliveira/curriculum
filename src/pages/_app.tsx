import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import '~/styles/globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>

      <Component {...pageProps} />
    </>
  );
}
