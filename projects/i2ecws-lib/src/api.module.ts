import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
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

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
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
    WorkbenchControllerService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
