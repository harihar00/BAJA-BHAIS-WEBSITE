Add-Type -AssemblyName System.Drawing

function Optimize-JpgFile {
    param(
        [string]$SourcePath,
        [int]$MaxWidth = 1400,
        [int]$Quality = 80
    )

    if (-not (Test-Path $SourcePath)) { return }
    $fileInfo = Get-Item $SourcePath
    if ($fileInfo.Length -le 400KB) { return }

    try {
        $bytes = [System.IO.File]::ReadAllBytes($SourcePath)
        $ms = New-Object System.IO.MemoryStream(,$bytes)
        $img = [System.Drawing.Image]::FromStream($ms)

        $origW = $img.Width
        $origH = $img.Height

        $newW = $origW
        $newH = $origH

        if ($origW -gt $MaxWidth) {
            $newW = $MaxWidth
            $newH = [int]($origH * ($MaxWidth / $origW))
        }

        $bmp = New-Object System.Drawing.Bitmap($newW, $newH)
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $g.DrawImage($img, 0, 0, $newW, $newH)
        $g.Dispose()
        $img.Dispose()
        $ms.Dispose()

        $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$Quality)

        $tempOut = "$SourcePath.tmp.jpg"
        $bmp.Save($tempOut, $jpegCodec, $encoderParams)
        $bmp.Dispose()

        Move-Item -Path $tempOut -Destination $SourcePath -Force
        $newLen = (Get-Item $SourcePath).Length
        Write-Host "Optimized: $(Split-Path $SourcePath -Leaf) ($([math]::Round($fileInfo.Length/1MB, 2)) MB -> $([math]::Round($newLen/1KB, 1)) KB)"
    } catch {
        Write-Host "Error optimizing $SourcePath : $_"
    }
}

$files = Get-ChildItem -Path (Join-Path (Get-Location) "assets") -Include *.jpg,*.jpeg -Recurse
foreach ($f in $files) {
    Optimize-JpgFile -SourcePath $f.FullName -MaxWidth 1400 -Quality 80
}

Write-Host "All assets processed."
