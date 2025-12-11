import { ProjectTileButtonTypes } from "../utilities/Enums";
import { ProjectButtonProps } from "../utilities/Interfaces";
import { Strings } from "../utilities/Strings";

export default function ProjectButton ({type, url}: ProjectButtonProps) {

    const text = (
        type === ProjectTileButtonTypes.Case ? 
            Strings.portfolio.project_tile.case
            :
            type === ProjectTileButtonTypes.Repo ?
                Strings.portfolio.project_tile.repo
                :
                type === ProjectTileButtonTypes.Demo ?
                    Strings.portfolio.project_tile.demo
                    :
                    "Error: Invalid button type"
    );

    const icon = (
        type === ProjectTileButtonTypes.Case ? 
            "bi-pen-fill"
            :
            type === ProjectTileButtonTypes.Repo ?
                "bi-github"
                :
                type === ProjectTileButtonTypes.Demo ?
                    "bi-play-circle-fill"
                    :
                    "Error: Invalid button type"
    );

    return (
        <div className={`portfolio-button`}>
            <a href={url} className={`link tooling-text`}>{text}
                <i className={`portfolio-button-icon bi ${icon}`}></i>
            </a>
        </div>
    )

}