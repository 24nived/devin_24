import Head from 'next/head';

const CustomHead = ({ title = "Devin" }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="title"
        content="Devin - The Social Network for Developers"
      />
      <meta
        name="description"
        content="Discover creative websites and developers across the globe."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://Devin.com/" />
      <meta
        property="og:title"
        content="Devin - The Social Network for Developers"
      />
      <meta
        property="og:description"
        content="Discover creative websites and developers across the globe."
      />
      <meta property="og:image" content="https://imgur.com/e0p2qaM.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://driwwwle.com/" />
      <meta
        property="twitter:title"
        content="Devin - The Social Network for Developers"
      />
      <meta
        property="twitter:description"
        content="Discover creative websites and developers across the globe."
      />
      <meta property="twitter:image" content="https://imgur.com/e0p2qaM.png" />
    </Head>
  );
};

export default CustomHead;
