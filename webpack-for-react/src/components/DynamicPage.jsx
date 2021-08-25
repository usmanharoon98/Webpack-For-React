import React, {Suspense} from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import LeftArrow from '../images/left-arrow.svg';
import { Tooltip } from './ReactTooltip';

const DynamicPage = () => {
  return (
    <Suspense>
      <Layout>
        <Header as="h2">Second Page</Header>
        <p>This page was loaded asynchronously!!!</p>
        <Link to="/">
          <span data-tip="Previous" className="svg-icon">
          <LeftArrow className="left-arrow"/>
          </span>
          <Tooltip />
        </Link>
      </Layout>
    </Suspense>
  );
};

export default DynamicPage;