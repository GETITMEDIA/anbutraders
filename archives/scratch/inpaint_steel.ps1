Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Admin\.gemini\antigravity\brain\b8665a0a-01bb-475e-85a1-62cc2f021434\hero_cement_steel_tmt_1793878555438.jpg"
$destPath = "cement\anbucement\img\slider\hero_steel_1.jpg"

$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

# The text is located roughly in Rectangle(60, 270, 460, 200)
# Above this (y=0 to 270) is sky (gradient from R=80,G=160,B=235 down to R=180,G=215,B=250)
# Below this (y=470 to 768) is balcony wall and tiled terrace floor

# Let's create a smooth linear gradient brush for the sky portion: y=260 to y=420
$rectSky = New-Object System.Drawing.Rectangle(40, 260, 520, 160)
$skyColor1 = $bmp.GetPixel(300, 255) # color just above text
$skyColor2 = $bmp.GetPixel(300, 425) # color just below text or near horizon
# If y=425 is wall, let's sample at the horizon:
$brushSky = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.Point(300, 255)),
    (New-Object System.Drawing.Point(300, 420)),
    $skyColor1,
    [System.Drawing.Color]::FromArgb(255, 200, 225, 252)
)
$g.FillRectangle($brushSky, $rectSky)

# For the FE-550D text which sits near the horizon / balcony wall at y=390-460:
# Let's sample the clean balcony wall from the left (x=10 to 50) and clone horizontally across to x=550
for ($y = 410; $y -lt 470; $y++) {
    for ($x = 50; $x -lt 450; $x++) {
        # Sample clean pixel from x=30 (which is clean wall/terrace)
        $cleanColor = $bmp.GetPixel(30, $y)
        $bmp.SetPixel($x, $y, $cleanColor)
    }
}

$g.Dispose()
$bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$bmp.Dispose()

Write-Host "Inpainted and saved to $destPath"

