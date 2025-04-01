# Define the list of directories
$directories = @("sm_i2e_ara_ws","sm_i2e_common_ws","sm_i2e_em_ws","sm_i2e_fs_ws","sm_i2e_gpmats_ws\aggregator","sm_i2e_icd_ws\icdata-rest-api","sm_i2e_jasper_ws","sm_i2e_mail_service\api","sm_i2e_referral_ws","sm_i2e_yg_ws")

$namemap = @{
  "sm_i2e_ara_ws"                 = "sm_i2e_ara_ws";
  "sm_i2e_common_ws"              = "sm_i2e_common_ws";
  "sm_i2e_em_ws"                  = "sm_i2e_em_ws";
  "sm_i2e_fs_ws"                  = "sm_i2e_fs_ws";
  "sm_i2e_gpmats_ws\aggregator"   = "sm_i2e_gpmats_ws";
  "sm_i2e_icd_ws\icdata-rest-api" = "sm_i2e_icd_ws";
  "sm_i2e_jasper_ws"              = "sm_i2e_jasper_ws";
  "sm_i2e_mail_service\api"       = "sm_i2e_mail_service";
  "sm_i2e_referral_ws"            = "sm_i2e_referral_ws";
  "sm_i2e_yg_ws"                  = "sm_i2e_yg_ws"}

$basedir = "C:\Users\kanozad\dev\workspaces\service-workspace\"

$swaggerdir = "\target\swagger\"

$targetdir = "C:\Users\kanozad\dev\workspaces\swagger-codegen-workspace\i2ecws-lib\api\"

# Loop through each directory
foreach ($dir in $directories) {
  # Change working directory
  $filename = $namemap[$dir]
  $path = $basedir + $dir + $swaggerdir + "swagger.json"
  $destpath = $targetdir + $filename + ".json"
  Write-Output ($path + " --> " +  $destpath)

  Copy-Item -Path $path -Destination $destpath -Force
  
}
