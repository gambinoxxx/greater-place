import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Booking.scss';

const BookingCalendar = () => {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    eventType: 'Wedding', // Default selection
    date: '',
    guests: '50', // Default value
    message: ''
  });

  const upcomingEvents = [
    { id: 1, title: 'Annual Showcase', date: '2023-11-15', location: 'Main Hall' },
    { id: 2, title: 'Youth Workshop', date: '2023-12-05', location: 'Community Center' },
    { id: 3, title: 'Holiday Special', date: '2023-12-20', location: 'City Park' },
    { id: 4, title: 'New Year Gala', date: '2024-01-01', location: 'Grand Ballroom' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${bookingData.name}! We'll contact you about your ${bookingData.eventType} event.`);
  };

  return (
    <section className="booking-calendar" id="events">
      <div className="section-header">
        <h2>Bookings & Events</h2>
        <p>Plan your event or join ours</p>
      </div>

      <div className="dual-column">
        {/* Booking Form - Left Column */}
        <div className="booking-column">
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="compact-form"
          >
            <h3>Book Our Team</h3>
            
            <div className="form-row">
              <input
                type="text"
                name="name"
                value={bookingData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={bookingData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>

            <select
              name="eventType"
              value={bookingData.eventType}
              onChange={handleChange}
              required
            >
              <option value="Wedding">Wedding</option>
              <option value="Corporate">Corporate Event</option>
              <option value="Birthday">Birthday</option>
              <option value="Community">Community Event</option>
            </select>

            <div className="form-row">
              <input
                type="date"
                name="date"
                value={bookingData.date}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="guests"
                value={bookingData.guests}
                onChange={handleChange}
                placeholder="Guests"
                min="1"
                required
              />
            </div>

            <textarea
              name="message"
              value={bookingData.message}
              onChange={handleChange}
              placeholder="Special requests"
              rows="2"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Booking
            </motion.button>
          </motion.form>
        </div>

        {/* Events Calendar - Right Column */}
        <div className="events-column">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="compact-events"
          >
            <h3>Upcoming Events</h3>
            <div className="events-list">
              {upcomingEvents.map(event => (
                <motion.div 
                  key={event.id}
                  className="event-item"
                  whileHover={{ x: 5 }}
                >
                  <div className="event-date">
                    <span className="day">{new Date(event.date).getDate()}</span>
                    <span className="month">
                      {new Date(event.date).toLocaleString('default', { month: 'short' })}
                    </span>
                  </div>
                  <div className="event-info">
                    <h4>{event.title}</h4>
                    <p>{event.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;