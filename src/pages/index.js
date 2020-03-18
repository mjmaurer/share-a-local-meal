import React from "react";
import { graphql } from "gatsby";

import { Helmet } from "react-helmet";
import DesignPost from "../components/DesignPost";
import PostsContainer from "../components/PostsContainer";
import Layout from "../components/Layout";

class Index extends React.Component {
  render() {
    const { allContentfulDesignPost, siteMetadata } = this.props.data;

    return (
      <Layout>
        <Helmet>
          <meta name="description" content={siteMetadata.contactDescription} />
          <meta
            property="og:description"
            content={siteMetadata.contactDescription}
          />
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
        <PostsContainer
          initialPosts={siteMetadata.designPostsToShow}
          maxPosts={allContentfulDesignPost.totalCount}
          name="Designwork"
          renderPost={post => <DesignPost key={post.id} post={post} />}
        >
          {posts}
        </PostsContainer>
      </Layout>
    );
  }
}

export default Index;
