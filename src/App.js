import React, { Component } from 'react';
import { Container, Image, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './App.css';
import logo from './logo.png';
import Routes from './Routes';

const Navigation = () => <nav>
  <div className='logo-title'>
    <Image src={logo}
           size='tiny'
           verticalAlign='middle'
           centered={true}
    />
    <p id='title' align='center'>
      <Link to='/' >Ethereum Account Browser</Link>
    </p>
  </div>
</nav>;

class App extends Component {
  render() {
    return (
      <Container>
        <Navigation/>
        <Divider/>
        <Routes/>
      </Container>
    );
  }
}

export default App;
