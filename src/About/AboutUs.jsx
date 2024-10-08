/* eslint-disable react/no-unescaped-entities */
import Navbar from '@/customs/navbar';
import './AboutUs.css';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();
  const teamMembers = [
    {
      name: 'Chayan Gupta',
      role: 'Software Developer',
      img: '/chayan.jpg',
      email: 'chayangupta353@gmail.com',
    },
    {
      name: 'Imritanshul Sayalwar',
      role: 'Software Developer',
      img: '/Imritanshul.jpg',
      email: 'abc@gmail.com',
    },
    {
      name: 'Anshul Khateek',
      role: 'Software Developer',
      img: '/Anshul.png',
      email: 'abc@gmail.com',
    },
    {
      name: 'Ishtika Barode',
      role: 'Software Developer',
      img: '/Ishtika.jpg',
      email: 'abc@gmail.com',
    },
    {
      name: 'Mohit Parmar',
      role: 'Software Developer',
      img: '/Mohit.jpg',
      email: 'abc@gmail.com',
    },
  ];

  const values = [
    {
      title: 'Holistic Wellness',
      description: 'Fitness isn’t just physical; it’s mental and spiritual growth.',
      color: '#FFD700',
    },
    {
      title: 'Respect',
      description: 'We respect everyone’s journey and promote a supportive environment.',
      color: '#FF6347',
    },
    {
      title: 'Passion',
      description: 'Our passion for fitness drives us to inspire and motivate others.',
      color: '#32CD32',
    },
    {
      title: 'Integrity',
      description: 'We are committed to honesty and transparency in all our interactions.',
      color: '#1E90FF',
    },
    {
      title: 'Community',
      description: 'We believe in the power of community, supporting each other on our wellness journeys.',
      color: '#FF69B4',
    },
  ];

  return (
    <div>
      <Navbar/>
    <div className="about-us-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to FitQuest</h1>
          <p>Your personalized fitness journey, tailored to help you achieve holistic well-being.</p>
        </div>
      </section>

      <section className="mission-section">
        <h2 className="section-heading">Our Mission</h2>
        <div className="mission-cards">
          <div className="mission-card" style={{ backgroundColor: '#e0f7fa' }}>
            <h3>Empowerment</h3>
            <p>We empower individuals to take charge of their fitness journey through education and support.</p>
          </div>
          <div className="mission-card" style={{ backgroundColor: '#ffe0b2' }}>
            <h3>Inclusivity</h3>
            <p>We create a welcoming environment for all, regardless of fitness level or background.</p>
          </div>
          <div className="mission-card" style={{ backgroundColor: '#d1c4e9' }}>
            <h3>Continuous Learning</h3>
            <p>We promote ongoing education in fitness and wellness, blending ancient practices with modern techniques.</p>
          </div>
          <div className="mission-card" style={{ backgroundColor: '#c8e6c9' }}>
            <h3>Community</h3>
            <p>We believe in the power of community, supporting each other on our wellness journeys.</p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <h2 className="section-heading">Our Values</h2>
        <div className="values-cards">
          {values.map(value => (
            <div className="values-card" style={{ backgroundColor: value.color }} key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {teamMembers.map(member => (
            <div className="team-member" key={member.name} style={{ backgroundColor: '#e0f7fa' }}>
              <img src={member.img} alt={member.name} />
              <h3><strong>{member.name}</strong></h3>
              <p>{member.role}</p>
              <p className="email"><strong>Email:</strong> <a href={`mailto:${member.email}`}>{member.email}</a></p>
            </div>
          ))}
        </div>
      </section>

      <section className="join-us-section">
        <h2>Join Us on this Journey</h2>
        <p>
          Whether you're just starting out or looking to enhance your fitness routine, FitQuest is here for you.
          Together, we'll explore the realms of fitness, wellness, and mindfulness.
        </p>
        <button className="join-btn" onClick={() => navigate('/')}>Get Started</button>
      </section>
    </div>
    </div>
  );
};

export default AboutUs;
