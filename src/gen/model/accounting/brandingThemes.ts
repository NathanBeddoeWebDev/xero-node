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

import { BrandingTheme } from '././brandingTheme';

export class BrandingThemes {
    'brandingThemes'?: Array<BrandingTheme>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "brandingThemes",
            "baseName": "BrandingThemes",
            "type": "Array<BrandingTheme>"
        }    ];

    static getAttributeTypeMap() {
        return BrandingThemes.attributeTypeMap;
    }
}

