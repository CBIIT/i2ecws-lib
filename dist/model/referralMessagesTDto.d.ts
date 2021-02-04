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
import { NciPerson } from './nciPerson';
import { ReferralMessagesReadTDto } from './referralMessagesReadTDto';
export interface ReferralMessagesTDto {
    applId?: number;
    createDate?: Date;
    createUserId?: string;
    id?: number;
    lastChangeDate?: Date;
    lastChangeUserId?: string;
    messageText?: string;
    nciPerson?: NciPerson;
    npnId?: number;
    referralMessagesRead?: Array<ReferralMessagesReadTDto>;
}
