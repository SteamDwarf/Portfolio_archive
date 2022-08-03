import './skills__combined-item.style.scss';

const SkillsCombinedItem = ({skillNames = [], skillLogos = []}) => {
    return (
        <div className="skill-item">
            <div className="skill-item__logos-block">
                {skillLogos.map((logo, i) => <img key={skillNames[i]} src={logo} alt={skillNames[i]} className="skill-item__logo"/>)}
            </div>
            <p className="skill-item__names">
                {skillNames.reduce((resString, skillName) => resString ? `${resString} / ${skillName}` : `${skillName}`, '')}
            </p>
        </div>
    );
}

export default SkillsCombinedItem;