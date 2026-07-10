# PowerShell script to clean up mixed Espresso Media files from Tile Lab India backup

$backupPath = "d:\backup-tilelabindia.com-1-12-2026.tar\backup-tilelabindia.com-1-12-2026\public_html\assets"

# List of Espresso Media files to remove
$espressoFiles = @(
    "ai-n1geNcHN.png",
    "akshit_pobaru-CVwPgwE8.png",
    "branding-qa1Htm1R.png",
    "case-study-2-walkins-6-fBdLX_.png",
    "case-study-3-40pct-BGRhwmQa.png",
    "case-study-4-200-leads-xKBuAPw4.png",
    "coments-CmaMUm3M.png",
    "content-CupPfxs9.png",
    "dinu-DFQi20hi.png",
    "engagement-Cw929MY1.png",
    "FLAIS-D6rOICqG.png",
    "GC GROUP-CbGaisKl.png",
    "GOKUL GROUP-CH487Gbw.png",
    "graph3-CL1mC1jI.png",
    "HERO-BwOMEt6t.png",
    "HONDA-DlCqzmvD.png",
    "index-C_wsa4PF.css",
    "index-lRgnOUCb.css",
    "KAWASAKI-ejUD4HMy.png",
    "leads-CMfr5Ylk.png",
    "leads-dzCWclxm.png",
    "MAHINDRA-DiTw1umu.png",
    "nisha-VNuaHX6w.png",
    "per-DGJ3Oeq6.png",
    "RENAULT-Hyf4hrzn.png",
    "SNS-D9gIG0kS.png",
    "social-CmbVWUGJ.png",
    "tab2-BRfVpSjl.png",
    "TILE LAB-CVrQTWj_.png",
    "TimesNewRomanMTStdCondensed-BSqIk4tK.ttf",
    "TimesNewRomanMTStdCondensedItalic-Bym1E_TM.otf",
    "TOYOTA-BF8zRoxE.png",
    "views-hcrJvjaS.png",
    "vinayak_honda-ko_vpZce.png",
    "visibility-DVfgwayh.png"
)

Write-Host "Starting cleanup of Espresso Media files from Tile Lab India backup..." -ForegroundColor Yellow

foreach ($file in $espressoFiles) {
    $filePath = Join-Path $backupPath $file
    if (Test-Path $filePath) {
        try {
            Remove-Item $filePath -Force
            Write-Host "✓ Removed: $file" -ForegroundColor Green
        }
        catch {
            Write-Host "✗ Failed to remove: $file - $($_.Exception.Message)" -ForegroundColor Red
        }
    }
    else {
        Write-Host "- Not found: $file" -ForegroundColor Gray
    }
}

Write-Host "`nCleanup completed!" -ForegroundColor Green
Write-Host "Remaining files should be only Tile Lab India assets." -ForegroundColor Cyan