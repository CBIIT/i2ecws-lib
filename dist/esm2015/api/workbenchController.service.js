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
export class WorkbenchControllerService {
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
    getWorkbenchReferralActivityAppletUsingGET(observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/xml',
            'text/html'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.get(`${this.basePath}/api/v1/workbench/referral-activity-applet`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    getWorkbenchReferralAppletUsingGET(observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json',
            'application/xml',
            'text/html'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.get(`${this.basePath}/api/v1/workbench/referral-applet`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
WorkbenchControllerService.decorators = [
    { type: Injectable }
];
WorkbenchControllerService.ctorParameters = () => [
    { type: HttpClient },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [BASE_PATH,] }] },
    { type: Configuration, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2JlbmNoQ29udHJvbGxlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBpL3dvcmtiZW5jaENvbnRyb2xsZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztHQVVHO0FBQ0gsdURBQXVEO0FBRXZELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUEyQixlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQ0UsTUFBZ0Msc0JBQXNCLENBQUM7QUFPekYsT0FBTyxFQUFFLFNBQVMsRUFBc0IsTUFBMEIsY0FBYyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBMEMsa0JBQWtCLENBQUM7QUFJckYsTUFBTSxPQUFPLDBCQUEwQjtJQU1uQyxZQUFzQixVQUFzQixFQUFnQyxRQUFnQixFQUFjLGFBQTRCO1FBQWhILGVBQVUsR0FBVixVQUFVLENBQVk7UUFKbEMsYUFBUSxHQUFHLG1CQUFtQixDQUFDO1FBQ2xDLG1CQUFjLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNuQyxrQkFBYSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFHdkMsSUFBSSxRQUFRLEVBQUU7WUFDVixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUM1QjtRQUNELElBQUksYUFBYSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksYUFBYSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3ZFO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNLLGNBQWMsQ0FBQyxRQUFrQjtRQUNyQyxNQUFNLElBQUksR0FBRyxxQkFBcUIsQ0FBQztRQUNuQyxLQUFLLE1BQU0sT0FBTyxJQUFJLFFBQVEsRUFBRTtZQUM1QixJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFZTSwwQ0FBMEMsQ0FBQyxVQUFlLE1BQU0sRUFBRSxpQkFBMEIsS0FBSztRQUVwRyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRWxDLGlDQUFpQztRQUNqQyxJQUFJLGlCQUFpQixHQUFhO1lBQzlCLGtCQUFrQjtZQUNsQixpQkFBaUI7WUFDakIsV0FBVztTQUNkLENBQUM7UUFDRixNQUFNLHdCQUF3QixHQUF1QixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDOUcsSUFBSSx3QkFBd0IsSUFBSSxTQUFTLEVBQUU7WUFDdkMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLHdCQUF3QixDQUFDLENBQUM7U0FDN0Q7UUFFRCx1Q0FBdUM7UUFDdkMsTUFBTSxRQUFRLEdBQWEsRUFDMUIsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSw0Q0FBNEMsRUFDakc7WUFDSSxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlO1lBQ25ELE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLGNBQWMsRUFBRSxjQUFjO1NBQ2pDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFXTSxrQ0FBa0MsQ0FBQyxVQUFlLE1BQU0sRUFBRSxpQkFBMEIsS0FBSztRQUU1RixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRWxDLGlDQUFpQztRQUNqQyxJQUFJLGlCQUFpQixHQUFhO1lBQzlCLGtCQUFrQjtZQUNsQixpQkFBaUI7WUFDakIsV0FBVztTQUNkLENBQUM7UUFDRixNQUFNLHdCQUF3QixHQUF1QixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDOUcsSUFBSSx3QkFBd0IsSUFBSSxTQUFTLEVBQUU7WUFDdkMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLHdCQUF3QixDQUFDLENBQUM7U0FDN0Q7UUFFRCx1Q0FBdUM7UUFDdkMsTUFBTSxRQUFRLEdBQWEsRUFDMUIsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxtQ0FBbUMsRUFDeEY7WUFDSSxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlO1lBQ25ELE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLGNBQWMsRUFBRSxjQUFjO1NBQ2pDLENBQ0osQ0FBQztJQUNOLENBQUM7OztZQTFHSixVQUFVOzs7WUFaRixVQUFVO3lDQW1CZ0MsUUFBUSxZQUFHLE1BQU0sU0FBQyxTQUFTO1lBVnJFLGFBQWEsdUJBVTZFLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFwaSBEb2N1bWVudGF0aW9uXG4gKiBBcGkgRG9jdW1lbnRhdGlvblxuICpcbiAqIE9wZW5BUEkgc3BlYyB2ZXJzaW9uOiAxLjBcbiAqIFxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgdGhlIHN3YWdnZXIgY29kZSBnZW5lcmF0b3IgcHJvZ3JhbS5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2FnZ2VyLWFwaS9zd2FnZ2VyLWNvZGVnZW4uZ2l0XG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cbi8qIHRzbGludDpkaXNhYmxlOm5vLXVudXNlZC12YXJpYWJsZSBtZW1iZXItb3JkZXJpbmcgKi9cblxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9ICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMsXG4gICAgICAgICBIdHRwUmVzcG9uc2UsIEh0dHBFdmVudCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ3VzdG9tSHR0cFVybEVuY29kaW5nQ29kZWMgfSAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2VuY29kZXInO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE1vZGVsQW5kVmlldyB9IGZyb20gJy4uL21vZGVsL21vZGVsQW5kVmlldyc7XG5cbmltcG9ydCB7IEJBU0VfUEFUSCwgQ09MTEVDVElPTl9GT1JNQVRTIH0gICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi92YXJpYWJsZXMnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbmZpZ3VyYXRpb24nO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXb3JrYmVuY2hDb250cm9sbGVyU2VydmljZSB7XG5cbiAgICBwcm90ZWN0ZWQgYmFzZVBhdGggPSAnaHR0cHM6Ly9sb2NhbGhvc3QnO1xuICAgIHB1YmxpYyBkZWZhdWx0SGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oKTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LCBAT3B0aW9uYWwoKUBJbmplY3QoQkFTRV9QQVRIKSBiYXNlUGF0aDogc3RyaW5nLCBAT3B0aW9uYWwoKSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIGlmIChiYXNlUGF0aCkge1xuICAgICAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgICAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoIHx8IGNvbmZpZ3VyYXRpb24uYmFzZVBhdGggfHwgdGhpcy5iYXNlUGF0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb25zdW1lcyBzdHJpbmdbXSBtaW1lLXR5cGVzXG4gICAgICogQHJldHVybiB0cnVlOiBjb25zdW1lcyBjb250YWlucyAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIGZhbHNlOiBvdGhlcndpc2VcbiAgICAgKi9cbiAgICBwcml2YXRlIGNhbkNvbnN1bWVGb3JtKGNvbnN1bWVzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBmb3JtID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgICAgICBmb3IgKGNvbnN0IGNvbnN1bWUgb2YgY29uc3VtZXMpIHtcbiAgICAgICAgICAgIGlmIChmb3JtID09PSBjb25zdW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogZ2V0V29ya2JlbmNoUmVmZXJyYWxBY3Rpdml0eUFwcGxldFxuICAgICAqIFxuICAgICAqIEBwYXJhbSBvYnNlcnZlIHNldCB3aGV0aGVyIG9yIG5vdCB0byByZXR1cm4gdGhlIGRhdGEgT2JzZXJ2YWJsZSBhcyB0aGUgYm9keSwgcmVzcG9uc2Ugb3IgZXZlbnRzLiBkZWZhdWx0cyB0byByZXR1cm5pbmcgdGhlIGJvZHkuXG4gICAgICogQHBhcmFtIHJlcG9ydFByb2dyZXNzIGZsYWcgdG8gcmVwb3J0IHJlcXVlc3QgYW5kIHJlc3BvbnNlIHByb2dyZXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRXb3JrYmVuY2hSZWZlcnJhbEFjdGl2aXR5QXBwbGV0VXNpbmdHRVQob2JzZXJ2ZT86ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxNb2RlbEFuZFZpZXc+O1xuICAgIHB1YmxpYyBnZXRXb3JrYmVuY2hSZWZlcnJhbEFjdGl2aXR5QXBwbGV0VXNpbmdHRVQob2JzZXJ2ZT86ICdyZXNwb25zZScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE1vZGVsQW5kVmlldz4+O1xuICAgIHB1YmxpYyBnZXRXb3JrYmVuY2hSZWZlcnJhbEFjdGl2aXR5QXBwbGV0VXNpbmdHRVQob2JzZXJ2ZT86ICdldmVudHMnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxNb2RlbEFuZFZpZXc+PjtcbiAgICBwdWJsaWMgZ2V0V29ya2JlbmNoUmVmZXJyYWxBY3Rpdml0eUFwcGxldFVzaW5nR0VUKG9ic2VydmU6IGFueSA9ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZSApOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5kZWZhdWx0SGVhZGVycztcblxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIEFjY2VwdCBoZWFkZXJcbiAgICAgICAgbGV0IGh0dHBIZWFkZXJBY2NlcHRzOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi94bWwnLFxuICAgICAgICAgICAgJ3RleHQvaHRtbCdcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQWNjZXB0KGh0dHBIZWFkZXJBY2NlcHRzKTtcbiAgICAgICAgaWYgKGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQWNjZXB0JywgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB0aGUgQ29udGVudC1UeXBlIGhlYWRlclxuICAgICAgICBjb25zdCBjb25zdW1lczogc3RyaW5nW10gPSBbXG4gICAgICAgIF07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8TW9kZWxBbmRWaWV3PihgJHt0aGlzLmJhc2VQYXRofS9hcGkvdjEvd29ya2JlbmNoL3JlZmVycmFsLWFjdGl2aXR5LWFwcGxldGAsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24ud2l0aENyZWRlbnRpYWxzLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZTogb2JzZXJ2ZSxcbiAgICAgICAgICAgICAgICByZXBvcnRQcm9ncmVzczogcmVwb3J0UHJvZ3Jlc3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXRXb3JrYmVuY2hSZWZlcnJhbEFwcGxldFxuICAgICAqIFxuICAgICAqIEBwYXJhbSBvYnNlcnZlIHNldCB3aGV0aGVyIG9yIG5vdCB0byByZXR1cm4gdGhlIGRhdGEgT2JzZXJ2YWJsZSBhcyB0aGUgYm9keSwgcmVzcG9uc2Ugb3IgZXZlbnRzLiBkZWZhdWx0cyB0byByZXR1cm5pbmcgdGhlIGJvZHkuXG4gICAgICogQHBhcmFtIHJlcG9ydFByb2dyZXNzIGZsYWcgdG8gcmVwb3J0IHJlcXVlc3QgYW5kIHJlc3BvbnNlIHByb2dyZXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRXb3JrYmVuY2hSZWZlcnJhbEFwcGxldFVzaW5nR0VUKG9ic2VydmU/OiAnYm9keScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8TW9kZWxBbmRWaWV3PjtcbiAgICBwdWJsaWMgZ2V0V29ya2JlbmNoUmVmZXJyYWxBcHBsZXRVc2luZ0dFVChvYnNlcnZlPzogJ3Jlc3BvbnNlJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8TW9kZWxBbmRWaWV3Pj47XG4gICAgcHVibGljIGdldFdvcmtiZW5jaFJlZmVycmFsQXBwbGV0VXNpbmdHRVQob2JzZXJ2ZT86ICdldmVudHMnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxNb2RlbEFuZFZpZXc+PjtcbiAgICBwdWJsaWMgZ2V0V29ya2JlbmNoUmVmZXJyYWxBcHBsZXRVc2luZ0dFVChvYnNlcnZlOiBhbnkgPSAnYm9keScsIHJlcG9ydFByb2dyZXNzOiBib29sZWFuID0gZmFsc2UgKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuZGVmYXVsdEhlYWRlcnM7XG5cbiAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBBY2NlcHQgaGVhZGVyXG4gICAgICAgIGxldCBodHRwSGVhZGVyQWNjZXB0czogc3RyaW5nW10gPSBbXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnYXBwbGljYXRpb24veG1sJyxcbiAgICAgICAgICAgICd0ZXh0L2h0bWwnXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckFjY2VwdChodHRwSGVhZGVyQWNjZXB0cyk7XG4gICAgICAgIGlmIChodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ0FjY2VwdCcsIGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIENvbnRlbnQtVHlwZSBoZWFkZXJcbiAgICAgICAgY29uc3QgY29uc3VtZXM6IHN0cmluZ1tdID0gW1xuICAgICAgICBdO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PE1vZGVsQW5kVmlldz4oYCR7dGhpcy5iYXNlUGF0aH0vYXBpL3YxL3dvcmtiZW5jaC9yZWZlcnJhbC1hcHBsZXRgLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5jb25maWd1cmF0aW9uLndpdGhDcmVkZW50aWFscyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgICAgICAgIG9ic2VydmU6IG9ic2VydmUsXG4gICAgICAgICAgICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHJlcG9ydFByb2dyZXNzXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG59XG4iXX0=