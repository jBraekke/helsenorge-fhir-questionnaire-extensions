import { Extension } from './types/fhir';
import entryFormat from './resources/structureDefinition/entryformat-extension';
import maxValue from './resources/structureDefinition/maxvalue-extension';

export {
    entryFormat,
    maxValue
};

export default [entryFormat, maxValue] as Extension[];