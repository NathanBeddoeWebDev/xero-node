/**
 * Xero Payroll UK
 * This is the Xero Payroll API for orgs in the UK region.
 *
 * The version of the OpenAPI document: 2.7.0
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Deduction } from '././deduction';
import { Pagination } from '././pagination';
import { Problem } from '././problem';

export class Deductions {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'deductions'?: Array<Deduction>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pagination",
            "baseName": "pagination",
            "type": "Pagination"
        },
        {
            "name": "problem",
            "baseName": "problem",
            "type": "Problem"
        },
        {
            "name": "deductions",
            "baseName": "deductions",
            "type": "Array<Deduction>"
        }    ];

    static getAttributeTypeMap() {
        return Deductions.attributeTypeMap;
    }
}

