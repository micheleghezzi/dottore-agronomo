param(
    [string]$GitHubRepo = "micheleghezzi/dottore-agronomo",
    [string]$KeyName = "id_ed25519_dottore_agronomo",
    [string]$GitUserName = "",
    [string]$GitUserEmail = "",
    [switch]$Finalize
)

$ErrorActionPreference = "Stop"

function Require-Command {
    param([string]$Name)
    if (-not (Get-Command $Name -ErrorAction SilentlyContinue)) {
        throw "Required command not found: $Name"
    }
}

Require-Command git
Require-Command ssh
Require-Command ssh-keygen

$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repoRoot

if (-not (Test-Path ".git")) {
    throw "This script must be run from inside the repository root. No .git directory was found in $repoRoot"
}

$sshDir = Join-Path $HOME ".ssh"
$privateKey = Join-Path $sshDir $KeyName
$publicKey = "$privateKey.pub"
$originUrl = "git@github.com:$GitHubRepo.git"
$sshCommand = "ssh -i `"$privateKey`" -o IdentitiesOnly=yes"

if (-not (Test-Path $sshDir)) {
    New-Item -ItemType Directory -Path $sshDir | Out-Null
}

if (-not (Test-Path $privateKey)) {
    Write-Host "Generating a dedicated SSH key for $GitHubRepo..."
    ssh-keygen -t ed25519 -C $GitHubRepo -f $privateKey -N ""
} else {
    Write-Host "SSH key already exists at $privateKey"
}

git remote remove origin 2>$null
git remote add origin $originUrl
git config --local core.sshCommand $sshCommand

if ($GitUserName) {
    git config --local user.name $GitUserName
}

if ($GitUserEmail) {
    git config --local user.email $GitUserEmail
}

git branch -M main

if (-not (Test-Path ".nojekyll")) {
    New-Item -ItemType File -Path ".nojekyll" | Out-Null
}

if (-not $Finalize) {
    $publicKeyText = Get-Content $publicKey -Raw

    if (Get-Command Set-Clipboard -ErrorAction SilentlyContinue) {
        Set-Clipboard -Value $publicKeyText
        Write-Host "The public key has also been copied to your clipboard."
        Write-Host ""
    }

    Write-Host ""
    Write-Host "Public key created at:"
    Write-Host "  $publicKey"
    Write-Host ""
    Write-Host "Copy this public key into:"
    Write-Host "  https://github.com/$GitHubRepo/settings/keys"
    Write-Host ""
    Write-Host "Add it as a Deploy key with write access."
    Write-Host ""
    Write-Host "Public key contents:"
    Write-Host $publicKeyText.Trim()
    Write-Host ""
    Write-Host "Then run:"
    Write-Host "  .\setup-github-pages.ps1 -Finalize -GitUserName ""Your Name"" -GitUserEmail ""you@example.com"""
    Write-Host ""
    Write-Host "Opening the deploy key settings page in your browser..."
    Start-Process "https://github.com/$GitHubRepo/settings/keys"
    exit 0
}

Write-Host "Testing repository access..."
git ls-remote origin

Write-Host "Staging files..."
git add .

$hasChanges = git status --porcelain
if (-not $hasChanges) {
    Write-Host "No local changes to commit."
} else {
    $authorName = if ($GitUserName) { $GitUserName } else { (git config --get user.name) }
    $authorEmail = if ($GitUserEmail) { $GitUserEmail } else { (git config --get user.email) }

    if (-not $authorName -or -not $authorEmail) {
        throw "Git author name/email are not configured. Re-run with -GitUserName and -GitUserEmail."
    }

    git commit -m "Initial website publish"
}

Write-Host "Pushing to origin/main..."
git push -u origin main

Write-Host ""
Write-Host "Next GitHub Pages step:"
Write-Host "  Repository Settings -> Pages -> Deploy from a branch -> main -> /(root)"
Write-Host ""
Write-Host "Published URL should be:"
Write-Host "  https://micheleghezzi.github.io/dottore-agronomo/"
