import { PositionProps } from "../../utilities/Interfaces";

export default function Position ({position}: PositionProps) {
    return(
        <div>
            <h2 className="exp-title subtitle-text">{position.title} {position.start_date}-{position.end_date}</h2>
            <ul>
                {
                    position.points.map((expPoint: string) => {
                        return (
                            <li className="exp-point vollkorn-text">{expPoint}</li>
                        )
                    })
                }
                {/* <li className="exp-point vollkorn-text">UX and frontend development on the Clinical One clinical trial management tool, including product functionality leading to a revenue increase of more than &dollar;2.5 million</li>
                <li className="exp-point vollkorn-text">Lead project to modernize tech framework of product&napos;s core functionality</li>
                <li className="exp-point vollkorn-text">Developed efficient, reusable, testable components with a reputation for delivering ahead of schedule</li>
                <li className="exp-point vollkorn-text">Collaborated closely with design and product management teams to implement and refine the user experience</li>
                <li className="exp-point vollkorn-text">Specialized in resolving accessibility bugs and unforeseen UX issues</li>
                <li className="exp-point vollkorn-text">Team scrum leader &lpar;June 2024&ndash;Present&rpar;</li> */}
            </ul>
        </div>
    );
};