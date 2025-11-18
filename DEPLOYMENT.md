# GitHub Pages Deployment Guide

This project is ready to be deployed on GitHub Pages as a free static website.

## Prerequisites

- A GitHub account
- Git installed on your machine
- The project repository on GitHub

## Deployment Options

### Option 1: Automatic Deployment via GitHub Actions (Recommended)

This is the easiest method and requires minimal setup.

#### Steps:

1. **Push your code to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/ExpoReact-main.git
   git push -u origin main
   ```

2. **Enable GitHub Pages in Repository Settings**

   - Go to your repository on GitHub
   - Click **Settings** (gear icon)
   - Scroll down to **Pages** section
   - Under "Build and deployment":
     - Source: Select **GitHub Actions**
   - Leave everything else default

3. **The workflow will run automatically**

   - Every time you push to `main` or `master`, the workflow will:
     - Build the project
     - Generate static files
     - Deploy to GitHub Pages
   - Check the **Actions** tab to monitor deployment progress
   - Your site will be available at: `https://yourusername.github.io/ExpoReact-main`

### Option 2: Manual Deployment with gh-pages

If you prefer manual control:

```bash
# Build and deploy in one command
npm run deploy
```

This uses the `gh-pages` package to deploy the `out` directory.

**Note:** You need to have GitHub CLI configured or git credentials set up.

## Viewing Your Site

After deployment completes:

- Default URL: `https://yourusername.github.io/ExpoReact-main`
- Check Actions tab for deployment status
- Site is usually live within 1-2 minutes

## Using a Custom Domain

If you have a custom domain:

1. Go to Repository Settings → Pages
2. Under "Custom domain", enter your domain (e.g., `example.com`)
3. Click Save
4. DNS Configuration:
   - Point your domain's DNS to GitHub Pages
   - See [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Updating Your Site

After deployment:

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. GitHub Actions automatically builds and deploys

```bash
git add .
git commit -m "Update content"
git push
```

## Troubleshooting

### Build Fails in GitHub Actions

- Check the **Actions** tab for error messages
- Common issues:
  - Dependencies not installing → Check `package.json`
  - Type errors → TypeScript config issues
  - Missing files → Check `.gitignore`

### Site Shows 404 Errors

- Ensure GitHub Pages source is set to "GitHub Actions" in Settings
- Wait a few minutes for deployment to complete
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

### Asset Links are Broken

- If deployed to a subdirectory (not root), the `basePath` in `next.config.mjs` needs updating:
  ```javascript
  const nextConfig = {
    output: 'export',
    basePath: '/ExpoReact-main', // Add this if using subdirectory
    // ...
  }
  ```

## Project Configuration

Key configurations already in place:

✅ `output: 'export'` - Enables static export
✅ `images: { unoptimized: true }` - Required for static export
✅ `.github/workflows/deploy.yml` - Automated deployment workflow
✅ `.gitignore` - Proper git configuration
✅ `.nojekyll` - Tells GitHub Pages not to process with Jekyll
✅ No Server Actions - All forms use client-side validation

## File Structure for Deployment

The deployment process uses:

- Source: Your Git repository on GitHub
- Build output: `out/` directory (created by `npm run build`)
- GitHub Actions: `.github/workflows/deploy.yml` (handles automation)

## Additional Resources

- [Next.js Static Export Docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions for GitHub Pages](https://github.com/peaceiris/actions-gh-pages)

## Support

For issues or questions:
1. Check the GitHub Actions logs in your repository
2. Review the [Next.js deployment docs](https://nextjs.org/docs/deployment)
3. Consult [GitHub Pages help](https://docs.github.com/en/pages)
