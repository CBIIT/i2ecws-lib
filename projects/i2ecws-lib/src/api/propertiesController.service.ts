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


import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PropertiesControllerService {

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
     * getProperties
     * 
     * @param app app
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPropertiesUsingGET(app: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getPropertiesUsingGET(app: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getPropertiesUsingGET(app: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getPropertiesUsingGET(app: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (app === null || app === undefined) {
            throw new Error('Required parameter app was null or undefined when calling getPropertiesUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/api/v1/properties/${encodeURIComponent(String(app))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getProperties
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPropertiesUsingGET1(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getPropertiesUsingGET1(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getPropertiesUsingGET1(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getPropertiesUsingGET1(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/api/v1/properties/`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getProperty
     * 
     * @param app app
     * @param propKey propKey
     * @param defaultValue defaultValue
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPropertyUsingGET(app: string, propKey: string, defaultValue?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getPropertyUsingGET(app: string, propKey: string, defaultValue?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getPropertyUsingGET(app: string, propKey: string, defaultValue?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getPropertyUsingGET(app: string, propKey: string, defaultValue?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (app === null || app === undefined) {
            throw new Error('Required parameter app was null or undefined when calling getPropertyUsingGET.');
        }

        if (propKey === null || propKey === undefined) {
            throw new Error('Required parameter propKey was null or undefined when calling getPropertyUsingGET.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (defaultValue !== undefined && defaultValue !== null) {
            queryParameters = queryParameters.set('defaultValue', <any>defaultValue);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/api/v1/properties/${encodeURIComponent(String(app))}/${encodeURIComponent(String(propKey))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
