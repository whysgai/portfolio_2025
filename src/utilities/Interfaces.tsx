import { ProjectTileButtonTypes, View } from "./Enums"


// PROPERTIES

interface HeaderProps {
    changeView: (newView: View) => void;
};

interface ProjectTileProps {
    title: string,
    summary: string,
    image_src: string,
    image_alt: string,
    case_url?: string,
    repo_url?: string,
    demo_url?: string,
};

interface ProjectButtonProps {
    type: ProjectTileButtonTypes,
    url: string,
};

interface PositionProps {
    position: PositionType,
}

interface SkillsetProps {
    skillset: SkillsetType,
}

// TYPES

interface ExperienceType {
    company: string,
    positions: PositionType[],
};

interface PositionType {
    title: string,
    start_date: string,
    end_date: string,
    points: string[],
};

interface SkillsetType {
    skillset: string,
    skills: SkillType[],
};

interface SkillType {
    title: string, 
    icon: string,
}

export type {
    HeaderProps,
    ProjectTileProps,
    ProjectButtonProps,
    PositionProps,
    SkillsetProps,
    ExperienceType,
    PositionType,
    SkillsetType,
}