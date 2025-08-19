# craighoad.com Portfolio Website

This repository contains the source code and infrastructure-as-code for the personal portfolio website hosted at [craighoad.com](https://www.craighoad.com).

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/Sass-%23CC6699.svg?style=for-the-badge&logo=sass&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Terraform](https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

---

## Prerequisites

Before working on this project, ensure you have the following tools installed on your local machine:

- **Git:** For version control.
- **Node.js and npm:** To manage front-end dependencies and run build scripts. ([Download here](https://nodejs.org/))
- **pre-commit:** The framework used for automated code quality checks. ([Installation guide](https://pre-commit.com/#install))

## Local Development Setup

To get the website running on your local machine, follow these steps:

1.  **Clone the Repository:**

    ```bash
    git clone [https://github.com/craighoad/craighoad.com.git](https://github.com/craighoad/craighoad.com.git)
    cd craighoad.com
    ```

2.  **Install Dependencies:**
    This will install Bootstrap, Font Awesome, Gulp, and other dependencies defined in `package.json`.

    ```bash
    npm install
    ```

3.  **Install Pre-Commit Hooks:**
    This critical step activates the automated code quality checks for your local repository.

    ```bash
    pre-commit install
    ```

4.  **Start the Development Server:**
    This command uses Gulp to compile Sass, start a local server, and enable live-reloading.
    ```bash
    npm start
    ```
    Your website will now be available at `http://localhost:3000` (or a similar address shown in your terminal).

---

## Automated Code Quality (Pre-Commit)

This project uses the `pre-commit` framework to automatically format and lint code before it is committed. This ensures consistency and prevents simple errors from entering the repository.

### How it Works

You do not need to remember to run any commands manually. The checks are triggered automatically every time you run `git commit`.

The framework runs the tools defined in `.pre-commit-config.yaml`, which include:

- **`prettier`:** For automatically formatting HTML, CSS, SCSS, and JavaScript.
- **`eslint`:** For finding potential errors in JavaScript files.
- **`pre-commit-hooks`:** For general checks like trailing whitespace and file endings.

### What to Do If a Commit Fails (Your Reminder!)

It is **normal** for the pre-commit hook to fail. This usually happens when the tools find issues and automatically fix them for you.

Here is the workflow you will follow:

1.  Make your changes to the code.
2.  Stage your changes as usual: `git add .`
3.  Commit your changes: `git commit -m "My awesome new feature"`

4.  **If the hook fails:**
    - Read the output. You will see messages like `files were modified by this hook`.
    - This means Prettier or another tool has automatically fixed your code.
    - The commit was safely blocked to give you a chance to see the automatic changes.
    - **All you need to do is stage the automatic fixes and commit again.**

    ```bash
    # The hooks failed and fixed files, now just run this:
    git add .
    git commit -m "My awesome new feature"
    ```

    The second time you commit, the hooks will run again, see that everything is clean, and allow the commit to succeed.

### Running Checks Manually

If you ever want to run all the checks on every file in the repository (not just the ones you've staged), you can use this command:

```bash
pre-commit run --all-files
```

---

## Deployment

Deployment is handled automatically by a **GitHub Actions** workflow defined in `.github/workflows/deploy.yaml`.

- **Trigger:** A push to the `master` branch.
- **Process:** The workflow first runs validation steps (formatting, linting). If they pass, it securely authenticates to AWS and syncs the website files to the `s3://www.craighoad.com/` S3 bucket.

## AWS Infrastructure

All AWS resources for this website (S3 Buckets, CloudFront Distributions, Route 53 Records) are managed as code using **Terraform**. The configuration files are located in the root of this repository.
