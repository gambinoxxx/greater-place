import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '../../constants';
import './Donation.scss';

const DonationSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [donationData, setDonationData] = useState({
    name: '',
    email: '',
    amount: '50',
    message: ''
  });

  const coordinators = [
    { id: 1, name: 'Ijeoma Mbaezue', role: 'Chair-Person', image: images.ijeoma },
    { id: 2, name: 'Mycherie Onwuzuruike', role: 'Board Member', image: images.mycherie },   
    { id: 3, name: 'Ekemini Udom', role: 'Board Member', image: images.kemi },
    { id: 4, name: 'Paula', role: 'Board Member', image: images.kaylee },
    { id: 5, name: 'Ayanna', role: 'Board Member', image: images.ayannam },
    { id: 6, name: 'Chidimma Okeh', role: 'Board Member', image: images.chidinma },
    { id: 6, name: 'Ijeoma Nmeregini', role: 'Board Member', image: images.ijeoma2 },
    { id: 7, name: 'Ashaayla Anu Elora', role: 'Dance Instructor', image: images.dance },



  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonationData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cashAppLink = `https://cash.app/$BrandyOnwuzuruike/${donationData.amount}`;
    window.open(cashAppLink, '_blank');
    setShowForm(false);
  };

  return (
    <section className="donation-section" id="donate">
      <div className="section-header">
        <h2>Support Our Mission</h2>
        <p>Join us in making a difference</p>
      </div>

      <div className="donation-container">
        {/* Coordinators Grid - Left Side */}
        <div className="coordinators-grid">
          {coordinators.map(coordinator => (
            <motion.div 
              key={coordinator.id}
              className="coordinator-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="coordinator-image">
                <img src={coordinator.image} alt={coordinator.name} />
              </div>
              <div className="coordinator-info">
                <h4>{coordinator.name}</h4>
                <p>{coordinator.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Donation Section - Right Side */}
        <div className="donation-action">
          {!showForm ? (
            <motion.button
              className="donate-cta"
              onClick={() => setShowForm(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Make a Donation
            </motion.button>
          ) : (
            <AnimatePresence>
              <motion.form
                onSubmit={handleSubmit}
                className="donation-form"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    value={donationData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={donationData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="amount-selection">
                  <label>Donation Amount</label>
                  <div className="amount-buttons">
                    {[25, 50, 100, 250].map(amount => (
                      <button
                        type="button"
                        key={amount}
                        className={`amount-btn ${donationData.amount === amount ? 'active' : ''}`}
                        onClick={() => setDonationData({...donationData, amount})}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    name="amount"
                    value={donationData.amount}
                    onChange={handleChange}
                    min="1"
                    placeholder="Other amount"
                    required
                  />
                </div>

                <div className="form-actions">
                  <button 
                    type="button" 
                    className="cancel-btn"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="submit-btn">
                    Proceed to Donate
                  </button>
                </div>
              </motion.form>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
};

export default DonationSection;