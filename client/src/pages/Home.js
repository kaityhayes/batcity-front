import React, { useState, useEffect } from 'react';
import { Carousel, Button, Container, Form } from 'react-bootstrap';

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const imageUrls = [
    'https://i.imgur.com/GsiGhui.png',
    'https://i.imgur.com/mEgU8pX.png',
    'https://i.imgur.com/xndXYri.jpg',
    'https://i.imgur.com/5IDnjOC.jpg',
    'https://i.imgur.com/HMcAAQW.jpg',
    'https://i.imgur.com/xndXYri.jpg',
    'https://i.imgur.com/dPsc9f1.jpg'
  ];

  return (
    <div className="home text-center">
      <Carousel>
        {imageUrls.map((imageUrl, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block mx-auto"
              src={imageUrl}
              alt="Slide"
              style={{ maxWidth: '100%', maxHeight: '600px' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
        <div className="text-center">
          <h1 className="mb-3">Subscribe to Our Newsletter</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Subscribe
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export { Home }
