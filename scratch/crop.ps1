Add-Type -AssemblyName System.Drawing

$srcPath = "C:/Users/Admin/.gemini/antigravity/brain/b8665a0a-01bb-475e-85a1-62cc2f021434/.user_uploaded/media_1793861036074_1e13236a.jpg"
$destPath = "d:/office_project_siva/anbutraders/img/hero/hero-yard-industrial.jpg"

$src = [System.Drawing.Image]::FromFile($srcPath)

# The reference image is 1024x576. The industrial photo is on the right half.
# From x=410 to 1024, and y=0 to 510 (above the bottom trusted brands bar)
$x = 400
$y = 0
$w = 1024 - $x
$h = 512

$cropRect = [System.Drawing.Rectangle]::new($x, $y, $w, $h)
$bmp = New-Object System.Drawing.Bitmap($w, $h)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

$destRect = [System.Drawing.Rectangle]::new(0, 0, $w, $h)
$g.DrawImage($src, $destRect, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)

$bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)

$g.Dispose()
$bmp.Dispose()
$src.Dispose()

Write-Output "Successfully saved cropped image to $destPath (Size: ${w}x${h})"

