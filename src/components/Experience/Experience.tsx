import { Experiences as ExperienceData, Skills as SkillData } from "../../data/experiences";
import {  ExperienceType, PositionType, SkillsetType } from "../../utilities/Interfaces";
import Position from "./Position";
import Skillset from "./Skillset";

export default function Experience () {

    return (
        <div>
            <p>Experience!</p>
            <section className="work-experience">
                <h1 className="title-text">Experience</h1>
                <div>
                    {
                        ExperienceData.map((experience: ExperienceType, index: number) => {
                            return (
                                <div>
                                    <span className="exp-company vollkorn-sc">{experience.company}</span>
                                    {
                                        experience.positions.map((position: PositionType, index: number) => {
                                            return (<Position position={position} />);
                                        })
                                    }
                                </div>
                            );
                            
                        })
                    }
                </div>
            </section>
            <div className="sidebar">
                <section className="skills">
                    <h1 className="title-text">Skills & Tools</h1>
                    {
                        SkillData.map((skillset: SkillsetType, index: number) => {
                            return(<Skillset skillset={skillset}></Skillset>);
                        })
                    }
                </section>
                <div className="divider"></div>
                <section className="education">
                    <h1 className="title-text">Education</h1>
                        <ul>
                            <li>
                                <div>                                    
                                    <h2 className="edu-title subtitle-text"><strong>Master of Science, Computer Science</strong></h2>
                                    <span className="vollkorn-text">Northeastern University&mdash;Boston, MA &lpar;May 2022&rpar;</span>
                                </div>
                            </li>
                            <li>
                                <div>                                    
                                    <h2 className="edu-title subtitle-text"><strong>Bachelor of Arts, English</strong></h2>
                                    <span className="vollkorn-text">Wheaton College&mdash;Norton, MA &lpar;May 2013&rpar;</span>
                                    <span className="vollkorn-text">Minors: Computer Science, Studio Art</span>
                                </div>
                            </li>
                        </ul>
                </section>
            </div>
        </div>
    );

};