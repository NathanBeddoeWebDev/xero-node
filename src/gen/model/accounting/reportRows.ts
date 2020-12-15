/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.7.0
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ReportCell } from '././reportCell';
import { ReportRow } from '././reportRow';
import { RowType } from '././rowType';

export class ReportRows {
    'rowType'?: RowType;
    'title'?: string;
    'cells'?: Array<ReportCell>;
    'rows'?: Array<ReportRow>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rowType",
            "baseName": "RowType",
            "type": "RowType"
        },
        {
            "name": "title",
            "baseName": "Title",
            "type": "string"
        },
        {
            "name": "cells",
            "baseName": "Cells",
            "type": "Array<ReportCell>"
        },
        {
            "name": "rows",
            "baseName": "Rows",
            "type": "Array<ReportRow>"
        }    ];

    static getAttributeTypeMap() {
        return ReportRows.attributeTypeMap;
    }
}

