import { ProjectTileProps } from "../utilities/Interfaces";
import { Strings } from "../utilities/Strings";
import ProjectButton from "./ProjectButton";


export default function ProjectTile({title, summary, image_src, image_alt}: ProjectTileProps) {
    return (
        <div>
            <div className="portfolio-tile">
                <div className="portfolio-tile-image mobile">
                    <img
                        src={image_src}
                        alt={image_alt}
                    />
                </div>
                <div className="portfolio-tile-body">
                    <h2 className="subtitle-text">{title}</h2>
                    <h4 className="vollkorn-text">{summary}</h4>
                </div>
                <div className="portfolio-tile-controls">
                    <ProjectButton 
                        text={Strings.portfolio.project_tile.case}
                        url={"#"}
                    />
                    <ProjectButton 
                        text={Strings.portfolio.project_tile.repo}
                        url={"#"}
                    />
                    <ProjectButton 
                        text={Strings.portfolio.project_tile.demo}
                        url={"#"}
                    />
                    {/* <div className="portfolio-button"><a href="#" className="link tooling-text">{Strings.portfolio.project_tile.case}<i className="portfolio-button-icon bi bi-pen-fill"></i></a></div>
                    <div className="portfolio-button"><a href="#" className="link tooling-text">{Strings.portfolio.project_tile.repo}<i className="portfolio-button-icon bi bi-github"></i></a></div>
                    <div className="portfolio-button"><a href="#" className="link tooling-text">{Strings.portfolio.project_tile.demo}<i className="portfolio-button-icon bi bi-play-circle-fill"></i></a></div> */}
                </div>
            </div>
        </div>
    )
}