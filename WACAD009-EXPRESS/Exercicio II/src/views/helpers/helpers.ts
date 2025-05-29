import { Tech } from './helpersTypes';

export function listTechs(technologies: Tech[]) {
    const list = technologies
        .filter(tech => tech.poweredByNodejs)
        .map(tech => `<li>${tech.name} - ${tech.type}</li>`); 
    return `<ul>${list.join('')}</ul>`;
}