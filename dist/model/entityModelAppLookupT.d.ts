/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Links } from './links';
export interface EntityModelAppLookupT {
    active?: string;
    applicationName?: string;
    code?: string;
    createDate?: Date;
    createUserId?: string;
    description?: string;
    discriminator?: string;
    displayText?: string;
    id?: number;
    lastChangeDate?: Date;
    lastChangeUserId?: string;
    links?: Links;
    orderNum?: number;
}
