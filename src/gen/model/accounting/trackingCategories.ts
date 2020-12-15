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

import { TrackingCategory } from '././trackingCategory';

export class TrackingCategories {
    'trackingCategories'?: Array<TrackingCategory>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "trackingCategories",
            "baseName": "TrackingCategories",
            "type": "Array<TrackingCategory>"
        }    ];

    static getAttributeTypeMap() {
        return TrackingCategories.attributeTypeMap;
    }
}

