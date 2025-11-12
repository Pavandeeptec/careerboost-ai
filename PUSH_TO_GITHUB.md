# Quick Guide: Push to Your GitHub

## Step 1: Create New GitHub Repository

1. Go to https://github.com/new
2. Repository name: `careerboost-ai`
3. Description: "AI-powered resume optimizer to land your dream job"
4. Choose Public or Private
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Update Remote and Push

Open your terminal in the Resume-Matcher folder and run:

```bash
# Remove the original remote
git remote remove origin

# Add your new repository
git remote add origin https://github.com/Pavandeeptec/careerboost-ai.git

# Stage all changes
git add .

# Commit your customizations
git commit -m "feat: rebrand as CareerBoost AI with custom purple/pink theme"

# Push to your repository
git branch -M main
git push -u origin main
```

## Step 3: Test Locally

```bash
# Install dependencies (if not already done)
npm install

# Start the development server
cd apps/frontend
npm run dev
```

Visit http://localhost:3000

## Step 4: Deploy (Optional)

### Deploy to Vercel (Easiest):
1. Go to https://vercel.com
2. Import your GitHub repository
3. Vercel will auto-detect Next.js
4. Click Deploy!

### Or use Netlify, Railway, or your own server

## Done! 🎉

Your customized CareerBoost AI is now on GitHub with proper attribution to the original project.
