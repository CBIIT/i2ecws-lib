## i2ecws-lib@2.1.0

### Building

Starting from the very beginning, the only dependencies here are ```swagger.json```, the correct version of 
```swagger-codegen-cli.jar``` (currently 2.4.18), ```config.json```, the build script, ```build-api.cmd```, and
the two mustache templates for generating ```package.json``` and ```ng-package.json``` in ```templates\typescript-angular```.

#### swagger.json

This file contains the api definition.  Any time the API changes, this file should be updated and the process run again.

#### swagger-codegen-cli.jar

This is the swagger code generation tool.  We should be using the same version that was used by the maven plugin to generate 
the swagger.json file above, although it's probably not strictly necessary, as long as both versions support the same
version of the OpenAPI spec.  Kept in the /bin folder.

NOTE: storing the .jar in the repository can cause issues in client projects because the anti-virus software can lock
the file while scanning, causing issues.  It's best to manually install this yourself from Nexus:

```https://ncimvn.nci.nih.gov/nexus/service/local/repositories/central/content/io/swagger/swagger-codegen-cli/2.4.18/swagger-codegen-cli-2.4.18.jar```

#### config.json

This file has some configuration settings that are necessary to configure the build properly. These are the same 
settings that are passed to the swagger codegen maven plugin, so whenever those values are updated, these values
should be updated as well.

Specifically:
* ngVersion - the version of angular to use.  This will affect the values in package.json
* npmName - the name of the package we're building
* npmVersion - the version of the package we're building.  This should synch with the version of the API.

#### build-api.cmd

This is just a simple batch file that executes the build and generates the angular API.

#### package.json and ng-package.json templates

Strictly speaking, there's no reason we need to use templates instead of just manually updating the files. For now, 
I left it this way because that's how the maven plugin does it.  Just remember that if you change the generated versions,
they will get overwritten the next time you build the API. If you want permanent changes, update the template.

To build the API, run:
```
java -jar bin\swagger-codegen-cli-2.4.18.jar generate -i swagger.json -t templates\typescript-angular -l typescript-angular -c config.json
(or just execute the build-api.cmd script)

```

To install the required dependencies and to build the typescript sources run:
```
npm install
npm run build
```

At this point, you can commit, tag, and push everything to github. This is all that's strictly necessary to distribute
the NPM package via github.  To use it in a client project, put the following in your package.json:

```
"i2ecws-lib": "github:CBIIT/<repo-name>.git#<tag>"

<tag> corresponds to the tag you created above.  You can leave this blank and get the default main/master branch.
It could also be a commit hash or a branch as well.
```

There is one additional step if you want to create a tarball for manual distribution.  Change into the ```dist``` folder, 
and edit the package.json file that's there.  Remove the "files":[...] section if it exists.  This controls the files
that end up in the tarball, but in this case we want everything.  The only reason it's here at all is because it's
copied from the package.json in the project root. I'm working on getting it out of there.  Still in the ```dist```
folder, run:

```
npm pack

if all goes well, you should now have a file called <npmName>-<npmVersion>.tgz in the dist folder.  You can copy that
file into a client project and reference it in package.json with:

"i2ecws-lib":"file:<npmName>-<npmVersion>.tgz"
```

#### General usage

In your Angular project:


```
// without configuring providers
import { ApiModule } from 'i2ecws-lib';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [
        ApiModule,
        // make sure to import the HttpClientModule in the AppModule only,
        // see https://github.com/angular/angular/issues/20575
        HttpClientModule
    ],
    declarations: [ AppComponent ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```

```
// configuring providers
import { ApiModule, Configuration, ConfigurationParameters } from 'i2ecws-lib';

export function apiConfigFactory (): Configuration => {
  const params: ConfigurationParameters = {
    // set configuration parameters here.
  }
  return new Configuration(params);
}

@NgModule({
    imports: [ ApiModule.forRoot(apiConfigFactory) ],
    declarations: [ AppComponent ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```

```
import { DefaultApi } from 'i2ecws-lib';

export class AppComponent {
	 constructor(private apiGateway: DefaultApi) { }
}
```

Note: The ApiModule is restricted to being instantiated once app wide.
This is to ensure that all services are treated as singletons.

#### Using multiple swagger files / APIs / ApiModules
In order to use multiple `ApiModules` generated from different swagger files,
you can create an alias name when importing the modules
in order to avoid naming conflicts:
```
import { ApiModule } from 'my-api-path';
import { ApiModule as OtherApiModule } from 'my-other-api-path';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    ApiModule,
    OtherApiModule,
    // make sure to import the HttpClientModule in the AppModule only,
    // see https://github.com/angular/angular/issues/20575
    HttpClientModule
  ]
})
export class AppModule {

}
```


### Set service base path
If different than the generated base path, during app bootstrap, you can provide the base path to your service. 

```
import { BASE_PATH } from 'i2ecws-lib';

bootstrap(AppComponent, [
    { provide: BASE_PATH, useValue: 'https://your-web-service.com' },
]);
```
or

```
import { BASE_PATH } from 'i2ecws-lib';

@NgModule({
    imports: [],
    declarations: [ AppComponent ],
    providers: [ provide: BASE_PATH, useValue: 'https://your-web-service.com' ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```


#### Using @angular/cli
First extend your `src/environments/*.ts` files by adding the corresponding base path:

```
export const environment = {
  production: false,
  API_BASE_PATH: 'http://127.0.0.1:8080'
};
```

In the src/app/app.module.ts:
```
import { BASE_PATH } from 'i2ecws-lib';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ ],
  providers: [{ provide: BASE_PATH, useValue: environment.API_BASE_PATH }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```  
