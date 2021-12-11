import endpoints from '../client/endpoints.json';

export const firstLetterUpperCase = (string) => string.charAt(0).toUpperCase() + string.slice(1);
export function findSummary(endpoint) {
    return endpoints.find((obj) => obj.endpoint === endpoint).summary;
}
