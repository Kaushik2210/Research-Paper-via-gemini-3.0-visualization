export interface SectionProps {
    id: string;
    className?: string;
    children: React.ReactNode;
}

export interface NavItem {
    id: string;
    label: string;
}

export interface DetectionData {
    model: string;
    raw: number;
    beautified: number;
}

export enum SectionId {
    HERO = 'hero',
    MECHANISMS = 'mechanisms',
    IMPACTS = 'impacts',
    POLITICS = 'politics',
    DETECTION = 'detection',
    FUTURE = 'future'
}