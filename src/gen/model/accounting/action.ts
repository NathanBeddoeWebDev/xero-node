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


export class Action {
    /**
    * Name of the actions for this organisation
    */
    'name'?: string;
    /**
    * Status of the action for this organisation
    */
    'status'?: Action.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "Action.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return Action.attributeTypeMap;
    }
}

export namespace Action {
    export enum StatusEnum {
        ALLOWED = <any> 'ALLOWED',
        NOTALLOWED = <any> 'NOT-ALLOWED'
    }
}
