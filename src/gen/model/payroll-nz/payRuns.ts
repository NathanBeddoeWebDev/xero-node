/**
 * Xero Payroll NZ
 * This is the Xero Payroll API for orgs in the NZ region.
 *
 * The version of the OpenAPI document: 2.7.0
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Pagination } from '././pagination';
import { PayRun } from '././payRun';
import { Problem } from '././problem';

export class PayRuns {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'payRuns'?: Array<PayRun>;

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
            "name": "payRuns",
            "baseName": "payRuns",
            "type": "Array<PayRun>"
        }    ];

    static getAttributeTypeMap() {
        return PayRuns.attributeTypeMap;
    }
}

