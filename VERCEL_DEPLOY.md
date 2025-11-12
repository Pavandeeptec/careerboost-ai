# Deploy CareerBoost AI to Vercel

## Method 1: Web Interface (Easiest)

### Step-by-Step:

1. **Go to Vercel**
   - Visit: https://vercel.com
   - Click "Sign Up" or "Login"
   - Choose "Continue with GitHub"

2. **Import Project**
   - Click "Add New..." → "Project"
   - Find "Pavandeeptec/careerboost-ai"
   - Click "Import"

3. **Configure Settings**
   ```
   Framework Preset: Next.js (auto-detected)
   Root Directory: apps/frontend ⚠️ IMPORTANT!
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Get your live URL!

## Method 2: CLI (Advanced)

### Install Vercel CLI:
```bash
npm i -g vercel
```

### Deploy:
```bash
cd apps/frontend
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Choose your account
- Link to existing project? **N**
- Project name? **careerboost-ai**
- Directory? **./apps/frontend**
- Override settings? **N**

### Deploy to Production:
```bash
vercel --prod
```

## ⚠️ Critical Configuration

**Root Directory MUST be `apps/frontend`**

Your project structure:
```
Resume-Matcher/
├── apps/
│   ├── frontend/  ← Deploy THIS folder
│   └── backend/
```

## After Deployment

### Your URLs:
- **Preview**: `careerboost-ai-git-main-pavandeeptec.vercel.app`
- **Production**: `careerboost-ai.vercel.app`

### Add Custom Domain (Optional):
1. Go to Project Settings
2. Click "Domains"
3. Add your domain
4. Update DNS records

## Troubleshooting

### Build Failed?
- Check Root Directory is set to `apps/frontend`
- Verify Node.js version (18+)
- Check build logs for errors

### 404 Error?
- Root Directory might be wrong
- Should be `apps/frontend`, not root

### Environment Variables?
For now, frontend works standalone. Backend setup is optional.

## Next Steps After Deploy

1. ✅ Visit your live URL
2. ✅ Test the application
3. ✅ Share on social media
4. ✅ Add URL to GitHub repo description
5. ✅ Update README with live demo link

## Update Your README

Add this to the top of your README.md:

```markdown
# CareerBoost AI 🚀

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Pavandeeptec/careerboost-ai)

**Live Demo**: https://careerboost-ai.vercel.app

Transform your resume with AI-powered insights and land your dream job faster.
```

---

**Need help?** Check Vercel docs: https://vercel.com/docs
