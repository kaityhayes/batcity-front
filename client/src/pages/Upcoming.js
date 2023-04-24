import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 30px auto;
  max-width: 600px;
  text-align: center;
`;

const CardTitle = styled.h3`
  color: #333;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  color: #666;
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

function Upcoming() {
  const data = [ {
    title: 'Slow Pulse',
    image: 'https://i.imgur.com/SUvcoUd.jpg',
    description: 'The Parish',
    date: 'Saturday, April 22',
    time: 'Doors: 7PM',
    venueUrl: 'https://parishaustin.com/'
  },
  {
    title: 'Drip-Fed',
    image: 'https://i.imgur.com/VlPwaqZ.jpg',
    description: 'Hotel Vegas',
    date: 'Tuesday, April 25',
    time: 'Doors: 9PM',
    venueUrl: 'https://texashotelvegas.com/'
  },
  {
    title: 'Nominee',
    image: 'https://i.imgur.com/NcCSsWC.jpg',
    description: 'Empire Control Room',
    date: 'Thursday, April 27',
    time: 'Doors: 7PM',
    venueUrl: 'https://empireatx.com/'
  }
];

  return (
    <div className="container">
      <div className="row">
        {data.map((card, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <img src={card.image} className="card-img-top" alt="Card" />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p>{card.date}</p>
                <p className="card-text">{card.description}</p>
                <p>{card.time}</p>
                <a href={card.venueUrl} className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Card>
        <CardTitle>Stay tuned for more upcoming shows!</CardTitle>
        <CardText>Follow us on social media to stay up to date with the latest shows and events.</CardText>
        <a href="#" className="btn btn-primary">Follow us</a>
      </Card>
    </div>
    
  );
}

export { Upcoming }
