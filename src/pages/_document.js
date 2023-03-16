import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Jarrett Guyer</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <body className="min-h-[15rem] min-w-[27.5rem] overflow-hidden font-mono">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
