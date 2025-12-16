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
                    {/* <h2 className="exp-title subtitle-text">SOFTWARE DEVELOPER II &lpar;JANUARY 2022 &ndash; PRESENT&rpar;</h2>
                    <ul>
                        <li className="exp-point vollkorn-text">UX and frontend development on the Clinical One clinical trial management tool, including product functionality leading to a revenue increase of more than &dollar;2.5 million</li>
                        <li className="exp-point vollkorn-text">Lead project to modernize tech framework of product&napos;s core functionality</li>
                        <li className="exp-point vollkorn-text">Developed efficient, reusable, testable components with a reputation for delivering ahead of schedule</li>
                        <li className="exp-point vollkorn-text">Collaborated closely with design and product management teams to implement and refine the user experience</li>
                        <li className="exp-point vollkorn-text">Specialized in resolving accessibility bugs and unforeseen UX issues</li>
                        <li className="exp-point vollkorn-text">Team scrum leader &lpar;June 2024&ndash;Present&rpar;</li>
                    </ul> */}
                    {/* <h2 className="exp-title subtitle-text">UX DEVELOPMENT CO&dash;OP &lpar;JULY 2021 &ndash; DECEMBER 2021&rpar;</h2>
                    <ul>
                        <li className="exp-point vollkorn-text">Defined UX and requirements in collaboration with designers and senior developers to add features to clinical trial product</li>
                        <li className="exp-point vollkorn-text">Implemented proof-of-concept functionality for primary product</li>
                        <li className="exp-point vollkorn-text">Developed centralized help menu with live chat functionality available to all product users</li>
                        <li className="exp-point vollkorn-text">Developed new business unit hub for sharing internal announcements, heavily customizing a low-code environment interface</li>
                    </ul> */}
                </div>
                {/* <div>
                    <span className="exp-company vollkorn-sc">Lesley University</span>
                    <h2 className="exp-title subtitle-text">SYSTEMS ANALYST &lpar;DECEMBER 2018 &ndash; JUNE 2021&rpar;</h2>
                    <ul>
                        <li>Developed tools, procedures, and documentation based on internal user research and interviews</li>
                        <li className="exp-point vollkorn-text">Performed maintenance and upkeep of university website and outreach emails</li>
                        <li className="exp-point vollkorn-text">Automated multiple data manipulation and transfer process using combination of scripting and GUI-based tools</li>                      
                        <li className="exp-point vollkorn-text">Technical advisor to Director of Enrollment Management Operations and contact point for third party vendors and internal IS department</li>
                    </ul>
                </div>
                <div>
                    <span className="exp-company vollkorn-sc">Dana&dash;Farber Cancer Institute&frasl;Partners Healthcare</span>
                    <h2 className="exp-title subtitle-text">FRONT&dash;END WEB DEVELOPER &lpar;MARCH 2018 &ndash; DECEMBER 2018&rpar;</h2>
                    <ul>
                        <li className="exp-point vollkorn-text">Designed and implemented mobile UX for desktop-oriented online ticketing pages</li>
                        <li className="exp-point vollkorn-text">Developed web page designs provided by marketing group via HTML, CSS, JavaScript, and existing platform tools</li>
                    </ul>
                </div>
                <div>
                    <span className="exp-company vollkorn-sc">Freelance Web Development</span>
                    <h2 className="exp-title subtitle-text">SELF-EMPLOYED &lpar;SEPTEMBER 2016 &ndash; AUGUST 2019&rpar;</h2>
                    <ul>
                        <li className="exp-point vollkorn-text">Developed and designed web pages and applications with a focus on usability and delivery of information</li>
                        <li className="exp-point vollkorn-text">Provided full implementation services for client; navigation, branding, and styling</li>
                        <li className="exp-point vollkorn-text">Drafted content with business development lead, providing stylistic, syntactical, and formatting decisions</li>
                    </ul>
                </div>
                <div>
                    <span className="exp-company vollkorn-sc">Partners In Health</span>
                    <h2 className="exp-title subtitle-text">SOLUTIONS ENGINEER/SYSTEMS ANALYST/SUPPORT TECHNICIAN &lpar;FEB 2018&ndash;Nov 2013&rpar;</h2>
                    <ul>
                        <li className="exp-point vollkorn-text">Developed and supported web application allowing for validation and scheduling of user-generated imports to production database</li>
                        <li className="exp-point vollkorn-text">Developed scripting to parse 2500+ transactions per year from various data sources, reformatting and adding metadata and cleaning for import</li>
                    </ul>
                </div> */}
            </section>
            <div className="sidebar">
                <section className="skills">
                    <h1 className="title-text">Skills & Tools</h1>
                    {
                        SkillData.map((skillset: SkillsetType, index: number) => {
                            return(<Skillset skillset={skillset}></Skillset>);
                        })
                    }
                    {/* <h2 className="skills-title subtitle-text">Languages</h2>
                    <ul>
                        <li className="montserrat-regular">HTML</li>
                        <li className="montserrat-regular">CSS</li>
                        <li className="montserrat-regular">JavaScript</li>
                        <li className="montserrat-regular">TypeScript</li>
                        <li className="montserrat-regular">Java</li>
                        <li className="montserrat-regular">Python</li>
                        <li className="montserrat-regular">SQL</li>
                    </ul>
                    <h2 className="skills-title subtitle-text">Front-end Frameworks</h2>
                    <ul>
                        <li className="montserrat-regular">React</li>
                        <li className="montserrat-regular">Redux</li>
                        <li className="montserrat-regular">Knockouts</li>
                    </ul>
                    <h2 className="skills-title subtitle-text">Tools</h2>
                    <ul>
                        <li className="montserrat-regular">Git</li>
                        <li className="montserrat-regular">npm</li>
                        <li className="montserrat-regular">Jira</li>
                        <li className="montserrat-regular">JUnit</li>
                        <li className="montserrat-regular">Mocha</li>
                    </ul>
                    <h2 className="skills-title subtitle-text">Design</h2>
                    <ul>
                        <li className="montserrat-regular">Figma</li>
                        <li className="montserrat-regular">Adobe Creative Suite</li>
                        <li className="montserrat-regular">User research</li>
                        <li className="montserrat-regular">Personas</li>
                        <li className="montserrat-regular">Business analysis</li>
                        <li className="montserrat-regular">Requirement development</li>
                        <li className="montserrat-regular">Wireframing</li>
                        <li className="montserrat-regular">Prototyping</li>
                        <li className="montserrat-regular">Testing and evaluation</li>
                        <li className="montserrat-regular">Accessibility</li>
                    </ul> */}
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