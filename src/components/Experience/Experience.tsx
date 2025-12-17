import { Experiences as ExperienceData, Skills as SkillData, Education as EducationData } from "../../data/experiences";
import {  EducationType, ExperienceType, PositionType, SkillsetType } from "../../utilities/Interfaces";
import Education from "./Education";
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
                            {
                                EducationData.map((education: EducationType) => {
                                    return(<Education education={education}></Education>);
                                })
                            }
                        </ul>
                </section>
            </div>
        </div>
    );

};