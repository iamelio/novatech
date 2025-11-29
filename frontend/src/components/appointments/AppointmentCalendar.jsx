import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default react-calendar styles

const AppointmentCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="custom-calendar-container">
      <Calendar
        onChange={onChange}
        value={value}
        // You can add more props here to customize the calendar
        // For example, to show navigation for years and decades:
        // view="month" // Start view at month
        // minDetail="decade" // Allow navigating down to decades
      />
    </div>
  );
};

export default AppointmentCalendar;