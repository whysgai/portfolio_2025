import ProjectTile from "./ProjectTile";
import { ProjectTiles } from "../../data/project_tiles";
import { ProjectTileProps } from "../../utilities/Interfaces";
import { Strings } from "../../utilities/Strings";

export default function Portfolio() {
    return (
        <div>
            <section className="container intro">
                <h1 className="title-text">{Strings.portfolio.heading}</h1>
                <span className="montserrat-regular">{Strings.portfolio.subheading}</span>
                <p className="vollkorn-text">{Strings.portfolio.description}</p>
            </section>
            <section id="Projects" className="portfolio container">
                <h1 className="title-text">{Strings.portfolio.section_title}</h1>
                <ProjectTile 
                    title={ProjectTiles.telling_tailes.title}
                    summary={ProjectTiles.telling_tailes.summary}
                    image_src={ProjectTiles.telling_tailes.image_src}
                    image_alt={ProjectTiles.telling_tailes.image_alt}
                    case_url="#"
                    repo_url="#"
                    demo_url="#"
                />
                <ProjectTile 
                    title={ProjectTiles.mass_pass.title}
                    summary={ProjectTiles.mass_pass.summary}
                    image_src={ProjectTiles.mass_pass.image_src}
                    image_alt={ProjectTiles.mass_pass.image_alt}
                    case_url="#"
                    demo_url="#"
                />
                <ProjectTile 
                    title={ProjectTiles.bpb.title}
                    summary={ProjectTiles.bpb.summary}
                    image_src={ProjectTiles.bpb.image_src}
                    image_alt={ProjectTiles.bpb.image_alt}
                    case_url="#"
                    repo_url="#"
                    demo_url="#"
                />
            </section>
        </div>
    )
}