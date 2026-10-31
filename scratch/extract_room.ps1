Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Admin\.gemini\antigravity-ide\brain\512f59db-fca4-4ca2-824c-6857bf55c38d\.user_uploaded\media_1793427248327.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

Write-Host "Original width: $($bmp.Width), height: $($bmp.Height)"

# We want to crop from where the curve starts or extract the right side.
# Let's see: from x = 430 to 1024 is width 594.
$cropX = 440
$cropW = $bmp.Width - $cropX
$cropH = $bmp.Height

$cropRect = New-Object System.Drawing.Rectangle($cropX, 0, $cropW, $cropH)
$cropped = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($cropped)
$g.DrawImage($bmp, 0, 0, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

$destDir = "D:\office_project_siva\anbutraders\anbu-paint\paint"
$destPath = Join-Path $destDir "berger-about-living-room.png"
$cropped.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$cropped.Dispose()
$bmp.Dispose()

Write-Host "Saved cropped room to $destPath"
