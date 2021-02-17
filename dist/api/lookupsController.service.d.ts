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
import { Configuration } from '../configuration';
export declare class LookupsControllerService {
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
     * getDocAndCayCodes
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getDocAndCayCodesUsingGET(observe?: 'body', reportProgress?: boolean): Observable<any>;
    getDocAndCayCodesUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    getDocAndCayCodesUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * getNciDocs
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getNciDocsUsingGET(observe?: 'body', reportProgress?: boolean): Observable<any>;
    getNciDocsUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    getNciDocsUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * getPiInstitutes
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getPiInstitutesUsingGET(observe?: 'body', reportProgress?: boolean): Observable<any>;
    getPiInstitutesUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    getPiInstitutesUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
}
