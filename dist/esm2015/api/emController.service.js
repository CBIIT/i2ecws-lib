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
export class EmControllerService {
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
    helloUsingGET(observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.get(`${this.basePath}/em/api/v1/hello-em/`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
EmControllerService.decorators = [
    { type: Injectable }
];
EmControllerService.ctorParameters = () => [
    { type: HttpClient },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [BASE_PATH,] }] },
    { type: Configuration, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1Db250cm9sbGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9hcGkvZW1Db250cm9sbGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNILHVEQUF1RDtBQUV2RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBMkIsZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUNFLE1BQWdDLHNCQUFzQixDQUFDO0FBTXpGLE9BQU8sRUFBRSxTQUFTLEVBQXNCLE1BQTBCLGNBQWMsQ0FBQztBQUNqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQTBDLGtCQUFrQixDQUFDO0FBSXJGLE1BQU0sT0FBTyxtQkFBbUI7SUFNNUIsWUFBc0IsVUFBc0IsRUFBZ0MsUUFBZ0IsRUFBYyxhQUE0QjtRQUFoSCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSmxDLGFBQVEsR0FBRyxtQkFBbUIsQ0FBQztRQUNsQyxtQkFBYyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDbkMsa0JBQWEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBR3ZDLElBQUksUUFBUSxFQUFFO1lBQ1YsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FDNUI7UUFDRCxJQUFJLGFBQWEsRUFBRTtZQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1lBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLGFBQWEsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN2RTtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSyxjQUFjLENBQUMsUUFBa0I7UUFDckMsTUFBTSxJQUFJLEdBQUcscUJBQXFCLENBQUM7UUFDbkMsS0FBSyxNQUFNLE9BQU8sSUFBSSxRQUFRLEVBQUU7WUFDNUIsSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO2dCQUNsQixPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBWU0sYUFBYSxDQUFDLFVBQWUsTUFBTSxFQUFFLGlCQUEwQixLQUFLO1FBRXZFLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFbEMsaUNBQWlDO1FBQ2pDLElBQUksaUJBQWlCLEdBQWE7WUFDOUIsa0JBQWtCO1NBQ3JCLENBQUM7UUFDRixNQUFNLHdCQUF3QixHQUF1QixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDOUcsSUFBSSx3QkFBd0IsSUFBSSxTQUFTLEVBQUU7WUFDdkMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLHdCQUF3QixDQUFDLENBQUM7U0FDN0Q7UUFFRCx1Q0FBdUM7UUFDdkMsTUFBTSxRQUFRLEdBQWEsRUFDMUIsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxzQkFBc0IsRUFDbEU7WUFDSSxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlO1lBQ25ELE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLGNBQWMsRUFBRSxjQUFjO1NBQ2pDLENBQ0osQ0FBQztJQUNOLENBQUM7OztZQWxFSixVQUFVOzs7WUFYRixVQUFVO3lDQWtCZ0MsUUFBUSxZQUFHLE1BQU0sU0FBQyxTQUFTO1lBVnJFLGFBQWEsdUJBVTZFLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFwaSBEb2N1bWVudGF0aW9uXG4gKiBBcGkgRG9jdW1lbnRhdGlvblxuICpcbiAqIE9wZW5BUEkgc3BlYyB2ZXJzaW9uOiAxLjBcbiAqIFxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgdGhlIHN3YWdnZXIgY29kZSBnZW5lcmF0b3IgcHJvZ3JhbS5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2FnZ2VyLWFwaS9zd2FnZ2VyLWNvZGVnZW4uZ2l0XG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cbi8qIHRzbGludDpkaXNhYmxlOm5vLXVudXNlZC12YXJpYWJsZSBtZW1iZXItb3JkZXJpbmcgKi9cblxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9ICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMsXG4gICAgICAgICBIdHRwUmVzcG9uc2UsIEh0dHBFdmVudCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ3VzdG9tSHR0cFVybEVuY29kaW5nQ29kZWMgfSAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2VuY29kZXInO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgQkFTRV9QQVRILCBDT0xMRUNUSU9OX0ZPUk1BVFMgfSAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29uZmlndXJhdGlvbic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVtQ29udHJvbGxlclNlcnZpY2Uge1xuXG4gICAgcHJvdGVjdGVkIGJhc2VQYXRoID0gJ2h0dHBzOi8vbG9jYWxob3N0JztcbiAgICBwdWJsaWMgZGVmYXVsdEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaHR0cENsaWVudDogSHR0cENsaWVudCwgQE9wdGlvbmFsKClASW5qZWN0KEJBU0VfUEFUSCkgYmFzZVBhdGg6IHN0cmluZywgQE9wdGlvbmFsKCkgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xuICAgICAgICBpZiAoYmFzZVBhdGgpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICAgICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aCB8fCBjb25maWd1cmF0aW9uLmJhc2VQYXRoIHx8IHRoaXMuYmFzZVBhdGg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY29uc3VtZXMgc3RyaW5nW10gbWltZS10eXBlc1xuICAgICAqIEByZXR1cm4gdHJ1ZTogY29uc3VtZXMgY29udGFpbnMgJ211bHRpcGFydC9mb3JtLWRhdGEnLCBmYWxzZTogb3RoZXJ3aXNlXG4gICAgICovXG4gICAgcHJpdmF0ZSBjYW5Db25zdW1lRm9ybShjb25zdW1lczogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZm9ybSA9ICdtdWx0aXBhcnQvZm9ybS1kYXRhJztcbiAgICAgICAgZm9yIChjb25zdCBjb25zdW1lIG9mIGNvbnN1bWVzKSB7XG4gICAgICAgICAgICBpZiAoZm9ybSA9PT0gY29uc3VtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIGhlbGxvXG4gICAgICogXG4gICAgICogQHBhcmFtIG9ic2VydmUgc2V0IHdoZXRoZXIgb3Igbm90IHRvIHJldHVybiB0aGUgZGF0YSBPYnNlcnZhYmxlIGFzIHRoZSBib2R5LCByZXNwb25zZSBvciBldmVudHMuIGRlZmF1bHRzIHRvIHJldHVybmluZyB0aGUgYm9keS5cbiAgICAgKiBAcGFyYW0gcmVwb3J0UHJvZ3Jlc3MgZmxhZyB0byByZXBvcnQgcmVxdWVzdCBhbmQgcmVzcG9uc2UgcHJvZ3Jlc3MuXG4gICAgICovXG4gICAgcHVibGljIGhlbGxvVXNpbmdHRVQob2JzZXJ2ZT86ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHB1YmxpYyBoZWxsb1VzaW5nR0VUKG9ic2VydmU/OiAncmVzcG9uc2UnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PjtcbiAgICBwdWJsaWMgaGVsbG9Vc2luZ0dFVChvYnNlcnZlPzogJ2V2ZW50cycsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+O1xuICAgIHB1YmxpYyBoZWxsb1VzaW5nR0VUKG9ic2VydmU6IGFueSA9ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZSApOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5kZWZhdWx0SGVhZGVycztcblxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIEFjY2VwdCBoZWFkZXJcbiAgICAgICAgbGV0IGh0dHBIZWFkZXJBY2NlcHRzOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICBdO1xuICAgICAgICBjb25zdCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZWxlY3RIZWFkZXJBY2NlcHQoaHR0cEhlYWRlckFjY2VwdHMpO1xuICAgICAgICBpZiAoaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdBY2NlcHQnLCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBDb250ZW50LVR5cGUgaGVhZGVyXG4gICAgICAgIGNvbnN0IGNvbnN1bWVzOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgXTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldDxhbnk+KGAke3RoaXMuYmFzZVBhdGh9L2VtL2FwaS92MS9oZWxsby1lbS9gLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5jb25maWd1cmF0aW9uLndpdGhDcmVkZW50aWFscyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgICAgICAgIG9ic2VydmU6IG9ic2VydmUsXG4gICAgICAgICAgICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHJlcG9ydFByb2dyZXNzXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG59XG4iXX0=