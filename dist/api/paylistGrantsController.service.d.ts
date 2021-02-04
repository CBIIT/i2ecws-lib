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
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaylistGrantsCriteriaDto } from '../model/paylistGrantsCriteriaDto';
import { Configuration } from '../configuration';
export declare class PaylistGrantsControllerService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm;
    /**
     * findPaylistGrants
     *
     * @param criteriaDto criteriaDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    findPaylistGrantsUsingPOST(criteriaDto: PaylistGrantsCriteriaDto, observe?: 'body', reportProgress?: boolean): Observable<any>;
    findPaylistGrantsUsingPOST(criteriaDto: PaylistGrantsCriteriaDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    findPaylistGrantsUsingPOST(criteriaDto: PaylistGrantsCriteriaDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * getExceptionMapping
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getExceptionMappingUsingGET(observe?: 'body', reportProgress?: boolean): Observable<any>;
    getExceptionMappingUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    getExceptionMappingUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * massGenPaylistEnabled
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    massGenPaylistEnabledUsingGET(observe?: 'body', reportProgress?: boolean): Observable<any>;
    massGenPaylistEnabledUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    massGenPaylistEnabledUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * massGeneratePaylists
     *
     * @param userId userId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    massGeneratePaylistsUsingPOST(userId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    massGeneratePaylistsUsingPOST(userId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    massGeneratePaylistsUsingPOST(userId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * retrievePaylistGrantsById
     *
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    retrievePaylistGrantsByIdUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    retrievePaylistGrantsByIdUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    retrievePaylistGrantsByIdUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * searchPaylinePaylistGrants
     *
     * @param criteriaDto criteriaDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    searchPaylinePaylistGrantsUsingPOST(criteriaDto: PaylistGrantsCriteriaDto, observe?: 'body', reportProgress?: boolean): Observable<any>;
    searchPaylinePaylistGrantsUsingPOST(criteriaDto: PaylistGrantsCriteriaDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    searchPaylinePaylistGrantsUsingPOST(criteriaDto: PaylistGrantsCriteriaDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
}
