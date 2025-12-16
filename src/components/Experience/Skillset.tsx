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
                {/* <li className="montserrat-regular">HTML</li>
                <li className="montserrat-regular">CSS</li>
                <li className="montserrat-regular">JavaScript</li>
                <li className="montserrat-regular">TypeScript</li>
                <li className="montserrat-regular">Java</li>
                <li className="montserrat-regular">Python</li>
                <li className="montserrat-regular">SQL</li> */}
            </ul>
        </div>
    );
};