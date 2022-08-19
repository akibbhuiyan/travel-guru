import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import darklogo from '../../logodark.png'
import '../Header/Header.css'
import { BiSearch } from 'react-icons/bi';
import './Header2.css'
function Header2() {
    return (
        <div className="container">

            <Navbar expand="lg" className='navbar-full navbar-dark'>
                <Container fluid>
                    <Navbar.Brand href="/home"><img src={darklogo} alt="LOGO" className='logo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" >
                        <Nav
                            className="ms-auto my-2 my-lg-0 navbar-allLink"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/home">Destination</Nav.Link>
                            <Nav.Link href="/home">Blog </Nav.Link>
                            <Nav.Link href="/home">Contact</Nav.Link>
                            <Link to='/login'> <button className='mainBtn'>Login</button></Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header2;