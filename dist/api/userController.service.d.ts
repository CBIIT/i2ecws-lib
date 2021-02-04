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
import { SecurityCredentials } from '../model/securityCredentials';
import { Configuration } from '../configuration';
export declare class UserControllerService {
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
     * getUsers
     *
     * @param activeFlag activeFlag
     * @param term term
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getUsersUsingGET(activeFlag?: boolean, term?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    getUsersUsingGET(activeFlag?: boolean, term?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    getUsersUsingGET(activeFlag?: boolean, term?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * user
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    userUsingDELETE(observe?: 'body', reportProgress?: boolean): Observable<SecurityCredentials>;
    userUsingDELETE(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SecurityCredentials>>;
    userUsingDELETE(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SecurityCredentials>>;
    /**
     * user
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    userUsingGET(observe?: 'body', reportProgress?: boolean): Observable<SecurityCredentials>;
    userUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SecurityCredentials>>;
    userUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SecurityCredentials>>;
    /**
     * user
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    userUsingHEAD(observe?: 'body', reportProgress?: boolean): Observable<SecurityCredentials>;
    userUsingHEAD(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SecurityCredentials>>;
    userUsingHEAD(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SecurityCredentials>>;
    /**
     * user
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    userUsingOPTIONS(observe?: 'body', reportProgress?: boolean): Observable<SecurityCredentials>;
    userUsingOPTIONS(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SecurityCredentials>>;
    userUsingOPTIONS(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SecurityCredentials>>;
    /**
     * user
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    userUsingPATCH(observe?: 'body', reportProgress?: boolean): Observable<SecurityCredentials>;
    userUsingPATCH(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SecurityCredentials>>;
    userUsingPATCH(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SecurityCredentials>>;
    /**
     * user
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    userUsingPOST(observe?: 'body', reportProgress?: boolean): Observable<SecurityCredentials>;
    userUsingPOST(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SecurityCredentials>>;
    userUsingPOST(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SecurityCredentials>>;
    /**
     * user
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    userUsingPUT(observe?: 'body', reportProgress?: boolean): Observable<SecurityCredentials>;
    userUsingPUT(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SecurityCredentials>>;
    userUsingPUT(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SecurityCredentials>>;
}
