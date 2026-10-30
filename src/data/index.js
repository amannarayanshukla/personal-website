import { personalData } from '@data/personal';
import { pillarsData } from '@data/pillars';
import { projectsData } from '@data/projects';
import { experienceData } from '@data/experience';
import { writingData } from '@data/writing';

export const SITE_DATA = {
    ...personalData,
    pillars: pillarsData,
    projects: projectsData,
    experience: experienceData,
    writing: writingData
};

export {
    personalData,
    pillarsData,
    projectsData,
    experienceData,
    writingData
};
