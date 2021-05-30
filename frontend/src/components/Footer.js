import React from 'react'
import Twiter from '../icon/twitter.png';
import facebook from '../icon/facebook.png';
import instagram from '../icon/instagram.png';
import Android from '../icon/android.png';
import Iphone from '../icon/iphone.png';
import { Link } from 'react-router-dom';
import './footer.css';
import { Container, Row, Col } from 'react-bootstrap' 
const Footer = () => {
    return (
          {/*<Container>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; CarShop2021
                    </Col>
                </Row>
          </Container>*/},
          
    <footer className='footer mt-auto py-3 '>
      <div className='container'>
        <div className='row'>
          <hr />
          <div className='col-sm'>
            <div>
              <br />
              <h6>
                {' '}
                Follow us ON &nbsp;
                <br /> <br />
                <Link to='/'>
                  {' '}
                  <img
                    src={Twiter}
                    alt='Twitter'
                    className='rounded mx-auto '
                    height='30px'
                    width='30px'
                  />{' '}
                  &nbsp;
                </Link>
                <Link to='/'>
                  {' '}
                  <img
                    src={facebook}
                    alt='facebook'
                    className='rounded mx-auto '
                    height='30px'
                    width='30px'
                  />{' '}
                  &nbsp;
                </Link>
                <Link to='/'>
                  {' '}
                  <img
                    src={instagram}
                    alt='instagram'
                    className='rounded mx-auto '
                    height='30px'
                    width='30px'
                  />{' '}
                  &nbsp;
                </Link>
              </h6>
            </div>
          </div>
          <div className='col-sm'>
            <br />
            All Rights Reserved  © 2020 - 2021
            <strong> H&&H </strong>
          </div>
          <div className='col-sm'>
            <div>
              <br />
              <h6>
                Download the APP <br /> <br />
                &nbsp;
                <img
                  src={Android}
                  alt='Android'
                  className='rounded mx-auto '
                  height='30px'
                  width='30px'
                />{' '}
                &nbsp;
                <img
                  src={Iphone}
                  alt='Iphone'
                  className='rounded mx-auto '
                  height='30px'
                  width='30px'
                />{' '}
                &nbsp;
              </h6>
            </div>
          </div>
        </div>
      </div>
        </footer>
            )
}

export default Footer
