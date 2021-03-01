import { NgModule, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';
import { ActivitiesCodeControllerService } from './api/activitiesCodeController.service';
import { ApiQueueEntityService } from './api/apiQueueEntity.service';
import { AppNavigationTControllerService } from './api/appNavigationTController.service';
import { AppNavigationTEntityService } from './api/appNavigationTEntity.service';
import { AraControllerService } from './api/araController.service';
import { AraReasonsControllerService } from './api/araReasonsController.service';
import { BoardsControllerService } from './api/boardsController.service';
import { CancerActivityControllerService } from './api/cancerActivityController.service';
import { CancerActivityRolesControllerService } from './api/cancerActivityRolesController.service';
import { CgRefCodControllerService } from './api/cgRefCodController.service';
import { EmControllerService } from './api/emController.service';
import { ExportControllerService } from './api/exportController.service';
import { GwbLinksControllerService } from './api/gwbLinksController.service';
import { I2eUserActiveRolesControllerService } from './api/i2eUserActiveRolesController.service';
import { IcDataControllerService } from './api/icDataController.service';
import { JasperReportControllerService } from './api/jasperReportController.service';
import { LookupsControllerService } from './api/lookupsController.service';
import { NciReferralGrantsControllerService } from './api/nciReferralGrantsController.service';
import { PaylineCertificationsTEntityService } from './api/paylineCertificationsTEntity.service';
import { PaylineControllerService } from './api/paylineController.service';
import { PaylineStatusesTEntityService } from './api/paylineStatusesTEntity.service';
import { PaylistControllerService } from './api/paylistController.service';
import { PaylistGrantsControllerService } from './api/paylistGrantsController.service';
import { PaylistUtilControllerService } from './api/paylistUtilController.service';
import { PdControllerService } from './api/pdController.service';
import { PropertiesControllerService } from './api/propertiesController.service';
import { ReferralApplNotifyCommentsTEntityService } from './api/referralApplNotifyCommentsTEntity.service';
import { ReferralApplNotifyControllerService } from './api/referralApplNotifyController.service';
import { ReferralApplNotifyTEntityService } from './api/referralApplNotifyTEntity.service';
import { ReferralMessagesControllerService } from './api/referralMessagesController.service';
import { ReferralMessagesTEntityService } from './api/referralMessagesTEntity.service';
import { ReferralSearchCriteriaControllerService } from './api/referralSearchCriteriaController.service';
import { ReferralWorkflowControllerService } from './api/referralWorkflowController.service';
import { RoAssignmentControllerService } from './api/roAssignmentController.service';
import { UserControllerService } from './api/userController.service';
import { WorkbenchControllerService } from './api/workbenchController.service';
export class ApiModule {
    constructor(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
    static forRoot(configurationFactory) {
        return {
            ngModule: ApiModule,
            providers: [{ provide: Configuration, useFactory: configurationFactory }]
        };
    }
}
ApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [],
                exports: [],
                providers: [
                    ActivitiesCodeControllerService,
                    ApiQueueEntityService,
                    AppNavigationTControllerService,
                    AppNavigationTEntityService,
                    AraControllerService,
                    AraReasonsControllerService,
                    BoardsControllerService,
                    CancerActivityControllerService,
                    CancerActivityRolesControllerService,
                    CgRefCodControllerService,
                    EmControllerService,
                    ExportControllerService,
                    GwbLinksControllerService,
                    I2eUserActiveRolesControllerService,
                    IcDataControllerService,
                    JasperReportControllerService,
                    LookupsControllerService,
                    NciReferralGrantsControllerService,
                    PaylineCertificationsTEntityService,
                    PaylineControllerService,
                    PaylineStatusesTEntityService,
                    PaylistControllerService,
                    PaylistGrantsControllerService,
                    PaylistUtilControllerService,
                    PdControllerService,
                    PropertiesControllerService,
                    ReferralApplNotifyCommentsTEntityService,
                    ReferralApplNotifyControllerService,
                    ReferralApplNotifyTEntityService,
                    ReferralMessagesControllerService,
                    ReferralMessagesTEntityService,
                    ReferralSearchCriteriaControllerService,
                    ReferralWorkflowControllerService,
                    RoAssignmentControllerService,
                    UserControllerService,
                    WorkbenchControllerService
                ]
            },] }
];
ApiModule.ctorParameters = () => [
    { type: ApiModule, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: HttpClient, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2FwaS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2xELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ25HLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2pHLE9BQU8sRUFB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O29CQUNuQiwyQkFBMkI7b0JBQzNCLHdDQUF3QztvQkFDeEMsbUNBQW1DO29CQUNuQyxnQ0FBZ0M7b0JBQ2hDLGlDQUFpQztvQkFDakMsOEJBQThCO29CQUM5Qix1Q0FBdUM7b0JBQ3ZDLGlDQUFpQztvQkFDakMsNkJBQTZCO29CQUM3QixxQkFBcUI7b0JBQ3JCLDBCQUEwQjtpQkFBRTthQUMvQjs7O1lBU3NELFNBQVMsdUJBQTlDLFFBQVEsWUFBSSxRQUFRO1lBMUY3QixVQUFVLHVCQTJGRCxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5cbmltcG9ydCB7IEFjdGl2aXRpZXNDb2RlQ29udHJvbGxlclNlcnZpY2UgfSBmcm9tICcuL2FwaS9hY3Rpdml0aWVzQ29kZUNvbnRyb2xsZXIuc2VydmljZSc7XG5pbXBvcnQgeyBBcGlRdWV1ZUVudGl0eVNlcnZpY2UgfSBmcm9tICcuL2FwaS9hcGlRdWV1ZUVudGl0eS5zZXJ2aWNlJztcbmltcG9ydCB7IEFwcE5hdmlnYXRpb25UQ29udHJvbGxlclNlcnZpY2UgfSBmcm9tICcuL2FwaS9hcHBOYXZpZ2F0aW9uVENvbnRyb2xsZXIuc2VydmljZSc7XG5pbXBvcnQgeyBBcHBOYXZpZ2F0aW9uVEVudGl0eVNlcnZpY2UgfSBmcm9tICcuL2FwaS9hcHBOYXZpZ2F0aW9uVEVudGl0eS5zZXJ2aWNlJztcbmltcG9ydCB7IEFyYUNvbnRyb2xsZXJTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvYXJhQ29udHJvbGxlci5zZXJ2aWNlJztcbmltcG9ydCB7IEFyYVJlYXNvbnNDb250cm9sbGVyU2VydmljZSB9IGZyb20gJy4vYXBpL2FyYVJlYXNvbnNDb250cm9sbGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQm9hcmRzQ29udHJvbGxlclNlcnZpY2UgfSBmcm9tICcuL2FwaS9ib2FyZHNDb250cm9sbGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FuY2VyQWN0aXZpdHlDb250cm9sbGVyU2VydmljZSB9IGZyb20gJy4vYXBpL2NhbmNlckFjdGl2aXR5Q29udHJvbGxlci5zZXJ2aWNlJztcbmltcG9ydCB7IENhbmNlckFjdGl2aXR5Um9sZXNDb250cm9sbGVyU2VydmljZSB9IGZyb20gJy4vYXBpL2NhbmNlckFjdGl2aXR5Um9sZXNDb250cm9sbGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2dSZWZDb2RDb250cm9sbGVyU2VydmljZSB9IGZyb20gJy4vYXBpL2NnUmVmQ29kQ29udHJvbGxlci5zZXJ2aWNlJztcbmltcG9ydCB7IEVtQ29udHJvbGxlclNlcnZpY2UgfSBmcm9tICcuL2FwaS9lbUNvbnRyb2xsZXIuc2VydmljZSc7XG5pbXBvcnQgeyBFeHBvcnRDb250cm9sbGVyU2VydmljZSB9IGZyb20gJy4vYXBpL2V4cG9ydENvbnRyb2xsZXIuc2VydmljZSc7XG5pbXBvcnQgeyBHd2JMaW5rc0NvbnRyb2xsZXJTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvZ3diTGlua3NDb250cm9sbGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSTJlVXNlckFjdGl2ZVJvbGVzQ29udHJvbGxlclNlcnZpY2UgfSBmcm9tICcuL2FwaS9pMmVVc2VyQWN0aXZlUm9sZXNDb250cm9sbGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWNEYXRhQ29udHJvbGxlclNlcnZpY2UgfSBmcm9tICcuL2FwaS9pY0RhdGFDb250cm9sbGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSmFzcGVyUmVwb3J0Q29udHJvbGxlclNlcnZpY2UgfSBmcm9tICcuL2FwaS9qYXNwZXJSZXBvcnRDb250cm9sbGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9va3Vwc0NvbnRyb2xsZXJTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvbG9va3Vwc0NvbnRyb2xsZXIuc2VydmljZSc7XG5pbXBvcnQgeyBOY2lSZWZlcnJhbEdyYW50c0NvbnRyb2xsZXJTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvbmNpUmVmZXJyYWxHcmFudHNDb250cm9sbGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGF5bGluZUNlcnRpZmljYXRpb25zVEVudGl0eVNlcnZpY2UgfSBmcm9tICcuL2FwaS9wYXlsaW5lQ2VydGlmaWNhdGlvbnNURW50aXR5LnNlcnZpY2UnO1xuaW1wb3J0IHsgUGF5bGluZUNvbnRyb2xsZXJTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvcGF5bGluZUNvbnRyb2xsZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQYXlsaW5lU3RhdHVzZXNURW50aXR5U2VydmljZSB9IGZyb20gJy4vYXBpL3BheWxpbmVTdGF0dXNlc1RFbnRpdHkuc2VydmljZSc7XG5pbXBvcnQgeyBQYXlsaXN0Q29udHJvbGxlclNlcnZpY2UgfSBmcm9tICcuL2FwaS9wYXlsaXN0Q29udHJvbGxlci5zZXJ2aWNlJztcbmltcG9ydCB7IFBheWxpc3RHcmFudHNDb250cm9sbGVyU2VydmljZSB9IGZyb20gJy4vYXBpL3BheWxpc3RHcmFudHNDb250cm9sbGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGF5bGlzdFV0aWxDb250cm9sbGVyU2VydmljZSB9IGZyb20gJy4vYXBpL3BheWxpc3RVdGlsQ29udHJvbGxlci5zZXJ2aWNlJztcbmltcG9ydCB7IFBkQ29udHJvbGxlclNlcnZpY2UgfSBmcm9tICcuL2FwaS9wZENvbnRyb2xsZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9wZXJ0aWVzQ29udHJvbGxlclNlcnZpY2UgfSBmcm9tICcuL2FwaS9wcm9wZXJ0aWVzQ29udHJvbGxlci5zZXJ2aWNlJztcbmltcG9ydCB7IFJlZmVycmFsQXBwbE5vdGlmeUNvbW1lbnRzVEVudGl0eVNlcnZpY2UgfSBmcm9tICcuL2FwaS9yZWZlcnJhbEFwcGxOb3RpZnlDb21tZW50c1RFbnRpdHkuc2VydmljZSc7XG5pbXBvcnQgeyBSZWZlcnJhbEFwcGxOb3RpZnlDb250cm9sbGVyU2VydmljZSB9IGZyb20gJy4vYXBpL3JlZmVycmFsQXBwbE5vdGlmeUNvbnRyb2xsZXIuc2VydmljZSc7XG5pbXBvcnQgeyBSZWZlcnJhbEFwcGxOb3RpZnlURW50aXR5U2VydmljZSB9IGZyb20gJy4vYXBpL3JlZmVycmFsQXBwbE5vdGlmeVRFbnRpdHkuc2VydmljZSc7XG5pbXBvcnQgeyBSZWZlcnJhbE1lc3NhZ2VzQ29udHJvbGxlclNlcnZpY2UgfSBmcm9tICcuL2FwaS9yZWZlcnJhbE1lc3NhZ2VzQ29udHJvbGxlci5zZXJ2aWNlJztcbmltcG9ydCB7IFJlZmVycmFsTWVzc2FnZXNURW50aXR5U2VydmljZSB9IGZyb20gJy4vYXBpL3JlZmVycmFsTWVzc2FnZXNURW50aXR5LnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVmZXJyYWxTZWFyY2hDcml0ZXJpYUNvbnRyb2xsZXJTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvcmVmZXJyYWxTZWFyY2hDcml0ZXJpYUNvbnRyb2xsZXIuc2VydmljZSc7XG5pbXBvcnQgeyBSZWZlcnJhbFdvcmtmbG93Q29udHJvbGxlclNlcnZpY2UgfSBmcm9tICcuL2FwaS9yZWZlcnJhbFdvcmtmbG93Q29udHJvbGxlci5zZXJ2aWNlJztcbmltcG9ydCB7IFJvQXNzaWdubWVudENvbnRyb2xsZXJTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvcm9Bc3NpZ25tZW50Q29udHJvbGxlci5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJDb250cm9sbGVyU2VydmljZSB9IGZyb20gJy4vYXBpL3VzZXJDb250cm9sbGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgV29ya2JlbmNoQ29udHJvbGxlclNlcnZpY2UgfSBmcm9tICcuL2FwaS93b3JrYmVuY2hDb250cm9sbGVyLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiAgICAgIFtdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBleHBvcnRzOiAgICAgIFtdLFxuICBwcm92aWRlcnM6IFtcbiAgICBBY3Rpdml0aWVzQ29kZUNvbnRyb2xsZXJTZXJ2aWNlLFxuICAgIEFwaVF1ZXVlRW50aXR5U2VydmljZSxcbiAgICBBcHBOYXZpZ2F0aW9uVENvbnRyb2xsZXJTZXJ2aWNlLFxuICAgIEFwcE5hdmlnYXRpb25URW50aXR5U2VydmljZSxcbiAgICBBcmFDb250cm9sbGVyU2VydmljZSxcbiAgICBBcmFSZWFzb25zQ29udHJvbGxlclNlcnZpY2UsXG4gICAgQm9hcmRzQ29udHJvbGxlclNlcnZpY2UsXG4gICAgQ2FuY2VyQWN0aXZpdHlDb250cm9sbGVyU2VydmljZSxcbiAgICBDYW5jZXJBY3Rpdml0eVJvbGVzQ29udHJvbGxlclNlcnZpY2UsXG4gICAgQ2dSZWZDb2RDb250cm9sbGVyU2VydmljZSxcbiAgICBFbUNvbnRyb2xsZXJTZXJ2aWNlLFxuICAgIEV4cG9ydENvbnRyb2xsZXJTZXJ2aWNlLFxuICAgIEd3YkxpbmtzQ29udHJvbGxlclNlcnZpY2UsXG4gICAgSTJlVXNlckFjdGl2ZVJvbGVzQ29udHJvbGxlclNlcnZpY2UsXG4gICAgSWNEYXRhQ29udHJvbGxlclNlcnZpY2UsXG4gICAgSmFzcGVyUmVwb3J0Q29udHJvbGxlclNlcnZpY2UsXG4gICAgTG9va3Vwc0NvbnRyb2xsZXJTZXJ2aWNlLFxuICAgIE5jaVJlZmVycmFsR3JhbnRzQ29udHJvbGxlclNlcnZpY2UsXG4gICAgUGF5bGluZUNlcnRpZmljYXRpb25zVEVudGl0eVNlcnZpY2UsXG4gICAgUGF5bGluZUNvbnRyb2xsZXJTZXJ2aWNlLFxuICAgIFBheWxpbmVTdGF0dXNlc1RFbnRpdHlTZXJ2aWNlLFxuICAgIFBheWxpc3RDb250cm9sbGVyU2VydmljZSxcbiAgICBQYXlsaXN0R3JhbnRzQ29udHJvbGxlclNlcnZpY2UsXG4gICAgUGF5bGlzdFV0aWxDb250cm9sbGVyU2VydmljZSxcbiAgICBQZENvbnRyb2xsZXJTZXJ2aWNlLFxuICAgIFByb3BlcnRpZXNDb250cm9sbGVyU2VydmljZSxcbiAgICBSZWZlcnJhbEFwcGxOb3RpZnlDb21tZW50c1RFbnRpdHlTZXJ2aWNlLFxuICAgIFJlZmVycmFsQXBwbE5vdGlmeUNvbnRyb2xsZXJTZXJ2aWNlLFxuICAgIFJlZmVycmFsQXBwbE5vdGlmeVRFbnRpdHlTZXJ2aWNlLFxuICAgIFJlZmVycmFsTWVzc2FnZXNDb250cm9sbGVyU2VydmljZSxcbiAgICBSZWZlcnJhbE1lc3NhZ2VzVEVudGl0eVNlcnZpY2UsXG4gICAgUmVmZXJyYWxTZWFyY2hDcml0ZXJpYUNvbnRyb2xsZXJTZXJ2aWNlLFxuICAgIFJlZmVycmFsV29ya2Zsb3dDb250cm9sbGVyU2VydmljZSxcbiAgICBSb0Fzc2lnbm1lbnRDb250cm9sbGVyU2VydmljZSxcbiAgICBVc2VyQ29udHJvbGxlclNlcnZpY2UsXG4gICAgV29ya2JlbmNoQ29udHJvbGxlclNlcnZpY2UgXVxufSlcbmV4cG9ydCBjbGFzcyBBcGlNb2R1bGUge1xuICAgIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWd1cmF0aW9uRmFjdG9yeTogKCkgPT4gQ29uZmlndXJhdGlvbik6IE1vZHVsZVdpdGhQcm92aWRlcnM8QXBpTW9kdWxlPiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogQXBpTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogQ29uZmlndXJhdGlvbiwgdXNlRmFjdG9yeTogY29uZmlndXJhdGlvbkZhY3RvcnkgfSBdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQXBpTW9kdWxlLFxuICAgICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXBpTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaW4geW91ciBiYXNlIEFwcE1vZHVsZSBvbmx5LicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaHR0cCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBpbXBvcnQgdGhlIEh0dHBDbGllbnRNb2R1bGUgaW4geW91ciBBcHBNb2R1bGUhIFxcbicgK1xuICAgICAgICAgICAgJ1NlZSBhbHNvIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIwNTc1Jyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=