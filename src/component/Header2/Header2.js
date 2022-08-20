import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import darklogo from '../../logodark.png'
import '../Header/Header.css'
import { BiSearch } from 'react-icons/bi';
import './Header2.css'
import { useContext } from 'react';
import { UserContext } from '../../App';
function Header2() {
    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext)
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
                            <Link to="/home">Home</Link>
                            <Link to="/home">Destination</Link>
                            <Link to="/home">Blog </Link>
                            <Link to="/home">Contact</Link>
                            {
                                userLoggedIn.email ? <p className='mt-3'>{userLoggedIn.email}</p> : <Link to='/login' className='text-white'> <button className='mainBtn text-white'>Login</button></Link>
                            }
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header2;