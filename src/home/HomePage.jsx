

import "./HomePage.css";
const HomePage = () => {
  return (
    <div>

      <main>
        <section id="home-sec" className="flexible home-sec">
          <div className="eye-grabber-img">
            <img src="/jog-img-2.jpg" alt="Image of Jogging" />
          </div>
          <div className="eye-grabber">
            <h1 >Fitness That Fits Into Your Lifestyle.</h1>
            <h2>Friendly fitness plans that suit your schedule and goals.</h2>
            <button 
      className="btn" 
      onClick={() => window.location.href = '/profile'}>
      Get Started
    </button>
          </div>
        </section>
        <section id="about" className="sec-padding">
          <h3 className="section-heading">ABOUT US</h3>
          <div className="sec-content-div flexible">
            <p>
              The FitQuest is designed to support users in achieving their goals while prioritizing their physical health...
            </p>
            <img src="/basketball-1.jpg" alt="People playing basketball" />
          </div>
        </section>
        <section id="varieties" className="sec-padding">
          <h3 className="section-heading">WORKOUT PLANS</h3>
          <div className="sec-content-div flexible">
            <div className="tile">
              <img src="/student.jpg" alt="photo of student" />
              <h4>STUDENT</h4>
              <ul>
                <li>Bodyweight Exercises</li>
                <li>Time-Efficient</li>
                <li>Stress Relief</li>
                <li>Variety and Fun</li>
              </ul>
            </div>
            <div className="tile">
              <img src="/employee.jpg" alt="Corporate Employee" />
              <h4>Corporate Employee</h4>
              <ul>
                <li>Effective Time Management</li>
                <li>Interval Training</li>
                <li>Office-Friendly Exercises</li>
                <li>Stress Reduction</li>
              </ul>
            </div>
            <div className="tile">
              <img src="/remote.png" alt="Remote Workers" />
              <h4>Remote Workers</h4>
              <ul>
                <li>Home Workouts</li>
                <li>Ergonomics</li>
                <li>Balanced Routines</li>
                <li>Digital Detox</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="our-service" className="sec-padding">
          <h3 className="section-heading">OUR SERVICE</h3>
          <div className="sec-content-div">
            <div className="bars">
              <div className="icon-container">
                <img src="/effectiveworkout.gif" alt="Effective Workouts" />
              </div>
              <div className="txt-container">
                <h5>Effective Fitness plans</h5>
                <p>We provide satisfactory workout plans that users can customize.</p>
              </div>
            </div>
            <div className="bars">
              <div className="icon-container">
                <img src="/huddle.gif" alt="Community" />
              </div>
              <div className="txt-container">
                <h5>COMMUNITY</h5>
                <p>Connect with people with similar interests and work out in groups.</p>
              </div>
            </div>
            <div className="bars">
              <div className="icon-container">
                <img src="/events.gif" alt="Events" />
              </div>
              <div className="txt-container">
                <h5>EVENTS</h5>
                <p>Join or create events and invite friends and families to enjoy.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="benefits" className="sec-padding">
          <h3 className="section-heading">BENEFITS</h3>
          <div className="sec-content-div flexible">
            <iframe
              id="video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/W_JOJNztrnI"
              title="Benefits of Fitness"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
        <section id="contact" className="sec-padding">
          <h3 className="section-heading">CONTACT</h3>
          <div className="sec-content-div flexible">
            <h6>To make an order or just to know more, contact us:</h6>
        
          </div>
        </section>
      </main>
      <footer>
        {/* Footer content here */}
      </footer>
    </div>
  );
};

export default HomePage;
