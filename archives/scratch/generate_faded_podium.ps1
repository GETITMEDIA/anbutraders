Add-Type -AssemblyName System.Drawing

$srcPath = 'C:\Users\Admin\.gemini\antigravity-ide\brain\512f59db-fca4-4ca2-824c-6857bf55c38d\.user_uploaded\media_1793428657424.png'
$outPath = 'd:\office_project_siva\anbutraders\anbu-paint\paint\berger-podium-faded.png'

$src = [System.Drawing.Bitmap]::FromFile($srcPath)
# We want to take from X=380 to 1024, Y=0 to 512 (width = 644, height = 512)
$cropW = $src.Width - 380
$cropH = $src.Height
$crop = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# First clean the letter 'y' at X=438..450, Y=145..165 in $src:
# The letter 'y' is orange/red text over the cream arch background
# Let's clone background from Y=135 and Y=175 to clean 'y'
for ($x = 430; $x -le 452; $x++) {
    for ($y = 145; $y -le 168; $y++) {
        $c = $src.GetPixel($x, $y)
        # If it's orange text pixel (R > 220, G > 70, B < 60)
        if ($c.R -gt 210 -and $c.B -lt 70) {
            # sample from neighboring arch pixel at y - 25
            $sample = $src.GetPixel($x + 8, $y)
            $src.SetPixel($x, $y, $sample)
        }
    }
}

# Now copy pixels from $src into $crop, applying a smooth alpha fade on the left from X=0 to X=85 in crop (X=380 to X=465 in src)
# At X_crop = 0 (src X=380): alpha = 0
# At X_crop = 85 (src X=465): alpha = 255
$fadeWidth = 85.0

for ($y = 0; $y -lt $cropH; $y++) {
    for ($x = 0; $x -lt $cropW; $x++) {
        $srcX = $x + 380
        $c = $src.GetPixel($srcX, $y)
        
        $alpha = 1.0
        if ($x -lt $fadeWidth) {
            # Smooth cubic ease
            $t = $x / $fadeWidth
            $alpha = $t * $t * (3.0 - 2.0 * $t)
        }
        
        $a = [int]([Math]::Round($alpha * $c.A))
        $newColor = [System.Drawing.Color]::FromArgb($a, $c.R, $c.G, $c.B)
        $crop.SetPixel($x, $y, $newColor)
    }
}

$crop.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$crop.Dispose()
$src.Dispose()
Write-Output "Faded podium image created at $outPath"
