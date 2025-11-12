# CareerBoost AI - Customization Guide

## What's Been Changed

This is your customized version of Resume Matcher with the following modifications:

### 🎨 Branding Changes

- **App Name**: Changed from "ResumeOptimizer Pro" to "CareerBoost AI"
- **Color Scheme**: Purple/Pink gradient theme (from emerald/cyan)
- **Tagline**: "Transform your resume with AI-powered insights and land your dream job faster"

### 📝 Files Modified

1. `apps/frontend/app/layout.tsx` - Updated metadata and title
2. `apps/frontend/components/home/hero.tsx` - New branding, colors, and copy
3. `apps/frontend/components/common/github-star-badge.tsx` - Updated colors
4. `apps/frontend/package.json` - Changed package name
5. `README.md` - Updated with proper attribution

## Next Steps to Make It Yours

### 1. Create Your Own GitHub Repository

```bash
# Remove the original remote
git remote remove origin

# Add your new remote
git remote add origin https://github.com/Pavandeeptec/careerboost-ai.git

# Push to your new repo
git add .
git commit -m "Initial commit: CareerBoost AI customization"
git branch -M main
git push -u origin main
```

### 2. Further Customizations You Can Make

#### Change Colors Further

Edit the gradient colors in:

- `apps/frontend/components/home/hero.tsx` (title gradient)
- `apps/frontend/components/common/github-star-badge.tsx` (badge colors)

Available Tailwind colors: purple, pink, indigo, violet, fuchsia, rose, blue, cyan, teal, emerald, green, lime, yellow, orange, red

#### Add Your Own Features

- Add a features section to the hero page
- Create an about page
- Add testimonials
- Include pricing (if making it a service)
- Add analytics tracking

#### Customize Fonts

Edit `apps/frontend/app/layout.tsx` to change fonts from Google Fonts

### 3. Run and Test

```bash
# Install dependencies
npm install

# Run development server
cd apps/frontend
npm run dev
```

Visit http://localhost:3000 to see your changes!

### 4. Deploy

You can deploy to:

- **Vercel** (recommended for Next.js): `vercel deploy`
- **Netlify**: Connect your GitHub repo
- **Railway**: Deploy with one click
- **Your own server**: `npm run build && npm start`

## Important: Attribution

This project is based on Resume Matcher. Please:

- Keep the LICENSE file
- Keep the NOTICE file
- Maintain attribution in README.md
- Consider starring the original repo: https://github.com/srbhr/Resume-Matcher

## License

Apache 2.0 - See LICENSE file for details
