/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.8
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Journal } from '././journal';

export class Journals {
    'journals'?: Array<Journal>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "journals",
            "baseName": "Journals",
            "type": "Array<Journal>"
        }    ];

    static getAttributeTypeMap() {
        return Journals.attributeTypeMap;
    }
}

