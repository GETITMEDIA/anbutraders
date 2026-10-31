Add-Type -AssemblyName System.Drawing

$src = "C:\Users\Admin\.gemini\antigravity-ide\brain\512f59db-fca4-4ca2-824c-6857bf55c38d\.user_uploaded\media_1793428657424.png"
$bmp = [System.Drawing.Bitmap]::FromFile($src)

# Bottom left corner: x = 0 to 140, y = 370 to 512
$cropRect = New-Object System.Drawing.Rectangle(0, 370, 140, 142)
$cropped = New-Object System.Drawing.Bitmap(140, 142, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($cropped)
$g.DrawImage($bmp, 0, 0, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

$destDir = "D:\office_project_siva\anbutraders\anbu-paint\paint"
$destPath = Join-Path $destDir "berger-corner-leaf.png"
$cropped.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$cropped.Dispose()
$bmp.Dispose()
Write-Host "Saved corner leaf to $destPath"
