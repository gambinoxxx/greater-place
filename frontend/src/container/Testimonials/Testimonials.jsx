import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Testimonials.scss';

const testimonials = [
  {
    id: 1,
    name: 'Ayomide Amore',
    role: 'Dancer',
    fullText: `I've always considered myself a Christian, but for a long time, I didn't really understand what that truly meant. I thought it was just about being a nice person. But it wasn't until I went through some tough times that I started to really understand the power and love of God.
    
    Just over a year ago, when I was 13, I got involved with someone who constantly left me for girls he thought were prettier. It really hurt me and made me hate the way I looked. I just wanted to feel beautiful in his eyes. I felt so low and helpless, and that's when I turned to God.
    
    Around that same time, my friend invited me to her church because she was dancing there. I watched girls my age perform, and for the first time in a long time, I felt peace. I even teared up and didn't know why. Afterward, my friend told me about Brandy, a woman with a small dance group, and encouraged me to join. That's how I became a part of Greater Place.
    
    Even though I joined, I still struggled with low self-esteem. But everything changed when we started dancing to "Something Has to Break." On performance day, Brandy told us to break off anything weighing us down as we danced. I thought about all my pain, and as I danced, I felt lighter—like God had lifted that weight off me. I truly felt His presence, and it was amazing.
    
    Since then, God has continued to work in my life. The move from middle school to high school has been tough, but through FCA and learning to be at peace even when I'm alone, God has kept me going. One big thing I've learned? It's okay to be by yourself—Jesus walks with me every step I take. I've even noticed that whenever danger like fights happen at school, I always seem to take a different route—what I once thought was coincidence, I now know is God's protection.
    
    And guess what? I made the cheer team too! I prayed hard for that, and God came through. Now, I understand church messages and praise dance on a whole new level. Everything makes sense because of Him.
    
    At the end of the day, the only one I want to impress or look beautiful for is God. Thank you for listening to my testimony. Remember—live for God, and you'll find peace. It's so worth it.
    
    God bless you all! 💛`,
    image: images.ayomide
  },
  {
    id: 2,
    name: 'Love.',
    role: 'Dancer',
    fullText: '💃 Discovering Healing Through DanceA pivotal moment occurred when a friend invited Ayomide to a church service featuring a dance performance by girls her age. Moved by an overwhelming sense of peace, she was introduced to Brandy, the leader of a dance group called Greater Place. Joining this group marked the beginning of her healing journey.',
    image: images.love
  },
  {
    id: 3,
    name: 'Sharon.',
    role: 'Member',
    fullText: 'Being a part of greater place has been such a wonderful experience for me. its not just about the dance, its about connecting with others who share the same passion for expressing our faith through movement. every practice feels like a celebration, where we uplift each other and grow together. performing in front of others allows me to share my joy and love for God. i am so thankful for the friendships that i have formed and the spiritual growth i have experienced through this journey. its truly a blessing to be part of greater place! being in greater place has really changed my life. its like a family where we all support each other, and every practice is filled with laughter and encouragement. it’s such a powerful way to share our faith. dance tells a story, and i love how we can express our emotions and beliefs through movement. its not just about the steps, its about the message we bring and the love we share. i feel so blessed to be part of this journey and to grow both as a dancer and as a person!💛',
    image: images.sharon
  },
  {
    id: 4,
    name: 'kemi.',
    role: 'Member',
    fullText: 'Being a part of greater place has been such a wonderful experience for me. its not just about the dance, its about connecting with others who share the same passion for expressing our faith through movement. every practice feels like a celebration, where we uplift each other and grow together. performing in front of others allows me to share my joy and love for God. i am so thankful for the friendships that i have formed and the spiritual growth i have experienced through this journey. its truly a blessing to be part of greater place! being in greater place has really changed my life. its like a family where we all support each other, and every practice is filled with laughter and encouragement. it’s such a powerful way to share our faith. dance tells a story, and i love how we can express our emotions and beliefs through movement. its not just about the steps, its about the message we bring and the love we share. i feel so blessed to be part of this journey and to grow both as a dancer and as a person!💛',
    image: images.testimony
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="app__testimonial" id="testimonials">
      <h2 className="section-header">Community Testimonies</h2>
      <div className="app__testimonial-container">
        <div 
          className="app__testimonial-nav left"
          onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}
        >
          <HiChevronLeft />
        </div>

        <motion.div
          className="app__testimonial-item"
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, type: 'tween' }}
        >
          <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
          <div className="app__testimonial-content">
            <p className="p-text">{testimonials[currentIndex].fullText}</p>
            <div className="app__testimonial-info">
              <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
              <h5 className="p-text">{testimonials[currentIndex].role}</h5>
            </div>
          </div>
        </motion.div>

        <div 
          className="app__testimonial-nav right"
          onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}
        >
          <HiChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;