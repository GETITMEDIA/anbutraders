Add-Type -AssemblyName System.Drawing

$srcPath = 'C:\Users\Admin\.gemini\antigravity-ide\brain\512f59db-fca4-4ca2-824c-6857bf55c38d\.user_uploaded\media_1793428657424.png'
$src = [System.Drawing.Bitmap]::FromFile($srcPath)

# Check the bottom text coordinates
# Benefit 1: Indoor Protection is around X=120..330, Y=420..470 (outside the cans area!)
# Benefit 2: Exterior Durability is around X=400..600, Y=420..470
# Benefit 3: Precision Colour Mixing is around X=670..890, Y=420..470
# Let's check Y=400 to 512 at X=450 to 1024:
Write-Output "Image loaded successfully: $($src.Width)x$($src.Height)"
$src.Dispose()
