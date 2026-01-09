# Clarivis Consulting Group

Professional website for **Clarivis Consulting Group, LLC** — providing education, accreditation, compliance, and program advisory services to health sector education programs.

![Clarivis Consulting Group](https://img.shields.io/badge/Clarivis-Consulting%20Group-1a3a4a?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss)

## 🏢 About Clarivis

Clarivis Consulting Group, LLC provides education, accreditation, compliance, and program advisory services to public and private organizations. Our services include:

- **Accreditation Readiness** — Self-study and progress report support
- **Site Visit Preparation** — Comprehensive preparation for surveyor visits
- **Compliance Consulting** — Regulatory guidance for federal, state, and industry requirements
- **Recruitment Support** — Strategic personnel identification
- **Government Contract Support** — Federal and state contract pursuit assistance

We deliver clear guidance to help health sector education programs achieve compliance, operational readiness, and sustainable success.

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or [bun](https://bun.sh/)

### Installation

```bash
# Clone the repository
git clone https://github.com/ebrichto/clarivis-consulting.git

# Navigate to the project
cd clarivis-consulting

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
├── public/
│   ├── 404.html          # GitHub Pages SPA redirect
│   ├── robots.txt        # Search engine directives
│   └── sitemap.xml       # XML sitemap for SEO
├── src/
│   ├── components/
│   │   ├── layout/       # Header, Footer, Layout components
│   │   └── ui/           # Reusable UI components (shadcn/ui)
│   ├── pages/
│   │   ├── services/     # Individual service pages
│   │   └── government/   # Government contract pages
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main application component
│   └── index.css         # Global styles & design tokens
├── index.html            # HTML template with SEO & structured data
└── tailwind.config.ts    # Tailwind CSS configuration
```

## 🎨 Technology Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework with concurrent features |
| **TypeScript** | Type-safe development |
| **Vite** | Fast build tool and dev server |
| **Tailwind CSS** | Utility-first CSS framework |
| **shadcn/ui** | Accessible component library |
| **React Router** | Client-side routing |
| **React Query** | Server state management |
| **Lucide Icons** | Beautiful icon library |

## 🔧 Configuration

### Google Analytics

Replace `G-XXXXXXXXXX` in `index.html` with your GA4 Measurement ID:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ID"></script>
<script>
  gtag('config', 'G-YOUR-ID');
</script>
```

### Contact Form

The contact form submits to [Formspree](https://formspree.io). Update the endpoint in `src/pages/ContactPage.tsx` if needed:

```typescript
const response = await fetch("https://formspree.io/f/your-form-id", {
  method: "POST",
  body: formData,
});
```

## 🌐 Deployment

### GitHub Pages

This project is configured for GitHub Pages deployment:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages
3. The `404.html` handles client-side routing

### Other Platforms

The production build (`dist` folder) can be deployed to:
- Netlify
- Vercel
- Cloudflare Pages
- Any static hosting service

## ♿ Accessibility

This website follows WCAG 2.1 guidelines:

- ✅ Skip-to-content navigation
- ✅ Semantic HTML structure
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Color contrast compliance

## 📊 SEO Features

- Comprehensive meta tags
- Open Graph and Twitter Cards
- Schema.org structured data (Organization, ProfessionalService, WebSite)
- XML sitemap
- Robots.txt configuration
- Semantic heading hierarchy

## 📄 License

© 2024 Clarivis Consulting Group, LLC. All rights reserved.

## 📞 Contact

- **Email:** ebrichto@clarivisgroup.com
- **Phone:** (508) 446-4592
- **Website:** [clarivisgroup.com](https://clarivisgroup.com)

---

Built with ❤️ using [Lovable](https://lovable.dev)
