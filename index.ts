import * as fs from 'fs';
import * as path from 'path';
import xml2js from 'xml2js';

import entryFormat from './resources/structureDefinition/entryformat-extension';
import maxValue from './resources/structureDefinition/maxvalue-extension';
import { Extension } from './types/fhir';

const parser = new xml2js.Parser();
let minLength: Extension;

fs.readFile(path.join(__dirname, './resources/structureDefinition/minlength-extension.xml'), function (err, data) {
    parser.parseString(data, function (err, result) {
        minLength = result;
    });
});

export {
    entryFormat,
    maxValue,
    minLength
};

export default [entryFormat, maxValue];