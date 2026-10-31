Add-Type -AssemblyName System.Drawing

$src = "C:\Users\Admin\.gemini\antigravity-ide\brain\512f59db-fca4-4ca2-824c-6857bf55c38d\.user_uploaded\media_1793427248327.png"
$bmp = [System.Drawing.Bitmap]::FromFile($src)

# Crop x=420 to 650, full height (y=0 to 426)
$cropRect = New-Object System.Drawing.Rectangle(430, 0, 220, $bmp.Height)
$cropped = New-Object System.Drawing.Bitmap(220, $bmp.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($cropped)
$g.DrawImage($bmp, 0, 0, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

$destPath = "D:\office_project_siva\anbutraders\scratch\curve_zoom.png"
$cropped.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$cropped.Dispose()
$bmp.Dispose()
Write-Host "Saved curve zoom to $destPath"
