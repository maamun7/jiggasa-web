import React  from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <div id="top-bar" className="full-width">
                <div className="col-lg-9 header-width">
                    <div className="logo">
                        <img src={ require('../../../public/assets/img/logo.jpg') } height={35}/>
                    </div>
                </div>
            </div>

            /*<Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">
                            Our Awesome Store
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem
                            eventKey={1}
                            href="/signin">
                            Signin
                        </NavItem>
                        <NavItem
                            eventKey={2}
                            href="signup">
                            Signup
                        </NavItem>
                        <NavItem
                            eventKey={3}
                            href="#">
                            <Glyphicon glyph="shopping-cart" />
                            {' Cart'}
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>*/
        );
    }
}

export default Header;