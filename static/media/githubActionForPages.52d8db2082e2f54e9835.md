# 🚀 How to Deploy Your React App to GitHub Pages Using GitHub Actions (The Modern Way)

If you have ever deployed a React app to GitHub Pages, you are likely familiar with the `gh-pages` package.
You run a local terminal command, wait for it to bundle, and it pushes the build up to GitHub.

But what happens when you work on a **corporate-issued laptop** with aggressive proxy configurations? Or what happens
when you switch branches and want your deployment to happen automatically?

Running deployments locally can lead to network errors (like the dreaded `Could not resolve proxy` error) and breaks
the golden rule of modern development: **Automation.**

Here is how to shift your deployment pipeline entirely to the cloud using **GitHub Actions**—freeing your local machine
from network headaches.

---

### Why Ditch Local Deployments?
* **Zero Local Network Headaches:** The build happens on GitHub’s cloud servers. Corporate proxies or home Wi-Fi limitations won't interrupt your deployment.
* **True CI/CD:** Every time you push or merge code into your production branch (e.g., `main`), your live site updates automatically.
* **Cleaner Repositories:** You don't need to bloat your `devDependencies` with local deployment packages.

---

### Step 1: Prepare Your `package.json`
Before setting up the automation, your React application needs to know its destination URL so it can route assets properly.

Open your `package.json` file and add the `homepage` property at the root level:

```json
"homepage": "https://<YOUR_ORGANIZATION_OR_USERNAME>.github.io/<YOUR_REPO_NAME>"
```

*(Note: If you are hosting the repository inside a GitHub Organization, ensure the domain starts with the organization's name, not your personal username!)*

---

### Step 2: Create Your GitHub Actions Workflow
We will create a configuration file that tells GitHub exactly how to build and deploy your app every time you push code.

1. In the root directory of your project, create a folder named **`.github`**.
2. Inside it, create another folder named **`workflows`**.
3. Create a file inside that folder named **`deploy.yml`**.

Your file path should look exactly like this: `.github/workflows/deploy.yml`

Paste the following configuration into `deploy.yml`:

```yaml
name: Deploy React App to GitHub Pages

on:
  push:
    branches:
      - main # Change this to 'dev' or your preferred deployment branch

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Build Application
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: build # Change to 'dist' if you are using Vite
          branch: gh-pages
```

---

### Step 3: Grant Workflow Permissions
By default, GitHub blocks automated workflows from writing data or creating branches in your repository for security reasons. We need to give this specific workflow permission to update the `gh-pages` branch.

1. Navigate to your repository on GitHub.
2. Click on the **Settings** tab.
3. On the left sidebar, click on **Actions** -> **General**.
4. Scroll down to **Workflow permissions**.
5. Select **"Read and write permissions"** and click **Save**.

---

### Step 4: Git Push and Watch the Magic
Commit your new `.github` folder and push it to your remote repository:

```bash
git add .
git commit -m "chore: setup github actions deployment workflow"
git push origin main
```

Now, click on the **Actions** tab at the top of your GitHub repository. You will see a live dashboard tracking your deployment!

Once the workflow turns **🟢 Green**, go to **Settings > Pages** to grab your live URL.

---

### 💡 Pro-Tip for Asset Paths
Once your app is live on a subfolder path, ensure your local images load correctly:
* For images in the `public/` folder, prefix paths with `{process.env.PUBLIC_URL + '/your-image.png'}`.
* For images in the `src/` folder, explicitly use JavaScript `import` statements so your compiler handles the relative pathing automatically.

Have you automated your front-end deployment workflow yet, or are you still relying on manual terminal commands? Let's discuss in the comments! 👇

#WebDevelopment #ReactJS #GitHubActions #CICD #DevOps #FrontEnd
