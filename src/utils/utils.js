import endpoints from '../client/endpoints.json';

export const firstLetterUpperCase = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export function findSummary(endpoint) {
    return endpoints.find((obj) => obj.endpoint === endpoint).summary;
}
export function findEndpoint(summary) {
    return endpoints.find((obj) => obj.summary === summary).endpoint;
}

export function findEndpointObjectsWithPhrase(phrase) {
    return endpoints.filter(({ summary }) => summary.toLowerCase().includes(phrase.toLowerCase()));
}
