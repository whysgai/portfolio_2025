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

interface EducationProps {
    education: EducationType,
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
    skills: {
        title: string, 
        icon: string,
    }[],
};

interface EducationType {
    degree: string,
    field: string,
    institution: string,
    city: string,
    state: string,
    matriculation: string,
    graduation: string,
}

export type {
    HeaderProps,
    ProjectTileProps,
    ProjectButtonProps,
    PositionProps,
    SkillsetProps,
    EducationProps,
    ExperienceType,
    PositionType,
    SkillsetType,
    EducationType,
}