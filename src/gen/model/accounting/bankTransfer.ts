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

import { Account } from '././account';
import { ValidationError } from '././validationError';

export class BankTransfer {
    'fromBankAccount': Account;
    'toBankAccount': Account;
    /**
    * amount of the transaction
    */
    'amount': string;
    /**
    * The date of the Transfer YYYY-MM-DD
    */
    'date'?: string;
    /**
    * The identifier of the Bank Transfer
    */
    'bankTransferID'?: string;
    /**
    * The currency rate
    */
    'currencyRate'?: number;
    /**
    * The Bank Transaction ID for the source account
    */
    'fromBankTransactionID'?: string;
    /**
    * The Bank Transaction ID for the destination account
    */
    'toBankTransactionID'?: string;
    /**
    * Boolean to indicate if a Bank Transfer has an attachment
    */
    'hasAttachments'?: boolean;
    /**
    * UTC timestamp of creation date of bank transfer
    */
    'createdDateUTC'?: Date;
    /**
    * Displays array of validation error messages from the API
    */
    'validationErrors'?: Array<ValidationError>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fromBankAccount",
            "baseName": "FromBankAccount",
            "type": "Account"
        },
        {
            "name": "toBankAccount",
            "baseName": "ToBankAccount",
            "type": "Account"
        },
        {
            "name": "amount",
            "baseName": "Amount",
            "type": "string"
        },
        {
            "name": "date",
            "baseName": "Date",
            "type": "string"
        },
        {
            "name": "bankTransferID",
            "baseName": "BankTransferID",
            "type": "string"
        },
        {
            "name": "currencyRate",
            "baseName": "CurrencyRate",
            "type": "number"
        },
        {
            "name": "fromBankTransactionID",
            "baseName": "FromBankTransactionID",
            "type": "string"
        },
        {
            "name": "toBankTransactionID",
            "baseName": "ToBankTransactionID",
            "type": "string"
        },
        {
            "name": "hasAttachments",
            "baseName": "HasAttachments",
            "type": "boolean"
        },
        {
            "name": "createdDateUTC",
            "baseName": "CreatedDateUTC",
            "type": "Date"
        },
        {
            "name": "validationErrors",
            "baseName": "ValidationErrors",
            "type": "Array<ValidationError>"
        }    ];

    static getAttributeTypeMap() {
        return BankTransfer.attributeTypeMap;
    }
}

