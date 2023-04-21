import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const CalendarView = () => {
  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/events')
      .then(response => response.json())
      .then(data => {
        // Parse and format the data
        const formattedEvents = data.map(event => ({
          title: event.title,
          start: new Date(event.start),
          end: new Date(event.end),
          allDay: event.allDay
        }));
        setEvents(formattedEvents);
      });
  }, []);

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        views={['month']}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export { CalendarView }
