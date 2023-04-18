import React from "react";
import PropTypes from "prop-types";

// Components
import Layout from "../../components/common/Layout/Layout";
import Container from "../../components/common/Layout/Container";
import Form from "../../components/common/Form/Form";
import H1 from "../../components/common/Text/H1";
import H2 from "../../components/common/Text/H2";
import ImageContainer from "../../components/common/Layout/ImageContainer";

const ResourcePage = ({ title, subtitle, imageSrc, videoSrc, onSubmit }) => {
  return (
    <main className="mt-28">
      <Layout>
        <Container spacing={"w-1/2"}>
          <H1>{title}</H1>
          <H2>{subtitle}</H2>

          {imageSrc && (
            <ImageContainer>
              <img className="m-4" src={imageSrc} alt={title} />
            </ImageContainer>
          )}
          {videoSrc && <video src={videoSrc} controls />}
          <p className="w-3/4 lg:w-1/2">
            This is a test of fdsafsnfdsanfds fds fd saf ds fds fds afd saf ds
            fd safd saf dsaf dsf dsafd sf dsfds a multiline text area.
          </p>
          <Form onSubmit={onSubmit} />
        </Container>
      </Layout>
    </main>
  );
};

ResourcePage.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  videoSrc: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default ResourcePage;
