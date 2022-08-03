import './about.style.scss';
import photo from '../../assets/images/my-photo.jpg';
import CV from '../../assets/Shazhko_Dmitriy_CV.pdf';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="about__information">
                <h1 className="about__title">Dmitriy Shazhko</h1>
                <p className="about__description text">
                    I am a FrontEnd Developer with 1.5 years of experience looking for the new opportunities.
                    I love coding and I use modern technologies to develop web applications.
                </p>
                <a className="about__cv-download" href={CV} target='_blank'>Resume</a>
            </div>
            <img className="about__img" src={photo} alt="" />
        </section>
    );
}

export default About;