import React from "react";
import PropTypes from "prop-types";

// Components
import Layout from "../../components/common/Layout/Layout";
import Container from "../../components/common/Layout/Container";
import Form from "../../components/common/Form/Form";

const ResourcePage = ({ title, subtitle, imageSrc, videoSrc, onSubmit }) => {
  return (
    <main className="mt-28">
      <Layout>
        <Container spacing={"w-1/2"}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          {imageSrc && <img src={imageSrc} alt={title} />}
          {videoSrc && <video src={videoSrc} controls />}
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
