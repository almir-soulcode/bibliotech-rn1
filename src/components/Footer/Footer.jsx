import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css"
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <div class=".fixed-bottom">
        <MDBFooter className='bg-light text-center text-white'>
            
      <MDBContainer className='p-2 pb-0'>
        
        <section className='mb-4'>
        <div className='me-10 d-none d-lg-block'>
        <p id="texto" className='mb-1'>Siga-nos</p>
          
        </div>
          <MDBBtn outline style={{ backgroundColor: '#00B3E6' }} color="dark"  floating className='' href='https://facebook.com' target='_blank' role='button'>
            <MDBIcon fab icon='facebook-f' a/>
          </MDBBtn>

          <MDBBtn outline style={{ backgroundColor: '#00B3E6' }} color="dark" floating className='m-1' href='https://twitter.com' target='_blank' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline style={{ backgroundColor: '#00B3E6' }} color="dark" floating className='' href='https://google.com' target='_blank' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline style={{ backgroundColor: '#00B3E6' }} color="dark" floating className='m-1' href='https://instagram.com' target='_blank' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline style={{ backgroundColor: '#00B3E6' }} color="dark" floating className='' href='https://linkedin.com' target='_blank' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline style={{ backgroundColor: '#00B3E6' }} color="dark" floating className='m-1' href='https://github.com' target='_blank' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>
      

      <div className='text-center text-dark p-3 rounded-3' style={{ backgroundColor: '#E6E6E6' }} >
        © 2023 Copyright: 
        <a className='text-dark' href='https://mdbootstrap.com/'>
              Squad 7
        </a>
        <Nav.Link as={Link} to="/politicas">
              Termo de politicas de privacidade aqui
        </Nav.Link>
      </div>
    </MDBFooter>
    </div>
    )
}