import './skills.style.scss';
import SkillsCombinedItem from './__combined-item/skills__combined-item';
import HTMLLogo from '../../assets/skill-icons/html-5.svg';
import CSSLogo from '../../assets/skill-icons/css-3.svg';
import SassLogo from '../../assets/skill-icons/sass.svg';
import LessLogo from '../../assets/skill-icons/less.svg';
import JSLogo from '../../assets/skill-icons/js.svg';
import TSLogo from '../../assets/skill-icons/typescript.svg';
import ReactLogo from '../../assets/skill-icons/react.svg';
import ReactRouterLogo from '../../assets/skill-icons/react-router.svg';
import ReduxLogo from '../../assets/skill-icons/redux.svg';
import SocketLogo from '../../assets/skill-icons/socket-io.svg';
import CSharpLogo from '../../assets/skill-icons/c-sharp.svg';
import UnityLogo from '../../assets/skill-icons/unity.svg';
import WebpackLogo from '../../assets/skill-icons/webpack.svg';
import GulpLogo from '../../assets/skill-icons/gulp.svg';
import GitLogo from '../../assets/skill-icons/git.svg';
import DockerLogo from '../../assets/skill-icons/docker.svg';
import LinuxLogo from '../../assets/skill-icons/linux.svg';
import SkillsImg from '../../assets/images/skills.jpg';

const Skills = () => {
    return (
        <section id="skills" className="section skills">
            <h2 className="title">Skills</h2>
            <div className="skills__container">
                <img src={SkillsImg} alt="skills" className="w-1/2"/>
                <div className="skills__information">
                    <p className="text">I have experience with this technologies:</p>
                    <div className="skills__logos-container">
                        <SkillsCombinedItem skillNames={["HTML5", "CSS3"]} skillLogos={[HTMLLogo, CSSLogo]}/>
                        <SkillsCombinedItem skillNames={["Sass", "Less"]} skillLogos={[SassLogo, LessLogo]}/>
                        <SkillsCombinedItem skillNames={["JavaScript", "TypeScript"]} skillLogos={[JSLogo, TSLogo]}/>       
                        <SkillsCombinedItem skillNames={["React", "React Router"]} skillLogos={[ReactLogo, ReactRouterLogo]}/>
                        <SkillsCombinedItem skillNames={["Redux"]} skillLogos={[ReduxLogo]}/>
                        <SkillsCombinedItem skillNames={["Socket.io"]} skillLogos={[SocketLogo]}/>
                        <SkillsCombinedItem skillNames={["C#"]} skillLogos={[CSharpLogo]}/>
                        <SkillsCombinedItem skillNames={["Unity"]} skillLogos={[UnityLogo]}/>
                        <SkillsCombinedItem skillNames={["Webpack", "Gulp"]} skillLogos={[WebpackLogo, GulpLogo]}/>
                        <SkillsCombinedItem skillNames={["Git", "Docker"]} skillLogos={[GitLogo, DockerLogo]}/>
                        <SkillsCombinedItem skillNames={["Linux"]} skillLogos={[LinuxLogo]}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;