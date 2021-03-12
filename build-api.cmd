set swagger_opts=-i swagger.json
set template_opts=-t templates\typescript-angular
set config_opts=-c config.json
set output_opts=-o projects\i2ecws-lib\src
set lang_opts=-l typescript-angular

java -jar bin\swagger-codegen-cli-2.4.19.jar generate %swagger_opts% %template_opts% %lang_opts% %config_opts% %output_opts%


