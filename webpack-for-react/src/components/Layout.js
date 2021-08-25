import React from 'react';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';
import img from '../images/pic.jpg'

const Layout = ({ children }) => {

  return (
    <Container>
      <Header as="h1" className="h1">
        webpack-for-react
      </Header>
      {children}
      <Divider />
      <div className="pull-right">
        <img className="author-img" height="100px" width="100px" src={img} alt="author" />
        <p>
        Made with <Icon name="heart" color="red" /> by Usman haroon
      </p>
      </div>
    </Container>
  );
};

export default Layout;