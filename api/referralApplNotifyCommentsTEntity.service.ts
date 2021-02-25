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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { EntityModelReferralApplNotifyT } from '../model/entityModelReferralApplNotifyT';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ReferralApplNotifyCommentsTEntityService {

    protected basePath = 'https://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * referralApplNotifyCommentsTNotify
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public referralApplNotifyCommentsTNotifyUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public referralApplNotifyCommentsTNotifyUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public referralApplNotifyCommentsTNotifyUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public referralApplNotifyCommentsTNotifyUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling referralApplNotifyCommentsTNotifyUsingDELETE.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'text/uri-list',
            'application/x-spring-data-compact+json'
        ];

        return this.httpClient.delete<any>(`${this.basePath}/referralApplNotifyCommentsTs/${encodeURIComponent(String(id))}/notify`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * referralApplNotifyCommentsTNotify
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public referralApplNotifyCommentsTNotifyUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelReferralApplNotifyT>;
    public referralApplNotifyCommentsTNotifyUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelReferralApplNotifyT>>;
    public referralApplNotifyCommentsTNotifyUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelReferralApplNotifyT>>;
    public referralApplNotifyCommentsTNotifyUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling referralApplNotifyCommentsTNotifyUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/hal+json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<EntityModelReferralApplNotifyT>(`${this.basePath}/referralApplNotifyCommentsTs/${encodeURIComponent(String(id))}/notify`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * referralApplNotifyCommentsTNotify
     * 
     * @param body body
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public referralApplNotifyCommentsTNotifyUsingPATCH(body: string, id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelReferralApplNotifyT>;
    public referralApplNotifyCommentsTNotifyUsingPATCH(body: string, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelReferralApplNotifyT>>;
    public referralApplNotifyCommentsTNotifyUsingPATCH(body: string, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelReferralApplNotifyT>>;
    public referralApplNotifyCommentsTNotifyUsingPATCH(body: string, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling referralApplNotifyCommentsTNotifyUsingPATCH.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling referralApplNotifyCommentsTNotifyUsingPATCH.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'text/uri-list',
            'application/x-spring-data-compact+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.patch<EntityModelReferralApplNotifyT>(`${this.basePath}/referralApplNotifyCommentsTs/${encodeURIComponent(String(id))}/notify`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * referralApplNotifyCommentsTNotify
     * 
     * @param body body
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public referralApplNotifyCommentsTNotifyUsingPOST(body: string, id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelReferralApplNotifyT>;
    public referralApplNotifyCommentsTNotifyUsingPOST(body: string, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelReferralApplNotifyT>>;
    public referralApplNotifyCommentsTNotifyUsingPOST(body: string, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelReferralApplNotifyT>>;
    public referralApplNotifyCommentsTNotifyUsingPOST(body: string, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling referralApplNotifyCommentsTNotifyUsingPOST.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling referralApplNotifyCommentsTNotifyUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'text/uri-list',
            'application/x-spring-data-compact+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<EntityModelReferralApplNotifyT>(`${this.basePath}/referralApplNotifyCommentsTs/${encodeURIComponent(String(id))}/notify`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * referralApplNotifyCommentsTNotify
     * 
     * @param body body
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public referralApplNotifyCommentsTNotifyUsingPUT(body: string, id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelReferralApplNotifyT>;
    public referralApplNotifyCommentsTNotifyUsingPUT(body: string, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelReferralApplNotifyT>>;
    public referralApplNotifyCommentsTNotifyUsingPUT(body: string, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelReferralApplNotifyT>>;
    public referralApplNotifyCommentsTNotifyUsingPUT(body: string, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling referralApplNotifyCommentsTNotifyUsingPUT.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling referralApplNotifyCommentsTNotifyUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'text/uri-list',
            'application/x-spring-data-compact+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<EntityModelReferralApplNotifyT>(`${this.basePath}/referralApplNotifyCommentsTs/${encodeURIComponent(String(id))}/notify`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}