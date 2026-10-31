Add-Type -AssemblyName System.Drawing

$src = "C:\Users\Admin\.gemini\antigravity-ide\brain\512f59db-fca4-4ca2-824c-6857bf55c38d\.user_uploaded\media_1793428657424.png"
$bmp = [System.Drawing.Bitmap]::FromFile($src)

# Crop from x = 456 to 1024, y = 0 to 425
$cropX = 456
$cropY = 0
$cropW = $bmp.Width - $cropX
$cropH = 425

$cropRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$cropped = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($cropped)
$g.DrawImage($bmp, 0, 0, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

$destDir = "D:\office_project_siva\anbutraders\anbu-paint\paint"
$destPath = Join-Path $destDir "berger-podium-showcase.png"
$cropped.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$cropped.Dispose()
$bmp.Dispose()
Write-Host "Saved perfect podium crop to $destPath"
