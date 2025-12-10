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
    text: string,
    url: string
}

export type{
    ProjectTileProps,
    ProjectButtonProps,
}