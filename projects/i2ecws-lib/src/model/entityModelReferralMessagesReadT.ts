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


export interface EntityModelReferralMessagesReadT { 
    createDate?: Date;
    createUserId?: string;
    lastChangeDate?: Date;
    lastChangeUserId?: string;
    links?: Links;
    messageId?: number;
    messageReadDate?: Date;
    npnId?: number;
}
