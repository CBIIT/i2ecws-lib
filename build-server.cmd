
REM The swagger api specification generated by the maven script.  Can also be a URL.
set swagger_opts=-i swagger.json
REM http://localhost:8080/i2ecws/v2/api-docs/swagger.json

REM Directory where templates for package.json and ng-package can be found
REM set template_opts=-t templates\JavaSpring
set template_opts=-t templates\nodejs

REM Values set in config_opts can also be passed in via -Dname=value in sys_opts below. Command line 
REM values will NOT override values set in the file below
set config_opts=-c config.json

REM Specify the output directory. Right now, we're treating it as a library, but that's somewhat
REM arbitrary. It could just as easily be the root project in the workspace.
REM set output_opts=-o projects\i2ecws-lib\server-spring
set output_opts=-o projects\i2ecws-lib\server-node

REM Specify the target language for the generated API
REM set lang_opts=-l spring 
set lang_opts=-l nodejs-server

REM Set additional options here.  These are what would normally go in config.json above.
set sys_opts=-DnpmVersion=1.0.0 -Dsnapshot=false

REM Additional properties that can be read by the mustache templates
set misc_opts=--additional-properties apiVersion=1.0.0,author="Doug the Magnificent (kanozad@mail.nih.gov)"
 
java -jar bin\swagger-codegen-cli-3.0.33.jar generate %sys_opts% %swagger_opts% %template_opts% %lang_opts% %config_opts% %output_opts% %misc_opts%
