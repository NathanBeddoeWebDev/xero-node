/**
 * Xero Projects API
 * This is the Xero Projects API
 *
 * The version of the OpenAPI document: 2.7.0
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Pagination } from '././pagination';
import { Project } from '././project';

export class Projects {
    'pagination'?: Pagination;
    'items'?: Array<Project>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pagination",
            "baseName": "pagination",
            "type": "Pagination"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<Project>"
        }    ];

    static getAttributeTypeMap() {
        return Projects.attributeTypeMap;
    }
}

