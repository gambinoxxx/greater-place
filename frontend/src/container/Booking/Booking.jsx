import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Booking.scss';

const BookingCalendar = () => {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    eventType: 'Wedding',
    date: '',
    guests: '50',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('whatsapp');
  const [upcomingEvents] = useState([
    { id: 1, title: 'Dance Class', date: '2025-06-08', location: 'Eden Center' },
    { id: 2, title: 'Ayomide Wedding Ogene Dance', date: '2025-08-01', location: ' Grand Hall' },
    { id: 3, title: 'Annual Retreat', date: '2025-08-03', location: ' Grand Hall' },
    { id: 4, title: 'Fortune Wedding Ogene Dance', date: '2025-08-29', location: 'Grand Hall' },
    { id: 5, title: 'Sheltering Grace/Far Above Rubies', date: '2025-10-25', location: 'Grand Ballroom' },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      if (selectedMethod === 'whatsapp') {
        const formattedDate = new Date(bookingData.date).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });

        const whatsappMessage = `*New Booking Request*%0A%0A
          *Name:* ${encodeURIComponent(bookingData.name)}%0A
          *Email:* ${encodeURIComponent(bookingData.email)}%0A
          *Event Type:* ${encodeURIComponent(bookingData.eventType)}%0A
          *Date:* ${encodeURIComponent(formattedDate)}%0A
          *Guests:* ${encodeURIComponent(bookingData.guests)}%0A
          *Message:* ${encodeURIComponent(bookingData.message || 'None')}`;

        const whatsappUrl = `https://wa.me/+16786986413?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');
      } else {
        window.open(
          'https://docs.google.com/forms/d/1-MYUzyZe45vU5HZ9WI8QDkLeR1ZzCikt4uq0PQKPSIw/viewform?ts=67587118&edit_requested',
          '_blank'
        );
      }

      setStatus('success');
      setTimeout(() => setStatus(''), 5000);
      
      if (selectedMethod === 'whatsapp') {
        setBookingData({
          name: '',
          email: '',
          eventType: 'Wedding',
          date: '',
          guests: '50',
          message: ''
        });
      }

    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section className="booking-calendar" id="events">
      <div className="section-header">
        <h2>Bookings & Events</h2>
        <p>Plan your event or join ours</p>
      </div>

      <div className="dual-column">
        <div className="booking-column">
          <div className="method-selector">
            <button
              type="button"
              className={`method-btn ${selectedMethod === 'whatsapp' ? 'active' : ''}`}
              onClick={() => setSelectedMethod('whatsapp')}
            >
              WhatsApp Booking
            </button>
            <button
              type="button"
              className={`method-btn ${selectedMethod === 'email' ? 'active' : ''}`}
              onClick={() => setSelectedMethod('email')}
            >
              Email Form
            </button>
          </div>

          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="compact-form"
          >
            {selectedMethod === 'whatsapp' && (
              <>
                <h3>WhatsApp Booking Form</h3>
                
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
              </>
            )}

            {selectedMethod === 'email' && (
              <div className="email-method-info">
                <h3>Email Booking Form</h3>
                <p>You'll be redirected to our secure Google Form to complete your booking request.</p>
              </div>
            )}

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="success-message"
              >
                ✅ {selectedMethod === 'whatsapp' 
                  ? 'Booking request sent! Please check WhatsApp' 
                  : 'Redirecting to secure form...'}
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="error-message"
              >
                ❌ Failed to process request. Please try again.
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === 'sending' 
                ? '📤 Processing...' 
                : selectedMethod === 'whatsapp' 
                  ? '📨 Send via WhatsApp' 
                  : '📩 Proceed to Email Form'}
            </motion.button>
          </motion.form>
        </div>

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
                    <span className="day">
                      {new Date(event.date).getDate()}
                    </span>
                    <span className="month">
                      {new Date(event.date)
                        .toLocaleString('default', { month: 'short' })}
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