# Adrian Alejandrino - Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Optimized for Vercel deployment.

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio in your browser.

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📝 Editing Content

### How to Update Carousel Images

The project carousel is super easy to edit! All project data is centralized in one file:

**File:** `lib/data/projects.ts`

#### To change a project image:

1. Open `lib/data/projects.ts`
2. Find the project you want to update
3. Change the `imageUrl` field

```typescript
{
  title: "Link n Park",
  // ... other fields
  imageUrl: "/images/your-image.jpg"  // 👈 Change this!
}
```

#### Using Local Images:

1. Create a folder: `public/images/`
2. Place your images in that folder
3. Reference them as: `"/images/your-image.jpg"`

#### Using Remote Images:

Simply use the full URL:
```typescript
imageUrl: "https://yourwebsite.com/image.jpg"
```

### Updating Other Content

- **Experience:** Edit `lib/data/experience.ts`
- **Skills:** Edit `lib/data/skills.ts`
- **Personal Info:** Edit `app/page.tsx` (search for email, social links, etc.)
- **Metadata (SEO):** Edit `app/layout.tsx`

## 📂 Project Structure

```
durino-portfolio/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── SectionHeading.tsx  # Reusable section headers
│   ├── ProjectCarousel.tsx # Project showcase carousel
│   ├── ExperienceCard.tsx  # Experience timeline cards
│   └── SkillBadge.tsx      # Skill badges
├── lib/
│   ├── types.ts            # TypeScript type definitions
│   └── data/
│       ├── projects.ts     # 🎨 Edit carousel images here!
│       ├── experience.ts   # Work experience data
│       └── skills.ts       # Skills categorization
├── public/
│   └── images/             # Place local images here
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS config
└── package.json            # Dependencies
```

## 🌐 Deploy to Vercel

### Method 1: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy" (Vercel auto-detects Next.js settings)

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🎨 Customization

### Colors

The portfolio uses an orange accent color (`#f97316`). To change it:

1. **Tailwind classes:** Replace `orange-500` with your color throughout the code
2. **Custom CSS:** Edit color values in `app/globals.css`

### Fonts

Currently using **Inter** font. To change:

1. Edit `app/layout.tsx`
2. Import your desired Google Font
3. Update the font variable

## 📱 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Dark mode optimized
- ✅ Smooth animations with Framer Motion
- ✅ SEO optimized with metadata
- ✅ Image optimization with Next.js Image
- ✅ Type-safe with TypeScript
- ✅ Fast performance with Next.js 14
- ✅ Easy content management
- ✅ Vercel deployment ready

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📄 License

© 2025 Adrian Alejandrino. All rights reserved.

---

**Need help?** Check the inline comments in `lib/data/projects.ts` for detailed instructions on editing carousel images!
