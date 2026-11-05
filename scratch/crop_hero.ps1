Add-Type -AssemblyName System.Drawing

$src = "C:\Users\Admin\.gemini\antigravity\brain\b8665a0a-01bb-475e-85a1-62cc2f021434\.user_uploaded\media_1793861036074_1e13236a.jpg"
$img = [System.Drawing.Image]::FromFile($src)
Write-Output ("Source size: " + $img.Width + "x" + $img.Height)

# The right side image begins around x=370 and ends at width (1024), y from 50 to 510
$cropX = 350
$cropY = 48
$cropW = $img.Width - $cropX
$cropH = 465

$rect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$bmp = New-Object System.Drawing.Bitmap($cropW, $cropH)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $cropW, $cropH)), $rect, [System.Drawing.GraphicsUnit]::Pixel)

$dest = "d:\office_project_siva\anbutraders\img\opt\hero-materials-composite.jpg"
$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]95)

$bmp.Save($dest, $encoder, $encoderParams)
$g.Dispose()
$bmp.Dispose()
$img.Dispose()

Write-Output "Successfully saved cropped composite to img/opt/hero-materials-composite.jpg"

