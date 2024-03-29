type Icon = {
    id: number,
    icon: string,
    link: string,
}

export type Network = Icon;

type Image = {
    url: string,
    alt?: string,
    link?: string
}

export type Project = {
    id: string | number,
    title: string,
    type: string,
    briefDescription: string,
    mainDescription: string,
    year: string,
    isToShowMockup: boolean,
    previewImageUrl: string,
    mainImage: Image,
    links: {demo?: string, sourceCode?: string}
    technology: Image[],
}

export type SchoolLevel = {
    id: number,
    institution: string,
    degree: string
}

export interface PersonalInfo extends Icon { 
    content: string; 
    target?: boolean;
}

export interface Input {
    id: number;
    for: string;
    label: string;
    type: string;
    placeholder: string;
}

export  interface FormContact {
    fullName: string;
    email: string;
    subject: string;
    message: string;
}

export interface MailOption {
    from: string;
    to: string;
    subject: string;
    html: string;
}

export type Design = Image;