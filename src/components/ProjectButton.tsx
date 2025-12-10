import { ProjectButtonProps } from "../utilities/Interfaces";
import { Strings } from "../utilities/Strings";

export default function ProjectButton ({text, url}: ProjectButtonProps) {
    return (
        <div className="portfolio-button">
            <a href={url} className="link tooling-text">{text}
                <i className="portfolio-button-icon bi bi-pen-fill"></i>
            </a>
        </div>
    )

}