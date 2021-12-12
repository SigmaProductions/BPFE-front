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
export function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      areObjects && !deepEqual(val1, val2) ||
      !areObjects && val1 !== val2
    ) {
      return false;
    }
  }
  return true;
}
function isObject(object) {
  return object != null && typeof object === 'object';
}