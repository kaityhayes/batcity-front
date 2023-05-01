import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import styled from 'styled-components';
import { Card, CardTitle, CardText } from 'reactstrap';


const CalendarView = () => {
  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const data = [
      {
        title: 'Slow Pulse',
        image: 'https://i.imgur.com/SUvcoUd.jpg',
        description: 'The Parish',
        date: new Date('2023-04-22T00:00:00.000Z'),
        time: 'Doors: 7PM',
        venueUrl: 'https://parishaustin.com/'
      },
      {
        title: 'Drip-Fed',
        image: 'https://i.imgur.com/VlPwaqZ.jpg',
        description: 'Hotel Vegas',
        date: new Date('2023-04-25T00:00:00.000Z'),
        time: 'Doors: 9PM',
        venueUrl: 'https://texashotelvegas.com/'
      },
      {
        title: 'Nominee',
        image: 'https://i.imgur.com/NcCSsWC.jpg',
        description: 'Empire Control Room',
        date: new Date('2023-04-27T00:00:00.000Z'),
        time: 'Doors: 7PM',
        venueUrl: 'https://empireatx.com/'
      }

      
    ];
    const formattedEvents = data.map(event => ({
      title: event.title,
      start: event.date,
      end: event.date,
      allDay: true,
      venue: event.description,
      image: event.image
    }));
    setEvents(formattedEvents);
  }, []);

  return (
    <div className="container my-3">
      <Calendar
        localizer={localizer}
        events={events}
        views={['month']}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 1000 }}
        eventPropGetter={
          event => ({
            style: {
              backgroundImage: `url(${event.image})`,
              backgroundSize: 'cover',
              borderRadius: '5px',
              overflow: 'hidden',
              height: '100px',
              margin: ''
            }
          })
        }
      />
      <div>
      <div style={{ width: '600px', margin: '30px auto', padding: '20px', textAlign: 'center', backgroundColor: '#fff' }}>
  <Card style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
    <CardTitle style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>Stay tuned for more upcoming shows!</CardTitle>
    <CardText style={{ fontSize: '18px', lineHeight: '1.5', color: '#666', marginBottom: '20px' }}>Follow us on social media to stay up to date with the latest shows and events.</CardText>
    <a href="#" className="btn btn-primary">Follow us</a>
  </Card>
</div>

      </div>
    </div>
    
  );
};

export { CalendarView }
