import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import RightArrow from '../images/right-arrow.svg'
import Layout from './Layout';


import { Tooltip } from './ReactTooltip';

const Home = () => {
  return (
    <Layout>
      <Header as="h2">First Page</Header>
      <p className="">{process.env.TEST} World of React and Webpack!</p>
      <Link to="/dynamic">
        <span data-tip="Next" className="svg-icon">
          <RightArrow className="right-arrow"/>
        </span>
        <Tooltip />
      </Link>
    </Layout>
  );
};

export default Home;