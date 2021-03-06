import { element } from 'prop-types';
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

export function flowInstanceDifferent(instance1, instance2) {
    let result = false;
    result= result || instance1.elements.length != instance2.elements.length;
    if(result)
        return true;
    for (let i = 0; i < instance1.elements.length; i++) {
        result = result || instance1.elements[i].position?.x != instance2.elements[i].position?.x
            || instance1.elements[i].position?.y != instance2.elements[i].position?.y
    }

    result = result || instance1.position[0] != instance2.position[1]
    return result;
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