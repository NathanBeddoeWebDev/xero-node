/**
 * Xero Payroll AU
 * This is the Xero Payroll API for orgs in Australia region.
 *
 * The version of the OpenAPI document: 2.7.0
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DeductionLine } from '././deductionLine';
import { EarningsLine } from '././earningsLine';
import { LeaveLine } from '././leaveLine';
import { ReimbursementLine } from '././reimbursementLine';
import { SuperLine } from '././superLine';

export class PayTemplate {
    'earningsLines'?: Array<EarningsLine>;
    'deductionLines'?: Array<DeductionLine>;
    'superLines'?: Array<SuperLine>;
    'reimbursementLines'?: Array<ReimbursementLine>;
    'leaveLines'?: Array<LeaveLine>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "earningsLines",
            "baseName": "EarningsLines",
            "type": "Array<EarningsLine>"
        },
        {
            "name": "deductionLines",
            "baseName": "DeductionLines",
            "type": "Array<DeductionLine>"
        },
        {
            "name": "superLines",
            "baseName": "SuperLines",
            "type": "Array<SuperLine>"
        },
        {
            "name": "reimbursementLines",
            "baseName": "ReimbursementLines",
            "type": "Array<ReimbursementLine>"
        },
        {
            "name": "leaveLines",
            "baseName": "LeaveLines",
            "type": "Array<LeaveLine>"
        }    ];

    static getAttributeTypeMap() {
        return PayTemplate.attributeTypeMap;
    }
}

