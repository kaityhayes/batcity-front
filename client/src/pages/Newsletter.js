import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import styled from "styled-components";

const StyledCard = styled(Card)`
background-color: #fff;
border-radius: 10px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
padding: 20px;
margin: 30px auto;
max-width: 600px;
text-align: center;
`;

const CardTitle = styled(Card.Title)`
color: #333;
font-size: 24px;
font-weight: bold;
margin-bottom: 10px;
`;

const CardText = styled(Card.Text)`
color: #666;
font-size: 18px;
line-height: 1.5;
margin-bottom: 20px;
`;

function Newsletter() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="text-center">
        <h1 className="mb-5">Subscribe to Our Newsletter</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Keep in touch!" />
            <Form.Text className="text-muted">
              We'll never share your information with anyone else.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Subscribe
          </Button>
        </Form>

        <Row className="mt-5">
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body >
              <Card.Title className="font-weight-bold"><h2>Fun upcoming event</h2></Card.Title>
                <Card.Text>
                 <h5> Looking for something fun to do this weekend? Check out the Pecan Street Festival downtown for fresh produce and live music.</h5>
                  <br />
                  <p>5/6/2022</p>
            
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title className="font-weight-bold"><h2>Austin City Limits!</h2></Card.Title>
                <Card.Text>
                  <h5>ACL is around the corner. Stay tuned as we announce our showcasings and after-parties with some of the best local musicians around.</h5>
                  <br />
                  <p>9/1/2022</p>
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
              <Card.Title className="font-weight-bold"><h2>New venue location!</h2></Card.Title>
                <Card.Text>
                 <h5> We're excited to announce that we're opening a new venue location next month! Stay tuned for more details.</h5>
                  <br />
                  <p>8/28/2022</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title className="font-weight-bold"><h2>South by Southwest (SXSW)</h2></Card.Title>
                <Card.Text>
                 <h5> The annual South by Southwest (SXSW) festival is coming up next month! Don't miss out on the opportunity to see some of the biggest names in music, film, and technology.</h5>
                  <br />
                  <p>3/1/2023</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title className="font-weight-bold"><h2>Incliment weather alert</h2></Card.Title>
                <Card.Text>
                 <h5> Due to the expected incliment weather, our upcoming outdoor event has been postponed to next week. Stay dry!</h5>
                  <br />
                  <p>5/10/2023</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title className="font-weight-bold"><h2>Now hiring security staff</h2></Card.Title>
                <Card.Text>
                 <h5> We are looking for security staff to join our team. If you are interested, please send us your resume at <a href="mailto:jobs@batcityatx.com">jobs@batcityatx.com</a></h5>
                  <br />
                  <p>6/4/2023</p>
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title className="font-weight-bold"><h2>Narcan classes available</h2></Card.Title>
                <Card.Text>
                  <h5>We are offering free Narcan training classes to help combat the opioid epidemic in our community. Register now for one of our upcoming classes and learn how to save a life.</h5>
                  <br />
                  <p>6/24/2023</p>
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title className="font-weight-bold" ><h2>Sponsored by Liquid Death</h2></Card.Title>
                <Card.Text>
                  <h5>We're excited to announce that our upcoming event is sponsored by Liquid Death Water. Stay hydrated with the purest, most metal water in the world!</h5>
                  <br />
                  <p>7/4/2023</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
export { Newsletter }




