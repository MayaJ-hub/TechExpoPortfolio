import IMG_6934 from '../assets/images/IMG_6934.jpeg';
import IMG_6936 from '../assets/images/IMG_6936.jpeg';
import IMG_7041 from '../assets/images/IMG_7041.jpeg';
import IMG_7639 from '../assets/images/IMG_7639.jpeg';
import FinalUnited from '../assets/images/FinalUnited.jpg';
import techbash1 from '../assets/images/techbash1.jpg';
import techbash2 from '../assets/images/techbash2.jpg';
import techbash3 from '../assets/images/techbash3.jpg';
import salesf1 from '../assets/images/salesf1.jpg';
import salesf2 from '../assets/images/salesf2.jpg';
import salesf3 from '../assets/images/salesf3.jpg';
import salesf4 from '../assets/images/salesf4.jpg';

export default function Business() {
  return (
    <div>
      <h2>Business</h2>
      <p>Business Mindset: Every Line of Code Serves A Business Purpose "Reflections of my sales and entrepreneurial experience is the foundation to how I think in terms of creating value, customer needs and ROI. Practicing PQ positivity intelligence, EQ emotional intelligence, and resilience.</p>

      <h1>Salesforce Gallery</h1>
      <p>During my first visit to the Salesforce office with i.c. stars, I was truly awed from the moment I walked in. The panoramic views and intentional  layout of the space immediately stood out. The environment reflected innovation, collaboration, and excellence at entry level. Experiencing that space firsthand was deeply inspiring. It reinforced my desire to build a career in technology and Salesforce. It helped me visualize myself thriving in a professional environment. That visit became a defining moment, turning aspiration into something tangible and achievable.</p>
      <div className="horizontal-gallery">
        <img src={salesf1} alt="Salesforce 1" />
        <img src={salesf2} alt="Salesforce 2" />
        <img src={salesf3} alt="Salesforce 3" />
        <img src={salesf4} alt="Salesforce 4" />
      </div>

      <h1>United Airlines Gallery</h1>
      <p>The main event at United Airlines was a remarkable experience that showcased the company's commitment to innovation and collaboration. From the initial sprint to final presentation, interpreting RFP requirements, and delivering solutions, the journey was both challenging and rewarding. Strengthened skills in teamwork, data-driven decision making and business focused technical delivery.

      </p>
      <div className="horizontal-gallery">
        <img src={IMG_6934} alt="Gallery 1" />
        <img src={IMG_6936} alt="Gallery 2" />
        <img src={IMG_7041} alt="Gallery 3" />
        <img src={IMG_7639} alt="Gallery 4" />
        <img src={FinalUnited} alt="Final United" />
      </div>

      <h1>Tech Bash 2025</h1>
      <p>Attending Tech Bash 2025 was an incredible experience that immersed me in the latest trends and innovations in the tech industry. The event featured insightful keynote speakers, interactive workshops, and networking opportunities with industry professionals. I gained valuable knowledge about emerging technologies, best practices, and career development strategies. The energy and enthusiasm at Tech Bash were contagious, inspiring me to further pursue my passion for technology and continue learning and growing in my career.</p>
      <div className="horizontal-gallery">
        <img src={techbash1} alt="Tech Bash 1" />
        <img src={techbash2} alt="Tech Bash 2" />
        <img src={techbash3} alt="Tech Bash 3" />
      </div>
    </div>
  )
}
