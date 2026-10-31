Add-Type -AssemblyName System.Drawing

$srcPath = 'C:\Users\Admin\.gemini\antigravity-ide\brain\512f59db-fca4-4ca2-824c-6857bf55c38d\.user_uploaded\media_1793428657424.png'
$outPath = 'd:\office_project_siva\anbutraders\anbu-paint\paint\berger-podium-perfect.png'

$src = [System.Drawing.Bitmap]::FromFile($srcPath)

# Start X at 446 (just past the text 'Luxury')
$startX = 446
$startY = 0
$endX = $src.Width
$endY = 425

$cropW = $endX - $startX
$cropH = $endY - $startY

$crop = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# First clean any tiny remnant of 'y' at X=446..452, Y=145..165 in $src:
for ($x = 446; $x -le 453; $x++) {
    for ($y = 145; $y -le 165; $y++) {
        $c = $src.GetPixel($x, $y)
        # If it's orange text pixel (R > 210, B < 70)
        if ($c.R -gt 210 -and $c.B -lt 80) {
            # sample from arch pixel at x + 8
            $sample = $src.GetPixel($x + 8, $y)
            $src.SetPixel($x, $y, $sample)
        }
    }
}

# Now copy into $crop with smooth edge feathering on the left and bottom
$fadeLeftW = 35.0
$fadeBottomH = 40.0

for ($y = 0; $y -lt $cropH; $y++) {
    $srcY = $y + $startY
    
    # Calculate bottom fade
    $alphaBottom = 1.0
    $distFromBottom = $cropH - 1 - $y
    if ($distFromBottom -lt $fadeBottomH) {
        $tb = $distFromBottom / $fadeBottomH
        $alphaBottom = $tb * $tb * (3.0 - 2.0 * $tb)
    }

    for ($x = 0; $x -lt $cropW; $x++) {
        $srcX = $x + $startX
        $c = $src.GetPixel($srcX, $srcY)
        
        # Calculate left fade
        $alphaLeft = 1.0
        if ($x -lt $fadeLeftW) {
            $tl = $x / $fadeLeftW
            $alphaLeft = $tl * $tl * (3.0 - 2.0 * $tl)
        }
        
        $combinedAlpha = $alphaLeft * $alphaBottom
        $a = [int]([Math]::Round($combinedAlpha * $c.A))
        $newColor = [System.Drawing.Color]::FromArgb($a, $c.R, $c.G, $c.B)
        $crop.SetPixel($x, $y, $newColor)
    }
}

$crop.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$crop.Dispose()
$src.Dispose()
Write-Output "Perfect podium image created at $outPath"
