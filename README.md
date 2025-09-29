# Ben Kammerling - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This site showcases my work as a Frontend Developer, Marketeer, and Designer with a clean, professional design and smooth user experience.

## ✨ Features

- **Modern Design**: Clean, friendly interface with calming colors and smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Fast Performance**: Built with Next.js 15 and optimized for speed
- **TypeScript**: Type-safe development for better code quality
- **SEO Optimized**: Meta tags, OpenGraph, and structured data
- **Accessible**: WCAG compliant with proper focus states and semantic HTML

## 🏗️ Project Structure

### Pages
- **Homepage**: Hero section, skills highlights, featured projects, and bio
- **Projects**: Filterable gallery with detailed project modals
- **CV/Resume**: Timeline view of work experience, education, and skills
- **Contact**: Contact form with social media links

### Key Components
- Responsive navigation with mobile menu
- Project cards with hover effects
- Skills visualization with proficiency levels
- Contact form with validation
- Footer with social links

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Nunito (Google Fonts)
- **Icons**: Emoji and custom SVGs
- **Deployment**: Vercel (recommended)

## 📱 Responsive Design

The site is fully responsive with breakpoints for:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px  
- Desktop: 1024px+

## 🎨 Design System

### Colors
- **Primary**: Soft blues and teals (#a5f3fc, #e0f2fe)
- **Accent**: Purple and coral (#c084fc, #fca5a5)
- **Text**: Slate variations (#1e293b, #64748b, #94a3b8)
- **Background**: Light grays (#f8fafc, #ffffff)

### Typography
- **Primary Font**: Nunito (300, 400, 500, 600, 700)
- **Fallbacks**: ui-sans-serif, system-ui, sans-serif

### Animations
- Smooth hover transitions (300ms)
- Scale transforms on interactive elements
- Fade-in animations for page content
- Smooth scrolling navigation

## 📝 Customization

### Personal Information
Edit `/src/lib/data.ts` to update:
- Personal details and bio
- Project portfolio
- Work experience
- Education and skills
- Social media links

### Styling
- Colors: Update Tailwind classes throughout components
- Fonts: Modify font imports in `layout.tsx`
- Layout: Adjust component structures as needed

### Content
- **Images**: Add real project images to `/public/images/`
- **CV**: Update download functionality in `/src/app/cv/page.tsx`
- **Contact**: Configure form submission endpoint

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
- **Netlify**: Deploy from Git repository
- **AWS Amplify**: Connect GitHub repository  
- **Static Export**: Use `npm run build && npm run export`

## 📦 Build Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Code linting
npm run lint
```

## 🔧 Environment Variables

Create a `.env.local` file for sensitive data:
```env
# Contact form endpoint (optional)
NEXT_PUBLIC_FORM_ENDPOINT=your-form-endpoint

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Minimal JavaScript footprint
- **Images**: Optimized with Next.js Image component

## 🔍 SEO Features

- Structured metadata and OpenGraph tags
- Semantic HTML markup
- Proper heading hierarchy
- Alt text for images
- Sitemap generation ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Contact

Ben Kammerling - [hello@benkammerling.com](mailto:hello@benkammerling.com)

Project Link: [https://github.com/benkammerling/portfolio-site](https://github.com/benkammerling/portfolio-site)

---

Built with ❤️ and lots of ☕️ in London
