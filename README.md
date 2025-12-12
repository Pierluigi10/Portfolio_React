# Portfolio - Pierluigi Baiano

A modern, responsive portfolio built with React, TypeScript, and Vite. Features dynamic GitHub API integration, internationalization, and automated screenshot generation.

🌐 **Live Demo:** [pierluigi.vercel.app](https://pierluigi.vercel.app)

## ✨ Features

- **🔗 GitHub API Integration**: Projects are dynamically fetched from GitHub repositories with the "showcase" topic
- **🌍 Internationalization (i18n)**: Full support for English, German, and Italian with language switcher
- **♿ WCAG AA Compliant**: Optimized for accessibility with proper contrast ratios and ARIA labels
- **🎨 Dark Mode**: Seamless theme switching with persistent preferences
- **📸 Auto-Generated Screenshots**: Puppeteer-based script to automatically capture project previews
- **⚡ Performance Optimized**: WebP images with fallbacks, lazy loading, and Vite build optimization
- **📱 Fully Responsive**: Mobile-first design that works on all screen sizes
- **💻 TypeScript**: Full type safety with strict mode enabled
- **🎯 Multiple Technologies Display**: Shows up to 4 technologies per project from GitHub API

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

### Additional Technologies
- Astro, Next.js, NestJS for various projects
- WebP image optimization

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
│   │   ├── intro/         # Hero section
│   │   ├── about/         # About section
│   │   ├── project/       # Project card component
│   │   ├── projectList/   # Projects grid
│   │   ├── toggle/        # Dark mode toggle
│   │   └── languageSwitcher/ # i18n language selector
│   │
│   ├── hooks/             # Custom React hooks
│   │   └── useGitHubRepos.ts
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
│   ├── context.tsx        # Theme context
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

### Styling

All styles are written in SCSS with component-scoped files. Modify the `.scss` files in each component directory to customize the appearance.

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Connect

- GitHub: [@Pierluigi10](https://github.com/Pierluigi10)
- Portfolio: [pierluigi.vercel.app](https://pierluigi.vercel.app)

---

🤖 Generated with [Claude Code](https://claude.com/claude-code)
