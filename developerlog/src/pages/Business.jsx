import IMG_6934 from '../assets/images/IMG_6934.jpeg';
import IMG_6936 from '../assets/images/IMG_6936.jpeg';
import IMG_7041 from '../assets/images/IMG_7041.jpeg';
import IMG_7639 from '../assets/images/IMG_7639.jpeg';
import techbash1 from '../assets/images/techbash1.jpg';
import techbash2 from '../assets/images/techbash2.jpg';
import techbash3 from '../assets/images/techbash3.jpg';

export default function Business() {
  return (
    <div>
      <h2>Business</h2>
      <p>Business Mindset: Every Line of Code Serves A Business Purpose "Reflections of my sales and entrepreneurial experience is the foundation to how I think in terms of creating value, customer needs and ROI. Practicing PQ positivity intelligence, EQemotional intelligence, and resilience.</p>

      <h1>United Airlines Gallery</h1>
      <div className="horizontal-gallery">
        <img src={IMG_6934} alt="Gallery 1" />
        <img src={IMG_6936} alt="Gallery 2" />
        <img src={IMG_7041} alt="Gallery 3" />
        <img src={IMG_7639} alt="Gallery 4" />
      </div>

      <h1>Tech Bash 2025</h1>
      <div className="horizontal-gallery">
        <img src={techbash1} alt="Tech Bash 1" />
        <img src={techbash2} alt="Tech Bash 2" />
        <img src={techbash3} alt="Tech Bash 3" />
      </div>
    </div>
  )
}
