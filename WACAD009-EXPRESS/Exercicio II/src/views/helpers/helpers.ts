import { Tech } from './helpersTypes';

export function listTechs(technologies: Tech[]) {
    const list = technologies
        .filter(tech => tech.poweredByNodejs)
        .map(tech => `${tech.name} - ${tech.type}`);
         
    return list;
}