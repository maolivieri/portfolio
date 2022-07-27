import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface Props {
  title?: string;
  keywords?: string;
  description?: string;
  children: any;
}

const Layout: React.FC<Props> = ({
  title,
  keywords,
  description,
  children
}) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link
          href="https://fonts.googleapis.com/css2?family=Harmattan:wght@400;700&family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&family=Yeseva+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>{children}</div>
    </div>
  );
};

Layout.defaultProps = {
  title: 'Matheus Olivieri',
  description: `Matheus Olivieri's portfolio`,
  keywords: 'developer, front-end, back-end, portfolio, frontend, webdeveloper'
};

export default Layout;
