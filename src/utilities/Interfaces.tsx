import { ProjectTileButtonTypes, View } from "./Enums"

interface HeaderProps {
    changeView: (newView: View) => void;
}

interface ProjectTileProps {
    title: string,
    summary: string,
    image_src: string,
    image_alt: string,
    case_url?: string,
    repo_url?: string,
    demo_url?: string,
}

interface ProjectButtonProps {
    type: ProjectTileButtonTypes,
    url: string
}



export type {
    HeaderProps,
    ProjectTileProps,
    ProjectButtonProps,
}