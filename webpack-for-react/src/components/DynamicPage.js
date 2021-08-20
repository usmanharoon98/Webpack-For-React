import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import LeftArrow from '../images/left-arrow.svg'

const DynamicPage = () => {
  return (
    <Layout>
      <Header as="h2">Second Page</Header>
      <p>This page was loaded asynchronously!!!</p>
      <Link to="/">
        <span className="svg-icon">
        <LeftArrow className="left-arrow"/>
        </span>
      </Link>
    </Layout>
  );
};

export default DynamicPage;