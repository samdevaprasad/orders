import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export const Footer = () => {
  return (
    <MDBFooter color="grey" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
        <MDBCol md="3">
            <ul>
            <li className="list-unstyled">
                <h5>InHome</h5>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">Overview</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">How It Works</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">Refer A Friend</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">Our Associates</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">FAQ</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">Sign In</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">Get InHome</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <ul>
                <li className="list-unstyled">
                <h5>Contact Us</h5>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">1-833-235-2111</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">inhome-help@walmart.com</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">walmart.com</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <ul>
              <li className="list-unstyled">
                <h5>Legal</h5>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">Terms Of Use</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">Community Guidelines</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">Privacy</a>
              </li>
              <li className="list-unstyled" style={{'padding-top': '10px'}}>
                <h5>Other</h5>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">Internal Resources</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">Support</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">Webinars</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <ul>
              <li className="list-unstyled">
                <h5>Social</h5>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">Youtube</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">Instagram</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">Facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">Twitter</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">LinkedIn</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">Myspace</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()}  Copyright: Sam Devaprasad
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
