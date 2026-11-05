Add-Type -AssemblyName System.Drawing
$root = 'd:\office_project_siva\anbutraders'
$outDir = Join-Path $root 'img\opt'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$jobs = @(
  @{ src = 'img\hero\steels-cement-hero.jpg';                   out = 'steels-cement-1600.jpg'; w = 1600 },
  @{ src = 'img\hero\sheets-pipes-hero.jpg';                    out = 'sheets-pipes-1200.jpg';  w = 1200 },
  @{ src = 'img\hero\paints-hero.jpg';                          out = 'paints-1200.jpg';        w = 1200 },
  @{ src = 'cement\anbucement\img\cement_hero_cinematic.jpg';   out = 'cement-1200.jpg';        w = 1200 },
  @{ src = 'anbu-paint\img\brand-cluster-asian.jpg';            out = 'paints-cans-1000.jpg';   w = 1000 },
  @{ src = 'ssss.jpg';                                          out = 'storefront-1200.jpg';    w = 1200 },
  @{ src = 'img\anbu-main-shop.jpg';                            out = 'main-shop-1200.jpg';     w = 1200 },
  @{ src = 'paintshop.jpg';                                     out = 'paintshop-900.jpg';      w = 900 }
)

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$params = New-Object System.Drawing.Imaging.EncoderParameters(1)
$params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]78)

foreach ($j in $jobs) {
  $srcPath = Join-Path $root $j.src
  if (-not (Test-Path $srcPath)) { Write-Output "MISSING $($j.src)"; continue }
  try {
    $img = [System.Drawing.Image]::FromFile($srcPath)
    $w = [Math]::Min($j.w, $img.Width)
    $h = [int]([double]$img.Height * $w / $img.Width)
    $bmp = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($img, 0, 0, $w, $h)
    $outPath = Join-Path $outDir $j.out
    $bmp.Save($outPath, $codec, $params)
    $g.Dispose(); $bmp.Dispose(); $img.Dispose()
    $kb = [Math]::Round((Get-Item $outPath).Length / 1KB)
    Write-Output ("OK {0} -> {1} ({2}x{3}, {4} KB)" -f $j.src, $j.out, $w, $h, $kb)
  } catch {
    Write-Output "FAIL $($j.src): $($_.Exception.Message)"
  }
}

