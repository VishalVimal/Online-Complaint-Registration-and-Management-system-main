# GitHub Setup Instructions

## Prerequisites

1. **Install Git** (if not already installed):
   - Download from: https://git-scm.com/download/win
   - Or use: `winget install Git.Git` (if you have Windows Package Manager)

2. **Create a GitHub Account** (if you don't have one):
   - Go to: https://github.com
   - Sign up for a free account

## Steps to Push to GitHub

### 1. Initialize Git Repository

Open PowerShell or Command Prompt in your project directory and run:

```bash
git init
```

### 2. Add All Files

```bash
git add .
```

### 3. Create Initial Commit

```bash
git commit -m "Initial commit: Modern UI with demo mode support"
```

### 4. Create Repository on GitHub

1. Go to https://github.com/new
2. Create a new repository (e.g., "fixit-complaint-system")
3. **DO NOT** initialize with README, .gitignore, or license
4. Click "Create repository"

### 5. Add Remote and Push

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Alternative: Using GitHub CLI

If you have GitHub CLI installed:

```bash
gh repo create YOUR_REPO_NAME --public --source=. --remote=origin --push
```

## Quick Command Sequence

```bash
# Initialize
git init

# Add files
git add .

# Commit
git commit -m "Initial commit: Modern UI with demo mode support"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push
git branch -M main
git push -u origin main
```

## Notes

- The `.gitignore` file has been updated to exclude:
  - `node_modules/`
  - `.env` (environment variables)
  - Log files
  - IDE settings
  - Temporary files

- **Important**: Make sure your `.env` file (if it exists) is not committed as it may contain sensitive information.

## Troubleshooting

If you get authentication errors:
- Use GitHub Personal Access Token instead of password
- Or set up SSH keys: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

