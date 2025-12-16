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
            </ul>
        </div>
    );
};