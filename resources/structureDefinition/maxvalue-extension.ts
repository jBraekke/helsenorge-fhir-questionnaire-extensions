import { Extension } from "../../types/fhir";

const maxValueExtension = {
    xmlns: "http://hl7.org/fhir",
    id: "maxValue",
    extension: [
        {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
            valueCode: "fhir"
        },
        {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
            valueInteger: "1"
        }
    ],
    url: "http://hl7.org/fhir/StructureDefinition/maxValue",
    version: "4.0.1",
    name: "MaxValue",
    status: "draft",
    date: "2014-04-27",
    publisher: "Health Level Seven International (FHIR Infrastructure)",
    contact: {
        telecom: {
            system: "url",
            value: "http://www.hl7.org/Special/committees/fiwg"
        }
    },
    description: "The inclusive upper bound on the range of allowed values for the data element.",
    fhirVersion: "4.0.1",
    mapping: [
        {
            identity: "v2",
            uri: "http://hl7.org/v2",
            name: "HL7 v2 Mapping"
        },
        {
            identity: "rim",
            uri: "http://hl7.org/v3",
            name: "RIM Mapping"
        }
    ],
    kind: "complex-type",
    abstract: "false",
    context: {
        type: "element",
        expression: "Questionnaire.item"
    },
    type: "Extension",
    baseDefinition: "http://hl7.org/fhir/StructureDefinition/Extension",
    derivation: "constraint",
    differential: {
        element: [
            {
                id: "Extension",
                path: "Extension",
                short: "Must be <= this value",
                definition: "The inclusive upper bound on the range of allowed values for the data element.",
                comment: "Data type specified must be the same as the data type for the data element.",
                max: "1",
                mapping: [
                    {
                        identity: "v2",
                        map: "N/A"
                    },
                    {
                        identity: "rim",
                        map: "N/A (MIF-level)"
                    }
                ]
            },
            {
                id: "Extension.url",
                path: "Extension.url",
                fixedUri: "http://hl7.org/fhir/StructureDefinition/maxValue"
            },
            {
                id: "Extension.value[x]",
                path: "Extension.value[x]",
                min: "1",
                type: ["date", "dateTime", "time", "instant", "decimal", "integer"]
            }
        ]
    }
} as Extension;

export default maxValueExtension;