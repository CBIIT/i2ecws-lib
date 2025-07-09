$Env:JAVA_HOME="C:\Users\kanozad\dev\java\jdk17.0.15_6";

$output_path="projects\gpmats-itp\java-client" 

$swagger_opts="-i api\gpmats-itp.json"

$template_opts="-t templates\Java"

$config_opts="-c .\config.json"

$output_opts="-o $output_path"

$lang_opts="-l java"

$sys_opts=

$misc_opts=

# Write-Output "java -jar bin\swagger-codegen-cli-3.0.68.jar generate $swagger_opts $template_opts $lang_opts $output_opts $config_opts $misc_opts"

Remove-Item -Force -Recurse $output_path -Confirm:$false

Invoke-Expression "java -jar bin\swagger-codegen-cli-3.0.68.jar generate $swagger_opts $template_opts $lang_opts $output_opts $config_opts $misc_opts"

