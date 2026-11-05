Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("anbu-paint/img/carosels_paints/hero_1.png")
$thumb = $img.GetThumbnailImage(600, 240, $null, [IntPtr]::Zero)
$thumb.Save("scratch/thumb_hero_1.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$thumb.Dispose()
$img.Dispose()

$img2 = [System.Drawing.Image]::FromFile("anbu-paint/img/carosels_paints/hero_2.png")
$thumb2 = $img2.GetThumbnailImage(600, 240, $null, [IntPtr]::Zero)
$thumb2.Save("scratch/thumb_hero_2.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$thumb2.Dispose()
$img2.Dispose()

$img3 = [System.Drawing.Image]::FromFile("anbu-paint/img/carosels_paints/hero_3.png")
$thumb3 = $img3.GetThumbnailImage(600, 240, $null, [IntPtr]::Zero)
$thumb3.Save("scratch/thumb_hero_3.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$thumb3.Dispose()
$img3.Dispose()

Write-Host "All 3 thumbnails created."

