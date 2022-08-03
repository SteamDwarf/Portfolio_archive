const SkillsItem = ({skillName, skillLogo}) => {
    return (
        <div className="text-center space-y-2">
            <img src={skillLogo} alt={skillName} className="w-24 h-24"/>
            <p className="text-lightGrey text-xl">{skillName}</p>
        </div>
    );
}

export default SkillsItem;