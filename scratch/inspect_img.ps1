Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("anbu-paint/img/carosels_paints/hero_1.png")
Write-Host "Size: $($img.Width) x $($img.Height)"
$bmp = New-Object System.Drawing.Bitmap($img)
Write-Host "Pixel at x=100, y=400: $($bmp.GetPixel(100, 400))"
Write-Host "Pixel at x=500, y=400: $($bmp.GetPixel(500, 400))"
Write-Host "Pixel at x=1000, y=400: $($bmp.GetPixel(1000, 400))"
Write-Host "Pixel at x=1500, y=400: $($bmp.GetPixel(1500, 400))"
$bmp.Dispose()
$img.Dispose()

