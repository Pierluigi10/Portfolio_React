# Portfolio - Pierluigi Baiano

A modern, responsive portfolio built with React, TypeScript, and Vite. Features dynamic GitHub API integration, internationalization, and automated screenshot generation.

🌐 **Live Demo:** [pierluigi.vercel.app](https://pierluigi.vercel.app)

## ✨ Features

- **🔗 GitHub API Integration**: Projects are dynamically fetched from GitHub repositories with the "showcase" topic
- **🌍 Internationalization (i18n)**: Full support for English, German, and Italian with language switcher
- **♿ WCAG AA Compliant**: Fully accessible with proper contrast ratios (4.7:1), ARIA labels, keyboard navigation, and 44x44px touch targets
- **🎨 Dark Mode**: Seamless theme switching with localStorage persistence and system preference detection
- **📸 Auto-Generated Screenshots**: Puppeteer-based script to automatically capture project previews
- **⚡ Performance Optimized**: WebP images with fallbacks, lazy loading, eager loading for above-the-fold content, and Vite build optimization
- **📱 Fully Responsive**: Mobile-first design with breakpoints optimized for mobile, tablet, and desktop
- **💻 TypeScript**: Full type safety with strict mode enabled
- **🎯 Multiple Technologies Display**: Shows up to 4 technologies per project from GitHub API
- **🧭 Sticky Navigation**: Smooth scroll navigation with active section highlighting
- **📊 Scroll Progress Indicator**: Visual progress bar showing scroll position
- **⬆️ Back to Top Button**: Accessible floating button to quickly return to top
- **⌨️ Skip to Content**: Keyboard navigation shortcut for accessibility
- **🎨 Skills Section**: Visual display of technical skills categorized by Frontend, Backend, and Tools
- **📧 Contact Section**: Multiple contact methods with copy-to-clipboard functionality
- **🎭 Scroll Animations**: Intersection Observer-based animations for enhanced UX

## 🛠️ Tech Stack

### Core
- **React 19.2.3** - UI library
- **TypeScript** - Type safety
- **Vite 6.4.1** - Build tool and dev server
- **SCSS** - Styling with nested rules and variables

### Features
- **i18next** - Internationalization
- **GitHub REST API** - Dynamic project fetching
- **Context API + useReducer** - Theme management
- **Puppeteer** - Automated screenshot generation

### UI Libraries & Frameworks
- **Material UI (MUI)** - Component library
- **Tailwind CSS** - Utility-first CSS framework
- **Storybook** - Component development and documentation

### Additional Technologies
- Astro, Next.js, NestJS, Express for various projects
- WebP image optimization
- Intersection Observer API for scroll animations

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Pierluigi10/Portfolio_React.git
cd Portfolio_React
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Set up environment variables:
```bash
cp .env.example .env
# Add your GitHub token if you want to use GraphQL API
```

4. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## 📸 Screenshot Generation

To generate screenshots for your projects:

1. Ensure your repositories have the "showcase" topic on GitHub
2. Run the screenshot generation script:

```bash
node generate-screenshots.js
```

For slow-loading sites:
```bash
node generate-slow-screenshots.js
```

Screenshots will be saved in `src/images/`

## 📁 Project Structure

```
portfolio
│
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── intro/         # Hero section with CTA buttons
│   │   ├── about/         # About section
│   │   ├── skills/        # Skills section with categorized icons
│   │   ├── project/       # Project card component
│   │   ├── projectList/   # Projects grid with skeleton loaders
│   │   ├── contact/       # Contact section with multiple methods
│   │   ├── footer/        # Footer with social links
│   │   ├── navbar/        # Sticky navigation bar with logo
│   │   ├── logo/          # PB logo component
│   │   ├── toggle/        # Dark mode toggle
│   │   ├── languageSwitcher/ # i18n language selector
│   │   ├── backToTop/     # Back to top floating button
│   │   ├── skipToContent/ # Skip to main content link
│   │   ├── scrollProgress/ # Scroll progress indicator
│   │   └── SEO.tsx        # SEO component with meta tags
│   │
│   ├── hooks/             # Custom React hooks
│   │   ├── useGitHubRepos.ts  # GitHub API integration hook
│   │   └── useScrollAnimation.ts # Scroll animation hook
│   │
│   ├── services/          # API services
│   │   └── github.ts      # GitHub API integration
│   │
│   ├── types/             # TypeScript type definitions
│   │   └── github.ts
│   │
│   ├── locales/           # Translation files
│   │   ├── en.json        # English
│   │   ├── de.json        # German
│   │   └── it.json        # Italian
│   │
│   ├── images/            # Project screenshots and assets
│   ├── styles/            # Global styles
│   │   └── variables.scss # CSS variables and design tokens
│   ├── utils/             # Utility functions
│   │   └── scrollTo.ts    # Smooth scroll utility
│   ├── context.tsx        # Theme context with localStorage
│   ├── i18n.ts           # i18next configuration
│   ├── data.ts           # Fallback static data
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
│
├── generate-screenshots.js        # Screenshot generation script
├── generate-slow-screenshots.js   # For slow-loading sites
├── tsconfig.json                  # TypeScript config
├── vite.config.ts                 # Vite configuration
└── package.json

```

## 🌐 How GitHub Integration Works

1. The app fetches all repositories from your GitHub account
2. Filters for repositories with the **"showcase"** topic
3. Sorts them by creation date (newest first)
4. Fetches languages for each repository
5. Displays them with local screenshots and project details

To add a project to your portfolio:
1. Go to your GitHub repository
2. Click the ⚙️ icon in the "About" section
3. Add the topic: **showcase**
4. Add a description
5. Set the homepage URL

## 🎨 Customization

### Adding New Languages

1. Create a new translation file in `src/locales/` (e.g., `fr.json`)
2. Add translations following the structure of existing files
3. Update `src/i18n.ts` to include the new language
4. Add the language option to `src/components/languageSwitcher/LanguageSwitcher.tsx`

### Adding New Skills

1. Import the icon from `react-icons/si` in `src/components/skills/Skills.tsx`
2. Add the skill to the `skills` array with the appropriate category:
   - `"frontend"` - Frontend technologies
   - `"backend"` - Backend technologies
   - `"tools"` - Development tools

### Styling

All styles are written in SCSS with component-scoped files. Global design tokens are defined in `src/styles/variables.scss`. Modify the `.scss` files in each component directory to customize the appearance.

### Color Customization

The portfolio uses CSS variables for theming. Modify `src/styles/variables.scss` to change:
- Primary colors (green theme)
- Text colors
- Spacing values
- Border radius
- Shadows

All colors meet WCAG AA contrast requirements (minimum 4.5:1 for normal text, 3:1 for large text).

## ♿ Accessibility Features

- **WCAG AA Compliance**: All color contrasts meet WCAG AA standards (4.7:1 ratio)
- **Keyboard Navigation**: Full keyboard support with visible focus indicators
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Touch Targets**: All interactive elements meet minimum 44x44px size requirement
- **Skip to Content**: Quick navigation link for keyboard users
- **Focus Management**: Proper focus states and focus-visible support

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Connect

- GitHub: [@Pierluigi10](https://github.com/Pierluigi10)
- Portfolio: [pierluigi.vercel.app](https://pierluigi.vercel.app)

---

🤖 Generated with [Claude Code](https://claude.com/claude-code)
