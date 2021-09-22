import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';
import LoginButton from './commponents/LoginButton';
import LogoutButton from './commponents/LogoutButton';
import {withAuth0} from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    console.log('app', this.props);
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
        <Link to="/About">about</Link>
        {this.props.isAuthenticated ? <LogoutButton/>:<LoginButton/>}
        <LogoutButton/>
      
      </Navbar>
    );
  }
}

export default withAuth0(Header);
