# CareerBoost AI - Quick Start Guide

Hey Pavandeep! Here's everything you need to get your CareerBoost AI up and running.

## What's Already Done ✅

- ✅ Rebranded to CareerBoost AI
- ✅ Custom purple/pink color scheme
- ✅ Updated all branding and metadata
- ✅ GitHub badge configured with your profile
- ✅ Proper attribution maintained

## Push to GitHub (3 Commands)

```bash
git remote remove origin
git remote add origin https://github.com/Pavandeeptec/careerboost-ai.git
git add . && git commit -m "feat: CareerBoost AI - custom resume optimizer" && git push -u origin main
```

**Note**: Create the repo first at https://github.com/new (name it `careerboost-ai`)

## Run Locally

```bash
# Install dependencies
npm install

# Start frontend
cd apps/frontend
npm run dev
```

Visit: http://localhost:3000

## Deploy to Vercel (Easiest)

1. Go to https://vercel.com
2. Click "Import Project"
3. Connect your GitHub: `Pavandeeptec/careerboost-ai`
4. Click "Deploy"
5. Done! You'll get a live URL

## Project Structure

```
Resume-Matcher/
├── apps/
│   ├── frontend/          # Next.js app (your customizations here)
│   │   ├── app/           # Pages and layouts
│   │   ├── components/    # React components
│   │   └── public/        # Static assets
│   └── backend/           # FastAPI backend
├── docs/                  # Documentation
└── assets/                # Images and media
```

## Key Files You Modified

1. **Hero Page**: `apps/frontend/components/home/hero.tsx`
   - Main landing page with CareerBoost AI branding

2. **Layout**: `apps/frontend/app/layout.tsx`
   - App metadata and SEO

3. **GitHub Badge**: `apps/frontend/components/common/github-star-badge.tsx`
   - Links to your repo

## Customize Further

### Change Colors

Edit `apps/frontend/components/home/hero.tsx`:

```typescript
// Current: purple/pink/indigo
// Try: blue/cyan, red/orange, green/teal, etc.
```

### Add Your Photo/Logo

1. Add image to `apps/frontend/public/`
2. Import in hero.tsx
3. Display above title

### Add Features Section

Create `apps/frontend/components/home/features.tsx`:

```typescript
export default function Features() {
  return (
    <section className="py-20">
      <h2>Why CareerBoost AI?</h2>
      {/* Add feature cards */}
    </section>
  );
}
```

## Troubleshooting

**Port already in use?**

```bash
# Kill process on port 3000
npx kill-port 3000
```

**Dependencies not installing?**

```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**

```bash
# Check Node version (needs 18+)
node --version

# Update if needed
nvm install 18
nvm use 18
```

## Next Steps

1. ✅ Push to GitHub
2. ✅ Test locally
3. 🚀 Deploy to Vercel
4. 📱 Share on LinkedIn/Twitter
5. ⭐ Star the original Resume Matcher repo

## Resources

- **Your Repo**: https://github.com/Pavandeeptec/careerboost-ai
- **Original Project**: https://github.com/srbhr/Resume-Matcher
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs

## Questions?

Check out:

- `CUSTOMIZATION_GUIDE.md` - Detailed customization info
- `CHANGES_LOG.md` - What was changed
- `PUSH_TO_GITHUB.md` - GitHub setup details

---

Built by **Pavandeep** | Based on Resume Matcher (Apache 2.0)
