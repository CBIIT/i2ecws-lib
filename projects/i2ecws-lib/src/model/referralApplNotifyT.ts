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
import { ReferralApplNotifyCommentsT } from './referralApplNotifyCommentsT';


export interface ReferralApplNotifyT { 
    applId?: number;
    cayCode?: string;
    comments?: Array<ReferralApplNotifyCommentsT>;
    createDate?: Date;
    createUserId?: string;
    endDate?: Date;
    id?: number;
    lastChangeDate?: Date;
    lastChangeUserId?: string;
    reviewLocus?: string;
    startDate?: Date;
}
