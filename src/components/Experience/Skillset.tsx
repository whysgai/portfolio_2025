import { SkillsetProps } from "../../utilities/Interfaces";


export default function Skillset ({skillset}: SkillsetProps) {
    return (
        <div>
            <h2 className="skills-title subtitle-text">{skillset.skillset}</h2>
            <ul>
                {
                    skillset.skills.map((skill: {title: string, icon: string}) => {
                        return (
                            <li className="montserrat-regular">{skill.title}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
};