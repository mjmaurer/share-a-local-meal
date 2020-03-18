import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import GitHubButton from "react-github-btn";
import Layout from "../components/Layout";

class Contact extends React.Component {
  render() {
    const { resume, portfolio, siteMetadata } = this.props.data;

    return (
      <Layout>
        <Helmet>
          <meta
            property="og:description"
            content={siteMetadata.contactDescription}
          />
          <title>Contact</title>
          <meta
            property="og:title"
            content="Invisible Hands Deliver | Contact"
          />
          {/* <meta
            property="og:url"
            content=""
          /> */}
          <meta property="og:type" content="article" />
        </Helmet>
        <ContactContainer>
          <div>
            <ContactSection>
              {documentToReactComponents(siteMetadata.contactAboutMe.json)}
            </ContactSection>
            <ContactSection>
              <p>
                <a href="mailto:hello@nickbmason.com">hello@nickbmason.com</a>
              </p>
              <p>859.638.0795</p>
              <p>
                <a href="https://www.instagram.com/nickbmason/">@nickbmason</a>
              </p>
            </ContactSection>
            <ContactSection>
              <ContactButton href={resume.localFile.localURL}>
                Resume PDF
              </ContactButton>
              <ContactButton href={portfolio.localFile.localURL}>
                Portfolio PDF
              </ContactButton>
            </ContactSection>
          </div>
          <Maurer>
            <MaurerText>Website by Michael Maurer</MaurerText>
            <GitHubButton
              href="https://github.com/nickbmason-coder/nickbmason"
              aria-label="View source on GitHub"
            >
              View Source
            </GitHubButton>
          </Maurer>
        </ContactContainer>
      </Layout>
    );
  }
}

export default Contact;

export const pageQuery = graphql`
  query {
    ...SiteMetadata
    ...ResumeFragment
    ...PortfolioFragment
  }
`;
