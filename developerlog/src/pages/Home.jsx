import LogCard from '../components/LogCard'
import profileImg from '../assets/MayaHJ.jpg'

export default function Home() {
  return (
    <div className="home-main">
      <h2 id="main-title">WELCOME: i.c Stars Evolution|Stars Align My Journey Through Business, Leadership and Technology Development Log</h2>
      <div className="about-center">
        <img className="profile-img" src={profileImg} alt="Mayaheadshot"/>
        <section>
          <h2>About Me</h2>
          <p>
            Sales Development Representative | Business Analyst | Passionate about leveraging data to drive sales strategies and business growth. Connect with me on LinkedIn for more insights and opportunities| Let's drive success together!
          </p>
        </section>
      </div>
    </div>
  )
}
