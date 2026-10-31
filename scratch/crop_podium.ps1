Add-Type -AssemblyName System.Drawing

$src = "C:\Users\Admin\.gemini\antigravity-ide\brain\512f59db-fca4-4ca2-824c-6857bf55c38d\.user_uploaded\media_1793428657424.png"
$bmp = [System.Drawing.Bitmap]::FromFile($src)

Write-Host "Width: $($bmp.Width), Height: $($bmp.Height)"

# Crop the right product arrangement: from x = 420 to 1024, y = 0 to 420
$cropX = 420
$cropY = 0
$cropW = $bmp.Width - $cropX
$cropH = 415

$cropRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$cropped = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($cropped)
$g.DrawImage($bmp, 0, 0, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

$destPath = "D:\office_project_siva\anbutraders\scratch\podium_crop.png"
$cropped.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$cropped.Dispose()
$bmp.Dispose()
Write-Host "Saved podium crop to $destPath"
