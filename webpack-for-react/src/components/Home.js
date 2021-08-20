import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import RightArrow from '../images/right-arrow.svg'
import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <Header as="h2">First Page</Header>
      <p className="">Hello World of React and Webpack!</p>
      <Link to="/dynamic">
        <span className="svg-icon">
          <RightArrow className="right-arrow"/>
        </span>
      </Link>
    </Layout>
  );
};

export default Home;