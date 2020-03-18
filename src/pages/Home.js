import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <Helmet>
        {/* <meta name="description" content={siteMetadata.contactDescription} />
          <meta
            property="og:description"
            content={siteMetadata.contactDescription}
          /> */}
        <meta property="og:title" content="Invisible Hands Deliver" />
        {/* <meta property="og:url" content="" /> */}
        <meta property="og:type" content="website" />
        {/* <meta
            property="og:image"
            content={`https://www.nickbmason.com${image.localFile.image.fixed.src}`}
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" /> */}
      </Helmet>
      <div>Index</div>
    </Layout>
  );
}
