import { EducationProps } from "../../utilities/Interfaces";

export default function Education ({education}: EducationProps) {
    return (
        <>
            <li>
                <div>
                    <h2 className="edu-title subtitle-text"><strong>{education.degree}, {education.field}</strong></h2>
                    <span className="vollkorn-text">{education.institution}&mdash;{education.city}, {education.state} &lpar;{education.graduation}&rpar;</span>
                </div>
            </li>
        </>
    );
}