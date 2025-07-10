# Script to generate HSS-S2S REST Web Service client library

# Set the current directory to the script directory
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $scriptPath

# Define paths
$inputSpec = ".\api\hss-s2s.json"
$configFile = ".\config-hss-s2s.json"
$outputDir = ".\gen\hss-s2s"

# Create output directory if it doesn't exist
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
}

# Generate client library
Write-Host "Generating HSS-S2S REST Web Service client library..."
Write-Host "Input specification: $inputSpec"
Write-Host "Configuration file: $configFile"
Write-Host "Output directory: $outputDir"

# Call the generate.ps1 script with the appropriate parameters
& .\generate.ps1 -InputSpec $inputSpec -ConfigFile $configFile -OutputDir $outputDir

# Check if generation was successful
if ($LASTEXITCODE -eq 0) {
    Write-Host "Client library generation completed successfully."
    Write-Host "Generated files are available in: $outputDir"
} else {
    Write-Host "Client library generation failed with exit code: $LASTEXITCODE"
}
