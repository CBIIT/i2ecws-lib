$Env:JAVA_HOME="C:\Users\kanozad\dev\java\jdk17.0.15_6";

$output_path="projects\login\java-server" 

$swagger_opts="-i api\update_last_login.json"

$template_opts="-t templates\JavaSpring"

$config_opts="-c .\config-login-server.json"

$output_opts="-o $output_path"

$lang_opts="-l spring"

$sys_opts=

$misc_opts=

# Write-Output "java -jar bin\swagger-codegen-cli-3.0.68.jar generate $swagger_opts $template_opts $lang_opts $output_opts $config_opts $misc_opts"

Remove-Item -Force -Recurse $output_path -Confirm:$false

Invoke-Expression "java -jar bin\swagger-codegen-cli-3.0.68.jar generate $swagger_opts $template_opts $lang_opts $output_opts $config_opts $misc_opts"

