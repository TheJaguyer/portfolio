import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Jarrett Guyer</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <body className="overflow-hidden font-mono">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
