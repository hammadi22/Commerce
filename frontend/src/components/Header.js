import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

const Header = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
  
    const logoutHandler = () => {
      dispatch(logout())
    }

    return (
        <header>
        <Navbar collapse='justify-content-between' bg='primary' variant='dark' expand='xl' collapseOnSelect  sticky="top" className="justify-content-end" style={{ width: "100%" }}>
          <Container className="me-auto">
            <LinkContainer to='/'>
              <Navbar.Brand className='ml-auto'>top Gear
                <img width='40px' height='40px' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxwYXRoIGQ9Ik0zMiwzNEExMSwxMSwwLDEsMCw0Myw0NSwxMS4wMTMsMTEuMDEzLDAsMCwwLDMyLDM0Wm0wLDJhOS4wMSw5LjAxLDAsMCwxLDguOTQxLDhIMjMuMDU5QTkuMDEsOS4wMSwwLDAsMSwzMiwzNlptMCwxOGE5LjAxLDkuMDEsMCwwLDEtOC45NDEtOEg0MC45NDFBOS4wMSw5LjAxLDAsMCwxLDMyLDU0WiIvPjxwYXRoIGQ9Ik02MiwyNEg2MC4zNTdhMTIuOSwxMi45LDAsMCwwLS43OS0xLjkxbDEuMTYxLTEuMTYxYTEsMSwwLDAsMCwwLTEuNDE0bC00LjI0My00LjI0M2ExLDEsMCwwLDAtMS40MTQsMEw1My45MSwxNi40MzRBMTIuNywxMi43LDAsMCwwLDUyLDE1LjY0M1YxNGExLDEsMCwwLDAtMS0xSDUwVjJhMSwxLDAsMCwwLTEtMUgxNWExLDEsMCwwLDAtMSwxVjEzSDEzYTEsMSwwLDAsMC0xLDF2MS42NDNhMTIuNywxMi43LDAsMCwwLTEuOTEuNzkxTDguOTI5LDE1LjI3MmExLDEsMCwwLDAtMS40MTQsMEwzLjI3MiwxOS41MTVhMSwxLDAsMCwwLDAsMS40MTRMNC40MzMsMjIuMDlBMTIuOSwxMi45LDAsMCwwLDMuNjQzLDI0SDJhMSwxLDAsMCwwLTEsMXY2YTEsMSwwLDAsMCwxLDFIMy42NDNhMTIuOSwxMi45LDAsMCwwLC43OSwxLjkxTDMuMjcyLDM1LjA3MWExLDEsMCwwLDAsMCwxLjQxNGw0LjI0Myw0LjI0M2ExLDEsMCwwLDAsMS40MTQsMGwxLjE2MS0xLjE2MmExMi43LDEyLjcsMCwwLDAsMS45MS43OTFWNDJhMSwxLDAsMCwwLDEsMWgxdjVhMSwxLDAsMCwwLDEsMWgxLjVhMTUuODE4LDE1LjgxOCwwLDAsMCwxLjcxNSw0LjEyM2wtMS4wNjksMS4wNjlhMSwxLDAsMCwwLDAsMS40MTRsNC4yNDMsNC4yNDRhMSwxLDAsMCwwLDEuNDE0LDBsMS4wNjgtMS4wNjlBMTUuODU2LDE1Ljg1NiwwLDAsMCwyOCw2MC41VjYyYTEsMSwwLDAsMCwxLDFoNmExLDEsMCwwLDAsMS0xVjYwLjVhMTUuODU2LDE1Ljg1NiwwLDAsMCw0LjEyNC0xLjcxNGwxLjA2OCwxLjA2OWExLjAyOSwxLjAyOSwwLDAsMCwxLjQxNCwwbDQuMjQzLTQuMjQ0YTEsMSwwLDAsMCwwLTEuNDE0TDQ1Ljc4LDUzLjEyM0ExNS44MTgsMTUuODE4LDAsMCwwLDQ3LjUsNDlINDlhMSwxLDAsMCwwLDEtMVY0M2gxYTEsMSwwLDAsMCwxLTFWNDAuMzU3YTEyLjcsMTIuNywwLDAsMCwxLjkxLS43OTFsMS4xNjEsMS4xNjJhMSwxLDAsMCwwLDEuNDE0LDBsNC4yNDMtNC4yNDNhMSwxLDAsMCwwLDAtMS40MTRMNTkuNTY3LDMzLjkxYTEyLjksMTIuOSwwLDAsMCwuNzktMS45MUg2MmExLDEsMCwwLDAsMS0xVjI1QTEsMSwwLDAsMCw2MiwyNFpNMTYsM0g0OFYxM0g0NWExLDEsMCwwLDAtMSwxdjEuNjQzYTEyLjcsMTIuNywwLDAsMC0xLjkxLjc5MWwtMS4xNjEtMS4xNjJhMSwxLDAsMCwwLTEuNDE0LDBsLTQuMjQzLDQuMjQzYTEsMSwwLDAsMCwwLDEuNDE0bDEuMTYxLDEuMTYxYTEyLjksMTIuOSwwLDAsMC0uNzksMS45MUgzNGExLDEsMCwwLDAtMSwxdjJIMzFWMjVhMSwxLDAsMCwwLTEtMUgyOC4zNTdhMTIuOSwxMi45LDAsMCwwLS43OS0xLjkxbDEuMTYxLTEuMTYxYTEsMSwwLDAsMCwwLTEuNDE0bC00LjI0My00LjI0M2ExLDEsMCwwLDAtMS40MTQsMEwyMS45MSwxNi40MzRBMTIuNywxMi43LDAsMCwwLDIwLDE1LjY0M1YxNGExLDEsMCwwLDAtMS0xSDE2Wk0xNCw0MVYzOS42MDZhMSwxLDAsMCwwLS43NS0uOTY4LDEwLjkzOSwxMC45MzksMCwwLDEtMi44MjgtMS4xNywxLDEsMCwwLDAtMS4yMTUuMTU0bC0uOTg1Ljk4NEw1LjM5MywzNS43NzhsLjk4NS0uOTg1YTEsMSwwLDAsMCwuMTU0LTEuMjE2LDEwLjkxOCwxMC45MTgsMCwwLDEtMS4xNy0yLjgyN0ExLDEsMCwwLDAsNC4zOTQsMzBIM1YyNkg0LjM5NGExLDEsMCwwLDAsLjk2OC0uNzUsMTAuOTQsMTAuOTQsMCwwLDEsMS4xNy0yLjgyOSwxLDEsMCwwLDAtLjE1NC0xLjIxNWwtLjk4NC0uOTg0LDIuODI4LTIuODI4Ljk4NS45ODRhMSwxLDAsMCwwLDEuMjE1LjE1NCwxMC45MzksMTAuOTM5LDAsMCwxLDIuODI4LTEuMTcsMSwxLDAsMCwwLC43NS0uOTY4VjE1aDR2MS4zOTRhMSwxLDAsMCwwLC43NS45NjgsMTAuOTM5LDEwLjkzOSwwLDAsMSwyLjgyOCwxLjE3LDEsMSwwLDAsMCwxLjIxNS0uMTU0bC45ODUtLjk4NCwyLjgyOCwyLjgyOC0uOTg0Ljk4NGExLDEsMCwwLDAtLjE1NCwxLjIxNSwxMC45NCwxMC45NCwwLDAsMSwxLjE3LDIuODI5LDEsMSwwLDAsMCwuOTY4Ljc1SDI5djFhMSwxLDAsMCwwLTEsMXYxLjVhMTUuODU2LDE1Ljg1NiwwLDAsMC00LjEyNCwxLjcxNGwtLjQtLjRBOCw4LDAsMSwwLDE2LDM2YTguMDI0LDguMDI0LDAsMCwwLDEuMjQyLS4xbC45NzguOTc4QTE1LjgxOCwxNS44MTgsMCwwLDAsMTYuNTA1LDQxSDE0Wm0zLjg0OC03LjNhNS45NzUsNS45NzUsMCwxLDEsMy44MTktMy43MjMuOTQyLjk0MiwwLDAsMC0uMjczLjE3N1pNNDgsNDdINDYuN2ExLDEsMCwwLDAtLjk4LjgsMTMuODY0LDEzLjg2NCwwLDAsMS0yLjA0Myw0LjkxNSwxLDEsMCwwLDAsLjEyNywxLjI1OWwuOTI1LjkyNEw0MS45LDU3LjcyOWwtLjkyNC0uOTI1YTEsMSwwLDAsMC0xLjI2LS4xMjdBMTMuODU3LDEzLjg1NywwLDAsMSwzNC44LDU4LjcxOWExLDEsMCwwLDAtLjguOThWNjFIMzBWNTkuN2ExLDEsMCwwLDAtLjgtLjk4LDEzLjg1NywxMy44NTcsMCwwLDEtNC45MTQtMi4wNDIsMSwxLDAsMCwwLTEuMjYuMTI3bC0uOTI0LjkyNUwxOS4yNzIsNTQuOWwuOTI1LS45MjRhMSwxLDAsMCwwLC4xMjctMS4yNTlBMTMuODY0LDEzLjg2NCwwLDAsMSwxOC4yODEsNDcuOGExLDEsMCwwLDAtLjk4LS44SDE2VjQzaDEuM2ExLDEsMCwwLDAsLjk4LS44LDEzLjg2NCwxMy44NjQsMCwwLDEsMi4wNDMtNC45MTUsMSwxLDAsMCwwLS4xMjctMS4yNTlsLS45MjUtLjkyNCwyLjgyOS0yLjgzLjkyNC45MjVhMSwxLDAsMCwwLDEuMjYuMTI3QTEzLjg1NywxMy44NTcsMCwwLDEsMjkuMiwzMS4yODFhMSwxLDAsMCwwLC44LS45OFYyOWg0djEuM2ExLDEsMCwwLDAsLjguOTgsMTMuODU3LDEzLjg1NywwLDAsMSw0LjkxNCwyLjA0MiwxLDEsMCwwLDAsMS4yNi0uMTI3bC45MjQtLjkyNSwyLjgyOSwyLjgzLS45MjUuOTI0YTEsMSwwLDAsMC0uMTI3LDEuMjU5QTEzLjg2NCwxMy44NjQsMCwwLDEsNDUuNzE5LDQyLjJhMSwxLDAsMCwwLC45OC44SDQ4Wk00MiwyOGE2LjA0Niw2LjA0NiwwLDEsMSw0LjE1Miw1LjdMNDIuNjA2LDMwLjE1YS45ODcuOTg3LDAsMCwwLS4yNzYtLjE4NEE1Ljk3NSw1Ljk3NSwwLDAsMSw0MiwyOFptMTksMkg1OS42MDZhMSwxLDAsMCwwLS45NjguNzUsMTAuOTE4LDEwLjkxOCwwLDAsMS0xLjE3LDIuODI3LDEsMSwwLDAsMCwuMTU0LDEuMjE2bC45ODUuOTg1LTIuODI5LDIuODI4LS45ODUtLjk4NGExLDEsMCwwLDAtMS4yMTUtLjE1NCwxMC45MzksMTAuOTM5LDAsMCwxLTIuODI4LDEuMTcsMSwxLDAsMCwwLS43NS45NjhWNDFINDcuNWExNS44MTgsMTUuODE4LDAsMCwwLTEuNzE1LTQuMTIzbC45NzgtLjk3OEE4LDgsMCwxLDAsNDAsMjhhNy45MzcsNy45MzcsMCwwLDAsLjUyLDIuODIybC0uNC40QTE1Ljg1NiwxNS44NTYsMCwwLDAsMzYsMjkuNTA1VjI4YTEsMSwwLDAsMC0xLTFWMjZoMS4zOTRhMSwxLDAsMCwwLC45NjgtLjc1LDEwLjk0LDEwLjk0LDAsMCwxLDEuMTctMi44MjksMSwxLDAsMCwwLS4xNTQtMS4yMTVsLS45ODQtLjk4NCwyLjgyOC0yLjgyOC45ODUuOTg0YTEsMSwwLDAsMCwxLjIxNS4xNTQsMTAuOTM5LDEwLjkzOSwwLDAsMSwyLjgyOC0xLjE3LDEsMSwwLDAsMCwuNzUtLjk2OFYxNWg0djEuMzk0YTEsMSwwLDAsMCwuNzUuOTY4LDEwLjkzOSwxMC45MzksMCwwLDEsMi44MjgsMS4xNywxLDEsMCwwLDAsMS4yMTUtLjE1NGwuOTg1LS45ODQsMi44MjgsMi44MjgtLjk4NC45ODRhMSwxLDAsMCwwLS4xNTQsMS4yMTUsMTAuOTQsMTAuOTQsMCwwLDEsMS4xNywyLjgyOSwxLDEsMCwwLDAsLjk2OC43NUg2MVoiLz48cmVjdCB4PSIyMyIgeT0iNSIgd2lkdGg9IjE1IiBoZWlnaHQ9IjIiLz48cmVjdCB4PSIxOCIgeT0iOSIgd2lkdGg9IjI4IiBoZWlnaHQ9IjIiLz48cmVjdCB4PSI0MCIgeT0iNSIgd2lkdGg9IjYiIGhlaWdodD0iMiIvPjwvc3ZnPgo=" />
              </Navbar.Brand>
            </LinkContainer>
           
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav text-start' >
              <Route render={({ history }) => <SearchBox history={history} />} />
              <Nav className='ms-auto'>
                <LinkContainer to='/cart'>
                  <Nav.Link>
                    <i className='fas fa-shopping-cart'></i> Cart
                  </Nav.Link> 
                </LinkContainer>
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <LinkContainer to='/login'>
                    <Nav.Link>
                      <i className='fas fa-user'></i> Sign In
                    </Nav.Link>
                  </LinkContainer>
                )}
                {userInfo && userInfo.isAdmin && (
                  <NavDropdown title='Admin' id='adminmenu'>
                    <LinkContainer to='/admin/userlist'>
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/productlist'>
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/orderlist'>
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
}

export default Header
