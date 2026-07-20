# Frontend / Node.js Environment Setup — Complete Guide

**From Zero to Your First GitHub Push**

---

## Table of Contents

1. [Installing Node.js](#1-installing-nodejs)
2. [Installing VS Code](#2-installing-vs-code)
3. [Recommended VS Code Extensions](#3-recommended-vs-code-extensions)
4. [Basic Terminal Commands](#4-basic-terminal-commands)
5. [Creating an npm Project (from VS Code Terminal)](#5-creating-an-npm-project-from-vs-code-terminal)
6. [Understanding package.json](#6-understanding-packagejson)
7. [Your First HTML File](#7-your-first-html-file)
8. [What is node_modules?](#8-what-is-node_modules)
9. [Setting Up .gitignore](#9-setting-up-gitignore)
10. [Installing Git](#10-installing-git)
11. [Git Configuration (Detailed)](#11-git-configuration-detailed)
12. [Creating a GitHub Account](#12-creating-a-github-account)
13. [SSH Key Setup (Step by Step)](#13-ssh-key-setup-step-by-step)
14. [Initialize Git Repository](#14-initialize-git-repository)
15. [First Commit](#15-first-commit)
16. [Push Project to GitHub](#16-push-project-to-github)

---

## 1. Installing Node.js

Node.js is a runtime environment that allows JavaScript to run outside the browser (on your computer, servers, etc.).

### Step 1 — Download Node.js

Go to: **https://nodejs.org**

You will see two versions:

- **LTS (Long Term Support)** — Recommended for most users. This is stable and reliable.
- **Current** — Latest features, but may have bugs.

> **Always install the LTS version.** It is the safest choice for learning and production.

### Step 2 — Install

Run the downloaded installer. Accept all default settings. On Windows, make sure the checkbox **"Add to PATH"** is checked during installation.

### Step 3 — Verify Installation

Open your terminal (Command Prompt, PowerShell, or VS Code Terminal) and run:

```
node -v
npm -v
```

You should see version numbers like `v20.x.x` and `10.x.x`. If you see these, Node.js and npm are installed correctly.

> **What is npm?** npm (Node Package Manager) comes bundled with Node.js. It is used to install, manage, and share JavaScript packages (libraries).

---

## 2. Installing VS Code

Visual Studio Code (VS Code) is a free, powerful code editor made by Microsoft.

### Step 1 — Download

Go to: **https://code.visualstudio.com**

Download the version for your operating system (Windows / Mac / Linux).

### Step 2 — Install

Run the installer. On Windows, check these options during setup:

- **"Add to PATH"** — so you can open VS Code from terminal with `code .`
- **"Add Open with Code"** — so you can right-click folders and open them in VS Code

### Step 3 — Open VS Code

Launch VS Code. You should see the Welcome tab. You're ready to code!

---

## 3. Recommended VS Code Extensions

Extensions add extra features to VS Code. To install them:

1. Open VS Code
2. Click the **Extensions icon** in the left sidebar (or press `Ctrl+Shift+X`)
3. Search for the extension name
4. Click **Install**

### Must-Have Extensions:

**1. Prettier — Code Formatter**
Automatically formats your code to look clean and consistent. After installing, go to Settings (`Ctrl+,`) and search for **"Default Formatter"**, then select **Prettier**. Also enable **"Format On Save"** so your code is formatted every time you save.

**2. Live Server**
Launches a local development server with live reload. Right-click your HTML file and select **"Open with Live Server"**. Your browser will automatically refresh whenever you save changes.

**3. Material Icon Theme**
Adds beautiful file/folder icons to the VS Code sidebar, making it easier to identify file types at a glance. After installing, VS Code will ask you to activate it — click **Yes**.

**4. Image Preview**
Shows a small preview of images directly in the editor gutter (next to line numbers) and on hover. Very useful when working with image paths in HTML/CSS.

**5. Color Highlight**
Highlights CSS color codes (like `#ff5733` or `rgb(255, 87, 51)`) with their actual color directly in the editor. Makes it easy to see what colors you're using without running the code.

**6. Auto Close Tag**
Automatically adds the closing tag when you type an opening HTML/XML tag. For example, typing `<div>` will instantly add `</div>`.

**7. Auto Rename Tag**
When you rename one HTML tag, the matching pair is automatically renamed too. For example, changing `<div>` to `<section>` will also change the closing `</div>` to `</section>`.

**8. ES7+ React/Redux/React-Native Snippets**
Provides shortcut snippets for React development. For example, typing `rfce` and pressing Tab creates a full React functional component. Very useful when you start learning React.

> **Tip:** You can also install extensions from the terminal:
> `code --install-extension esbenp.prettier-vscode`

---

## 4. Basic Terminal Commands

The terminal (also called command line or shell) is where you run commands to manage files and projects.

### How to Open the Terminal in VS Code:

Press `Ctrl + `` ` (backtick key, usually above Tab) or go to **Terminal -> New Terminal** from the menu.

| Action | Mac / Linux | Windows |
|---|---|---|
| Create a folder | `mkdir my-project` | `mkdir my-project` |
| Enter a folder | `cd my-project` | `cd my-project` |
| Go back one folder | `cd ..` | `cd ..` |
| Create a file | `touch index.html` | `type nul > index.html` |
| View folder contents | `ls` | `dir` |
| Clear terminal | `clear` | `cls` |
| Delete a file | `rm filename` | `del filename` |
| Delete a folder | `rm -rf foldername` | `rmdir /s foldername` |

---

## 5. Creating an npm Project (from VS Code Terminal)

Follow these steps to create a new project entirely from the VS Code terminal:

### Step 1 — Open VS Code

Launch VS Code from your desktop or Start menu.

### Step 2 — Open the Terminal

Press `Ctrl + `` ` to open the integrated terminal at the bottom of VS Code.

### Step 3 — Navigate to Your Desired Location

```
cd Desktop
```

Or any folder where you want to create your project.

### Step 4 — Create a New Project Folder

```
mkdir my-first-project
```

### Step 5 — Enter the Project Folder

```
cd my-first-project
```

### Step 6 — Open This Folder in VS Code

```
code .
```

This will open the current folder as a workspace in a new VS Code window. The dot (`.`) means "current directory".

### Step 7 — Initialize the npm Project

In the terminal of the new VS Code window, run:

```
npm init -y
```

The `-y` flag means "yes to all defaults" — it skips all the questions and creates the file instantly.

> **What does this do?** It creates a `package.json` file in your project folder. This file is the heart of any Node.js project.

### Step 8 — Verify

You should now see `package.json` in the file explorer on the left side of VS Code.

---

## 6. Understanding package.json

After running `npm init -y`, your `package.json` will look like this:

```json
{
  "name": "my-first-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

| Field | What It Means |
|---|---|
| `name` | The name of your project |
| `version` | Current version of your project |
| `description` | A short description of what your project does |
| `main` | The entry point file (the first file that runs) |
| `scripts` | Custom commands you can run with `npm run <name>` |
| `keywords` | Keywords for searching (useful if publishing to npm) |
| `author` | Your name |
| `license` | The license type for your project |

---

## 7. Your First HTML File

Create a file called `index.html` in your project folder. You can do this by:

- Right-clicking in the VS Code file explorer -> New File -> type `index.html`
- Or from terminal: `type nul > index.html` (Windows) / `touch index.html` (Mac/Linux)

Paste this code inside:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Project</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```

> **Quick Tip:** In VS Code, type `!` and press `Tab` — this will generate the entire HTML boilerplate automatically!

**To view it in the browser:** Right-click the file -> **"Open with Live Server"** (requires the Live Server extension). Your browser will open and show "Hello World". Any changes you save will instantly appear in the browser.

---

## 8. What is node_modules?

When you install a package using npm (for example: `npm install lodash`), a folder called `node_modules` is created.

- It stores **all installed packages** and their dependencies.
- It can become very large (hundreds of MB).
- You should **never edit** files inside `node_modules`.
- You should **never push** `node_modules` to GitHub — it can be recreated anytime with `npm install`.

> **Important:** Never upload `node_modules` to GitHub! It wastes space and slows everything down. This is why we use `.gitignore` (see next section).

---

## 9. Setting Up .gitignore

A `.gitignore` file tells Git which files and folders to **ignore** (not track or upload).

### Step 1 — Create the File

In your project root, create a file called `.gitignore` (note the dot at the beginning).

### Step 2 — Add These Lines

```
# Dependencies
node_modules/

# Environment variables (secrets)
.env

# OS generated files
.DS_Store
Thumbs.db

# IDE settings
.vscode/
.idea/

# Build output
dist/
build/

# Log files
*.log
npm-debug.log*
```

> Lines starting with `#` are comments — they are ignored by Git and are just for your reference.

| Entry | What It Ignores |
|---|---|
| `node_modules/` | All installed npm packages (can be recreated with `npm install`) |
| `.env` | Environment variables file (may contain passwords/API keys) |
| `.DS_Store` | macOS system file (not needed in the project) |
| `Thumbs.db` | Windows thumbnail cache file |
| `dist/` / `build/` | Compiled/built files (generated, not source code) |
| `*.log` | All log files |

---

## 10. Installing Git

Git is a version control system that tracks changes in your code and lets you collaborate with others.

### Step 1 — Download Git

Go to: **https://git-scm.com**

Download the version for your OS and run the installer.

### Step 2 — Installation Settings (Windows)

During installation, use these recommended settings:

- **Default editor:** Select "Use Visual Studio Code as Git's default editor"
- **PATH environment:** Select "Git from the command line and also from 3rd-party software"
- **Line endings:** Select "Checkout Windows-style, commit Unix-style line endings"
- Accept all other defaults

### Step 3 — Verify Installation

```
git --version
```

You should see something like `git version 2.43.0`.

---

## 11. Git Configuration (Detailed)

Before using Git, you must tell it who you are. This information is attached to every commit you make.

### 11.1 — Set Your Name and Email

Open your terminal and run:

```
git config --global user.name "Your Full Name"
git config --global user.email "your@email.com"
```

> **Important:** Use the **same email** you used (or will use) to create your GitHub account. This links your commits to your GitHub profile.

### 11.2 — Understanding Config Levels

Git has three configuration levels:

| Level | Flag | Scope | File Location |
|---|---|---|---|
| System | `--system` | All users on this computer | `/etc/gitconfig` |
| Global | `--global` | Your user account (all your projects) | `~/.gitconfig` |
| Local | `--local` | Only the current project | `.git/config` inside the project |

**Local overrides Global, and Global overrides System.**

> **Use `--global`** for your personal settings (name, email). This applies to all projects.
> **Use `--local`** if you need different settings for a specific project (e.g., a work project with a work email).

### 11.3 — Set Default Branch Name

```
git config --global init.defaultBranch main
```

This ensures new repositories use `main` as the default branch (instead of the older `master`).

### 11.4 — Set Default Editor

```
git config --global core.editor "code --wait"
```

This tells Git to use VS Code when it needs you to write a message (like a commit message). The `--wait` flag tells Git to wait until you close the file in VS Code.

### 11.5 — View All Your Settings

```
git config --list
```

This shows all your Git settings. You can also check a specific setting:

```
git config user.name
git config user.email
```

### 11.6 — Edit the Global Config File Directly

```
git config --global --edit
```

This opens your `~/.gitconfig` file in your default editor. The file looks like:

```
[user]
    name = Your Full Name
    email = your@email.com
[init]
    defaultBranch = main
[core]
    editor = code --wait
```

### 11.7 — Useful Optional Settings

```
# Enable colored output in terminal
git config --global color.ui auto

# Set line ending behavior (recommended for Windows)
git config --global core.autocrlf true

# Set line ending behavior (recommended for Mac/Linux)
git config --global core.autocrlf input
```

---

## 12. Creating a GitHub Account

1. Go to: **https://github.com**
2. Click **Sign up**
3. Enter your email, create a password, and choose a username
4. Verify your email address
5. Your GitHub account is ready!

> **Tip:** Choose a professional username — it will appear on your projects and can serve as part of your developer portfolio.

---

## 13. SSH Key Setup (Step by Step)

SSH keys let you connect to GitHub securely without entering your password every time.

### 13.1 — Check for Existing SSH Keys

```
# Mac/Linux:
ls -al ~/.ssh

# Windows (Git Bash):
ls -al ~/.ssh
```

If you see files like `id_ed25519` and `id_ed25519.pub`, you already have SSH keys. You can skip to step 13.4.

### 13.2 — Generate a New SSH Key

```
ssh-keygen -t ed25519 -C "your@email.com"
```

When prompted:

- **File location:** Press `Enter` to accept the default location
- **Passphrase:** You can press `Enter` for no passphrase (or type one for extra security)

This creates two files:

- `~/.ssh/id_ed25519` — Your **private** key (NEVER share this!)
- `~/.ssh/id_ed25519.pub` — Your **public** key (this is what you give to GitHub)

### 13.3 — Start the SSH Agent and Add Your Key

```
# Start the SSH agent
eval "$(ssh-agent -s)"

# Add your private key
ssh-add ~/.ssh/id_ed25519
```

> **Windows Users:** If `eval` doesn't work, open **Git Bash** (not Command Prompt or PowerShell) and try again.

### 13.4 — Copy Your Public SSH Key

```
# Mac:
pbcopy < ~/.ssh/id_ed25519.pub

# Windows (Git Bash):
clip < ~/.ssh/id_ed25519.pub

# Linux:
cat ~/.ssh/id_ed25519.pub
```

On Linux, manually select and copy the output.

### 13.5 — Add SSH Key to GitHub

1. Go to **GitHub.com** -> Click your profile picture -> **Settings**
2. In the left sidebar, click **SSH and GPG keys**
3. Click **New SSH Key**
4. **Title:** Give it a name (e.g., "My Laptop")
5. **Key type:** Authentication Key
6. **Key:** Paste the public key you copied
7. Click **Add SSH Key**

### 13.6 — Test SSH Connection

```
ssh -T git@github.com
```

If successful, you'll see:

```
Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```

This means everything is set up correctly!

---

## 14. Initialize Git Repository

Go to your project folder in the terminal and run:

```
git init
```

This creates a hidden `.git` folder that Git uses to track changes. Your project is now a Git repository!

> **Make sure your `.gitignore` file is created BEFORE your first commit** — this prevents `node_modules` from being tracked.

---

## 15. First Commit

### Step 1 — Check Status

```
git status
```

This shows which files are new, modified, or ready to be committed.

### Step 2 — Stage All Files

```
git add .
```

The dot (`.`) means "add all files in the current directory." You can also add specific files:

```
git add index.html
git add package.json
```

### Step 3 — Commit

```
git commit -m "first commit"
```

The `-m` flag lets you write the commit message inline. The message should describe what you did.

> **Good commit messages:**
> - `"Add initial HTML structure"`
> - `"Set up project with npm init"`
> - `"Add .gitignore file"`

---

## 16. Push Project to GitHub

### Step 1 — Create a New Repository on GitHub

1. Go to **github.com**
2. Click the **+** icon (top right) -> **New repository**
3. Enter a **repository name**
4. **Do NOT** initialize with a README (since you already have files locally)
5. Click **Create repository**

### Step 2 — Connect Your Local Repository to GitHub

```
git remote add origin git@github.com:username/repository-name.git
```

Replace `username` with your GitHub username and `repository-name` with the name you chose.

### Step 3 — Push Your Code

```
git push -u origin main
```

The `-u` flag sets `origin main` as the default, so next time you can just type `git push`.

### Step 4 — Verify

Go to your GitHub repository page in the browser. You should see all your files there!

> **For future changes:**
> ```
> git add .
> git commit -m "your message"
> git push
> ```
> That's the daily workflow: make changes -> stage -> commit -> push.

---

*Frontend / Node.js Environment Setup — Complete Guide*
