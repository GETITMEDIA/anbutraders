Add-Type -AssemblyName System.Drawing

$src = "C:\Users\Admin\.gemini\antigravity-ide\brain\512f59db-fca4-4ca2-824c-6857bf55c38d\.user_uploaded\media_1793427248327.png"
$bmp = [System.Drawing.Bitmap]::FromFile($src)

Write-Host "Width: $($bmp.Width), Height: $($bmp.Height)"

# Sample rows at y = 10, 50, 100, 150, 200, 250, 300, 350, 400
# For each row, find the first x from the right where color is white, or first x from left where color is NOT white (after the text area x > 440)
for ($y = 0; $y -lt $bmp.Height; $y += 30) {
    $firstNonWhite = -1
    for ($x = 440; $x -lt $bmp.Width; $x++) {
        $c = $bmp.GetPixel($x, $y)
        # Check if pixel is not pure white or nearly white (R < 250 or G < 250 or B < 250)
        if ($c.R -lt 248 -or $c.G -lt 248 -or $c.B -lt 248) {
            $firstNonWhite = $x
            break
        }
    }
    Write-Host "y=$y : first non-white x=$firstNonWhite"
}

$bmp.Dispose()
