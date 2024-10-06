
import Navbar from '@/customs/navbar';
import './Exercises.css';

function Exercises() {
    return (
     <div>

    <Navbar/>
    <div className="exercises-page">
            <div className="exercises-container">
                {/* Card to explore all exercises and yoga */}
                <div className="exercises-card create-card">
                    <h2>Explore All Exercises and Yogas</h2>
                    <p>Discover a variety of exercises and yoga asanas we have in store for you.</p>
                    <a href="/exercises/all" className="exercises-btn">Explore Now</a>
                </div>
                
                {/* Card to get exercises from a curated plan */}
                <div className="exercises-card create-card">
                    <h2>Get Exercises from a Curated Plan</h2>
                    <p>Receive tailored exercise plans based on your preferences and goals.</p>
                    <a href="/exercises/curated-plans" className="exercises-btn">Get Started</a>
                </div>
                
                {/* Card for AI-generated yoga suggestions */}
                <div className="exercises-card join-card">
                    <h2>Try Our New AI Feature</h2>
                    <p>Generate personalized yoga routines based on your requirements using AI.</p>
                    <a href="/exercises/Ai-plans" className="exercises-btn">Try Now</a>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Exercises;

