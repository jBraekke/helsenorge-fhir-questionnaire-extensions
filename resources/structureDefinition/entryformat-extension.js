const extension = {
    structureDefinition: {
        xmlns: "http://hl7.org/fhir",
        id: "entryFormat",
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
        url: "http://hl7.org/fhir/StructureDefinition/entryFormat",
        version: "4.0.1",
        name: "EntryFormat",
        status: "draft",
        date: "2014-04-27",
        publisher: "Health Level Seven International (FHIR Infrastructure)",
        contact: {
            telecom: {
                system: "url",
                value: "http://www.hl7.org/Special/committees/fiwg"
            }
        },
        description: "Additional instructions for the user to guide their input (i.e. a human readable version of a regular expression like \"nnn-nnn-nnn\"). In most UIs this is the placeholder (or 'ghost') text placed directly inside the edit controls and that disappear when the control gets the focus.",
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
        context: [
            {
                type: "element",
                expression: "Questionnaire.item"
            },
            {
                type: "element",
                expression: "ElementDefinition"
            }
        ],
        type: "Extension",
        baseDefinition: "http://hl7.org/fhir/StructureDefinition/Extension",
        derivation: "constraint",
        differential: {
            element: [
                {
                    id: "Extension",
                    path: "Extension",
                    short: "User prompt for format",
                    definition: "Additional instructions for the user to guide their input (i.e. a human readable version of a regular expression like \"nnn-nnn-nnn\"). In most UIs this is the placeholder (or 'ghost') text placed directly inside the edit controls and that disappear when the control gets the focus.",
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
                    fixedUri: "http://hl7.org/fhir/StructureDefinition/entryFormat"
                },
                {
                    id: "Extension.value[x]",
                    path: "Extension.value[x]",
                    min: "1",
                    type: {
                        code: "string"
                    }
                }
            ]
        }
    }
}

export default extension;