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
import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';
export class LookupsControllerService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://localhost';
        this.defaultHeaders = new HttpHeaders();
        this.configuration = new Configuration();
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
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    getDocAndCayCodesUsingGET(observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.get(`${this.basePath}/api/v1/lookups/cayCode-doc`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    getNciDocsUsingGET(observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.get(`${this.basePath}/api/v1/lookups/nci-doc`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
LookupsControllerService.decorators = [
    { type: Injectable }
];
LookupsControllerService.ctorParameters = () => [
    { type: HttpClient },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [BASE_PATH,] }] },
    { type: Configuration, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9va3Vwc0NvbnRyb2xsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwaS9sb29rdXBzQ29udHJvbGxlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFDSCx1REFBdUQ7QUFFdkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQTJCLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFDRSxNQUFnQyxzQkFBc0IsQ0FBQztBQU16RixPQUFPLEVBQUUsU0FBUyxFQUFzQixNQUEwQixjQUFjLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUEwQyxrQkFBa0IsQ0FBQztBQUlyRixNQUFNLE9BQU8sd0JBQXdCO0lBTWpDLFlBQXNCLFVBQXNCLEVBQWdDLFFBQWdCLEVBQWMsYUFBNEI7UUFBaEgsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUpsQyxhQUFRLEdBQUcsbUJBQW1CLENBQUM7UUFDbEMsbUJBQWMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ25DLGtCQUFhLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUd2QyxJQUFJLFFBQVEsRUFBRTtZQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxhQUFhLEVBQUU7WUFDZixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsSUFBSSxhQUFhLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdkU7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssY0FBYyxDQUFDLFFBQWtCO1FBQ3JDLE1BQU0sSUFBSSxHQUFHLHFCQUFxQixDQUFDO1FBQ25DLEtBQUssTUFBTSxPQUFPLElBQUksUUFBUSxFQUFFO1lBQzVCLElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDbEIsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQVlNLHlCQUF5QixDQUFDLFVBQWUsTUFBTSxFQUFFLGlCQUEwQixLQUFLO1FBRW5GLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFbEMsaUNBQWlDO1FBQ2pDLElBQUksaUJBQWlCLEdBQWE7WUFDOUIsa0JBQWtCO1lBQ2xCLGlCQUFpQjtTQUNwQixDQUFDO1FBQ0YsTUFBTSx3QkFBd0IsR0FBdUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlHLElBQUksd0JBQXdCLElBQUksU0FBUyxFQUFFO1lBQ3ZDLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1NBQzdEO1FBRUQsdUNBQXVDO1FBQ3ZDLE1BQU0sUUFBUSxHQUFhLEVBQzFCLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsNkJBQTZCLEVBQ3pFO1lBQ0ksZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZTtZQUNuRCxPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUUsY0FBYztTQUNqQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBV00sa0JBQWtCLENBQUMsVUFBZSxNQUFNLEVBQUUsaUJBQTBCLEtBQUs7UUFFNUUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUVsQyxpQ0FBaUM7UUFDakMsSUFBSSxpQkFBaUIsR0FBYTtZQUM5QixrQkFBa0I7WUFDbEIsaUJBQWlCO1NBQ3BCLENBQUM7UUFDRixNQUFNLHdCQUF3QixHQUF1QixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDOUcsSUFBSSx3QkFBd0IsSUFBSSxTQUFTLEVBQUU7WUFDdkMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLHdCQUF3QixDQUFDLENBQUM7U0FDN0Q7UUFFRCx1Q0FBdUM7UUFDdkMsTUFBTSxRQUFRLEdBQWEsRUFDMUIsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQU0sR0FBRyxJQUFJLENBQUMsUUFBUSx5QkFBeUIsRUFDckU7WUFDSSxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlO1lBQ25ELE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLGNBQWMsRUFBRSxjQUFjO1NBQ2pDLENBQ0osQ0FBQztJQUNOLENBQUM7OztZQXhHSixVQUFVOzs7WUFYRixVQUFVO3lDQWtCZ0MsUUFBUSxZQUFHLE1BQU0sU0FBQyxTQUFTO1lBVnJFLGFBQWEsdUJBVTZFLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFwaSBEb2N1bWVudGF0aW9uXG4gKiBBcGkgRG9jdW1lbnRhdGlvblxuICpcbiAqIE9wZW5BUEkgc3BlYyB2ZXJzaW9uOiAxLjBcbiAqIFxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgdGhlIHN3YWdnZXIgY29kZSBnZW5lcmF0b3IgcHJvZ3JhbS5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2FnZ2VyLWFwaS9zd2FnZ2VyLWNvZGVnZW4uZ2l0XG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cbi8qIHRzbGludDpkaXNhYmxlOm5vLXVudXNlZC12YXJpYWJsZSBtZW1iZXItb3JkZXJpbmcgKi9cblxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9ICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMsXG4gICAgICAgICBIdHRwUmVzcG9uc2UsIEh0dHBFdmVudCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ3VzdG9tSHR0cFVybEVuY29kaW5nQ29kZWMgfSAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2VuY29kZXInO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgQkFTRV9QQVRILCBDT0xMRUNUSU9OX0ZPUk1BVFMgfSAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29uZmlndXJhdGlvbic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvb2t1cHNDb250cm9sbGVyU2VydmljZSB7XG5cbiAgICBwcm90ZWN0ZWQgYmFzZVBhdGggPSAnaHR0cHM6Ly9sb2NhbGhvc3QnO1xuICAgIHB1YmxpYyBkZWZhdWx0SGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oKTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LCBAT3B0aW9uYWwoKUBJbmplY3QoQkFTRV9QQVRIKSBiYXNlUGF0aDogc3RyaW5nLCBAT3B0aW9uYWwoKSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIGlmIChiYXNlUGF0aCkge1xuICAgICAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgICAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoIHx8IGNvbmZpZ3VyYXRpb24uYmFzZVBhdGggfHwgdGhpcy5iYXNlUGF0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb25zdW1lcyBzdHJpbmdbXSBtaW1lLXR5cGVzXG4gICAgICogQHJldHVybiB0cnVlOiBjb25zdW1lcyBjb250YWlucyAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIGZhbHNlOiBvdGhlcndpc2VcbiAgICAgKi9cbiAgICBwcml2YXRlIGNhbkNvbnN1bWVGb3JtKGNvbnN1bWVzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBmb3JtID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgICAgICBmb3IgKGNvbnN0IGNvbnN1bWUgb2YgY29uc3VtZXMpIHtcbiAgICAgICAgICAgIGlmIChmb3JtID09PSBjb25zdW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogZ2V0RG9jQW5kQ2F5Q29kZXNcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gb2JzZXJ2ZSBzZXQgd2hldGhlciBvciBub3QgdG8gcmV0dXJuIHRoZSBkYXRhIE9ic2VydmFibGUgYXMgdGhlIGJvZHksIHJlc3BvbnNlIG9yIGV2ZW50cy4gZGVmYXVsdHMgdG8gcmV0dXJuaW5nIHRoZSBib2R5LlxuICAgICAqIEBwYXJhbSByZXBvcnRQcm9ncmVzcyBmbGFnIHRvIHJlcG9ydCByZXF1ZXN0IGFuZCByZXNwb25zZSBwcm9ncmVzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RG9jQW5kQ2F5Q29kZXNVc2luZ0dFVChvYnNlcnZlPzogJ2JvZHknLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPGFueT47XG4gICAgcHVibGljIGdldERvY0FuZENheUNvZGVzVXNpbmdHRVQob2JzZXJ2ZT86ICdyZXNwb25zZScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+O1xuICAgIHB1YmxpYyBnZXREb2NBbmRDYXlDb2Rlc1VzaW5nR0VUKG9ic2VydmU/OiAnZXZlbnRzJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj47XG4gICAgcHVibGljIGdldERvY0FuZENheUNvZGVzVXNpbmdHRVQob2JzZXJ2ZTogYW55ID0gJ2JvZHknLCByZXBvcnRQcm9ncmVzczogYm9vbGVhbiA9IGZhbHNlICk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmRlZmF1bHRIZWFkZXJzO1xuXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB0aGUgQWNjZXB0IGhlYWRlclxuICAgICAgICBsZXQgaHR0cEhlYWRlckFjY2VwdHM6IHN0cmluZ1tdID0gW1xuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL3htbCdcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQWNjZXB0KGh0dHBIZWFkZXJBY2NlcHRzKTtcbiAgICAgICAgaWYgKGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQWNjZXB0JywgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB0aGUgQ29udGVudC1UeXBlIGhlYWRlclxuICAgICAgICBjb25zdCBjb25zdW1lczogc3RyaW5nW10gPSBbXG4gICAgICAgIF07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8YW55PihgJHt0aGlzLmJhc2VQYXRofS9hcGkvdjEvbG9va3Vwcy9jYXlDb2RlLWRvY2AsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24ud2l0aENyZWRlbnRpYWxzLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZTogb2JzZXJ2ZSxcbiAgICAgICAgICAgICAgICByZXBvcnRQcm9ncmVzczogcmVwb3J0UHJvZ3Jlc3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXROY2lEb2NzXG4gICAgICogXG4gICAgICogQHBhcmFtIG9ic2VydmUgc2V0IHdoZXRoZXIgb3Igbm90IHRvIHJldHVybiB0aGUgZGF0YSBPYnNlcnZhYmxlIGFzIHRoZSBib2R5LCByZXNwb25zZSBvciBldmVudHMuIGRlZmF1bHRzIHRvIHJldHVybmluZyB0aGUgYm9keS5cbiAgICAgKiBAcGFyYW0gcmVwb3J0UHJvZ3Jlc3MgZmxhZyB0byByZXBvcnQgcmVxdWVzdCBhbmQgcmVzcG9uc2UgcHJvZ3Jlc3MuXG4gICAgICovXG4gICAgcHVibGljIGdldE5jaURvY3NVc2luZ0dFVChvYnNlcnZlPzogJ2JvZHknLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPGFueT47XG4gICAgcHVibGljIGdldE5jaURvY3NVc2luZ0dFVChvYnNlcnZlPzogJ3Jlc3BvbnNlJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj47XG4gICAgcHVibGljIGdldE5jaURvY3NVc2luZ0dFVChvYnNlcnZlPzogJ2V2ZW50cycsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+O1xuICAgIHB1YmxpYyBnZXROY2lEb2NzVXNpbmdHRVQob2JzZXJ2ZTogYW55ID0gJ2JvZHknLCByZXBvcnRQcm9ncmVzczogYm9vbGVhbiA9IGZhbHNlICk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmRlZmF1bHRIZWFkZXJzO1xuXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB0aGUgQWNjZXB0IGhlYWRlclxuICAgICAgICBsZXQgaHR0cEhlYWRlckFjY2VwdHM6IHN0cmluZ1tdID0gW1xuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL3htbCdcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQWNjZXB0KGh0dHBIZWFkZXJBY2NlcHRzKTtcbiAgICAgICAgaWYgKGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQWNjZXB0JywgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB0aGUgQ29udGVudC1UeXBlIGhlYWRlclxuICAgICAgICBjb25zdCBjb25zdW1lczogc3RyaW5nW10gPSBbXG4gICAgICAgIF07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8YW55PihgJHt0aGlzLmJhc2VQYXRofS9hcGkvdjEvbG9va3Vwcy9uY2ktZG9jYCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuY29uZmlndXJhdGlvbi53aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICAgICAgICBvYnNlcnZlOiBvYnNlcnZlLFxuICAgICAgICAgICAgICAgIHJlcG9ydFByb2dyZXNzOiByZXBvcnRQcm9ncmVzc1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxufVxuIl19