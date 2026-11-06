Add-Type -AssemblyName System.Drawing

$origPath = 'C:\Users\Admin\.gemini\antigravity-ide\brain\512f59db-fca4-4ca2-824c-6857bf55c38d\.user_uploaded\media_1793428657424.png'
$cleanPath = 'C:\Users\Admin\.gemini\antigravity-ide\brain\512f59db-fca4-4ca2-824c-6857bf55c38d\berger_clean_banner_1793429895027.jpg'

$orig = [System.Drawing.Bitmap]::FromFile($origPath)
$clean = [System.Drawing.Bitmap]::FromFile($cleanPath)

Write-Output "Orig: $($orig.Width) x $($orig.Height)"
Write-Output "Clean: $($clean.Width) x $($clean.Height)"

$orig.Dispose()
$clean.Dispose()
