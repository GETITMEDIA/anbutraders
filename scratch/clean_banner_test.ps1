Add-Type -AssemblyName System.Drawing

$srcPath = 'C:\Users\Admin\.gemini\antigravity-ide\brain\512f59db-fca4-4ca2-824c-6857bf55c38d\.user_uploaded\media_1793428657424.png'
$outPath = 'd:\office_project_siva\anbutraders\anbu-paint\paint\test_seamless_banner.png'

$src = [System.Drawing.Bitmap]::FromFile($srcPath)
$bmp = New-Object System.Drawing.Bitmap($src.Width, $src.Height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

# Draw original image
$g.DrawImage($src, 0, 0, $src.Width, $src.Height)

# Now on the left side (x: 0..440, y: 50..395), we want to clean the text
# Notice at x=20..440, y=50..395, the background is a smooth gradient:
# top is #EAF4FC, fading down to #FFFFFF at y=200, and #FFFBF6 at y=350, then floor at y=410
# Let's create a smooth linear gradient brush for the text area:
$rectText = New-Object System.Drawing.Rectangle(45, 55, 395, 345)
$brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.Point(0, 55)),
    (New-Object System.Drawing.Point(0, 400)),
    [System.Drawing.Color]::FromArgb(238, 246, 253),
    [System.Drawing.Color]::FromArgb(255, 252, 247)
)
# We can also add color blend stops for perfect matching:
$cb = New-Object System.Drawing.Drawing2D.ColorBlend
$cb.Positions = @(0.0, 0.3, 0.7, 1.0)
$cb.Colors = @(
    [System.Drawing.Color]::FromArgb(235, 244, 252),
    [System.Drawing.Color]::FromArgb(250, 252, 255),
    [System.Drawing.Color]::FromArgb(255, 254, 251),
    [System.Drawing.Color]::FromArgb(255, 251, 246)
)
$brush.InterpolationColors = $cb

# Also at the bottom (y: 415..485, x: 100..900), clean the 3 benefit text & icons
# In the original, the floor has a soft reflection gradient
$rectFloor = New-Object System.Drawing.Rectangle(100, 415, 800, 80)
$floorBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.Point(0, 415)),
    (New-Object System.Drawing.Point(0, 495)),
    [System.Drawing.Color]::FromArgb(255, 252, 248),
    [System.Drawing.Color]::FromArgb(235, 242, 250)
)

# Fill text area with soft gradient
$g.FillRectangle($brush, $rectText)

# Save test
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$brush.Dispose()
$floorBrush.Dispose()
$g.Dispose()
$bmp.Dispose()
$src.Dispose()
Write-Output "Cleaned test banner saved to $outPath"
